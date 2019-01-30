extern crate futures;
extern crate hyper;
extern crate serde_json;

use hyper::{Body, Chunk, Method, Request, Response, StatusCode, header};
use futures::{future, Future, Stream};

static NOTFOUND: &[u8] = b"Not Found";
static INDEX: &[u8] = b"<a href=\"test.html\">test.html</a>";
static LOWERCASE: &[u8] = b"i am a lower case string";

pub fn register_routes(req: Request<Body>)
    -> Box<Future<Item=Response<Body>, Error=hyper::Error> + Send>
{
    match (req.method(), req.uri().path()) {
        (&Method::GET, "/") | (&Method::GET, "/index.html") => {
            let body = Body::from(INDEX);
            Box::new(future::ok(Response::new(body)))
        },
        (&Method::POST, "/api") => {
            // A web api to run against. Uppercases the body and returns it back.
            let body = Body::wrap_stream(req.into_body().map(|chunk| {
                // uppercase the letters
                let upper = chunk.iter().map(|byte| byte.to_ascii_uppercase())
                    .collect::<Vec<u8>>();
                Chunk::from(upper)
            }));
            Box::new(future::ok(Response::new(body)))
        },
        (&Method::GET, "/json") => {
            let data = vec!["foo", "bar"];
            let res = match serde_json::to_string(&data) {
                Ok(json) => {
                    // return a json response
                    Response::builder()
                        .header(header::CONTENT_TYPE, "application/json")
                        .body(Body::from(json))
                        .unwrap()
                }
                // This is unnecessary here because we know
                // this can't fail. But if we were serializing json that came from another
                // source we could handle an error like this.
                Err(e) => {
                    eprintln!("serializing json: {}", e);

                    Response::builder()
                        .status(StatusCode::INTERNAL_SERVER_ERROR)
                        .body(Body::from("Internal Server Error"))
                        .unwrap()
                }
            };

            Box::new(future::ok(res))
        }
        _ => {
            // Return 404 not found response.
            let body = Body::from(NOTFOUND);
            Box::new(future::ok(Response::builder()
                                         .status(StatusCode::NOT_FOUND)
                                         .body(body)
                                         .unwrap()))
        }
    }
}


#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        register_routes(req: Request<Body>);
    }
}

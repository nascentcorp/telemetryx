#![deny(warnings)]
extern crate futures;
extern crate hyper;
extern crate pretty_env_logger;

use hyper::service::service_fn;

use minion-lib::register_routes;

#[allow(unused, deprecated)]
use std::ascii::AsciiExt;

static URL: &str = "http://127.0.0.1:7878/api";

fn main() {
    pretty_env_logger::init();

    let addr = "127.0.0.1:7878".parse().unwrap();

    hyper::rt::run(future::lazy(move || {
        let new_service = move || {
            service_fn(move |req| {
                register_routes(req)
            })
        };

        let server = Server::bind(&addr)
            .serve(new_service)
            .map_err(|e| eprintln!("server error: {}", e));

        println!("Listening on http://{}", addr);

        server
    }));
}


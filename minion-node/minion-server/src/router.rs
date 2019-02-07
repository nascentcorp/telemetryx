use actix_web::{App,fs, http::{header, Method},middleware::{self,cors::Cors}};
use crate::api::{jobs, execute};

/* pub fn api() -> App {
     App::new()
      .middleware(middleware::Logger::default())
      .prefix("/api")
      .configure(|app| Cors::for_app(app)
      .allowed_methods(vec!["GET", "POST"])
      .allowed_headers(vec![header::ORIGIN, header::AUTHORIZATION, header::ACCEPT, header::CONTENT_TYPE])
      .supports_credentials()
      .max_age(3600)
      .resource("/jobs", |r| { r.method(Method::POST).with(jobs); })
      .resource("/execute/{job_name}", |r| { r.method(Method::GET).with(r.path);})
      .register())
} */

pub fn app() -> App {
    App::new()
      .middleware(middleware::Logger::default())
      .configure(|app| Cors::for_app(app)
        .allowed_methods(vec!["GET", "POST"])
        .allowed_headers(vec![header::ORIGIN, header::AUTHORIZATION, header::ACCEPT, header::CONTENT_TYPE])
        .supports_credentials()
        .max_age(3600)
        .resource("/", |r| { r.method(Method::GET).with(jobs);})
        .resource("/execute/{job_name}", |r| { r.method(Method::POST).with(execute);})
      .register())
      //.handler("/", fs::StaticFiles::new("public").unwrap())
}
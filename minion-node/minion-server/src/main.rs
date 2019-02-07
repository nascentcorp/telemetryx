#![allow(unused_imports, dead_code, non_snake_case)]

#[macro_use] extern crate serde_derive;
extern crate serde;
extern crate serde_json;
extern crate futures;
extern crate num_cpus;
extern crate actix_web;
extern crate env_logger;
extern crate dotenv;
extern crate chrono;
extern crate bcrypt;
extern crate http;
extern crate jsonwebtoken as jwt;

use actix_web::{actix::System,server};

mod api;
mod router;

fn main() {
    ::std::env::set_var("RUST_LOG", "wapp=info");
    ::std::env::set_var("RUST_BACKTRACE", "1");
    env_logger::init();
    let sys = System::new("wapp");

    server::new( move || 
        vec![
            router::app().boxed(),
        ])
        .bind("localhost:8000").unwrap()
        .shutdown_timeout(2)
        .start();

    sys.run();
}
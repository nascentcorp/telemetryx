use actix_web::{Error, HttpRequest, HttpResponse, Json, http::{header, Method}, 
  middleware::{self,cors::Cors}};
use std::fs::{self, DirEntry};
use std::ffi::OsStr;
use serde::ser::{Serialize, Serializer, SerializeStruct};

struct Job {
  name: String
}

impl Job {
  fn new(name:String) -> Job {
    Job {
      name
    }
  }
}

impl Serialize for Job {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut state = serializer.serialize_struct("Job", 3)?;
        state.serialize_field("name", &self.name)?;
        state.end()
    }
}

struct ExecutionStatus {
  status: String
}

impl ExecutionStatus {
  fn new(status:String) -> ExecutionStatus {
    ExecutionStatus {
      status
    }
  }
}

impl Serialize for ExecutionStatus {
  fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut state = serializer.serialize_struct("ExecutionStatus", 3)?;
        state.serialize_field("status", &self.status)?;
        state.end()
    }
}

pub fn jobs(req: &HttpRequest) -> Result<HttpResponse, Error> {
  let jobs = Vec::<Job>::new();

  let files = fs::read_dir("./").unwrap();

  files.filter_map(Result::ok)
    .filter(|d| d.path().extension() == Some(OsStr::new("py")))
    .for_each(|f| {
      if let Some(file_stem) = f.path().file_stem() {
        if let job_name = file_stem.to_str() {
          jobs.push(Job::new(String::from(job_name.unwrap())));
        }
      }
    });

  Ok(HttpResponse::Ok().json(jobs))
}

pub fn execute(name: String) -> Result<HttpResponse, Error> {
/*     state.db.send(SigninUser{ 
            username: signin_user.username.clone(),
            password: signin_user.password.clone(),
        })         
        .from_err()
        .and_then(|res| {
            match res {
                Ok(signin_msg) => Ok(HttpResponse::Ok().json(signin_msg)),
                Err(_) => Ok(HttpResponse::InternalServerError().into())
            }
        }).responder() */

  Ok(HttpResponse::Ok().json(ExecutionStatus::new(String::from("success"))))
}
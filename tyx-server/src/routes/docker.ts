import Docker from "dockerode";

const docker = new Docker({socketPath: "/var/run/docker.sock"});

function runDocker() {
  /* const command = "docker run -it dronekit-env:latest"; */
  docker.run("dronekit-env:latest", [], process.stdout)
    .then((container) => {
      // tslint:disable-next-line:no-console
      console.log(container.output.StatusCode);
      return container.remove();
    }).then((data) => {
      // tslint:disable-next-line:no-console
      console.log("container removed");
    }).catch((err) => {
      // tslint:disable-next-line:no-console
      console.log(err);
    });

  return "success";
}

process.on("message", (message) => {
  const result = runDocker();
  process.send(result);
});

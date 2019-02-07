import * as child from "child_process";

function runDocker() {
  const command = "docker run -it dronekit-env:latest";
  // tslint:disable-next-line:no-console
  console.log(`Attempting to run command {command}`, command);
  const docker = child.exec(command);

  // tslint:disable-next-line:no-console
  console.log("exec finished");

  // docker.stdout.pipe(process.stdout);

  docker.stdout.on("data", (data) => {
    // tslint:disable-next-line:no-console
    process.send(`stdout: ${data}`);
  });

  return "success";
}

process.on("message", (message) => {
  const result = runDocker();
  process.send(result);
});

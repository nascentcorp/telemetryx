"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const child = __importStar(require("child_process"));
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
//# sourceMappingURL=docker.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child = __importStar(require("child_process"));
const fs_1 = __importDefault(require("fs"));
// import * as shell from "shelljs";
exports.register = (app) => {
    app.get("/", (req, res) => {
        // render the index template
        res.send("Hello world!");
    });
    app.get(`/api/missions`, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            // /Users/derek/Github/nascentcorp/telemetryx/tyx-server/dist/routes
            // res.send(__dirname);
            // get a list of all missions here
            const folder = __dirname + "/../missions";
            const missions = [];
            fs_1.default.readdirSync(folder).forEach((file) => {
                // tslint:disable-next-line:no-console
                console.log(file);
                if (file.endsWith(".py")) {
                    missions.push(file.split(".")[0]);
                }
            });
            return res.json(missions);
        }
        catch (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json({ error: err.message || err });
        }
    }));
    app.get(`/api/job`, (req, res) => __awaiter(this, void 0, void 0, function* () {
        try {
            const docker = child.fork(__dirname + "/../routes/docker.js");
            process.stdout.on("data", (data) => {
                // tslint:disable-next-line:no-console
                console.log(data);
            });
            docker.send("start");
            docker.on("message", (message) => {
                // tslint:disable-next-line:no-console
                console.log(message);
            });
            return res.json({ success: true });
        }
        catch (err) {
            // tslint:disable-next-line:no-console
            console.error(err);
            res.json({ error: err.message || err });
        }
    }));
};
//# sourceMappingURL=index.js.map
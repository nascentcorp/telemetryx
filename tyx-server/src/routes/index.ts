import * as child from "child_process";
import * as express from "express";
import fs from "fs";

// import * as shell from "shelljs";

export const register = ( app: express.Application ) => {
  app.get( "/", ( req, res ) => {
      // render the index template
      res.send( "Hello world!" );
  } );

  app.get( `/api/missions`, async ( req: any, res ) => {
      try {
        // /Users/derek/Github/nascentcorp/telemetryx/tyx-server/dist/routes
        // res.send(__dirname);
        // get a list of all missions here
        const folder = __dirname + "/../missions";
        const missions: any = [];

        fs.readdirSync(folder).forEach((file) => {
          // tslint:disable-next-line:no-console
          console.log(file);

          if (file.endsWith(".py")) {
            missions.push(file.split(".")[0]);
          }
        });

        return res.json( missions );
      } catch ( err ) {
        // tslint:disable-next-line:no-console
        console.error(err);
        res.json( { error: err.message || err } );
      }
  } );

  app.get( `/api/job`, async ( req: any, res ) => {
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

        return res.json( { success: true } );
      } catch ( err ) {
        // tslint:disable-next-line:no-console
        console.error(err);
        res.json( { error: err.message || err } );
      }
  } );
};

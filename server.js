"use strict";

const express = require("express");
const http = require("http");
const path = require("path");

const updater = require("./lib/server/updater");

const PORT = 8080;

let app = express();
let server = http.createServer(app);

let publicPath = path.join(__dirname, "src");
app.use("/lib/client", express.static(path.join(__dirname, "lib/client")));
app.use(express.static(publicPath));
updater(server, publicPath);

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
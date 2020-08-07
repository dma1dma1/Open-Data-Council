"use strict";

const express = require("express");
const http = require("http");
const path = require("path");
const livereload = require("livereload");
let connectLivereload = require("connect-livereload");

let publicPath = path.join(__dirname, "public");

const PORT = 8080;

let app = express();
let server = http.createServer(app);

let liveReloadServer = livereload.createServer();
liveReloadServer.watch(publicPath);

liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
        liveReloadServer.refresh("/");
    }, 100);
});

app.use(connectLivereload());
app.use(express.static(publicPath));

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`);
});
const express = require("express")
const dotevn = require("dotenv")
const { createServer } = require("http")

const { createRoutes, createSocket } = require("./core")

const app = express();
const http = createServer(app);
const io = createSocket(http);

dotevn.config()

require("./core/db")

createRoutes(app, io);

http.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})
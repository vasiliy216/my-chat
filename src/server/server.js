const express = require("express")
const dotevn = require("dotenv")
const { createServer } = require("http")
const socket = require("socket.io")

const app = express();
const http = createServer(app);
const io = socket(http);

dotevn.config()

const { createRoutes } = require("./core")
require("./core/db")

createRoutes(app);

http.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})
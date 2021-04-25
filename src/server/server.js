const express = require("express")
const dotevn = require("dotenv")
const app = express();

dotevn.config()

const { createRoutes } = require("./core")
require("./core/db")

createRoutes(app);

app.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${process.env.PORT}`);
})
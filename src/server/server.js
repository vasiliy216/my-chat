const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const dotevn = require("dotenv")
const bodyParser = require("body-parser")

const { UserController, DialogController, MessageController } = require("../server/controllers/")
const { updateLastSeen } = require("./middlewares")
const app = express();

dotevn.config();

app.use(cors());
app.use(bodyParser.json());
app.use(updateLastSeen);

const User = new UserController();
const Dialog = new DialogController();
const Message = new MessageController();

app.get('/users/:id', User.find);
app.delete('/users/:id', User.delete);
app.post('/user/registr', User.create);

app.get('/dialogs/:id', Dialog.index);
app.delete('/dialogs/:id', Dialog.delete);
app.post('/dialogs', Dialog.create);

app.get('/messages', Message.index);
app.delete('/messages/:id', Message.delete);
app.post('/messages', Message.create);

mongoose.connect(process.env.DATABASE_ACCESS, {
    UseNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);

app.listen(process.env.PORT, () => {
    console.log(`Server: http://localhost:${ process.env.PORT }`);
})
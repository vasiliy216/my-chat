const cors = require("cors")
const bodyParser = require("body-parser")

const { UserController, DialogController, MessageController } = require("../controllers")
const { updateLastSeen, checkAuth } = require("../middlewares")
const { loginValidation, registerValidation } = require("../utility/validations")

const createRoutes = (app, io) => {

    app.use(cors());
    app.use(bodyParser.json());
    app.use(updateLastSeen);
    app.use(checkAuth);
    
    const User = new UserController();
    const Dialog = new DialogController();
    const Message = new MessageController(io, "asd");
    
    app.get('/user/me', User.getMe);
    app.get('/user/verifi', User.verifi);
    app.get('/user/find', User.findUser);
    app.get('/user/:id', User.find);
    app.delete('/user/:id', User.delete);
    app.post('/user/registr', registerValidation, User.create);
    app.post('/user/login', loginValidation, User.login);
    
    app.get('/dialogs', Dialog.index);
    app.delete('/dialogs/:id', Dialog.delete);
    app.post('/dialogs', Dialog.create);
    
    app.get('/messages', Message.index);
    app.delete('/messages/:id', Message.delete);
    app.post('/messages', Message.create);

}

module.exports = createRoutes;
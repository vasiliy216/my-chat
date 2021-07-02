const cors = require("cors")
const bodyParser = require("body-parser")

const { UserController, DialogController, MessageController } = require("../controllers")
const { updateLastSeen, checkAuth } = require("../middlewares")
const { loginValidation, registerValidation } = require("../utility/validations")

const createRoutes = (app, io) => {

    app.use(cors());
    app.use(bodyParser.json());
    app.use(checkAuth);
    app.use(updateLastSeen);
    
    const User = new UserController();
    const Dialog = new DialogController(io);
    const Message = new MessageController(io);
    
    app.get('/user/me', User.getMe);
    app.get('/user/verifi', User.verifi);
    app.get('/user/find', User.findUser);
    app.get('/user/:id', User.find);
    app.delete('/user/:id', User.delete);
    app.post('/user/registr', registerValidation, User.create);
    app.post('/user/login', loginValidation, User.login);
    
    app.get('/dialogs', (req, res) => Dialog.index(req, res));
    app.delete('/dialogs/:id', (req, res) => Dialog.delete(req, res));
    app.post('/dialogs', (req, res) => Dialog.create(req, res));
    
    app.get('/messages', (req, res) => Message.index(req, res));
    app.delete('/messages/:id', (req, res) => Message.delete(req, res));
    app.post('/messages', (req, res) => Message.create(req, res));

}

module.exports = createRoutes;
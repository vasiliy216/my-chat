const mongoose = require("mongoose")

mongoose.connect(process.env.DATABASE_ACCESS, {
    UseNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

mongoose.set('useFindAndModify', false);
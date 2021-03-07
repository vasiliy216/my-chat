const mongo = require('mongodb').MongoClient

mongo.MongoClient = {
    useUnifiedTopology: true
}

mongo.connect(
  'mongodb+srv://valid:valid@cluster0.64l6m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  (err, client) => {
    if (err) {
      console.log('Connection error: ', err)
      throw err
    }

    console.log('Connected')

    client.close()
  }
)
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://kevin:password%4012@cluster0.1zampv3.mongodb.net/test"

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

module.exports=client;

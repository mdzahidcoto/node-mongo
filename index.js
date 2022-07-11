const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const password = "2LgffquAAI3uaf39";
const uri =
"mongodb+srv://zahidcoto:2LgffquAAI3uaf39@cluster0.h1kyydc.mongodb.net/hotChilies?retryWrites=true&w=majority";

const app = express();
app.use(cors());
// parse application/json
app.use(bodyParser.json());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// Mongo client part
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const productCollection = client.db("hotChilies").collection("users");
    //  Get
    app.get('/products', (req, res) => {
        productCollection.find({})
        .toArray((err, documents)=> {
            res.send(documents)
        })
    })

    app.get('/products/:id', (req, res) => {
        productCollection.find({_id: ObjectId(req.params.id)})
            .toArray((err, documents)=>{
                res.send(documents)
            })

    })
  //   Post
    app.post('/addProduct', (req, res) => {
        const product = req.body;
        productCollection.insertOne(product)
            .then(result => {
                res.send('success')
        })
    })
// Delete
app.delete('/delete/:id', (req, res) => {
    // console.log(req.params.id)
    productCollection.deleteOne({_id: ObjectId(req.params.id)})
        .then((err, result) => {
            console.log('product deleted', result)
        })
})
});

// get method
app.get("/", (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

app.listen(4000, () => console.log("listening to port 4000"));

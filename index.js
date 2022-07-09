const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

// get method
const user =[ '0', 'a', 'b', 'c', 'd', 'e' ]
app.get('/banana/khai',(req, res) => {
    res.send({name:'banana', price:'20', outcome:'2taka'})
})
app.get('/users/:id',(req, res) => {
    const id = req.params.id;
    const name = user[id];
    const sort = req.query.sort
    res.send({id, name, sort})
})

// post method
app.post('/addUser', (req, res)=> {
    //save to database
    const user = req.body;
    user.id = 55;
    res.send(user);
})

app.listen(4000, ()=> console.log('listening to port 4000'))
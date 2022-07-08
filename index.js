const express = require('express');

const app = express();

const user =[ '0', 'a', 'b', 'c', 'd', 'e' ]
app.get('/banana/khai',(req, res) => {
    res.send({name:'banana', price:'20', outcome:'2taka'})
})
app.get('/banana/:id',(req, res) => {
    const id = req.params.id;
    const name = user[id];
    const sort = req.query.sort
    res.send({id, name, sort})
})

app.listen(4000, ()=> console.log('listening to port 4000'))
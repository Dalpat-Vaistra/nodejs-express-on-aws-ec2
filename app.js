const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send(" Welcome to Vaistra Technologies !! ");
})

app.get('/welcome', (req, res) => {
    res.send({
        message:{
            name: "dalpat",
            email: "dalpat@gmail.com"
        }
    });
})

app.listen(port, ()=> {
    console.log(`Server is Running on Port ${port}`)
});
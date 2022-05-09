const express = require ('express');

const res = require('express/lib/response');

const app = express();

const path = require ('path')

const port = 3000

app.listen(port,()=>
console.log ('Levantando un servidor con Express'))

app.use( express.static( path.join( __dirname, './public' )) )

app.get ('/', (req,res)=>{
    res.sendFile(path.resolve ('./views/home.html') )
})

const express = require('express');
const app = express();

app.get('/', (req,res) => {
    res.send('Hello world ');
    });

app.listen(3000,() => console.log('lsitening on port 2000') );

//app.post();
//app.put();
//app.delete();

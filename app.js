const express = require('express');

const app = express();
const mongoose = require('mongoose');

//Middlewares  für authentification

// Imnprt Routes

const postsRoutes = require('./routes/posts');

app.use('/posts', postsRoutes);



app.get('/',(req,res) => {
   res.send('We are on home ');

});


// how do we start listender to the server 
app.listen(3000, () => console.log('Server started'))

//  connect to database 
mongoose.connect('mongodb://mrfabixx:Toietmoi2016!@cluster0.dzktk.mongodb.net/Cluster0?retryWrites=true&w=majority', () => 
 console.log('connected to Database')
);





















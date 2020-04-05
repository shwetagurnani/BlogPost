const path = require('path');
const cors = require('cors');
const express = require('express');
const session = require('express-session');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000 ;

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/edgistify-blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

app.use(cors());

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');
const commentRoutes = require('./routes/comment');



app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
  })
);


app.use('/auth', authRoutes);
app.use('/post', postRoutes);
app.use(commentRoutes);

app.get('/displayPost', (req, res) => {
  res.send('Welcome')
})



if(process.env.NODE_ENV === 'production')
{
  app.use(express.static('client/build'));


  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'client','build','index.html'));
  })
}



  
    app.listen(PORT , () =>{
      console.log(`server running at port: ${PORT}`);
    });
 
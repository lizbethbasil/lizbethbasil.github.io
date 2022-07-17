const express = require('express'); 
const path = require ('path'); 
const cors = require('cors');
const PORT = process.env.PORT || 5000
//2. I am a third-party module that is installed and has an important role. I will prevent your application from running. The entire part of myself is missing.
const bodyParser = require('body-parser')


//6.  Change me, first navbar will tell. I am an array of objects which can be modularised and kept somewhere as static data.
//Changes done only Home Page. Not get enough time
const nav= [
    {
        link:"/authors",
        title:"Authors List"
    },
    {
        link:"/books",
        title:"Books List"
    },
    {
        link:"/books/addbook",
        title:"Add Book New"
    },
    {
        link:"/authors/addauthor",
        title:"Add Author New"
    }
]

//3. I am a local (user-defined) module. I am checking whether you can distinguish the location name from my name. 
//name should be homerouter
const loginRouter = require('./src/routes/loginroute');
const signupRouter = require('./src/routes/signuproute');
const homeRouter = require('./src/routes/homerouter')(nav);
const booksRouter = require('./src/routes/booksroute');
const authorsRouter = require('./src/routes/authorsroute');

const app = new express; 

//7.  I took care when someone else tries to access this server for resource sharing. I am not currently used. Add me if you find me useful.
app.use(cors({
    origin: '*'
}));


app.set('views','./src/views'); 
app.set('view engine','ejs'); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname , '/public'))); 

app.use('/login',loginRouter); 
app.use('/signup',signupRouter); 
app.use('/home',homeRouter); 
app.use('/books',booksRouter); 
app.use('/authors',authorsRouter); 

app.get('/',function(req,res){
    res.render('index',{});
});
//1. You can find me if you look at the starting point. message port should be 5000(it was 3000)
app.listen(PORT,()=>{
    console.log(`Server Ready on ${PORT}`);
});

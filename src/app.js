const express = require('express'); 
const app = express(); 

const bcryptjs = require('bcryptjs');

app.use(express.static('public'));

const isLoggedIn = require('./middleware/isLoggedin')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Connection Database 
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'studyproject',

});

const session = require('express-session')
app.use(session({   
    secret: 'secret',     
    resave: true,
    saveUninitialized: true
}));

app.use((req, res, next) => {
    res.locals.currentUser = req.session.Username;
    console.log(req.session.Username)
    next();
})


app.post('/register', (req, res) => {
    const {Username,_id, Name, Email, Password} = req.body; 
    bcryptjs.hash(Password, 10, (err, hash) => {
        if (err) {
            console.error('Error hashing password:', err);
            return;
        }


        const q = 'Insert into user (Username, _id, Name, Email, Password) values (?,?,?,?,?)'
        db.query(q, [Username, _id, Name, Email, hash], (err, result) => {
            if (err) {
                console.error('Error inserting user:', err);
                return;
            }
            res.render('dashboard')
            res.json({message: 'User inserted successfully'})
        });




        
    });
})

app.get("/login", (req, res) => {
    res.render('login')

})

app.post('/login',(req, res)=> {
    const {Username, Password} = req.body; 
    const q = 'Select * from user where Username = ?'
    db.query(q, [Username], (err, result) => {
        if (err) {
            console.error('Error selecting user:', err);
            return;
        }
        if (result.length === 0) {
            res.json({message: 'Username not found'})
            return;
        }
        const user = result[0];
        bcryptjs.compare(Password, user.Password, (err, result) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return;
            }
            if (result) {
                req.session.Username = user.Username;
                res.render('dashboard')
                
            } else {
                res.json({message: 'Password incorrect'})
            }
        });
    });
})

app.post('/logout', (req, res)=>{
    req.session.destroy();
    res.json({message: 'Logout successful'})

})


app.get('/',isLoggedIn, (req, res) => {
    const q = 'Select * from user' 
    db.query(q, (err, result) => {
    
        res.render('home', {result})
    })
    
})


app.listen(4000, ()=> {
    console.log('Server is running on port 4000'); 
})
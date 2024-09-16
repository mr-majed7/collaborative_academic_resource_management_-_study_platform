const User = require('../models/user');
const bcryptjs = require('bcryptjs')
const express = require("express")
const app = express()
const session = require('express-session');
app.use(session({   
    secret: 'secret',     
    resave: true,
    saveUninitialized: true
}));

module.exports.getRegisterForm = async (req, res) => {
    res.render("Registration")
}

module.exports.register =  async (req, res) => {
    const { Username, _id, Name, Email, Password } = req.body;
    try {
        const hash = await bcryptjs.hash(Password, 10);
        await User.create({ Username, _id, Name, Email, Password: hash });
        req.session.currentUser = Username
        res.render('landingPage', {Username});
        
    } catch (err) {
        console.error('Error inserting user:', err);
        res.status(500).json({ error: 'Error inserting user' });
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render('login');
}; 


module.exports.login = async (req, res) => {
    const { Username, Password } = req.body;
    try {
        const user = await User.findOne({ where: { Username } });
        
        if (!user) {
            res.json({ message: 'Username not found' });
            return;
        }
        const isPasswordValid = await bcryptjs.compare(Password, user.Password);
        if (isPasswordValid) {
            req.session.Username = user.Username;
            res.render('landingPage',{Username});
        } else {
            res.json({ message: 'Password incorrect' });
        }
    } catch (err) {
        console.error('Error selecting user:', err);
        res.status(500).json({ error: 'Error selecting user' });
    }
};

module.exports.logout = (req, res) => {
    req.session.destroy();
    // res.json({ message: 'Logout successful' });
    res.redirect('/')
}
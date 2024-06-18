module.exports = (req, res, next) => {
    if (req.session.Username) {
        next();
    } else {
        res.json({message: 'You are not logged in'})
    }
}   
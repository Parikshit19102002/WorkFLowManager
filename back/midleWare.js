module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        console.log(req.originalUrl);
        req.session.returnTo=req.originalUrl;
        // req.flash('error', 'You must be Logged in  first!');
        return res.redirect('/login');
    }
    next();
}
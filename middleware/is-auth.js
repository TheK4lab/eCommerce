module.exports = (req, res, next) => {
    console.log("from auth middleware: ", req.session.isLoggedIn);
    if (!req.session.isLoggedIn) {
        return res.redirect('/login');
    }
    next();
}
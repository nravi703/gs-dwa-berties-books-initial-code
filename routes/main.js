const express = require("express");
const router = express.Router();

// Define our data
var shopData = { shopName: "Bertie's Books" };

// Handle our routes
router.get('/', function(req, res) {
    res.render('index.ejs', shopData);
});

router.get('/about', function(req, res) {
    res.render('about.ejs', shopData);
});

router.get('/search', function(req, res) {
    res.render("search.ejs", shopData);
});

router.get('/search-result', function(req, res) {
    // Searching in the database
    res.send("You searched for: " + req.query.keyword);
});

router.get('/register', function(req, res) {
    res.render('register.ejs', shopData);
});

router.post('/registered', function(req, res) {
    // Saving data in database
    res.send(' Hello ' + req.body.first + ' ' + req.body.last + 
             ' you are now registered!  We will send an email to you at ' + req.body.email);
});

// Define a new route to list books from the database
router.get('/list', function(req, res) {
    let sqlquery = "SELECT * FROM books"; // Query database to get all the books
    // Execute SQL query
    db.query(sqlquery, (err, result) => {
        if (err) {
            res.redirect('./');
        }
        res.send(result);
    });
});

// Export the router object so index.js can access it
module.exports = router;

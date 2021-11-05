

// access control
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', '*');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', '*');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    // Pass to next layer of middleware
    next();
});

// middileware like security
app.use(function(req,res,next){
    // token request
    // token check
    // if any wrong should give response
    // if every thing is ok
    next();
})
 // http://localhost:4200/api
// routing
app.use('/api',router)

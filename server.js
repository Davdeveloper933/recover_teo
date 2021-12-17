const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
const cors = require("cors");
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
app.use(cors())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const port = process.env.PORT || 80;
app.listen(port);
const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();
var bodyParser = require("body-parser");


// Setup logger
app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));
app.use(express.static(path.resolve(__dirname, '..', 'build')));
//api url


// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(3000,()=>
{
    console.log('server is running 3000')
})
module.exports = app;
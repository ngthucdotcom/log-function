var express = require("express");
var bodyParser = require("body-parser");
var moment = require("moment");
var router = express.Router();

app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.get("/", (req, res) => {
    console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
});

router.post("/api/logger", (req, res) => {
    console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
    console.log(req.body);
    res.json(req.body);
});

app.use(router);

var server = app.listen(11111, function() {
    console.log('Server listening on port ' + server.address().port);
});

module.exports = app;
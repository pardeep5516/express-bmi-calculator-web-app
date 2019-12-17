const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function (req, res) {
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var bmi = weight / Math.pow(height, 2);

    res.send("Your bmi result is " + Math.round(bmi));

});

app.listen(3000, function (req, res) {
    console.log("server running on port 3000");
})
var path = require("path");


module.exports = function(app){
    app.get("/survey", function(req,res){
        // display the survey page
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });

    app.get("/", function(req, res){
        // catch all that leads to home.html
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}
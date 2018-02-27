var path = require("path");


module.exports = function(app){
    app.get("/survey", function(req,res){
        // display the survey page
    });

    app.get("/", function(req, res){
        // catch all that leads to home.html
    });
}
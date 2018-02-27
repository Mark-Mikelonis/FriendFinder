
var friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        // display the json of all friends
        res.json(friends);

    });

    app.post("/api/friends", function(req, res){
        // handles incoming survey results
    });
}
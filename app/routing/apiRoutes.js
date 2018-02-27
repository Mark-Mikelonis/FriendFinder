
var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        // display the json of all friends
        res.json(friends);


    });

    app.post("/api/friends", function(req, res){
        // handles incoming survey results
        friends.push(req.body);
        console.log("in API post: " + res);
       
        res.json(friends[1]);
    });
}

var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        // display the json of all friends
        res.json(friends);


    });

    app.post("/api/friends", function(req, res){
        // handles incoming survey results
        // var data;
        // function callback(result){
        //     data = result;
        // }
        friends.push(req.body);
        // var match = friends.findFriend();

        console.log("in API post: ");
       
        res.json(friends[5]);
    });
}





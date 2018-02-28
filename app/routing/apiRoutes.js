
var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        // display the json of all friends
        res.json(friends);


    });

    app.post("/api/friends", function(req, res, callback){
        // handles incoming survey results
        var data;
        function callback(){
            data = res;
        }
        friends.push(req.body);
        console.log("in API post: "+currBestMatch);
       
        res.json(data);
    });
}





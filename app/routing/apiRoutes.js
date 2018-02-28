var currLowestDiff = 100;
var currBestMatch;
var totalDifference =0;
var tempScore;


var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        // display the json of all friends
        res.json(friends);


    });

    app.post("/api/friends", function(req, res){
        // handles incoming survey results
                
        function findFriend(newFriend){
            var totalDifference = 0;
            tempScore = newFriend.scores;
            for (var i=0;i<friends.length;i++){
               var isNewBest = compareScores(tempScore, friends[i].scores);
               if(isNewBest){
                   currBestMatch = friends[i];
                   isNewBest = false;
        
               } 
            }
            res.json(currBestMatch);
            currBestMatch = "";
                  
        }
        
        function compareScores(scores1, scores2){
            for(var i=0;i<10;i++){
                totalDifference += Math.abs(scores1[i] - scores2[i]);
               
            }
            if(totalDifference<currLowestDiff){
                currLowestDiff = totalDifference;
                totalDifference = 0;
                return true;
            } else {
                totalDifference = 0;
                return false;
            }
            
        }
        
        findFriend(req.body);
       

       
        
    });
}






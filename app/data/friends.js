var currLowestDiff = 100;
var currBestMatch;
var totalDifference =0;
var tempScore;

function findFriend(){
    var totalDifference = 0;
    tempScore = friends[friends.length-1].scores;
    for (var i=0;i<friends.length;i++){
       var isNewBest = compareScores(tempScore, friends[i].scores);
    //    console.log("isNewBest " + isNewBest + friends[i].name);
       if(isNewBest){
        //    console.log("isNewBest: " + friends[i].name);
           currBestMatch = friends[i].name;

       } 
    }
    // friends.push(friend);
}

function compareScores(scores1, scores2){
    for(var i=0;i<10;i++){
        totalDifference += Math.abs(scores1[i] - scores2[i]);
        // console.log("totalDifference: " + totalDifference);
    }
    if(totalDifference<currLowestDiff){
        // console.log("totalDifference: " + totalDifference);
        // console.log("currLowestDiff: " + currLowestDiff);
        currLowestDiff = totalDifference;
        // console.log("In compareScores: " + totalDifference);
        totalDifference = 0;
        return true;
    } else {
        totalDifference = 0;
        return false;
    }
    
}

function runTests(){
    findFriend({
        name: "Aria",
        photo: "../data/images/aria.jpeg",
        scores: [5,2,8,9,4,6,1,2,3,4]
    });
    return currBestMatch;
}

var friends = [
    {
        name:"Chris",
        photo: "../data/images/chris.jpeg",
        scores: [5,1,4,4,5,1,2,5,4,1]
    },
    {
        name: "Jimmy",
        photo: "../data/images/jimmy.jpeg",
        scores: [7,5,9,3,1,5,4,2,1,9]
    },
    {
        name: "Aria",
        photo: "../data/images/aria.jpeg",
        scores: [5,2,8,9,4,6,1,2,3,4]
    },
    {
        name: "Bill",
        photo: "../data/images/bill.jpeg",
        scores: [2,5,7,6,3,2,4,1,5,8]
    },
    {
        name:"Job",
        photo: "../data/images/job.jpeg",
        scores: [6,5,1,4,5,8,3,6,9,8]
    },
    {
        name: "Jill",
        photo: "../data/images/jill.jpeg",
        scores: [4,5,8,2,3,6,8,7,4,5]
    },
    {
        name: "James",
        photo: "../data/images/james.jpeg",
        scores: [2,5,4,7,8,5,1,6,6,9]
    },
    {
        name: "Joanne",
        photo: "../data/images/joanne.jpeg",
        scores: [7,2,5,8,6,3,1,4,1,2]
    },
    {
        name: "Betty",
        photo: "../data/images/betty.jpeg",
        scores: [5,2,4,7,9,5,1,2,3,5]
    },
    {
        name: "Lisa",
        photo: "../data/images/lisa.jpeg",
        scores: [1,2,5,2,4,6,5,1,2,8]
    },
    {
        name: "Donald",
        photo: "images/donald.jpeg",
        scores: [5,8,1,2,3,6,9,7,2,3]
    },
    {
        name: "Meghan",
        photo: "../data/images/meghan.jpeg",
        scores: [4,5,3,4,5,7,2,3,4,6]
    }
];

findFriend();
console.log("friends[friends.length-1]: " + friends[friends.length-1].name);
module.exports = friends;
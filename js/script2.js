
    var vacationType = prompt("What type of vacation are you looking for? musical, tropical, or adventurous?");
        if (vacationType == "musical"){
            var destination = "I recommend New Orleans, don't forget the beignets!";
        } else if (vacationType == "tropical"){
            var destination = "I recommend a Beach vacation in Mexico, bring shorts & sandals. Be sure to try the Al Pastor tacos!";
        } else if (vacationType == "adventurous"){
            var destination = "You'll love Whitewater Rafting the Grand Canyon, bring water-proofed items and make sure your insurance is up-to-date!";
        }
    var groupSize = prompt(" How many people are in your party?");
        if (groupSize < 3){
            var travel = " You should travel First Class, cheers!";
        } else if (groupSize == 4){
            var travel = " You should travel by Helicopter, bring earplugs";
        } else if (groupSize == 5){
            var travel = "You should travel by Helicopter, bring earplugs";
        }else if (groupSize == 6){
            var travel = "You should travel via Charter Flight. Your guests will feel like celebrities!s";
        } else if (groupSize > 6){
            var travel = "You should travel via Charter Flight. Your guests will feel like celebrities!";
        }
    var res = (destination) + (travel);        
console.log(res)

    
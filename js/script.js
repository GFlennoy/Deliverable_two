function myFunction() {
    var vacationType = prompt("What type of vacation?");
        if (vacationType == "musical"){
            var destination = "New Orleans";
        } else if (vacationType == "Tropical"){
            var destination = "Beach vacation in Mexico";
        } else if (vacationType == "adventurous"){
            var destination = "Whitewater Rafting the Grand Canyon";
        }
    var groupSize = prompt("How many in your party?");
        if (groupSize < 3){
            var travel = "First Class";
        } else if (groupSIze < 6){
            var travel = "Helicopter";
        } else if (groupSize > 6){
            var travel = "Charter Flight";
        }
    var res = vacationType.concat(groupSize);
        console.log(res)

    }
$(document).ready(function() {
    
    // var category = $("#category");
    // var numPlayers = $("#num-players");
    // var difficulty = $("#difficulty");
    // var timePlay = $("#time-play");
    // var timeLearn = $("#time-learn");

    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        // console.log("clicked");

        var newGameSearch = {
            category: $("#category").val().trim(),
            numPlayers: $("#num-players").val().trim(),
            age: $("#age").val().trim(),
            timeToPlay: $("#time-play").val().trim(),
            timetolearn: $("#time-learn").val().trim()
        }

        // console.log(newGameSearch);

        $.post("/api/new", newGameSearch).then(function(data) {
            var chosenGame = $("<div>");
            chosenGame.addClass("chosenGame");
            chosenGame.append("Games matching your search: <br><br>");
            // chosenGame.append(data[0].gameName);

            console.log("Returned from server:");
            for (var i = 0; i < data.length; i++) {
                console.log("ID: " + data[i].id);
                console.log("Game Name: " + data[i].gameName);
                console.log("Category: " + data[i].category);
                console.log("Suggested Minimum Age??: " + data[i].age);
                console.log("Minimum Players Needed: " + data[i].minPlayer);
                console.log("Maximum Players Needed: " + data[i].maxPlayer);
                console.log("Avg. Time Needed to Play (est.): " + data[i].timeToPlay);
                console.log("Avg Time to Learn (est.): " + data[i].timetolearn);
                chosenGame.append("Game Name: " + data[i].gameName + "<br>");
                chosenGame.append("Suggested Minimum Age??" + data[i].age + "<br>");
                chosenGame.append("Minimum Players: " + data[i].minPlayer + "<br>");
                chosenGame.append("Maximum Players: " + data[i].maxPlayer + "<br>");
                chosenGame.append("Avg. Time Needed to Play (est.): " + data[i].timeToPlay + "<br>");
                chosenGame.append("Avg Time to Learn (est.): " + data[i].timetolearn + "<br><br>");
                $(".game-area").append(chosenGame);

            }
            // console.log("Option " + i + ":");
            

        });
    });

    
});
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
            timeToPlay: $("#time-play").val().trim()
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
                console.log("Category: " + data[i].category_id);
                console.log("Suggested Age Range: " + data[i].age_range);
                console.log("Minimum Players Needed: " + data[i].minPlayer);
                console.log("Maximum Players Needed: " + data[i].maxPlayer);
                console.log("Average Time Needed to Play: " + data[i].timeToPlay);
                
                chosenGame.append("Game Name: " + data[i].gameName + "<br>");
                chosenGame.append("Suggested Minimum Age??" + data[i].age_range + "<br>");
                chosenGame.append("Minimum Players: " + data[i].minPlayer + "<br>");
                chosenGame.append("Maximum Players: " + data[i].maxPlayer + "<br>");
                chosenGame.append("Average Time Needed to Play: " + data[i].timeToPlay + "<br>");

                $(".game-area").append(chosenGame);

            }
            // console.log("Option " + i + ":");
            

        });
    });

    
});
$(document).ready(function() {
    
    // var category = $("#category");
    // var numPlayers = $("#num-players");
    // var difficulty = $("#difficulty");
    // var timePlay = $("#time-play");
    // var timeLearn = $("#time-learn");

    $("#submit-btn").on("click", function(event) {
        event.preventDefault();
        console.log("clicked");

        var newGameSearch = {
            category: $("#category").val().trim(),
            numPlayers: $("#num-players").val().trim(),
            age: $("#age").val().trim(),
            timeToPlay: $("#time-play").val().trim(),
            timetolearn: $("#time-learn").val().trim()
        }

        console.log(newGameSearch);

        $.post("/api/new", newGameSearch).then(function(data) {
            var chosenGame = $("<div>");
            chosenGame.addClass("chosenGame");
            chosenGame.append(newGameSearch.category);

            console.log("returned from server " + data);
        });
    });

    
});
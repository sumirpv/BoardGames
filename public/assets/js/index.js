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
            age: $("#age").val().trim(),
            difficulty: $("#difficulty").val().trim(),
             numPlayers: $("#num-players").val().trim(),
            timeToPlay: $("#time-play").val().trim()
        }

        // console.log("category",$("#category").val());
        // console.log("age",$("#age").val());
        // console.log("difficulty",$("#difficulty").val().trim());
        // console.log("numplayers ",$("#num-players").val().trim());
        // console.log("playtime ",$("#time-play").val().trim());  

         console.log(newGameSearch);

        $.post("/api/new", newGameSearch).then(function(data) {
           // var chosenGame = $("<div>");
            var chosenGame = $("<table/>");

            chosenGame.addClass("chosenGame");
            chosenGame.append("Games matching your search: <br><br>");
            // chosenGame.append(data[0].gameName);

            console.log("Returned from server:");

            for (var i = 0; i < data.length; i++) {
                console.log("ID: " + data[i].id);
                console.log("Game Name: " + data[i].gameName);
                console.log("Category: " + data[i].category_id);
                console.log("Suggested Age Range: " + data[i].age_id);
                console.log("Minimum Players Needed: " + data[i].minPlayer);
                console.log("Maximum Players Needed: " + data[i].maxPlayer);
                console.log("Average Time Needed to Play: " + data[i].timeToPlay);
                console.log("Manufacturer: "+data[i].manufacturer);
                console.log("Year: "+data[i].year);
                console.log("image: "+data[i].img);
                // chosenGame.append("Game Name: " + data[i].gameName + "<br>");
                // chosenGame.append("Suggested Minimum Age??" + data[i].age_id + "<br>");
                // chosenGame.append("Minimum Players: " + data[i].minPlayer + "<br>");
                // chosenGame.append("Maximum Players: " + data[i].maxPlayer + "<br>");
                // chosenGame.append("Average Time Needed to Play: " + data[i].timeToPlay + "<br>");
                // chosenGame.append("Manufacturer: "+data[i].manufacturer+"<br>");
                // chosenGame.append("Year: "+data[i].year+"<br>");
                // chosenGame.append("image: "+data[i].img+"<br><br><br>");
                chosenGame.append("<tr><td>"+"Game Name: " + data[i].gameName + "</td></tr>");
                chosenGame.append("<tr><td>"+"Category: " + data[i].category.name + "</td></tr>");
                chosenGame.append("<tr><td>"+"Suggested Age Range:" + data[i].age.age_range + "</td></tr>");
                chosenGame.append("<tr><td>"+"Difficulty Level: " + data[i].difficulty + "</td></tr>");
                chosenGame.append("<tr><td>"+"Minimum Players: " + data[i].minPlayer + "</td></tr>");
                chosenGame.append("<tr><td>"+"Maximum Players: " + data[i].maxPlayer + "</td></tr>");
                chosenGame.append("<tr><td>"+"Average Time Needed to Play: " + data[i].timeToPlay + "</td></tr>");
                chosenGame.append("<tr><td>"+"Manufacturer: "+data[i].manufacturer+"</td></tr>");
                chosenGame.append("<tr><td>"+"Year: "+data[i].year+"</td></tr>");
                chosenGame.append("<tr><td><img src='"+data[i].img+"'/></td></tr>");
                chosenGame.append("<tr><td>"+"<br>"+"</tr></td>");

                $(".game-area").append(chosenGame);


       

            }
            // console.log("Option " + i + ":");
            

        });
    });

    
});
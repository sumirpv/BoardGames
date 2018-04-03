$(document).ready(function() {

    // clearing all the input files
    $("#reset-btn").on("click", function(){
        $("#category").val(""),
        $("#age").val(""),
        $("#difficulty").val(""),
        $("#num-players").val(""),
        $("#time-play").val(""),
        $(".game-area").remove();
    });

    function renderGames(data){
       // $('.game-area').html('');
      // $(".game-area").remove();
      $(".game-area").children().text("");

        console.log("data", data);
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
             console.log("Manufacturer: "+ data[i].manufacturer);
             console.log("Year: "+ data[i].year);
             console.log("image: "+ data[i].img);
             // chosenGame.append("Game Name: " + data[i].gameName + "<br>");
             // chosenGame.append("Suggested Minimum Age??" + data[i].age_id + "<br>");
             // chosenGame.append("Minimum Players: " + data[i].minPlayer + "<br>");
             // chosenGame.append("Maximum Players: " + data[i].maxPlayer + "<br>");
             // chosenGame.append("Average Time Needed to Play: " + data[i].timeToPlay + "<br>");
             // chosenGame.append("Manufacturer: "+data[i].manufacturer+"<br>");
             // chosenGame.append("Year: "+data[i].year+"<br>");
             // chosenGame.append("image: "+data[i].img+"<br><br><br>");
             chosenGame.append("<tr><td>"+"Game Name: " + data[i].gameName + "</td></tr>");
             chosenGame.append("<tr><td>"+"Category: " + data[i].name + "</td></tr>");
             chosenGame.append("<tr><td>"+"Suggested Age Range:" + data[i].age_range + "</td></tr>");
             chosenGame.append("<tr><td>"+"Difficulty Level: " + data[i].difficulty + "</td></tr>");
             chosenGame.append("<tr><td>"+"Minimum Players: " + data[i].minPlayer + "</td></tr>");
             chosenGame.append("<tr><td>"+"Maximum Players: " + data[i].maxPlayer + "</td></tr>");
             chosenGame.append("<tr><td>"+"Average Time Needed to Play: " + data[i].timeToPlay + "</td></tr>");
             chosenGame.append("<tr><td>"+"Manufacturer: "+ data[i].manufacturer+"</td></tr>");
             chosenGame.append("<tr><td>"+"Year: "+ data[i].year+"</td></tr>");
             chosenGame.append("<tr><td><img src='"+ data[i].img+"'/></td></tr>");
             chosenGame.append("<tr><td>"+"<br>"+"</tr></td>");

             $(".game-area").append(chosenGame);
         }
    }

    function renderGamesIndividual(data){
        $(".game-area").children().text("");

        console.log("data", data);
        // var chosenGame = $("<div>");
         var chosenGame = $("<table/>");

         chosenGame.addClass("chosenGame");
         chosenGame.append("Games matching your search: <br><br>");
         // chosenGame.append(data[0].gameName);

         console.log("Returned from server:");

         for (var i = 0; i < data.length; i++) {
             chosenGame.append("<tr><td>"+"Game Name: " + data[i].gameName + "</td></tr>");
             chosenGame.append("<tr><td>"+"Category: " + data[i].category.name + "</td></tr>");
             chosenGame.append("<tr><td>"+"Suggested Age Range:" + data[i].age.age_range + "</td></tr>");
             chosenGame.append("<tr><td>"+"Difficulty Level: " + data[i].difficulty + "</td></tr>");
             chosenGame.append("<tr><td>"+"Minimum Players: " + data[i].minPlayer + "</td></tr>");
             chosenGame.append("<tr><td>"+"Maximum Players: " + data[i].maxPlayer + "</td></tr>");
             chosenGame.append("<tr><td>"+"Average Time Needed to Play: " + data[i].timeToPlay + "</td></tr>");
             chosenGame.append("<tr><td>"+"Manufacturer: "+ data[i].manufacturer+"</td></tr>");
             chosenGame.append("<tr><td>"+"Year: "+ data[i].year+"</td></tr>");
             chosenGame.append("<tr><td><img src='"+ data[i].img+"'/></td></tr>");
             chosenGame.append("<tr><td>"+"<br>"+"</tr></td>");

             $(".game-area").append(chosenGame);
         }
    }

    function pageFunction(data){
        
    }
    $('#category').change(function(){ 
        console.log( "this is selected");
        //only category search result will show
        var categoryid=$("#category").val().trim();
        console.log("category id is ",categoryid);
        $.post("/api/boardGames/category/"+categoryid,function(data){
            console.log ("only category id data",data);
            var gamesArray=[];
            var nameArray =[];
           for ( var i=0; i< data.length;i++){
               if (nameArray.indexOf(data[i].gameName)==-1){
                nameArray.push(data[i].gameName);
                gamesArray.push(data[i]);
               }
           }
            renderGamesIndividual(gamesArray);
        
        })
    });

    $('#age').change(function(){ 
        console.log( "the single search age is selected");
        //only age search result will show
        var ageid=$("#age").val().trim();
        console.log("age id is ",ageid);
        $.post("/api/boardGames/age/"+ageid,function(data){
            console.log ("only age id data",data);
            var gamesArray=[];
            var nameArray =[];
           for ( var i=0; i< data.length;i++){
               if (nameArray.indexOf(data[i].gameName)==-1){
                nameArray.push(data[i].gameName);
                gamesArray.push(data[i]);
               }
           }
            renderGamesIndividual(gamesArray);
        })
    });

    $('#difficulty').change(function(){ 
        console.log( "the single search difficulty is selected");
        //only age search result will show
        var difficultyid=$("#difficulty").val().trim();
        console.log("difficulty id is ",difficultyid);
        $.post("/api/boardGames/difficulty/"+difficultyid,function(data){
            console.log ("only difficulty id data",data);
            var gamesArray=[];
            var nameArray =[];
           for ( var i=0; i< data.length;i++){
               if (nameArray.indexOf(data[i].gameName)==-1){
                nameArray.push(data[i].gameName);
                gamesArray.push(data[i]);
               }
           }
            renderGames(gamesArray);
        })
    });

    $('#num-players').change(function(){ 
        console.log( "the single search num-players is selected");
        //only age search result will show
        var numPlayersid=$("#num-players").val().trim();
        console.log("num-players id is ",numPlayersid);
        $.post("/api/boardGames/numPlayers/"+numPlayersid,function(data){
            console.log ("only num-players id data",data);
            var gamesArray=[];
            var nameArray =[];
           for ( var i=0; i< data.length;i++){
               if (nameArray.indexOf(data[i].gameName)==-1){
                nameArray.push(data[i].gameName);
                gamesArray.push(data[i]);
               }
           }
            renderGames(gamesArray);
        })
    });

    $('#time-play').change(function(){ 
        console.log( "the single search time-play is selected");
        //only age search result will show
        var timePlayid=$("#time-play").val().trim();
        console.log("time-play id is ",timePlayid);
        $.post("/api/boardGames/timePlay/"+timePlayid,function(data){
            console.log ("only time-play id data",data);
            var gamesArray=[];
            var nameArray =[];
           for ( var i=0; i< data.length;i++){
               if (nameArray.indexOf(data[i].gameName)==-1){
                nameArray.push(data[i].gameName);
                gamesArray.push(data[i]);
               }
           }
            renderGames(gamesArray);
        })
    });



    $("#submit-btn").on("click", function(event) {
       // event.preventDefault();
         console.log("clicked");

        var newGameSearch = {
            category: $("#category").val().trim(),
            age: $("#age").val().trim(),
            difficulty: $("#difficulty").val().trim(),
            numPlayers: $("#num-players").val().trim(),
            timeToPlay: $("#time-play").val().trim()
        }
         console.log(newGameSearch);

        $.post("/api/new", newGameSearch).then(function(data) {
            console.log("my new url",data);
            // $('.game-area').empty();
            var gamesArray=[];
            var nameArray =[];
           for ( var i=0; i< data.length;i++){
               if (nameArray.indexOf(data[i].gameName)==-1){
                nameArray.push(data[i].gameName);
                gamesArray.push(data[i]);
               }
           }
            renderGames(gamesArray);
        });


    });

    
});
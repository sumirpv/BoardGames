$(document).ready(function() {

    $('.ratings_stars').hover(
        // Handles the mouseover
        function() {
            $(this).prevAll().andSelf().addClass('ratings_over');
            $(this).nextAll().removeClass('ratings_vote'); 
        },
        // Handles the mouseout
        function() {
            $(this).prevAll().andSelf().removeClass('ratings_over');
            set_votes($(this).parent());
        }
    );

    $('.rate_widget').each(function(i) {
        var widget = this;
        var out_data = {
            widget_id : $(widget).attr('id'),
            fetch: 1
        };
        $.post(
            'ratings.php',
            out_data,
            function(INFO) {
                $(widget).data( 'fsr', INFO);
                set_votes(widget);
            },
            'json'
        );
    });


    // clearing all the input files
    $("#reset-btn").on("click", function() {
        $("#category").val(""),
        $("#age").val(""),
        $("#difficulty").val(""),
        $("#num-players").val(""),
        $("#time-play").val(""),
        $(".game-area").children().text("");
        $("#game-name").val();
    });

    // Search DB by Game Name
    $("#submit-name-btn").on("click", function(event) {
        event.preventDefault();
        // console.log("clicked");
        var nameToSearch = $("#game-name").val().trim();
        // console.log(nameToSearch);
        $.post("/api/boardGames/" + nameToSearch, function(data) {
            var gamesArray = [];
            var nameArray = [];
            for ( var i = 0; i < data.length; i++){
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGamesIndividual(gamesArray, "GAME NAME", nameToSearch);
        })
    });

    // function renderGames(data){
    //    // $('.game-area').html('');
    //   // $(".game-area").remove();
    //   $(".game-area").children().text("");

    //   if (data.length < 1){
    //       alert("There is no games in your search parameters");
    //   }
    //   else {
    //   var chosenGame = $("<div>");
    //    //var chosenGame = $("<table/>");
    //   // chosenGame.addClass("caption");
    //   //  chosenGame.append("Games matching your search: <br><br>");
    //   chosenGame.append("<div class='row display-flex'>"+"</div>");
    // // Function that renders games using the boardGames model
    function renderGames(data, filterCategory, selectedFilter) {
        // $('.game-area').html('');
        // $(".game-area").remove();
        $(".game-area").children().text("");
        if (data.length < 1) {
            alert("There is no games in your search parameters");
        }
        else {
            // console.log("data", data);
            var chosenGame = $("<div>");
            // var chosenGame = $("<table/>");
            // chosenGame.addClass("caption");
            //  chosenGame.append("Games matching your search: <br><br>");
            chosenGame.append("<div class='row display-flex'>" + "</div>");
            chosenGame.append("<h2 class='text-center'>Current search results are being filtered by: <br>" + filterCategory + " > " + selectedFilter);
     
            // console.log("Returned from server:");

            for (var i = 0; i < data.length; i++) {
                chosenGame.append("<div class='col-xs-4 col-md-4 text-justify'>" + "<div class='thumbnail'><br>" +
                "<img id='thumb-img' src='" + data[i].img + "' /><br>" +
                "<div class='caption'>" +
                "<div>" + "<b>Game Name :</b><em> " + data[i].gameName + "</em></div>" +
                "<div>" + "<b>Category :</b><em> " + data[i].name + "</em></div>" +
                "<div>" + "<b>Age Range :</b><em> " + data[i].age_range + "</em></div>" +
                "<div>" + "<b>Difficulty Level :</b><em> " + data[i].difficulty + "</em></div>" +
                "<div>" + "<b>Minimum Players :</b><em> " + data[i].minPlayer + "</em></div>" +
                "<div>" + "<b>Maximum Players :</b><em> " + data[i].maxPlayer + "</em></div>" +
                "<div>" + "<b>Avg. Game Length :</b><em> " + data[i].timeToPlay + " mins.</em></div>" +
                "<div>" + "<b>Manufacturer :</b><em> " + data[i].manufacturer + "</em></div>" +
                "<div>" + "<b>Year :</b><em> " + data[i].year + "</em></div>" +
                "<div class='movie_choice'>" + "<b>Ratings:</b> " +
                "<div id='r1' class = 'rate_widget'>" +
                "<div class='star_1 ratings_stars'>" + "</div>" +
                "<div class='star_2 ratings_stars'>" + "</div>" + 
                "<div class='star_3 ratings_stars'>" + "</div>" + 
                "<div class='star_4 ratings_stars'>" + "</div>" + 
                "<div class='star_5 ratings_stars'>" + "</div>" +
                "<div class='total_votes'>" + "rate" + "</div>" + "</div>" + "</div>" +
                "</div></div></div>");

                $(".game-area").append(chosenGame);

                // "<button type='button' class='btn btn-default'>"+
                // "<span class='glyphicon glyphicon-star' aria-hidden='true'></span>"+"</button>"+"</div>"+
            }
        }
    }

    // Function that renders games using the boardGames, categories, and age models
    function renderGamesIndividual(data, filterCategory, selectedFilter) {
        $(".game-area").children().text("");

        if (data.length < 1) {
            alert("There is no games in your search parameters");
        }
        else {        
            var chosenGame = $("<div>");
            //var chosenGame = $("<table/>");
            // chosenGame.addClass("caption");
            //  chosenGame.append("Games matching your search: <br><br>");
            chosenGame.append("<div class='row'>" + "</div>");
            chosenGame.append("<h2 class='text-center'>Current search results are being filtered by: <br>" + filterCategory + " > " + selectedFilter);
       
            // console.log("Returned from server:");

            for (var i = 0; i < data.length; i++) {
                chosenGame.append("<div class='col-xs-4 col-md-4 text-justify'>" + "<div class='thumbnail'><br>" +
                "<img id='thumb-img' src='" + data[i].img + "' /><br>" +
                "<div class='caption'>" +
                "<div><b>" + "<b>Game Name :</b><em>  " + data[i].gameName + "</em></div>" +
                "<div>" + "<b>Category :</b><em> " + data[i].category.name + "</em></div>" + 
                "<div>" + "<b>Age Range :</b><em> " + data[i].age.age_range+"</em></div>" +
                "<div>" + "<b>Difficulty Level :</b><em> " + data[i].difficulty + "</em></div>" +
                "<div>" + "<b>Minimum Players :</b><em> " + data[i].minPlayer + "</em></div>" +
                "<div>" + "<b>Maximum Players :</b><em> " + data[i].maxPlayer + "</em></div>" +
                "<div>" + "<b>Avg. Game Length :</b><em> " + data[i].timeToPlay + " mins.</em></div>" +
                "<div>" + "<b>Manufacturer :</b><em> " + data[i].manufacturer + "</em></div>" +
                "<div>" + "<b>Year :</b><em> " + data[i].year + "</em></div>" +
                "<div class='movie_choice'>" + "<b>Ratings :</b> " +
                "<div id='r1' class = 'rate_widget'>" +
                "<div class='star_1 ratings_stars'>" + "</div>" +
                "<div class='star_2 ratings_stars'>" + "</div>" +
                "<div class='star_3 ratings_stars'>" + "</div>" +
                "<div class='star_4 ratings_stars'>" + "</div>" +
                "<div class='star_5 ratings_stars'>" + "</div>" +
                "<div class='total_votes'>" + "rate" + "</div>" + "</div>" + "</div>" +
                "</div></div></div>");

                $(".game-area").append(chosenGame);
            }
        }
    }

    // Searches DB based off of the category input ONLY
    $('#category').change(function() { 
        // console.log( "this is selected");
        // only category search result will show
        var categoryid = $("#category").val().trim();
        // console.log("category id is ", categoryid);
        $.post("/api/boardGames/category/" + categoryid, function(data) {
            // console.log ("only category id data", data);
            var gamesArray = [];
            var nameArray = [];
            for ( var i = 0; i < data.length; i++) {
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGamesIndividual(gamesArray, "CATEGORY", categoryid);
        })
    });

    // Searches DB based off of the age input ONLY
    $('#age').change(function() { 
        // console.log( "the single search age is selected");
        // only age search result will show
        var ageid = $("#age").val().trim();
        // console.log("age id is ", ageid);
        $.post("/api/boardGames/age/" + ageid, function(data) {
            // console.log ("only age id data",data);
            var gamesArray = [];
            var nameArray = [];
            for ( var i = 0; i < data.length; i++) {
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGamesIndividual(gamesArray, "AGE GROUP", ageid);
        })
    });

    // Searches DB based off of the difficulty input ONLY
    $('#difficulty').change(function() { 
        // console.log( "the single search difficulty is selected");
        // only difficulty search result will show
        var difficultyid = $("#difficulty").val().trim();
        // console.log("difficulty id is ", difficultyid);
        $.post("/api/boardGames/difficulty/" + difficultyid, function(data) {
            // console.log ("only difficulty id data", data);
            var gamesArray = [];
            var nameArray = [];
            for ( var i = 0; i < data.length; i++) {
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGamesIndividual(gamesArray, "DIFFICULTY LEVEL", difficultyid);
        })
    });

    // Searches DB based off of the number of players input ONLY
    $('#num-players').change(function() { 
        // console.log( "the single search num-players is selected");
        // only number of players search result will show
        var numPlayersid = $("#num-players").val().trim();
        // console.log("num-players id is ",numPlayersid);
        $.post("/api/boardGames/numPlayers/" + numPlayersid, function(data) {
            console.log ("only num-players id data", data);
            var gamesArray = [];
            var nameArray = [];
            for ( var i = 0; i < data.length; i++) {
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGames(gamesArray, "NUMBER OF PLAYERS", numPlayersid);
        })
    });

    // Searches DB based off of the time to play input ONLY
    $('#time-play').change(function() { 
        // console.log( "the single search time-play is selected");
        //only age search result will show
        var timePlayid = $("#time-play").val().trim();
        // console.log("time-play id is ", timePlayid);
        $.post("/api/boardGames/timePlay/" + timePlayid,function(data) {
            // console.log ("only time-play id data", data);
            var gamesArray = [];
            var nameArray = [];
            for ( var i = 0; i < data.length; i++) {
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGames(gamesArray, "PLAY TIME (in minutes)", timePlayid);
        })
    });


    // Searches DB using all search parameters
    $("#submit-btn").on("click", function(event) {
        // event.preventDefault();
        // console.log("clicked");

        var newGameSearch = {
            category: $("#category").val().trim(),
            age: $("#age").val().trim(),
            difficulty: $("#difficulty").val().trim(),
            numPlayers: $("#num-players").val().trim(),
            timeToPlay: $("#time-play").val().trim()
        }
        // console.log(newGameSearch);

        $.post("/api/new", newGameSearch).then(function(data) {
            // console.log("my new url", data);
            // $('.game-area').empty();
            // if (indexOf(data) > -1 )
            var gamesArray = [];
            var nameArray = [];
            var filterCategory = "ALL CATEGORIES";
            var selectedFilter = "ALL SELECTIONS";
            for ( var i = 0; i < data.length; i++) {
                if (nameArray.indexOf(data[i].gameName) == -1) {
                    nameArray.push(data[i].gameName);
                    gamesArray.push(data[i]);
                }
            }
            renderGames(gamesArray, filterCategory, selectedFilter);
        });
    }); 
});
// });
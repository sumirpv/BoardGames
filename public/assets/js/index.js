$(document).ready(function() {

    // Displays game ratings from the DB
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
        $("#game-name").val("");
    });

    // Search DB by Game Name
    $("#submit-name-btn").on("click", function(event) {
        // event.preventDefault();
        var nameToSearch = $("#game-name").val().trim();
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

    function renderGames(data, filterCategory, selectedFilter) {
        $(".game-area").children().text("");
        if (data.length < 1) {
            $("#no-games-found-modal").modal("show");
        }
        else {
            var chosenGame = $("<div>");
            chosenGame.append("<div class='row display-flex'>" + "</div>");
            chosenGame.append("<h2 class='text-center'>Current search results are being filtered by: <br>" + filterCategory + " > " + selectedFilter);

            for (var i = 0; i < data.length; i++) {
                var dynamic="";
                for (var j =0; j<data[i].rating; j++){  
                    dynamic+="<img src='"+ 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/star-full-icon.png'+"'/>";
                };
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
                "<div>"+ "<b>Rating :</b> " + dynamic +"</div>" +
                "</div></div></div>");

                $(".game-area").append(chosenGame);
            }
        }
    }

    // Close modal animation
    $("#modal-close-btn").on("click", function(event) {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });

    // Clear button animation
    $("#reset-btn").on("click", function(event) {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })

    function show_image (number) {
        var x = number;
        for (var i =0; i<x; i++){
            var img = document.createElement("img");
            img.height="30px";
            
            img.src = "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/star-full-icon.png";
            $(".game-area").append(img);
        }
    }

    // Function that renders games using the boardGames, categories, and age models
    function renderGamesIndividual(data, filterCategory, selectedFilter) {
        $(".game-area").children().text("");

        if (data.length < 1) {
            // alert("There is no games in your search parameters");
            $("#no-games-found-modal").modal("show");
        }
        else {        
            
            var chosenGame = $("<div>");
            chosenGame.append("<div class='row'>" + "</div>");
            chosenGame.append("<h2 class='text-center'>Current search results are being filtered by: <br>" + filterCategory + " > " + selectedFilter);

            for (var i = 0; i < data.length; i++) {
                var dynamic="";
                for (var j =0; j<data[i].rating; j++){  
                    dynamic+="<img src='"+ 'http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/512/star-full-icon.png'+"'/>";
                    };
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
                "<div>"+ "<b>Rating :</b> " + dynamic +"</div>" +
                "</div></div></div>");

                $(".game-area").append(chosenGame);
            }
        }
    }

    // Searches DB based off of the category input ONLY
    // $('#category').change(function() { 
    //     // console.log( "this is selected");
    //     // only category search result will show
    //     var categoryid = $("#category").val().trim();
    //     // console.log("category id is ", categoryid);
    //     $.post("/api/boardGames/category/" + categoryid, function(data) {
    //         // console.log ("only category id data", data);
    //         var gamesArray = [];
    //         var nameArray = [];
    //         for ( var i = 0; i < data.length; i++) {
    //             if (nameArray.indexOf(data[i].gameName) == -1) {
    //                 nameArray.push(data[i].gameName);
    //                 gamesArray.push(data[i]);
    //             }
    //         }
    //         renderGamesIndividual(gamesArray, "CATEGORY", categoryid);
    //     })
    // });

    // Searches DB based off of the age input ONLY
    // $('#age').change(function() { 
    //     // console.log( "the single search age is selected");
    //     // only age search result will show
    //     var ageid = $("#age").val().trim();
    //     // console.log("age id is ", ageid);
    //     $.post("/api/boardGames/age/" + ageid, function(data) {
    //         // console.log ("only age id data",data);
    //         var gamesArray = [];
    //         var nameArray = [];
    //         for ( var i = 0; i < data.length; i++) {
    //             if (nameArray.indexOf(data[i].gameName) == -1) {
    //                 nameArray.push(data[i].gameName);
    //                 gamesArray.push(data[i]);
    //             }
    //         }
    //         renderGamesIndividual(gamesArray, "AGE GROUP", ageid);
    //     })
    // });

    // Searches DB based off of the difficulty input ONLY
    // $('#difficulty').change(function() { 
    //     // console.log( "the single search difficulty is selected");
    //     // only difficulty search result will show
    //     var difficultyid = $("#difficulty").val().trim();
    //     // console.log("difficulty id is ", difficultyid);
    //     $.post("/api/boardGames/difficulty/" + difficultyid, function(data) {
    //         // console.log ("only difficulty id data", data);
    //         var gamesArray = [];
    //         var nameArray = [];
    //         for ( var i = 0; i < data.length; i++) {
    //             if (nameArray.indexOf(data[i].gameName) == -1) {
    //                 nameArray.push(data[i].gameName);
    //                 gamesArray.push(data[i]);
    //             }
    //         }
    //         renderGamesIndividual(gamesArray, "DIFFICULTY LEVEL", difficultyid);
    //     })
    // });

    // Searches DB based off of the number of players input ONLY
    // $('#num-players').change(function() { 
    //     // console.log( "the single search num-players is selected");
    //     // only number of players search result will show
        // var numPlayersid = $("#num-players").val().trim();
        // // console.log("num-players id is ",numPlayersid);
        // $.post("/api/boardGames/numPlayers/" + numPlayersid, function(data) {
        //     console.log ("only num-players id data", data);
        //     var gamesArray = [];
        //     var nameArray = [];
        //     for ( var i = 0; i < data.length; i++) {
        //         if (nameArray.indexOf(data[i].gameName) == -1) {
        //             nameArray.push(data[i].gameName);
        //             gamesArray.push(data[i]);
        //         }
        //     }
        //     renderGames(gamesArray, "NUMBER OF PLAYERS", numPlayersid);
        // })
    // });

    // Searches DB based off of the time to play input ONLY
    // $('#time-play').change(function() { 
    //     // console.log( "the single search time-play is selected");
    //     //only age search result will show
        // var timePlayid = $("#time-play").val().trim();
        // // console.log("time-play id is ", timePlayid);
        // $.post("/api/boardGames/timePlay/" + timePlayid,function(data) {
        //     // console.log ("only time-play id data", data);
        //     var gamesArray = [];
        //     var nameArray = [];
        //     for ( var i = 0; i < data.length; i++) {
        //         if (nameArray.indexOf(data[i].gameName) == -1) {
        //             nameArray.push(data[i].gameName);
        //             gamesArray.push(data[i]);
        //         }
        //     }
        //     renderGames(gamesArray, "PLAY TIME (in minutes)", timePlayid);
        // })
    // });


    // Searches DB using all search parameters
    $("#submit-btn").on("click", function(event) {


        // var categoryid = $("#category").val().trim();
        // var ageid = $("#age").val().trim();
        // var difficultyid = $("#difficulty").val().trim();
        // var numPlayersid = $("#num-players").val().trim();
        // var timePlayid = $("#time-play").val().trim();
        
        if($("#category").val() != null &&
        $("#age").val() === null &&
        $("#difficulty").val() === null &&
        $("#num-players").val() === null &&
        $("#time-play").val() === null 
            ){
           var categoryid = $("#category").val().trim();

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
        } 
        else if( 
            $("#category").val() === null &&
            $("#age").val() != null &&
        $("#difficulty").val() === null &&
        $("#num-players").val() === null &&
        $("#time-play").val() === null
         ){
        var ageid = $("#age").val().trim();
        $.post("/api/boardGames/age/" + ageid, function(data) {
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
        } else if(
            $("#category").val() === null &&
            $("#age").val() === null &&
            $("#difficulty").val() != null &&
        $("#num-players").val() === null &&
        $("#time-play").val() === null
        ){
            var difficultyid = $("#difficulty").val().trim();
            console.log("difficulty id is ", difficultyid);
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
        } else if(
            $("#category").val() === null &&
            $("#age").val() === null &&
            $("#difficulty").val() === null &&
            $("#num-players").val() != null &&
            $("#time-play").val() === null
        ){
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
        } else if(
            $("#category").val() === null &&
            $("#age").val() === null &&
            $("#difficulty").val() === null &&
            $("#num-players").val() === null &&
            $("#time-play").val() != null    
        ){
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
        }else{
            var newGameSearch = {
                category: $("#category").val().trim(),
                age: $("#age").val().trim(),
                difficulty: $("#difficulty").val().trim(),
                numPlayers: $("#num-players").val().trim(),
                timeToPlay: $("#time-play").val().trim()
            }
        $.post("/api/new", newGameSearch).then(function(data) {
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
        }
        $("#category").val("");
        $("#age").val("");
        $("#difficulty").val("");
        $("#num-players").val("");
        $("#time-play").val("");
    }); 
});
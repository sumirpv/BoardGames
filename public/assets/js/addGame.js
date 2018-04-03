$(document).ready(function() {

    var createGameForm = $("#create-game");
    // Adding an event listener for when the form is submitted
    $(createGameForm).on("submit", handleFormSubmit);



    // IS THIS COMMENTED INFO BELOW NEEDED?
    ////////////////////////////////////////////////////////////////////////////////////////////
    // var url = window.location.search;
    // var postId;
    // var authorId;
    // // Sets a flag for whether or not we're updating a post to be false initially
    // var updating = false;

    // If we have this section in our url, we pull out the post id from the url
    // In '?post_id=1', postId is 1
    // if (url.indexOf("?post_id=") !== -1) {
    //     postId = url.split("=")[1];
    //     getPostData(postId, "post");
    // }
    // // Otherwise if we have an author_id in our url, preset the author select box to be our Author
    // else if (url.indexOf("?author_id=") !== -1) {
    //     authorId = url.split("=")[1];
    // }
    ////////////////////////////////////////////////////////////////////////////////////////////

    // Function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();


        var nameInput = $("#game-name").val().trim();
        var categoryInput = $("#category").val();
        var ageGroup = $("#age").val();
        var difficultyLevel = $("#difficulty").val();
        var minimumPlayer = $("#min-player").val().trim();
        var maximumPlayer = $("#max-player").val().trim();
        var gameTime = $("#time-play").val();
        var manufacturerName = $("#manufacturer").val().trim();
        var releaseYear = $("#year").val().trim();
        var imageUrl = $("#img-url").val().trim();
        
        console.log("Game Name:  " + nameInput);
        console.log("Category: " + categoryInput);
        console.log("Age Group: " + ageGroup);
        console.log("Difficulty: " + difficultyLevel);
        console.log("Min. Players: " + minimumPlayer);
        console.log("Max Players: " + maximumPlayer);
        console.log("Time Length: " + gameTime);
        console.log("Manufacturer: " + manufacturerName);
        console.log("Released: " + releaseYear);
        console.log("Image URL: " + imageUrl);

        // Wont submit the post if we are missing a anything is left blank
        // if (
        //     !nameInput.val().trim() || 
        //     !categoryInput.val() || 
        //     !ageGroup.val() || 
        //     !difficultyLevel.val() || 
        //     !minimumPlayer.val().trim() || 
        //     !maximumPlayer.val().trim() || 
        //     !gameTime.val() || 
        //     !manufacturerName.val().trim() || 
        //     !releaseYear.val().trim() || 
        //     !imageUrl.val().trim()
        // ) {
        //     return;
        // }
        // Constructing a newGame object to hand to the database
        // var newGame = {
        //     gameName : nameInput
        //         .val()
        //         .trim(),
        //     category : categoryInput
        //         .val(),
        //         // .trim(),
        //     age_range : ageGroup
        //         .val(),
        //         // .trim(),
        //     difficulty : difficultyLevel
        //         .val(),
        //         // .trim(),
        //     minPlayer : minimumPlayer
        //         .val()
        //         .trim(),
        //     maxPlayer : maximumPlayer
        //         .val()
        //         .trim(),
        //     timeToPlay : gameTime
        //         .val(),
        //         // .trim(),
        //     manufacturer : manufacturerName
        //         .val()
        //         .trim(),
        //     year : releaseYear
        //         .val()
        //         .trim(),
        //     img : imageUrl
        //         .val()
        //         .trim(),
        // }

        // submitGame(newGame);
    }

    // Submits a new post and brings user to home page upon completion
    function submitGame(game) {
        $.post("/api/boardGames", game, function() {
            alert("Added game successfully to database");
            window.location.href = "/";
        });
    }


})
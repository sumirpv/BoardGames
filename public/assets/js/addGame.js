$(document).ready(function() {

   

    var createGameForm = $("#create-game");


   
    // Adding an event listener for when the form is submitted
    $(createGameForm).on("submit", handleFormSubmit);


   
    // Function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();

        var nameInput = $("#add-game-name").val().trim();
        var categoryInput = $("#add-game-category").val();
        var ageGroup = $("#add-game-age").val();
        var difficultyLevel = $("#add-game-difficulty").val();
        var minimumPlayer = $("#min-player").val().trim();
        var maximumPlayer = $("#max-player").val().trim();
        var gameTime = $("#add-game-time-play").val();
        var manufacturerName = $("#manufacturer").val().trim();
        var releaseYear = $("#year").val().trim();
        var imageUrl = $("#img-url").val().trim();

        // Wont submit the post if we are missing a anything is left blank
        if (
            !nameInput || 
            !categoryInput || 
            !ageGroup || 
            !difficultyLevel || 
            !minimumPlayer || 
            !maximumPlayer || 
            !gameTime || 
            !manufacturerName || 
            !releaseYear || 
            !imageUrl
        ) {
            alert("In order to add a game, all fields must be completed.");
            return;
        }
        // Constructing a newGame object to hand to the database
        var newGame = {
            gameName: nameInput,
            category_id: categoryInput,
            age_id: ageGroup,
            difficulty: difficultyLevel,
            minPlayer: minimumPlayer,
            maxPlayer: maximumPlayer,
            timeToPlay: gameTime,
            manufacturer: manufacturerName,
            year: releaseYear,
            img: imageUrl,
        }
        submitGame(newGame);
    }

    // Submits a new post and brings user to home page upon completion
    function submitGame(game) {
        alert(" its workinh");
        console.log("yeah working adding");
        $.post("/api/boardGamesSubmit", game, function() {
            alert("Added game successfully to database");
            location.reload();
        });
    }

})
INSERT INTO category (name)
VALUES ("Family"), ("Kids"), ("Adults"), ("Party"), ("Card Game"), ("Dice"), ("Educational"), ("Memory Game"), ("Word Game"), ("Dexterity"), ("Humor"), ("Math"), ("Military"), ("Strategy"), ("Puzzle"), ("Miniatures");

/*
1	Family
2	Kids
3	Adults
4	Party
5	Card Game
6	Dice
7	Educational
8	Memory Game
9	Word Game
10	Dexterity
11	Humor
12	Math
13	Military
14	Strategy
15	Puzzle
16	Miniatures
*/

INSERT INTO age_range (range)
VALUES ("Less than 8 years old"), ("8 - 13 years old"), ("13 Years and Up"), ("Adult Games Only");

/*
1	Less than 8 years old
2	8 - 13 years old
3	13 Years and Up
4	Adult Games Only
*/

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Candy Land", 1, 1, "Simple", 2, 4, 30, "Hasbro", 1949, "https://cdn.shopify.com/s/files/1/1911/5793/products/Candy-Land-Content_1024x1024.jpg?v=1512062059");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Candy Land", 2, 1, "Simple", 2, 4, 30, "Hasbro", 1949,  "https://cdn.shopify.com/s/files/1/1911/5793/products/Candy-Land-Content_1024x1024.jpg?v=1512062059");


INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Monopoly", 1, 2, "Intermediate", 2, 8, 180, "Hasbro", 1935,"https://upload.wikimedia.org/wikipedia/commons/d/df/German_Monopoly_board_in_the_middle_of_a_game.jpg");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Monopoly", 1, 3, "Intermediate", 2, 8, 180, "Hasbro", 1935,"https://upload.wikimedia.org/wikipedia/commons/d/df/German_Monopoly_board_in_the_middle_of_a_game.jpg");


INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Scrabble", 1, 2, "Intermediate", 2, 4, 90, "Hasbro", 1938, "https://upload.wikimedia.org/wikipedia/commons/5/5d/Scrabble_game_in_progress.jpg");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Scrabble", 9, 3, "Intermediate", 2, 4, 90, "Hasbro", 1938, "https://upload.wikimedia.org/wikipedia/commons/5/5d/Scrabble_game_in_progress.jpg");


INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Twister", 1, 1, "Simple", 2, 4, 10, "Hasbro", 1966, "https://cdn.shopify.com/s/files/1/1911/5793/products/HG98831lg_1024x1024.jpg?v=1506010693");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Twister", 2, 2, "Simple", 2, 4, 10, "Hasbro", 1966,  "https://cdn.shopify.com/s/files/1/1911/5793/products/HG98831lg_1024x1024.jpg?v=1506010693");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Twister", 10, 3, "Simple", 2, 4, 10, "Hasbro", 1966,  "https://cdn.shopify.com/s/files/1/1911/5793/products/HG98831lg_1024x1024.jpg?v=1506010693");

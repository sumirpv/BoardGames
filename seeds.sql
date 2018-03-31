/* category options for games:

family
kids
adults
party
card game
dice
educational
memory_game
word_game
dexterity
humor
math
military
strategy
puzzle
miniatures */


/* options for age ranges:

Less than 8 years old
8 - 13 years old
13 Years and Up
Adult Games Only

*/

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Candy Land", 1, 1, "Simple", 2, 4, 30, "Hasbro", 1949, "https://cdn.shopify.com/s/files/1/1911/5793/products/Candy-Land-Content_1024x1024.jpg?v=1512062059");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Candy Land", 2, 1, "Simple", 2, 4, 30, "Hasbro", 1949,  "https://cdn.shopify.com/s/files/1/1911/5793/products/Candy-Land-Content_1024x1024.jpg?v=1512062059");

INSERT INTO category (name)
VALUES ("Family");

INSERT INTO category (name)
VALUES ("Kids");

INSERT INTO age_range (range)
VALUES ("Less than 8 years old");


INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Monopoly", 1, 1, "Intermediate", 2, 8, 180, "Hasbro", 1935,"https://upload.wikimedia.org/wikipedia/commons/d/df/German_Monopoly_board_in_the_middle_of_a_game.jpg");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Monopoly", 1, 2, "Intermediate", 2, 8, 180, "Hasbro", 1935,"https://upload.wikimedia.org/wikipedia/commons/d/df/German_Monopoly_board_in_the_middle_of_a_game.jpg");

INSERT INTO category (name)
VALUES ("Family");

INSERT INTO age_range (range)
VALUES ("8 - 13 years old");

INSERT INTO age_range (range)
VALUES ("13 Years and Up");


INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Scrabble", 1, 1, "Intermediate", 2, 4, 90, "Hasbro", 1938, "https://upload.wikimedia.org/wikipedia/commons/5/5d/Scrabble_game_in_progress.jpg");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Scrabble", 2, 2, "Intermediate", 2, 4, 90, "Hasbro", 1938, "https://upload.wikimedia.org/wikipedia/commons/5/5d/Scrabble_game_in_progress.jpg");

INSERT INTO category (name)
VALUES ("Family");

INSERT INTO category (name)
VALUES ("Word Game");

INSERT INTO age_range (range)
VALUES ("8 - 13 years old");

INSERT INTO age_range (range)
VALUES ("13 years and up");


INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Twister", 1, 1, "Simple", 2, 4, 10, "Hasbro", 1966, "https://cdn.shopify.com/s/files/1/1911/5793/products/HG98831lg_1024x1024.jpg?v=1506010693");

INSERT INTO boardGames (gameName, category_id, age_id, difficulty, minPlayer, maxPlayer, timeToPlay, manufacturer, year, img) 
VALUES ("Twister", 2, 2, "Simple", 2, 4, 10, "Hasbro", 1966,  "https://cdn.shopify.com/s/files/1/1911/5793/products/HG98831lg_1024x1024.jpg?v=1506010693");

INSERT INTO category (name)
VALUES ("Party");

INSERT INTO category (name)
VALUES ("Dexterity");

INSERT INTO age_range (range)
VALUES ("8 - 13 years old");


INSERT INTO age_range (range)
VALUES ("13 Years and Up");


-- //testing

select * from boardGames;

select * from ages;
select * from categorys;

INSERT INTO categorys (name)
VALUES ("Family"), ("Kids"), ("Adults"), ("Party"), ("Card Game"), ("Dice"), ("Educational"), ("Memory Game"), ("Word Game"), ("Dexterity"), ("Humor"), ("Math"), ("Military"), ("Strategy"), ("Puzzle"), ("Miniatures");

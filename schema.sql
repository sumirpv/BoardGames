DROP DATABASE IF EXISTS game_db;

CREATE DATABASE game_db;

USE game_db;

-- DESCRIBE boardGames;

-- SELECT * FROM boardGames;


-- select * from boardGames;

-- select * from ages;
-- select * from categorys;


-- Select * from boardGames
-- join categories on boardGames.category_id = categories.id where categories.id=1 ;

-- Select b.gameName,c.name,b.difficulty from boardGames as b
-- join categories as c on b.category_id = c.id where c.id=1 ;


-- Select b.gameName,b.difficulty ,a.age_range,b.age_id from boardGames as b
-- inner join ages as a on b.age_id = a.id where a.id=2


-- Select b.gameName,c.name,b.difficulty ,b.age_id,a.age_range 
-- from boardGames as b
-- inner join categories as c  
-- 			on b.category_id = c.id 
-- inner join ages as a 
-- 			on b.age_id = a.id where c.id=1 and  a.id=2


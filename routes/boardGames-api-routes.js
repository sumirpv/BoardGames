var db = require("../models");

module.exports = function(app) {
    app.get("/api/boardGames", function(req, res) {
        db.boardGames.findAll({
           // include:[db.Category]
        }).then(function(data) {
            res.json(data);
        });
    });


    app.post("/api/new", function(req, res) {
        console.log("my category",req.body.category);
        console.log("age range ",req.body.age);
        console.log("difficulty ",req.body.difficulty);
        console.log("numPlayers  ", req.body.numPlayers);


        db.boardGames.findAll({
            include:[
                {
                    model : db.category,
                    where: {
                        name: req.body.category
                    }
                },
                {
                    model : db.age,
                    where: {
                        age_range: req.body.age
                    }
                }
            ],
                where:{
                    difficulty : req.body.difficulty,
                    minPlayer :{
                        $gte :  req.body.numPlayers 
                    }
                    ,
                    maxPlayer:{
                        $lte : req.body.numPlayers
                    }
                }

        }).then(function(result) {
            console.log(result);

            res.json(result);
        }).catch(function(error){
            console.log("my error is ",error);
            res.end();
        })
    })
    
};
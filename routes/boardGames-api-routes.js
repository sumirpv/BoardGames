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
        console.log("da",req.body.category)
        db.boardGames.findAll({
            include:[
                {
                    model : db.category,
                    where: {
                        name: req.body.category
                    }
                }
            ]

        }).then(function(result) {
            console.log(result)
            res.json(result);
        }).catch(function(error){
            console.log("my error is ",error);
            res.end();
        })
    })
    
};
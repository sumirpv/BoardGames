var db = require("../models");

module.exports = function(app) {
    app.get("/api/boardGames", function(req, res) {
        db.boardGames.findAll({}).then(function(data) {
            res.json(data);
        });
    });


    app.post("/api/new", function(req, res) {
        db.boardGames.findAll({
            where: {
                category_id: req.body.category
            }
        }).then(function(result) {
            console.log(result)
            res.json(result);
        })
    })
    
};
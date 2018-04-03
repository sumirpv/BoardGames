var db = require("../models");

module.exports = function(app) {
    // GET route for getting all of the games
    app.get("/api/boardGames", function(req, res) {
        db.boardGames.findAll({
           // include:[db.Category]
        }).then(function(data) {
            res.json(data);
        });
    });

    // POST route for retrieving a single game
    app.get("/api/boardGames/:gameName", function(req, res) {
        db.boardGames.findAll({
            where : {
                gameName : req.params.gameName
            },
            // include : [db.]
        }).then(function(dbBoardGames) {
            res.json(dbBoardGames);
        });
    });

    // POST route for saving a new game
    // app.post("/api/boardGames", function(req, res) {
    //     console.log(req.body);
    //     db.boardGames.create({
    //         gameName : req.body.gameName,
    //         // category_id : req.body,
    //     })

    // })

    
    app.post("/api/new", function(req, res) {
        
        console.log("my category",req.body.category);
        console.log("age range ",req.body.age);
        console.log("difficulty ",req.body.difficulty);
        // console.log("numPlayers  ", req.body.numPlayers);
        console.log("gameplay length: " + req.body.timeToPlay);

        // var q =connection.query("Select b.gameName,c.name,b.difficulty ,b.age_id,a.age_range 
        // from db.boardGames as b
        // inner join categories as c  
        //             on b.category_id = c.id 
        // inner join ages as a 
        //             on b.age_id = a.id where c.id=1 and  a.id=2 ", function(err, result) {
        //             });
        // sequelize.query("UPDATE package_values pk INNER JOIN packages p ON pk.package_id = p.id SET pk.value = true WHERE pk.feature_id = 2 AND (p.based_on = 2 OR pk.package_id = 2)",
        // { type: sequelizeLogista.QueryTypes.UPDATE }).then(()=>{
        //    console.log("done")
        // });

        //console.log("datatee",db);
        db.sequelize.query("select * from boardGames as b inner join categories as c on b.category_id = c.id inner join ages as a on b.age_id = a.id where c.name = ? and age_range = ? and difficulty = ? and "+req.body.numPlayers+ " between minPlayer and maxPlayer ", { replacements: [req.body.category ,req.body.age ,req.body.difficulty], type: db.sequelize.QueryTypes.SELECT }).then(function(result){
            console.log("working", result);

            res.json(result);
        // db.boardGames.findAll({
        //     include:[
        //         {
        //             model : db.category,
        //             where: {
        //                 name: req.body.category
        //             }
        //         },
        //         {
        //             model : db.age,
        //             where: {
        //                 age_range: req.body.age
        //             }
        //         }
        //     ],
        //         where:{
        //             difficulty : req.body.difficulty,
        //             // minPlayer :{
        //             //     $gte :  req.body.numPlayers 
        //             // }
        //             // ,
        //             // maxPlayer:{
        //             //     $lte : req.body.numPlayers
        //             // }
                    
        //             // timeToPlay : {
        //             //     $lte: req.body.timeToPlay
        //             // }
                    
        //         }

        // })
     

        }).catch(function(error){
            console.log("my error is ",error);
            res.end();
        })
    })
    
};
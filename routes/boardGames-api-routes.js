// Dependencies
// =============================================================
var db = require("../models");


// Routes
// =============================================================
module.exports = function(app) {

    // GET route for getting all of the games
    app.get("/api/boardGames", function(req, res) {
        db.boardGames.findAll({
           // include:[db.Category]
        }).then(function(data) {
            res.json(data);
        });
    });

    // GET route for retrieving a single game
    app.get("/api/boardGames/:gameName", function(req, res) {
        db.boardGames.findAll({
            include : [
                {
                    model : db.category
                },
                {
                    model : db.age
                }
            ],
            where : {
                gameName : req.params.gameName
            },
            // include : [db.]
        }).then(function(dbBoardGames) {
            res.json(dbBoardGames);
        });
    });





    // POST route for saving a new game
    app.post("/api/boardGamesSubmit", function(req, res) {
        // console.log("req.body: " + req.body);
        console.log("req.body.category_id: " + req.body.category_id);
        console.log("req.body.age_id: " + req.body.age_id);
        db.boardGames.create(req.body).then(function(dbBoardGames) {
            res.json(dbBoardGames);
        });
    });

    // get route for category only search
    app.post("/api/boardGames/category/:categoryid", function(req,res){
        console.log(" new cate id",req.params.categoryid);
        if( req.params.categoryid){
        db.boardGames.findAll({
                include:[
                    {
                        model : db.category,
                        where: {
                            name: req.params.categoryid
                        }
                    },
                    {
                        model : db.age
                    }
                ] 
        }).then(function(result) {
           // console.log("category search ",result);
            res.json(result);
        });
    }
    })

        // get route for age range only search
        app.post("/api/boardGames/age/:ageid", function(req,res){
            console.log(" new age id",req.params.ageid);
            if( req.params.ageid){
            db.boardGames.findAll({
                    include:[
                        {
                            model : db.category
                        },
                        {
                            model : db.age,
                            where: {
                                age_range: req.params.ageid
                            }
                        }
                    ] 
            }).then(function(result) {
                console.log("age search ",result);
                res.json(result);
            });
        }
        })


        // get route for difficulty only search
        app.post("/api/boardGames/difficulty/:difficultyid", function(req,res){
            console.log(" new difficulty id",req.params.difficultyid);
            if( req.params.difficultyid){
            db.boardGames.findAll({
                    include:[
                        {
                            model : db.category
                        },
                        {
                            model : db.age
                        }
                    ],
                    where: {
                        difficulty: req.params.difficultyid
                    } 
            }).then(function(result) {
                console.log("age search ",result);
                res.json(result);
            });
        }
        })


        // get route for num-players only search
        app.post("/api/boardGames/numPlayers/:numPlayersid", function(req,res){
            console.log(" new num-players id",req.params.numPlayersid);
            if( req.params.numPlayersid){
                db.sequelize.query("select * from boardGames as b inner join categories as c on b.category_id = c.id inner join ages as a on b.age_id = a.id where  "+req.params.numPlayersid+ " between minPlayer and maxPlayer ", {  type: db.sequelize.QueryTypes.SELECT })
             .then(function(result) {
                console.log("age search ",result);
                res.json(result);
            });
        }
        });

        // get route for timePlayid only search
        app.post("/api/boardGames/timePlay/:timePlayid", function(req,res){
            console.log(" new play time id",req.params.timePlayid);
            if( req.params.timePlayid){
                db.sequelize.query("select * from boardGames as b inner join categories as c on b.category_id = c.id inner join ages as a on b.age_id = a.id where timeToPlay ='"+ req.params.timePlayid+"'", {  type: db.sequelize.QueryTypes.SELECT })
                .then(function(result) {
                console.log("time to play  ",result);
                res.json(result);
            });
        }
        })

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
        db.sequelize.query("select * from boardGames as b inner join categories as c on b.category_id = c.id inner join ages as a on b.age_id = a.id where c.name = ? and age_range = ? and difficulty = ? and "+req.body.numPlayers+ " between minPlayer and maxPlayer and timeToPlay = ?", { replacements: [req.body.category ,req.body.age ,req.body.difficulty, req.body.timeToPlay], type: db.sequelize.QueryTypes.SELECT }).then(function(result){
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
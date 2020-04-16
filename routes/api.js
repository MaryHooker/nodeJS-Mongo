//create route
let express = require('express');
let router = express.Router();

//import models
let MovieCollection = require('../models/MovieSchema');
let GameCollection = require('../models/GameSchema');

// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`);
// })

//Create movie
router.post('/movie',(req,res)=>{
    // res.send(`Created movie`);
    MovieCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read movie by title
router.get('/movie/:title',(req,res)=>{
    // res.send(`Read movie by title`);
    MovieCollection.findOne({movieTitle:req.params.title},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update movie by title
router.put('/movie/:title',(req,res)=>{
    // res.send(`Updated movie`);
    MovieCollection.findOneAndUpdate({movieTitle:req.params.title}, req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete movie by title
router.delete('/movie/:title',(req,res)=>{
    // res.send(`Deleted movie`);
    MovieCollection.findOneAndDelete({movieTitle:req.params.title},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all movies
router.get('/movie',(req,res)=>{
    // res.send(`Got all movies`);
    MovieCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//////////////////////////////////////////////////////

//Create game
router.post('/game',(req,res)=>{
    // res.send(`Created game`);
    GameCollection.create(req.body,(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read game by title
router.get('/game/:title',(req,res)=>{
    // res.send(`Read game by title`);
    GameCollection.findOne({gameTitle:req.params.title},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Update game by title
router.put('/game/:title',(req,res)=>{
    // res.send(`Updated game`);
    GameCollection.findOneAndUpdate({gameTitle:req.params.title}, req.body, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Delete game by title
router.delete('/game/:title',(req,res)=>{
    // res.send(`Deleted game`);
    GameCollection.findOneAndDelete({gameTitle:req.params.title},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//Read all games
router.get('/game',(req,res)=>{
    // res.send(`Got all games`);
    GameCollection.find({},(errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    })
})

//export route
module.exports = router;
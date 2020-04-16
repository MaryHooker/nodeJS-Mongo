//create route
let express = require('express');
let router = express.Router();

// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`);
// })

//Create movie
router.post('/movie',(req,res)=>{
    res.send(`Created movie`);
})

//Read movie by title
router.get('/movie/:title',(req,res)=>{
    res.send(`Read movie by title`);
})

//Update movie by title
router.put('/movie/:title',(req,res)=>{
    res.send(`Updated movie`);
})

//Delete movie by title
router.delete('/movie/:title',(req,res)=>{
    res.send(`Deleted movie`);
})

//Read all movies
router.get('/movie',(req,res)=>{
    res.send(`Got all movies`);
})

//////////////////////////////////////////////////////

//Create game
router.post('/game',(req,res)=>{
    res.send(`Created game`);
})

//Read game by title
router.get('/game/:title',(req,res)=>{
    res.send(`Read game by title`);
})

//Update game by title
router.put('/game/:title',(req,res)=>{
    res.send(`Updated game`);
})

//Delete game by title
router.delete('/game/:title',(req,res)=>{
    res.send(`Deleted game`);
})

//Read all games
router.get('/game',(req,res)=>{
    res.send(`Got all games`);
})

//export route
module.exports = router;
//entry point
let express = require('express');
let app = express();
let portNumber=2112;

//import and mount route
let api = require('./routes/api');
app.use('/api',api);

//listen on port 2112
app.listen(portNumber,()=>{
    console.log(`Listening on port ${portNumber}`);
})

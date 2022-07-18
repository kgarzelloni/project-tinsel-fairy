// express server 
const express = require('express');
const app = express();
const cors = require('cors');


// middlewear
app.use(express.json());  //req.body
app.use(cors());


// ROUTES
// register and login routes
app.use("/auth", require('./routes/jwtAuth'));


// port
app.listen(5000, () => {
  console.log('server running on port 5000');
});
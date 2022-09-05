const { app } = require('./app');
require('colors');

//export database
const { db } = require('./utils/database');

// Autenticate Database
db.authenticate()
  .then(() => console.log('Authenticated Database succesfull'.magenta))
  .catch(err => console.log(err));

// Syncronizing Database
db.sync()
  .then(() => console.log('Syncronized Database succesfull'.magenta))
  .catch(err => console.log(err));

//Generating port
const PORT = 4020;

//Uploading Server
app.listen(PORT, () => {
  console.log(`The server on PORT ${PORT} is executing`.cyan);
});

const express = require('express');
const serverConfig = require("./config/server.config.js");
const mongoose = require('mongoose');
const dbConfig = require('./config/db.config.js')


const app = express();


// Logic to connect to MongoDB and create an ADMIN user
// Need to have the mongodb up and running in your local machine

mongoose.connect(dbConfig.DB_URL);
const db = mongoose.connection ;

db.on("error", ()=>{
    console.log("Error while connecting to DB")
});

db.once("open", () => {
    console.log("DB is connected");
})

app.listen(serverConfig.PORT, () => {
    console.log(`server started on the port number ${serverConfig.PORT}`);
})





// const express = require('express');
// const mongoose = require('mongoose');

// const serverConfig = require('./config/server.config');
// const dbConfig = require('./config/db.config');

// const app = express();


// mongoose.connect(dbConfig.DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// })
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });


// const db = mongoose.connection;
// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });
// db.once('open', () => {
//   console.log('MongoDB connection established');
// });

// app.listen(serverConfig.PORT, () => {
//   console.log(`Server started on port ${serverConfig.PORT}`);
// });





// const express = require('express');
// const mongoose = require('mongoose');
// const serverConfig = require('./config/server.config');
// const dbConfig = require('./config/db.config');
// const app = express();

// mongoose.connect(dbConfig.DB_URL, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to the database');
//   })
//   .catch((error) => {
//     console.error('Error connecting to the database:', error);
//   });

// const db = mongoose.connection;
// db.on('error', (error) => {
//   console.error('MongoDB connection error:', error);
// });
// db.once('open', () => {
//   console.log('MongoDB connection established');
// });

// app.listen(serverConfig.PORT, () => {
//   console.log(`Server started on port ${serverConfig.PORT}`);
// });
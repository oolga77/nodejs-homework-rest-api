const mongoose = require("mongoose");

const app = require('./app')

const DB_HOST = "mongodb+srv://Olga:sXGU57yrJUgx0yXM@cluster0.n2quavc.mongodb.net/db-contacts";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3001, () => {
    console.log("Server running. Use our API on port: 3001")
})
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);  
  })






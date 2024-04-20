
const mongoose = require('mongoose')
require("dotenv").config();
let mongoURI = process.env.DATABASEURL;

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose
  .connect("mongodb+srv://afrozzeelani:Zeelani123@cluster0.rvkkcii.mongodb.net/kasperinfotech")
  .then(() => console.log("db connection successful"))
  .catch(err => console.log(err));

  const connection = mongoose.createConnection(mongoURI);

  module.exports = connection
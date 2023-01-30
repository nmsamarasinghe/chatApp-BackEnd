const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://madu:madu1234@ac-h8bec9j-shard-00-00.wmag5wi.mongodb.net:27017,ac-h8bec9j-shard-00-01.wmag5wi.mongodb.net:27017,ac-h8bec9j-shard-00-02.wmag5wi.mongodb.net:27017/?ssl=true&replicaSet=atlas-zmoem6-shard-0&authSource=admin&retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;

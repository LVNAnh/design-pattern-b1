const mongoose = require("mongoose");

class Database {
  constructor() {
    if (!Database.instance) {
      this.connection = null;
      Database.instance = this;
    }
    return Database.instance;
  }

  async connect() {
    if (!this.connection) {
      try {
        this.connection = await mongoose.connect(
          "mongodb+srv://NHATANH:WMGaAVaGCtsPnC1k@cluster0.6z5yhqo.mongodb.net/testdb",
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        );

        console.log("Connected to MongoDB");
      } catch (error) {
        console.error("Connect to MongoDB failure:", error.message);
        process.exit(1);
      }
    }
    return this.connection;
  }

  async disconnect() {
    if (this.connection) {
      await mongoose.disconnect();
      console.log("Disconnected from MongoDB");
      this.connection = null;
    }
  }
}

module.exports = new Database();

const mongoose = require("mongoose");
const db_uri = process.env.ATLAS_URI;
mongoose.set("strictQuery", true, "useNewUrlParser", true);

async function connectToDatabase() {
  try {
    await mongoose.connect(db_uri);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

module.exports = {
  connectToDatabase: connectToDatabase,
};

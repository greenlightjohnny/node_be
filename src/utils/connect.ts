import mongoose from "mongoose";
import config from "config";
import logger from "./logger";
require("dotenv").config();

const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  const dbUri2 = process.env.URI || "test";
  try {
    await mongoose.connect(dbUri2);
    logger.info("DB connected yay!");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
  // .then .catch version
  // return mongoose.connect(dbUri).then(() => {
  //   console.log("Connected to DB")
  // }).catch((error) => {
  //   console.error("Could not connect to DB")
  //   process.exit(1)
  // })
};

export default connect;

import mongoose from "mongoose";
import config from "config";
import logger from "./logger";
const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
    await mongoose.connect(dbUri);
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

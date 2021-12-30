import mongoose from "mongoose";
import config from "config";

const connect = async () => {
  const dbUri = config.get<string>("dbUri");
  console.log(dbUri);

  try {
    await mongoose.connect(dbUri);
    console.log("DB connected yay!");
  } catch (error) {
    console.error("Could not connect to DB");
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

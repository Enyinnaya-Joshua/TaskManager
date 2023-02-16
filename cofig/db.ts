import mongoose from "mongoose";

const URI: string = "mongodb://localhost/taskmanger";

mongoose.connect(URI);
mongoose.connection
  .on("open", () => {
    console.log(`Database Connected`);
  })
  .once("error", (error) => {
    console.log(`Failed to Connect to the Database \n ${error}`);
  });

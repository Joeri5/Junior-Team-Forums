import mongoose from "mongoose";

mongoose
  .connect(
    `mongodb+srv://Joeri:${process.env.MONGO_DB_PASSWORD}@cluster0.6d3mt.mongodb.net/junior_team`
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

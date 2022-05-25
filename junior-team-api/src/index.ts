import { config } from "dotenv";
import { CreateApp } from "./utils/createApp";
import "./database";
config();

const PORT = process.env.PORT || 3001;

async function main() {
  console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
  try {
    const app = CreateApp();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

main();

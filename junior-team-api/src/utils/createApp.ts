import { config } from "dotenv";
import express, { Express } from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import routes from "../routes";
import store from "connect-mongo";

config();
require("../strategies/discord");

export function CreateApp(): Express {
  const app = express();
  // Enable Parsing Middleware for Requests
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Enable CORS
  app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

  // Enable Sessions
  app.use(
    session({
      secret: "PMIOFERWJRWPIOFJEWPIOFJWOPIJF",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 60000 * 60 * 24 * 7 },
      store: store.create({
        mongoUrl: `mongodb+srv://Joeri:${process.env.MONGO_DB_PASSWORD}@cluster0.6d3mt.mongodb.net/junior_team`,
      }),
    })
  );

  // Enable Passport
  app.use(passport.initialize());
  app.use(passport.session());

  app.use("/api", routes);
  return app;
}

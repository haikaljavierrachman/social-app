import express from "express";
import { json } from "body-parser";
import routes from "./routes";

const { signupRouters } = routes;

const app = express();

app.use(json());

app.use(signupRouters);
export default app;

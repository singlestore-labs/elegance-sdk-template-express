import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import "dotenv/config";

import { apiRouter } from "./routes";

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(morgan("dev"));
app.use(cors({ origin: ["http:localhost:3000"], credentials: true }));
app.use(helmet());
app.use(cookieParser());
app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});

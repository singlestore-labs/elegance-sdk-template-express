import express from "express";

import { eleganceRouter } from "./elegance";

export const apiRouter = express.Router();

[eleganceRouter].forEach(route => apiRouter.use(route));

import express from "express"
import { publicRouter } from "../route/public-route";
import { errorMiddleware } from "../middleware/error-middleware";
import { apiRouter } from "../route/api-route";

export const app = express()

app.use(express.json());
app.use(publicRouter);
app.use(apiRouter);
app.use(errorMiddleware);
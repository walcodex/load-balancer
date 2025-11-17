import express from "express";
import type { Express, Request, Response } from "express";
import { balancer } from "./balancer.js";

const app: Express = express();

app.use(express.json());

app.use((req: Request, res: Response) => balancer(req, res));

export default app;
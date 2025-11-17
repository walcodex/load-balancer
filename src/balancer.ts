import type { Request, Response } from "express";
import axios from "axios";

const servers: string[] = [`${process.env.SERVER_1}`, `${process.env.SERVER_2}`];

let serverIndex: number = 0;

export const balancer = async (req: Request, res: Response) => {
    try {
        const server: string = `${servers[serverIndex]}`;
        serverIndex = (serverIndex+1) % servers.length;

        const response = await axios({
            method: req.method,
            url: server + req.url,
            headers: req.headers,
            data: req.body
        });

        res.status(response.status).send(response.data);
    } catch (error) {
        res.status(502).send("Bad Gateway");
    }
}
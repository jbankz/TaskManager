import {Request, Response} from "express";

export async function notFound(req: Request, res: Response){
     res.status(404).send("Route not found");
}

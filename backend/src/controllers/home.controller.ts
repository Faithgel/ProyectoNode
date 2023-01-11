import { Request, Response } from "express";

export const sendHello = async (req: Request, res: Response) => {
	res.status(400).send("Hello World");
}

import { Request, response, Response } from "express";
import { Dental } from "../models/dental.entity";
import { User } from "../models/user.entity";
import { Treatment } from "../models/treatment.entity";
import * as pdf from "html-pdf";

export const generateFullReport = async (req: Request, res: Response) => {
    try {
        const dentals = await Dental.find();
        const filename = req.body.filename;
        const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>

        </head>
        <body>`;
        
        res.status(200).json(dentals);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};

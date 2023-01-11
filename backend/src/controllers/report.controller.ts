import { Request, response, Response } from "express";
import { Dental } from "../models/dental.entity";
import { User } from "../models/user.entity";
import { Treatment } from "../models/treatment.entity";

import * as fs from 'fs';


export const generateFullReport = async (req: Request, res: Response) => {
    try {
        const dentals = await Dental.find();
        const filename = req.body.filename;
        
        /*table.setColumnsDefaults({
            headerBorder: "B",
            align: "center",
        })
        .addColumns([
            {
                id: "id",
                header: "ID",
                align: "center",
            },
            {
                id: "name",
                header: "Name",
                align: "center",
            },
            {
                id: "surname",
                header: "Surname",
                align: "center",
            }
        ])
        res.setHeader(
            "Content-Disposition",
            'attachment; filename="' + filename + '" '
        );
        res.setHeader("Content-Type", "application/pdf");
        res.status(200);
        res.sendFile(filename);*/
        res.status(200).json(dentals);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};

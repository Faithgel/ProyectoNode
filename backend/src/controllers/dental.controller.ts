import { Request, Response } from "express";
import { Dental } from "../models/dental.entity";
import { User } from "../models/user.entity";
import { Treatment } from '../models/treatment.entity';

export const createDental = async (req: Request, res: Response) => {
    try {
        const { rut, idTreatment, description, amount, date } = req.body;

        const user = await User.findOneBy({ rut: rut });
        const treatment = await Treatment.findOneBy({ id: idTreatment });

        const dental = Dental.create({ description, amount });
        if (date instanceof Date) {
            dental.date = date;
        } else {
            dental.date = new Date(date);
        }
        if (user && treatment) {
            dental.User = user;
            dental.Treatment = treatment;
            await dental.save();
            console.log(dental);
            res.status(201).json({ message: "Dental created" });
        } else {
            res.status(404).json({ message: "User or treatment not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getDentals = async (req: Request, res: Response) => {
    try {
        const dentals = await Dental.find();
        res.status(200).json(dentals);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Something goes wrong" });
    }
};

export const getSpecificDental = async (req: Request, res: Response) => {
    //Here we get all the data from dental, also the user and the treatments associated to it and store it in a object
    //that we will send to the frontend
    try {
        const id = parseInt(req.params.id);
        const dental = await Dental.findOneBy({ id: id });
        if (dental) {
            const user = await User.findOneBy({ rut: dental?.User.rut });
            const treatments = await Treatment.findOneBy({
                id: dental?.Treatment.id,
            });
            const data = {
                id: dental?.id,
                rut: dental?.User.rut,
                nameUser: user?.name,
                surnameUser: user?.fatherLastname,
                nameTreatment: treatments?.name,
                price: dental?.amount,
                date: dental?.date,
            };
            res.status(200).json(data);
        } else {
            res.status(404).json({ message: "Dental not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).json({ message: "Something goes wrong" });
        } else {
            res.status(500).json({ message: "Something goes wrong" });
        }
    }
};

export const updateDental = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const dental = await Dental.findOneBy({ id: id });
        if (dental) {
            const { rut, idTreatment, description, amount, date } = req.body;
            const user = await User.findOneBy({ rut: rut });
            const treatment = await Treatment.findOneBy({ id: idTreatment });
            if (user && treatment) {
                if (date instanceof Date) {
                    dental.date = date;
                } else {
                    dental.date = new Date(date);
                }
                dental.description = description;
                dental.amount = amount;
                dental.User = user;
                dental.Treatment = treatment;
                await dental.save();
                res.status(200).json({ message: "Dental updated" });
            } else {
                res.status(404).json({
                    message: "User or treatment not found",
                });
            }
        } else {
            res.status(404).json({ message: "Dental not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).json({ message: "Something goes wrong" });
        } else {
            res.status(500).json({ message: "Something goes wrong" });
        }
    }
};

export const deleteDental = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const dental = await Dental.findOneBy({ id: id });
        if (dental) {
            await dental.remove();
            res.status(200).json({ message: "Dental deleted" });
        } else {
            res.status(404).json({ message: "Dental not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).json({ message: "Something goes wrong" });
        } else {
            res.status(500).json({ message: "Something goes wrong" });
        }
    }
};

export const getTreatmentsByUser = async (req: Request, res: Response) => {
    try {
        //Get treatments by user using rut as parameter in the url, and send Nombre, Apellido, Nombre del tratamiento, Fecha to the frontend
        //Usign getRepository we can use the query builder to make the query
        
        const rut = (req.params.rut);
        const Treatment_User = await Dental.createQueryBuilder("dental")
            .select("user.name", "name")
            .addSelect("user.fatherLastname", "fatherLastname")
            .addSelect("treatment.name", "nameTreatment")
            .addSelect("dental.date", "date")
            .innerJoin("dental.User", "user")
            .innerJoin("dental.Treatment", "treatment")
            .where("user.rut = :rut", { rut: rut })
            .getRawMany(); 
        res.status(200).json(Treatment_User);

    } catch (error) {
        if (error instanceof Error) {
            console.log(error.message);
            res.status(500).json({ message: "Something goes wrong" });
        } else {
            res.status(500).json({ message: "Something goes wrong" });
        }
    }
};

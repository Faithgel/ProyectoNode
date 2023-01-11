import { Request, Response } from "express";
import { Treatment } from "../models/treatment.entity";

export const getTreatments = async (req: Request, res: Response) => {
    try {
        const treatments = await Treatment.find();
        res.status(200).json({ treatments });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const createTreatment = async (req: Request, res: Response) => {
    try {
        const { name, description, diagnosis, medication } = req.body;
        const treatment = await Treatment.create({
            name,
            description,
            diagnosis,
            medication,
        });
        await treatment.save();
        res.status(201).json({ treatment });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getSpecificTreatment = async (req: Request, res: Response) => {
    try {
        const { nombre } = req.params;
        const treatment = await Treatment.findOneBy({ name: nombre });
        res.status(200).json({ treatment });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const deleteTreatment = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const treatment = await Treatment.findOneBy({ id: id });
        if (treatment) {
            await treatment.remove();
            res.status(200).json({ message: "Treatment deleted" });
        } else {
            res.status(400).json({ message: "Treatment not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const updateTreatment = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, diagnosis, medication } = req.body;
        const treatment = await Treatment.findOneBy({ id: id });
        if (treatment) {
            treatment.name = name;
            treatment.description = description;
            treatment.diagnosis = diagnosis;
            treatment.medication = medication;
            await treatment.save();
            res.status(200).json({ treatment });
        } else {
            res.status(400).json({ message: "Treatment not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

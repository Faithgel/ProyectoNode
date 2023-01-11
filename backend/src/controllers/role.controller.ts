import { Request, Response } from "express";
import { Role } from "../models/role.entity";

export const getRoles = async (req: Request, res: Response) => {
    try {
        const roles = await Role.find();
        res.status(200).json({ roles });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const createRole = async (req: Request, res: Response) => {
    try {
        const { name } = req.body;
        const role = await Role.create({ name });
        await role.save();
        res.status(201).json({ role });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getSpecificRole = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const role = await Role.findOneBy({ id: parseInt(id) });
        res.status(200).json({ role });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const deleteRole = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const role = await Role.findOneBy({ id: id });
        if (role) {
            await role.remove();
            res.status(200).json({ message: "Role deleted" });
        } else {
            res.status(400).json({ message: "Role not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const updateRole = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        const role = await Role.findOneBy({ id: id });
        if (role) {
            role.name = name;
            await role.save();
            res.status(200).json({ message: "Role updated" });
        }
    } catch (error) {
        if(error instanceof Error){
            res.status(400).json({message: error.message});
        }else{
            res.status(400).json({message: "Something went wrong"});
        }
    }
};



import { Request, Response } from "express";
import { User } from "../models/user.entity";
import { Role } from "../models/role.entity";

export const loginUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            if (user.password == req.body.password) {
                res.status(200).json({
                    message: "User logged in",
                    role: user.role,
                });
            } else {
                res.status(400).json({ message: "Wrong password" });
            }
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const createUser = async (req: Request, res: Response) => {
    // Extract the username from the request body
    const { rut, name, fatherLastname, motherLastName, mail, password } =
        req.body;
    const user = User.create();
    user.rut = rut;
    user.name = name;
    user.fatherLastname = fatherLastname;
    user.motherLastName = motherLastName;
    user.mail = mail;
    user.password = password;

    try {
        const role = await Role.findOneBy({ name: "user" });
        if (role) {
            user.role = role;
            await user.save();
            res.status(200).json({ message: "User created" });
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

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.status(200).json({ users });
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getSpecificUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            res.status(200).json({ user });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const getUserByDentist = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            const role = await Role.findOneBy({ id: user.role.id });
            if (role) {
                if (role.name == "Dentista") {
                    const users = await User.find();
                    const usersByDentist = users.filter(
                        (user) => user.role.id == role.id
                    );
                    res.status(200).json({ usersByDentist });
                } else {
                    res.status(400).json({ message: "User is not a dentist" });
                }
            } else {
                res.status(400).json({ message: "Role not found" });
            }
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            user.name = req.body.name;
            user.fatherLastname = req.body.fatherLastname;
            user.motherLastName = req.body.motherLastName;
            user.mail = req.body.mail;
            user.password = req.body.password;

            await user.save();
            res.status(200).json({ message: "User updated" });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const updateUserMail = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            user.mail = req.body.mail;
            await user.save();
            res.status(200).json({ message: "User updated" });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const updateUserPassword = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });

        if (user) {
            user.password = req.body.password;
            await user.save();
            res.status(200).json({ message: "User updated" });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findOneBy({ rut: parseInt(req.params.rut) });

        if (user) {
            await user.remove();
            res.status(200).json({ message: "User deleted" });
        } else {
            res.status(400).json({ message: "User not found" });
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        } else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
};

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUserPassword = exports.updateUserMail = exports.updateUser = exports.getUserByDentist = exports.getSpecificUser = exports.getUsers = exports.createUser = exports.loginUser = void 0;
const user_entity_1 = require("../models/user.entity");
const role_entity_1 = require("../models/role.entity");
const loginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            if (user.password == req.body.password) {
                res.status(200).json({
                    message: "User logged in",
                    role: user.role,
                });
            }
            else {
                res.status(400).json({ message: "Wrong password" });
            }
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.loginUser = loginUser;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Extract the username from the request body
    const { rut, name, fatherLastname, motherLastName, mail, password } = req.body;
    const user = user_entity_1.User.create();
    user.rut = rut;
    user.name = name;
    user.fatherLastname = fatherLastname;
    user.motherLastName = motherLastName;
    user.mail = mail;
    user.password = password;
    try {
        const role = yield role_entity_1.Role.findOneBy({ name: "user" });
        if (role) {
            user.role = role;
            yield user.save();
            res.status(200).json({ message: "User created" });
        }
        else {
            res.status(400).json({ message: "Role not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.createUser = createUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_entity_1.User.find();
        res.status(200).json({ users });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.getUsers = getUsers;
const getSpecificUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            res.status(200).json({ user });
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.getSpecificUser = getSpecificUser;
const getUserByDentist = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            const role = yield role_entity_1.Role.findOneBy({ id: user.role.id });
            if (role) {
                if (role.name == "Dentista") {
                    const users = yield user_entity_1.User.find();
                    const usersByDentist = users.filter((user) => user.role.id == role.id);
                    res.status(200).json({ usersByDentist });
                }
                else {
                    res.status(400).json({ message: "User is not a dentist" });
                }
            }
            else {
                res.status(400).json({ message: "Role not found" });
            }
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.getUserByDentist = getUserByDentist;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            user.name = req.body.name;
            user.fatherLastname = req.body.fatherLastname;
            user.motherLastName = req.body.motherLastName;
            user.mail = req.body.mail;
            user.password = req.body.password;
            yield user.save();
            res.status(200).json({ message: "User updated" });
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.updateUser = updateUser;
const updateUserMail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            user.mail = req.body.mail;
            yield user.save();
            res.status(200).json({ message: "User updated" });
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.updateUserMail = updateUserMail;
const updateUserPassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            user.password = req.body.password;
            yield user.save();
            res.status(200).json({ message: "User updated" });
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.updateUserPassword = updateUserPassword;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_entity_1.User.findOneBy({ rut: parseInt(req.params.rut) });
        if (user) {
            yield user.remove();
            res.status(200).json({ message: "User deleted" });
        }
        else {
            res.status(400).json({ message: "User not found" });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ message: error.message });
        }
        else {
            res.status(400).json({ message: "Something went wrong" });
        }
    }
});
exports.deleteUser = deleteUser;

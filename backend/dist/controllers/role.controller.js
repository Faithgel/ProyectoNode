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
exports.updateRole = exports.deleteRole = exports.getSpecificRole = exports.createRole = exports.getRoles = void 0;
const role_entity_1 = require("../models/role.entity");
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield role_entity_1.Role.find();
        res.status(200).json({ roles });
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
exports.getRoles = getRoles;
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const role = yield role_entity_1.Role.create({ name });
        yield role.save();
        res.status(201).json({ role });
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
exports.createRole = createRole;
const getSpecificRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const role = yield role_entity_1.Role.findOneBy({ id: parseInt(id) });
        res.status(200).json({ role });
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
exports.getSpecificRole = getSpecificRole;
const deleteRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const role = yield role_entity_1.Role.findOneBy({ id: id });
        if (role) {
            yield role.remove();
            res.status(200).json({ message: "Role deleted" });
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
exports.deleteRole = deleteRole;
const updateRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;
        const role = yield role_entity_1.Role.findOneBy({ id: id });
        if (role) {
            role.name = name;
            yield role.save();
            res.status(200).json({ message: "Role updated" });
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
exports.updateRole = updateRole;

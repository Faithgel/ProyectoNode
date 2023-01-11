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
exports.updateTreatment = exports.deleteTreatment = exports.getSpecificTreatment = exports.createTreatment = exports.getTreatments = void 0;
const treatment_entity_1 = require("../models/treatment.entity");
const getTreatments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const treatments = yield treatment_entity_1.Treatment.find();
        res.status(200).json({ treatments });
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
exports.getTreatments = getTreatments;
const createTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, description, diagnosis, medication } = req.body;
        const treatment = yield treatment_entity_1.Treatment.create({
            name,
            description,
            diagnosis,
            medication,
        });
        yield treatment.save();
        res.status(201).json({ treatment });
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
exports.createTreatment = createTreatment;
const getSpecificTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const treatment = yield treatment_entity_1.Treatment.findOneBy({ id: parseInt(id) });
        res.status(200).json({ treatment });
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
exports.getSpecificTreatment = getSpecificTreatment;
const deleteTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const treatment = yield treatment_entity_1.Treatment.findOneBy({ id: id });
        if (treatment) {
            yield treatment.remove();
            res.status(200).json({ message: "Treatment deleted" });
        }
        else {
            res.status(400).json({ message: "Treatment not found" });
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
exports.deleteTreatment = deleteTreatment;
const updateTreatment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const { name, description, diagnosis, medication } = req.body;
        const treatment = yield treatment_entity_1.Treatment.findOneBy({ id: id });
        if (treatment) {
            treatment.name = name;
            treatment.description = description;
            treatment.diagnosis = diagnosis;
            treatment.medication = medication;
            yield treatment.save();
            res.status(200).json({ treatment });
        }
        else {
            res.status(400).json({ message: "Treatment not found" });
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
exports.updateTreatment = updateTreatment;

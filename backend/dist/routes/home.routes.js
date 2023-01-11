"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const report_controller_1 = require("../controllers/report.controller");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.send('Hello World!');
});
router.get('/pdf', report_controller_1.generateFullReport);
exports.default = router;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
//Import routes here
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const home_routes_1 = __importDefault(require("./routes/home.routes"));
const dental_routes_1 = __importDefault(require("./routes/dental.routes"));
const role_routes_1 = __importDefault(require("./routes/role.routes"));
const app = (0, express_1.default)();
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Use routes here
app.use(user_routes_1.default);
app.use(home_routes_1.default);
app.use(dental_routes_1.default);
app.use(role_routes_1.default);
exports.default = app;

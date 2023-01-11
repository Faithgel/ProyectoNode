"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dental = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./user.entity");
const treatment_entity_1 = require("./treatment.entity");
let Dental = class Dental extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Dental.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "date", nullable: false }),
    __metadata("design:type", Date)
], Dental.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "varchar", length: 50, nullable: false }),
    __metadata("design:type", String)
], Dental.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "int", nullable: false }),
    __metadata("design:type", Number)
], Dental.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => treatment_entity_1.Treatment, treatment => treatment.id, { nullable: true }),
    __metadata("design:type", treatment_entity_1.Treatment)
], Dental.prototype, "Treatment", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.rut, {}),
    __metadata("design:type", user_entity_1.User)
], Dental.prototype, "User", void 0);
Dental = __decorate([
    (0, typeorm_1.Entity)("Dental")
], Dental);
exports.Dental = Dental;

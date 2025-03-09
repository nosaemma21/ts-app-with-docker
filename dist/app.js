"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_1 = require("./Models/person");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send({
        name: "John Smith",
        age: 30,
        dateOfBirth: new Date("2004-11-12").toDateString(),
        gender: person_1.Gender.Male,
    });
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

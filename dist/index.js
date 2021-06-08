"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var inversify_config_1 = __importDefault(require("./inversify.config"));
var types_1 = __importDefault(require("./types"));
var app = express_1.default();
app.use(body_parser_1.json());
var contollers = inversify_config_1.default.getAll(types_1.default.Controller);
contollers.forEach(function (contoller) { return contoller.register(app); });
app.listen(3000, function () { return console.log("Server started !"); });

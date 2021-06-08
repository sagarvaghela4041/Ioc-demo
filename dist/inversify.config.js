"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var user_controller_1 = require("./controller/user-controller");
var user_repository_1 = require("./repository/user-repository");
var user_service_1 = require("./service/user-service");
var types_1 = __importDefault(require("./types"));
var container = new inversify_1.Container();
container.bind(types_1.default.Controller).to(user_controller_1.UserController);
container.bind(types_1.default.UserService).to(user_service_1.UserServiceImpl);
container.bind(types_1.default.UserRepository).to(user_repository_1.UserRepositoryImpl);
exports.default = container;

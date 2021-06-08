import { Container } from "inversify";
import { RegistrableController } from "./controller/registrable-controller";
import { UserController } from "./controller/user-controller";
import { UserService, UserServiceImpl } from "./service/user-service";
import TYPES from "./types";

const container = new Container();
container.bind<RegistrableController>(TYPES.Controller).to(UserController);
container.bind<UserService>(TYPES.UserService).to(UserServiceImpl);
export default container;
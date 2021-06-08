import { Container } from "inversify";
import { RegistrableController } from "./controller/registrable-controller";
import { UserController } from "./controller/user-controller";
import TYPES from "./types";

const container = new Container();
container.bind<RegistrableController>(TYPES.Controller).to(UserController);
export default container;
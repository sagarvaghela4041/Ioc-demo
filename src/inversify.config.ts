import { Container } from "inversify";
import { RegistrableController } from "./controller/registrable-controller";
import { UserController } from "./controller/user-controller";
import { IUserRepository, UserRepositoryImpl } from "./repository/user-repository";
import { IUserService, UserServiceImpl } from "./service/user-service";
import TYPES from "./types";

const container = new Container();
container.bind<RegistrableController>(TYPES.Controller).to(UserController);
container.bind<IUserService>(TYPES.UserService).to(UserServiceImpl);
container.bind<IUserRepository>(TYPES.UserRepository).to(UserRepositoryImpl);
export default container;
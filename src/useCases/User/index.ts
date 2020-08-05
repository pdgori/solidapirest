import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";

import { GetUserUseCase } from "./GetUser/GetUserUseCase";
import { GetUserController } from "./GetUser/GetUserController";

import { UpdateUserUseCase } from "./UpdateUser/UpdateUserUseCase";
import { UpdateUserController } from "./UpdateUser/UpdateUserController";

import { CreateUserUseCase } from "./CreateUser/CreateUserUseCase";
import { CreateUserController } from "./CreateUser/CreateUserController";

const postgressUsersRepository = new PostgresUsersRepository();

const getUserUseCase = new GetUserUseCase(postgressUsersRepository);
const getUserController = new GetUserController(getUserUseCase);

const updateUserUseCase = new UpdateUserUseCase(postgressUsersRepository);
const updateUserController = new UpdateUserController(updateUserUseCase);

const mailtrapMailProvider = new MailtrapMailProvider();
const createUserUseCase = new CreateUserUseCase(
  postgressUsersRepository,
  mailtrapMailProvider
);
const createUserController = new CreateUserController(createUserUseCase);

export {
  getUserUseCase,
  getUserController,
  updateUserUseCase,
  updateUserController,
  createUserUseCase,
  createUserController,
};

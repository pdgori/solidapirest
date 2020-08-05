import { IUsersRepository } from "../../../repositories/IUsersRepository";

export class GetUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute() {
    return await this.usersRepository.get();
  }
}

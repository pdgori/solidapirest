import { IUsersRepository } from "../../../repositories/IUsersRepository";
export class DeleteUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string) {
    const userFound = await this.usersRepository.findById(id);

    if (!userFound) {
      throw new Error("User not found.");
    }

    await this.usersRepository.delete(id);
  }
}

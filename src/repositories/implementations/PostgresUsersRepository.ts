import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";

export class PostgresUsersRepository implements IUsersRepository {
  private users: User[] = [];

  async get(): Promise<User[]> {
    return this.users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find((user) => user.email == email);
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find((user) => user.id == id);
    return user;
  }

  async delete(id: string): Promise<void> {
    const userIndex = this.users.findIndex((u) => u.id == id);
    this.users.splice(userIndex, 1);
  }

  async save(user: User): Promise<void> {
    this.users.push(user);
  }

  async update(user: User): Promise<void> {
    const userIndex = this.users.findIndex((u) => u.id == user.id);
    this.users.splice(userIndex, 1);
    this.users.push(user);
  }
}

import { User } from "../entities/User";

export interface IUsersRepository {
  get(): Promise<User[]>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  save(user: User): Promise<void>;
  update(user: User): Promise<void>;
}

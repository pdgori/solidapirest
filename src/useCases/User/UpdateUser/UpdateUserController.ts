import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  constructor(private updateUserUseCase: UpdateUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const { id } = request.params;
    try {
      await this.updateUserUseCase.execute({
        id,
        name,
        email,
        password,
      });
      return response.status(200).send();
    } catch (err) {
      return response.status(400).send({
        message: err.message || "Unexpected error",
      });
    }
  }
}

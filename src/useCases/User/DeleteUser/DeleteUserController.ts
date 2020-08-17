import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  constructor(private deleteUserUseCase: DeleteUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    try {
      await this.deleteUserUseCase.execute(id);
      return response.status(204).send();
    } catch (err) {
      return response.status(400).send({
        message: err.message || "Unexpected error",
      });
    }
  }
}

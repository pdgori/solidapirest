import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";

export class GetUserController {
  constructor(private getUserUseCase: GetUserUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.getUserUseCase.execute();
      return response.status(200).send(users);
    } catch (err) {
      return response.status(400).send({
        message: err.message || "Unexpected error",
      });
    }
  }
}

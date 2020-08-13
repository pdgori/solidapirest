import { Request, Response } from "express";
import { SMSUseCase } from "./SMSUseCase";

export class SMSController {
  constructor(private smsUseCase: SMSUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { from, to, body } = request.body;
    try {
      const message = await this.smsUseCase.execute({
        from,
        to,
        body,
      });
      return response.status(200).send(message);
    } catch (err) {
      return response.status(400).send({
        message: err.message || "Unexpected error",
      });
    }
  }
}

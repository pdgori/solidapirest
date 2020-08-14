import { Request, Response } from "express";
import { CallUseCase } from "./CallUseCase";

export class CallController {
  constructor(private callUseCase: CallUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { from, to, url, ncco } = request.body;
    try {
      const message = await this.callUseCase.execute({
        from,
        to,
        url,
        ncco,
      });
      return response.status(200).send(message);
    } catch (err) {
      return response.status(400).send({
        message: err.message || "Unexpected error",
      });
    }
  }
}

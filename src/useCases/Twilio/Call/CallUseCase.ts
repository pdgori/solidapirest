import { IMessageSenderProvider } from "../../../providers/IMessageSenderProvider";
import { ICallRequestDTO } from "./CallDTO";

export class CallUseCase {
  constructor(private messageSender: IMessageSenderProvider) {}

  async execute(message: ICallRequestDTO) {
    return await this.messageSender.call(message);
  }
}

import { IMessageSenderProvider } from "../../../providers/IMessageSenderProvider";
import { ISMSRequestDTO } from "./SMSDTO";

export class SMSUseCase {
  constructor(private messageSender: IMessageSenderProvider) {}

  async execute(message: ISMSRequestDTO) {
    return await this.messageSender.sms(message);
  }
}

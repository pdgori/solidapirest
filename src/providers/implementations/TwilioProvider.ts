import {
  IMessageSenderProvider,
  ISmsProvider,
  ICallProvider,
} from "../IMessageSenderProvider";

import { TWILIO_ACCOUNTSID, TWILIO_AUTHTOKEN } from "../../../config/keys";
import Twilio from "twilio/lib/rest/Twilio";

export class TwilioProvider implements IMessageSenderProvider {
  private client: Twilio;

  constructor() {
    this.client = require("twilio")(TWILIO_ACCOUNTSID, TWILIO_AUTHTOKEN);
  }

  async call(message: ICallProvider): Promise<object> {
    return await this.client.calls.create({
      url: message.url,
      to: message.to[0].number, // Text this number
      from: message.from, // From a valid Twilio number
    });
  }

  async sms(message: ISmsProvider): Promise<Object> {
    return await this.client.messages.create({
      body: message.body,
      to: message.to[0].number, // Text this number
      from: message.from, // From a valid Twilio number
    });
  }
}

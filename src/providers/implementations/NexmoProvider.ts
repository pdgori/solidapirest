import {
  IMessageSenderProvider,
  ISmsProvider,
  ICallProvider,
} from "../IMessageSenderProvider";
import Nexmo from "nexmo";

import {
  NEXMO_APIKEY,
  NEXMO_APISECRET,
  NEXMO_APPLICATIONID,
} from "../../../config/keys";

import fs from "fs";

export class NexmoProvider implements IMessageSenderProvider {
  private client;
  constructor() {
    //GET on NEXMO the PRIVATE KEY and paste in the root folder.
    fs.readFile("./private.key", "utf8", (err, data) => {
      if (err) throw err;
      this.client = new Nexmo({
        apiKey: NEXMO_APIKEY,
        apiSecret: NEXMO_APISECRET,
        applicationId: NEXMO_APPLICATIONID,
        privateKey: data,
      });
    });
  }

  async call(message: ICallProvider): Promise<object> {
    return await this.client.calls.create({
      ncco: message.ncco,
      to: message.to, // Text this number
      from: message.from, // From a valid Nexmo number
    });
  }

  async sms(message: ISmsProvider): Promise<Object> {
    return await this.client.message.sendSms(
      message.from,
      message.to[0].number,
      message.body
    );
  }
}

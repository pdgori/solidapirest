import { SMSController } from "./SMS/SMSController";
import { SMSUseCase } from "./SMS/SMSUseCase";
import { CallUseCase } from "./Call/CallUseCase";
import { TwilioProvider } from "../../providers/implementations/TwilioProvider";
import { NexmoProvider } from "../../providers/implementations/NexmoProvider";
import { CallController } from "./Call/CallController";

const twilioProvider = new TwilioProvider();
const nexmoProvider = new NexmoProvider();
const smsUseCase = new SMSUseCase(twilioProvider);
//const smsUseCase = new SMSUseCase(nexmoProvider);
const smsController = new SMSController(smsUseCase);

// const callUseCase = new CallUseCase(twilioProvider);
const callUseCase = new CallUseCase(nexmoProvider);
const callController = new CallController(callUseCase);

export { smsController, callController };

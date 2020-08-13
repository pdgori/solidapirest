import { SMSController } from "./SMS/SMSController";
import { SMSUseCase } from "./SMS/SMSUseCase";
import { CallUseCase } from "./Call/CallUseCase";
import { TwilioProvider } from "../../providers/implementations/TwilioProvider";
import { CallController } from "./Call/CallController";

const twilioProvider = new TwilioProvider();
const smsUseCase = new SMSUseCase(twilioProvider);
const smsController = new SMSController(smsUseCase);

const callUseCase = new CallUseCase(twilioProvider);
const callController = new CallController(callUseCase);

export { smsController, callController };

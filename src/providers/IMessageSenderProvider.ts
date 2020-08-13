export interface IMessageProvider {
  from: string;
  to: string;
}

export interface ICallProvider extends IMessageProvider {
  url: string;
}

export interface ISmsProvider extends IMessageProvider {
  body: string;
}

export interface IMessageSenderProvider {
  sms(message: ISmsProvider): Promise<object>;
  call(message: ICallProvider): Promise<object>;
}

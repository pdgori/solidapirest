export interface IMessageProvider {
  from: string;
  to: [
    {
      type: string;
      number: string;
    }
  ];
}

export interface ICallProvider extends IMessageProvider {
  url: string;
  ncco: INCCO[];
}

export interface ISmsProvider extends IMessageProvider {
  body: string;
}

//Nexmo Call Control Object
export interface INCCO {
  action: string;
  voiceName: string;
  text: string;
}

export interface IMessageSenderProvider {
  sms(message: ISmsProvider): Promise<object>;
  call(message: ICallProvider): Promise<object>;
}

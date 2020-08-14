export interface ICallRequestDTO {
  from: string;
  to: [
    {
      type: string;
      number: string;
    }
  ];
  url: string;
  ncco: [
    {
      action: string;
      voiceName: string;
      text: string;
    }
  ];
}

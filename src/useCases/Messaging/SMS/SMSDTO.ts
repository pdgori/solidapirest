export interface ISMSRequestDTO {
  from: string;
  to: [
    {
      type: string;
      number: string;
    }
  ];
  body: string;
}

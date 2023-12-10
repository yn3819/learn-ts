interface PhoneNumberDictionary {
  [phone: string]: {
    num: number;
  };
}

export interface Contact {
  name: string;
  address: string;
  phones: PhoneNumberDictionary;
}

export enum PhoneType {
  Home = "home",
  Office = "office",
  Studio = "studio",
}

// export { Contact, PhoneType }; 이렇게 해도 되고 위처럼 export 옆에 적어줘도됨

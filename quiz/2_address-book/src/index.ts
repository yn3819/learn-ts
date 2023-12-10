import { Contact, PhoneType } from "./types";

// 임포트, 익스포트로 빼기 ============================================
// interface PhoneNumberDictionary {
//   [phone: string]: {
//     num: number;
//   };
// }

// interface Contact {
//   name: string;
//   address: string;
//   phones: PhoneNumberDictionary;
// }

// enum PhoneType{
//   Home = 'home',
//   Office = 'office',
//   Studio = 'studio'
// }

// 임포트, 익스포트로 빼기 ============================================

// api
// TODO: 아래 함수의 반환 타입을 지정해보세요.
function fetchContacts(): Promise<Contact[]> {
  // TODO: 아래 변수의 타입을 지정해보세요.
  const contacts: Contact[] = [
    {
      name: "Tony",
      address: "Malibu",
      phones: {
        home: {
          num: 11122223333,
        },
        office: {
          num: 44455556666,
        },
      },
    },
    {
      name: "Banner",
      address: "New York",
      phones: {
        home: {
          num: 77788889999,
        },
      },
    },
    {
      name: "마동석",
      address: "서울시 강남구",
      phones: {
        home: {
          num: 213423452,
        },
        studio: {
          num: 314882045,
        },
      },
    },
  ];
  return new Promise((resolve) => {
    setTimeout(() => resolve(contacts), 2000); //2초 뒤에 저 데이터가 온다고 api 묘사
  });
}

// main
class AddressBook {
  // TODO: 아래 변수의 타입을 지정해보세요.
  contacts: Contact[] = [];

  constructor() {
    this.fetchData();
  }

  fetchData(): void {
    fetchContacts().then((response) => {
      this.contacts = response;
    });
  }

  /* TODO: 아래 함수들의 파라미터 타입과 반환 타입을 지정해보세요 */
  findContactByName(name: string): Contact[] {
    return this.contacts.filter((contact) => contact.name === name);
  }

  findContactByAddress(address: string): Contact[] {
    return this.contacts.filter((contact) => contact.address === address);
  }

  findContactByPhone(phoneNumber: number, phoneType: PhoneType): Contact[] {
    return this.contacts.filter(
      (contact) => contact.phones[phoneType].num === phoneNumber
    );
  }
  // findContactByPhone('homee') // 오탈자가 날 수 있음. 타입추론 문제. 13줄,따라서 이넘 사용하는 게 좋음
  // findContactByPhone(PhoneType.phone) // 컨스트럭트에 들어가면 호출될 것임

  addContact(contact: Contact): void {
    //보이드: 기본적으로 호출하고 반환값 없기때문에.
    this.contacts.push(contact);
  }

  displayListByName(): string[] {
    return this.contacts.map((contact) => contact.name);
  }

  displayListByAddress(): string[] {
    return this.contacts.map((contact) => contact.address);
  }
  /* ------------------------------------------------ */
}

// map 배열 뽑아서 재배열 만들어줌
let heroes = [
  { name: "Tony", age: 30 },
  { name: "Captain", age: 100 },
];
heroes.map(function (hero) {
  return hero.name;
}); // ['Tony', 'Captain']

new AddressBook();

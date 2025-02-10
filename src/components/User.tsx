export interface Link {
    type: string, 
    text: string
}

export interface User {
    id: string,
    firstName: string,
    lastName: string,
    patronymic?: string,
    createDate: Date,
    changeDate: Date,
    links: Link [],
}

export const emptyUser: User = {
  id: '-1',
  firstName: 'firstName',
  lastName: 'lastName',
  createDate: new Date('1970-01-01'),
  changeDate: new Date('1970-01-01'),
  links: [{type:'empType', text: 'link1'}, {type:'empType', text: 'link2'}],
}

export const USERS_LIST: User[] = [
  {
    id: '1',
    firstName: "Иван",
    lastName: "Иванов",
    patronymic: "Иванович",
    createDate: new Date("2024-12-15T10:30:00"),
    changeDate: new Date("2024-12-15T12:45:00"),
    links: [
      { type: "link", text: "https://example.com/profile/1" },
      { type: "link", text: "https://example.com/settings/1" },
    ],
  },
  {
    id: '2',
    firstName: "Петр",
    lastName: "Петров",
    patronymic: "Петрович",
    createDate: new Date("2024-11-20T14:20:00"),
    changeDate: new Date("2024-11-20T16:30:00"),
    links: [
      { type: "link", text: "https://example.com/profile/2" },
    ],
  },
  {
    id: '3',
    firstName: "Сидор",
    lastName: "Сидоров",
    patronymic: "Сидорович",
    createDate: new Date("2024-10-10T09:15:00"),
    changeDate: new Date("2024-10-10T11:25:00"),
    links: [
      { type: "link", text: "https://example.com/profile/3" },
    ],
  },
  {
    id: '4',
    firstName: "Алексей",
    lastName: "Алексеев",
    patronymic: "Алексеевич",
    createDate: new Date("2024-09-05T08:00:00"),
    changeDate: new Date("2024-09-05T10:10:00"),
    links: [
      { type: "link", text: "https://example.com/profile/4" },
      { type: "link", text: "https://example.com/details/4" },
    ],
  },
  {
    id: '5',
    firstName: "Николай",
    lastName: "Николаев",
    patronymic: "Николаевич",
    createDate: new Date("2024-08-25T18:45:00"),
    changeDate: new Date("2024-08-25T19:50:00"),
    links: [
      { type: "link", text: "https://example.com/profile/5" },
    ],
  },
  {
    id: '6',
    firstName: "Федор",
    lastName: "Федоров",
    patronymic: "Федорович",
    createDate: new Date("2024-07-15T11:25:00"),
    changeDate: new Date("2024-07-15T13:35:00"),
    links: [
      { type: "link", text: "https://example.com/profile/6" },
    ],
  },
  {
    id: '7',
    firstName: "Михаил",
    lastName: "Михайлов",
    patronymic: "Михайлович",
    createDate: new Date("2024-06-10T15:40:00"),
    changeDate: new Date("2024-06-10T17:50:00"),
    links: [
      { type: "link", text: "https://example.com/profile/7" },
      { type: "link", text: "https://example.com/info/7" },
    ],
  },
  {
    id: '8',
    firstName: "Василий",
    lastName: "Васильев",
    patronymic: "Васильевич",
    createDate: new Date("2024-05-20T13:10:00"),
    changeDate: new Date("2024-05-20T15:25:00"),
    links: [
      { type: "link", text: "https://example.com/profile/8" },
    ],
  },
  {
    id: '9',
    firstName: "Андрей",
    lastName: "Андреев",
    patronymic: "Андреевич",
    createDate: new Date("2024-04-15T10:50:00"),
    changeDate: new Date("2024-04-15T12:00:00"),
    links: [
      { type: "link", text: "https://example.com/profile/9" },
    ],
  },
  {
    id: '10',
    firstName: "Кузьма",
    lastName: "Кузнецов",
    patronymic: "Кузьмич",
    createDate: new Date("2024-03-30T08:30:00"),
    changeDate: new Date("2024-03-30T10:45:00"),
    links: [
      { type: "link", text: "https://example.com/profile/10" },
      { type: "link", text: "https://example.com/settings/10" },
    ],
  },
];

export async function FetchUsersFromPublic(): Promise<User[]> {
  try{
    const res = await fetch('/DataBase.json')
    const data = await res.json()
    return data.map((user: User) => ({
      ...user,
      createDate: new Date(user.createDate),
      changeDate: new Date(user.changeDate),
    }));
  }
  catch{
    console.log('error FetchUsersFromPublic')
    return []
  }
}
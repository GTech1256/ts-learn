interface IPerson {
  name: string,
  age: number
}

type PersonKeys = keyof IPerson // 'name' | 'age'

let key: PersonKeys = 'name';
key = 'age';

// key = 'word'

type User = {
  _id: number,
  name: string,
  email: string,
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let u1: UserKeysNoMeta1 = 'name';
u1 = 'email';

// u1 = 'word'
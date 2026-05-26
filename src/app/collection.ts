//  ДЗ 15.5 создать файл collection.ts, который реализует внутри себя класс Collection, работающий с любым типом данных

const users: string[] = ['Boris','Vlad'];
const evenNumbers: number[] = [0, 2, 4, 6, 8];

export class Collection<T> {
  items: T[] = [];
  constructor(items: T[]) {
    this.items = items;
  }

  getAll(): T[] {
    return this.items;
  }

  getItem(item: T): T[] {
    return this.items.filter(element => element === item);
  }

  deleteAll(): T[] {
    this.items.length = 0;
    return this.items;
  }

  deleteItem(item: T): T[] {
    return this.items.filter(element => element !== item);
  }
  
  replaceItem(item: T, itemToReplace:T): T[] {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items[index] = itemToReplace;
    }
    return this.items;
  }
};

const usersStorage = new Collection(users);
console.log(usersStorage.replaceItem('Vlad','Misha'));

const numbersStorage = new Collection(evenNumbers);
console.log(numbersStorage.deleteItem(2));
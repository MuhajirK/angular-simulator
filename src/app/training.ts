// ДЗ 14
// 3 Создать функцию, которая принимает 2 числа и возвращает их сумму

let sum = (a:number, b:number): number => {
  return a + b;
};
const summa = sum(2, 5);


// 4. Создать переменную status, которая может быть только: "loading", "success", "error".

let state: "loading" | "success" | "error";
state = "loading";


//5.  Создать переменную textFormat, которая может быть только: 'uppercase', 'lowercase', 'capitalize'".

let textFormat: 'uppercase' | 'lowercase' | 'capitalize';
textFormat = 'capitalize';


// 6. Создать интерфейс, который описывает юзера. Поля на ваш выбор. Одно поле должно быть опциональным.

interface IUser {
  Id: number;
  name: string;
  surname?: string;
  age: number; 
};

let Alex: IUser = {
  Id: 123,
  name: 'Alex',
  age: 36,
};


// 7. Создать интерфейс, который расширяется интерфейсом User с задания №6 и имеет свои дополнительные поля 

interface IUserData extends IUser {
  email: string;
  city: string;
};

let Boris: IUserData = {
  Id: 222,
  name: 'Boris',
  surname: 'Utkin',
  age: 40,
  email: 'Boris@exemle.com',
  city: 'Novgorod'
};


// 8. Создать функцию, которая принимает строку и вариант,  как именно форматировать строку (задание №5) и на основе этого возвращает форматированную строку.

function format(str: string, text: string): string {
  if (textFormat === 'lowercase') {
    return str.toLowerCase();
  };
  if (textFormat === 'uppercase') {
    return str.toUpperCase();
  };
  if (textFormat === 'capitalize'){
    return setCapitalize(str);
  };
  return "";
};

function setCapitalize(str: string): string{
  const stringValue = str;
  if (!stringValue || stringValue.length === 0) return '';
  return stringValue.charAt(0).toUpperCase() + stringValue.slice(1).toLowerCase();
};

format('HELlow', textFormat);


// 9. Создать функцию, которая принимает строку и символ, возвращает строку без переданного символа.

function removeChar(str: string, symbol: string): string {
  return str.split(symbol).join('');
};

removeChar('angular', 'a');


// 10. Создать массив объектов на основе интерфейса с задания №6. Отфильтровать его по одному из параметров

const users: IUser[] = [Alex];
const filteredUsers = users.filter(user => user.age > 30);
// 1.1 Создаётся клас User.
// 1.2 В конструкторе класса User прописываем свойства для класса User.

// 2.1 Создаётся клас Avatar. Через операцию extends привязываем его к классу User.
// 2.2 В классе Avatar создаем конструктор  и прописываем в него параметры которые есть у User и добавляем дополнительные параметры которых не будет у User, но будут у Avatar. Добовляем метод attack классу Avatar, который будет в Avatar, но не будет в User. Теперь у Avatar есть все что у User и + дополнительные параметры и методы  присущи Avatar.
// 2.3 Инициализуем через операцию (new) экземпляр(test) класса Avatar и в него передаём свойства со значениями.

// 3.1 Создаётся клас Zombi. Через операцию extends привязываем его к классу User.
// 3.2 В классе Zombi создаем конструктор  и прописываем в него параметры которые есть у User и добавляем дополнительные параметры которых не будет у User, но будут у Avatar. Добовляем методы классу Zombi, который будет присущи классу Zombi, но не будет в User. Теперь у Zombi есть все что у User и + дополнительные параметры и методы  присущи Zombi.
// 3.3 Инициализуем через операцию (new) экземпляр(test1) класса Zombi и в него передаём свойства со значениями.

// 4.1 Создаётся клас Dog. Через операцию extends привязываем его к классу Zombi.
// 4.2 В классе Dog создаем конструктор  и прописываем в него параметры которые есть у Zombi и добавляем дополнительные параметры которых не будет у Zombi, но будут у Dog. Добовляем методы классу Dog, который будет присущи классу Dog, но не будет в Zombi. Теперь класс Dog есть все что у классов Zombi и User, + дополнительные параметры и методы присущи Dog.
// 4.3 Инициализуем через операцию (new) экземпляр(test2) класса Dog и в него передаём свойства со значениями.

// И так делее...!

// ----------------------
// класс User.
class User {
  // Статическое свойство.
  static counter = 0;

  // Статический метод. Который добавляет нового юзера в статическое свойство counter.
  static addUser() {
    // this.counter += 1;                            // Обрашение (вариант-1) через this к самому классу. this ссылается на класс.
    User.counter += 1; // Или обращение (вариант-2) к самому классу юзеру.
    console.log(`Number of users ${this.counter}`);
  }

  #location; // Приватное свойство оглашаем перед конструктором. Перед приватным свойством, указываем решетку.

  // Паттерн "Объект параметров" с параметром по умолчанию + деструктуризация.
  constructor({ name, email, age = 18, location = 'World', password } = {}) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.#location = location; // Приватное свойство, указываем решетку.
    this.password = password;
    User.addUser(); // Вызаваем статический метод.
  }
  sayHello() {
    console.log(this.name);
  }

  // Приватный метод.
  #getEmail() {
    console.log(this.email);
  }

  // Геттер
  get locale() {
    return this.#location;
  }

  // Сеттер
  set locale(city) {
    const value = prompt('Enter password'); // Вызываем окно для проверки пароля.

    this.#getEmail(); // Вызов приватного метода. Вызов приватного метода может быть только в середине методов. Вне класса не может быть использован.

    if (value === this.password) {
      //  Делаем проверку на ввод пароля пользователем.
      this.#location = city;
      console.log(this.#location);
    } else {
      console.log('Хацкер ? 😱');
    }
  }
}
// Создаём класс Avatar на основе класса User.
// Создаем конструктор в классе Avatar, но нам нужно чтоб он зацепил и конструктор в классе User, для этого прописываем метод super(). Этот метод super() делает комуникацию между конструктором Юзера и конструктором Аватара.
//
class Avatar extends User {
  constructor({ name, email, location, password, age, damage }) {
    super({ name, email, location, password, age }); // Вызываем метод super для инициализации экземпляра.
    this.damage = damage;
  }

  // Создаём метод для Avatar
  attack() {
    console.log(`Attack with damage ${this.damage}`);
  }
  // Теперь Аватару доступно всё что доступно Юзеру и + свойство damage, и метод attack. Свойство damage, и метод attack не доступны Юзеру, они доступны Аватару.
}

// Создаём класс Zombi на основе класса User.
class Zombi extends User {
  constructor({ name, email, location, password, age, poison }) {
    super({ name, email, location, password, age });
    this.poison = poison;
  }
  toBite() {
    console.log(`Bite with ${this.poison}`);
  }
}

// Создаём класс Dog на основе класса Zombi.
class Dog extends Zombi {
  constructor({ name, email, location, password, age, poison }) {
    super({ name, email, location, password, age });
  }
}
// Инициализуем экземпляр класса Avatar
const test = new Avatar({
  name: 'User A',
  email: 'test@gmail.com',
  location: 'Lviv',
  password: 'qwerty111',
  damage: 700,
});

// Инициализуем экземпляр класса Zombi
const test1 = new Zombi({
  name: 'User B',
  email: 'test@gmail.com',
  age: 99,
  poison: 500,
});

// Инициализуем экземпляр класса Zombi
const test2 = new Dog({
  name: 'User C',
  email: 'gmail@gmail.com',
  age: 92,
});

console.log(test);
console.log(test1);
console.log(test2);

console.log(test.constructor.counter); // 3    // Обращаюсь к статическомусвойству из вне и оно доступно.

// test.#getEmail();                 // ОШИБКА, приватное свойство(метод)! Свойство "#getEmail" недоступно вне класса "User", так как оно имеет закрытый идентификатор.

// test.sayHello();                    // User A

// console.log(test.locale);           // Lviv  // Обрашаемся к приватному свойству после того как добавили сеттер этому приватному свойству.
// test.locale = 'Dnipro';             // Обращение к Сеттеру. Меняем значение приватного свойства locale

// Метод экземпляра, кастомный. На объекте test1 создаю метод qwerty и на него записываю функцию.
// test1.qwerty = function () {
//   console.log(this.age);
// };

// console.log(test);                            // User {name: 'User A', email: 'test@gmail.com', age: 18, password: 'qwerty111', #location: 'Lviv'}
// console.log(test1);                           //User {name: 'User B', email: 'test@gmail.com', age: 99, password: undefined, #location: 'World'}

// console.log(test.#location);                  // ОШИБКА, приватное свойство! SyntaxError: Private field '#location' must be declared in an enclosing

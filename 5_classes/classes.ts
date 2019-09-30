class TypeScript {
  version: string

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `${name}: TypeScript version is ${this.version}`
  }
}


// class Car {
//   readonly model: string
//   readonly numberOfSheels: number = 4

//   constructor(theModel: string) {
//     this.model = theModel
//   }
// }

class Car {
  readonly numberOfSheels: number = 4

  constructor(readonly model: string) {

  }
}


// -=+=- 

class Animal {
  protected voice: string = ''; // Использование возможно только в этом классе и всех дочерних классах
  public color: string = 'black' // Использование возможно везде и даже в инстансе

  constructor() {
    this.go()
  }

  private go() { // Использование возможно только в этом классе
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat();
cat.setVoice('May')
console.log(cat.color);


// -=+=-

abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}
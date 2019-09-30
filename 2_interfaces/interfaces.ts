interface IRect {
  readonly id: string,
  color?: string // not require
  size: {
    width: number,
    height: number
  }
}

const rect1: IRect = {
  id: '1234',
  color: '#ccc',
  size: {
    width: 20,
    height: 30
  }
}

const rect2: IRect = {
  id: '12345',
  size: {
    width: 10,
    height: 5
  }
}

rect2.color = 'black';

const rect3 = {} as IRect;
const rect4 = <IRect>{}; // old way



// -=+=-

interface IReactWithArea extends IRect {
  getArea: () => number
}

const rect5: IReactWithArea = {
  id: '123',
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}





// -=+=-


interface IClock {
  time: Date,
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date();
  
  setTime(date: Date): void {
    this.time = date
  }
}


// -=+=-

interface IStyles {
  [key: string]: string
}

const css: IStyles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}
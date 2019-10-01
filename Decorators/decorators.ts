type StyleBorder = 'border-color'
type StyleBackground = 'background-border'

type ValidStyleName = StyleBorder | StyleBackground;

function Component(options: { id: string }) {
  return (target) => {
    target.elId = options.id
  }
}

function enumerable(isEnumirable: boolean) {
  return function (
    target: any, 
    propertyKey: string, 
    proppertyDescriptor: PropertyDescriptor
  ) {
    proppertyDescriptor.enumerable = isEnumirable;
  }
}

@Component({
  id: 'rainbow'
})
export class App {
  version: string;
  // private static readonly elId: string = 'rainbow';
  static elId: string;
  private int: number;
  private style: ValidStyleName;

  constructor() {
    this.style = 'border-color';
    this.int = 1500;
  }

  /**
   * Fix: Unable to resolve signature of method decorator when called as an expression
   * Возникает из-за ES3 в компиляторе
   * 
   * The return value is ignored if your script target is less than ES5
   * https://www.typescriptlang.org/docs/handbook/decorators.html#method-decorators
   * 
   * При "compilerOptions": { "target": "ES5", ... }
   * Ошибка пропадает
   */
  @enumerable(false)
  public startOnInit(): void {
    var appConoinent = document.getElementById(App.elId);

    setInterval(() => {
      if (appConoinent) {
        appConoinent.style[this.style] = generateColor();
      }
    }, this.int)
  }
}

for (const prop in App.prototype) {
  console.log('==>', prop)
}

function generateColor(): string {
  return "#"+((1<<24)*Math.random()|0).toString(16);
}

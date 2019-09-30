function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase()
}

interface IMyPosition {
  x: number | undefined,
  y: number | undefined
}

interface IMyPositionWidthDefoult extends IMyPosition {
  default: string
}

// overrides
function position(): IMyPosition
function position(a: number): IMyPositionWidthDefoult
function position(a: number, b: number): IMyPosition

function position(a? :number, b? :number) {
  if (!b && !b) {
    return {x:undefined, y: undefined}
  }

  if (a && !b) {
    return { x: a, y: undefined, default: a.toString()}
  }

  return { x: a, y: b}
}

console.log('Empty', position())
console.log('One param', position(42))
console.log('Two param', position(10, 15))

export  class Point {
    constructor(public x: number, public y: number) {}
  
    resetCenter(newX: number, newY: number): void {
      this.x = newX;
      this.y = newY;
    }
    toString(): string{
      return "x: "+ this.x + ", y: " + this.y;
    }
  }
  
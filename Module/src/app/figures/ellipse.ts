import { Point } from "./point";

export  class Ellipse extends Point {
    constructor(public center: Point, public a: number, public b: number) {
      super(center.x, center.y);
    }
  
    calculateArea(): number {
      return Math.PI * this.a * this.b;
    }
    override toString(): string{
      return "Center: x= "+ this.x + ", y= " + this.y + "; Radius1: " + this.a +"; Radius2: " + this.b;
    }
  }
  
import { Point } from "./point";

export  class Circle extends Point {
    constructor(public center: Point, public radius: number) {
      super(center.x, center.y);
    }
  
    calculateArea(): number {
      return Math.PI * this.radius * this.radius;
    }
    override toString(): string{
      return "Center: x= "+ this.x + ", y= " + this.y + "; Radius: " + this.radius;
    }
  }
  
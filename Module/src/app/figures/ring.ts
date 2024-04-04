import { Circle } from "./circle";
import { Point } from "./point";

export  class Ring extends Circle {
    constructor(center: Point, radius: number, public innerRadius: number) {
      super(center, radius);
    }
  
    override calculateArea(): number {
      const outerArea = super.calculateArea();
      const innerArea = Math.PI * this.innerRadius * this.innerRadius;
      return outerArea - innerArea;
    }

    override toString(): string{
      return "Center: x= "+ this.x + ", y= " + this.y + "; Radius: " + this.radius + "; Inner radius: " + this.innerRadius;
    }
  }
  
import { Circle } from './circle';
import { Point } from './point';

describe('Circle', () => {
  let circle: Circle;

  beforeEach(() => {
    const center = new Point(0, 0);
    const radius = 5;
    circle = new Circle(center, radius);
  });

  it('should create an instance', () => {
    expect(circle).toBeTruthy();
  });

  it('should calculate area correctly', () => {
    expect(circle.calculateArea()).toEqual(Math.PI * Math.pow(5, 2));
  });

  it('should override toString method correctly', () => {
    expect(circle.toString()).toEqual('Center: x= 0, y= 0; Radius: 5');
  });
});

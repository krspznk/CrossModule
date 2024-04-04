import { Ellipse } from './ellipse';
import { Point } from './point';

describe('Ellipse', () => {
  let ellipse: Ellipse;

  beforeEach(() => {
    const center = new Point(0, 0);
    const a = 5;
    const b = 3;
    ellipse = new Ellipse(center, a, b);
  });

  it('should create an instance', () => {
    expect(ellipse).toBeTruthy();
  });

  it('should calculate area correctly', () => {
    expect(ellipse.calculateArea()).toEqual(Math.PI * 5 * 3);
  });

  it('should override toString method correctly', () => {
    expect(ellipse.toString()).toEqual('Center: x= 0, y= 0; Radius1: 5; Radius2: 3');
  });
});

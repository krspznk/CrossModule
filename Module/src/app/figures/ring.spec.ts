import { Ring } from './ring';
import { Point } from './point';

describe('Ring', () => {
  let ring: Ring;

  beforeEach(() => {
    const center = new Point(0, 0);
    const radius = 5;
    const innerRadius = 3;
    ring = new Ring(center, radius, innerRadius);
  });

  it('should create an instance', () => {
    expect(ring).toBeTruthy();
  });

  it('should calculate area correctly', () => {
    const outerArea = Math.PI * Math.pow(5, 2);
    const innerArea = Math.PI * Math.pow(3, 2);
    const expectedArea = outerArea - innerArea;
    expect(ring.calculateArea()).toEqual(expectedArea);
  });

  it('should override toString method correctly', () => {
    expect(ring.toString()).toEqual('Center: x= 0, y= 0; Radius: 5; Inner radius: 3');
  });
});

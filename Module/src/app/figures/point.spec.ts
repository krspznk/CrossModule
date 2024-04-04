import { Point } from './point';

describe('Point', () => {
  let point: Point;

  beforeEach(() => {
    point = new Point(3, 4);
  });

  it('should create an instance', () => {
    expect(point).toBeTruthy();
  });

  it('should initialize x and y coordinates correctly', () => {
    expect(point.x).toEqual(3);
    expect(point.y).toEqual(4);
  });

  it('should reset center correctly', () => {
    point.resetCenter(5, 6);
    expect(point.x).toEqual(5);
    expect(point.y).toEqual(6);
  });

  it('should override toString method correctly', () => {
    expect(point.toString()).toEqual('x: 3, y: 4');
  });
});

import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from '../js/rectangle';

test('should properly return rectangle area', () => {
    const output = getRectangleArea(2, 3);
    expect(output).toBe(6);
});

test('should properly return rectangle perimeter', () => {
    const output = getRectanglePerimeter(2, 4);
    expect(output).toBe(16);
});
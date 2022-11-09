import { getRectangleArea, getRectanglePerimeter, getRectangleInfo } from '../js/rectangle';

test('should properly return rectangle area', () => {
    const output = getRectangleArea(2, 3);
    expect(output).toBe(6);
});

test('should properly return rectangle perimeter', () => {
    const output = getRectanglePerimeter(2, 4);
    expect(output).toBe(16);
});

test('should properly return rectangle perimeter', () => {
    const output = getRectanglePerimeter(2, 1);
    expect(output).toBe(4);
});

test('should properly return rectangle info', () => {
    const output = getRectangleInfo(2, 4);
    expect(output).toBe(console.log());
});

test('should properly return rectangle info', () => {
    const output = getRectangleInfo(16, 4);
    expect(output).toBe(undefined);
});

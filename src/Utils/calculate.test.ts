import { calculate } from './calculate';

describe('calculate', () => {
    test('should evaluate basic arithmetic expressions', () => {
        expect(calculate('2+2')).toBe('4');
        expect(calculate('5-3')).toBe('2');
        expect(calculate('4*3')).toBe('12');
        expect(calculate('8/2')).toBe('4');
    });

    test('should handle square root calculations', () => {
        expect(calculate('√9')).toBe('3');
        expect(calculate('√16')).toBe('4');
        expect(calculate('√25')).toBe('5');
    });

    test('should handle percentage calculations', () => {
        expect(calculate('50%')).toBe('0.5');
        expect(calculate('200%')).toBe('2');
        expect(calculate('75%')).toBe('0.75');
    });

    test('should handle combinations of operations', () => {
        expect(calculate('2+√16')).toBe('6');
        expect(calculate('100% + 50%')).toBe('1.5');
        expect(calculate('√9 * 2')).toBe('6');
    });

    test('should handle invalid expressions', () => {
        expect(calculate('2/0')).toBe('Error'); 
        expect(calculate('√-1')).toBe('Error'); 
        expect(calculate('invalid')).toBe('Error'); 
    });

    test('should return "Error" for invalid results', () => {
        expect(calculate('1/0')).toBe('Error'); 
        expect(calculate('2+NaN')).toBe('Error'); 
    });
});

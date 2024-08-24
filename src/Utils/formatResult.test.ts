import { formatResult } from './formatResults'

describe('formatResult', () => {
    test('should return the result as is if it is shorter than maxLength', () => {
        const result = '12345';
        expect(formatResult(result, 10)).toBe(result);
    });

    test('should return the result as is if it is exactly maxLength', () => {
        const result = '1234567890';
        expect(formatResult(result, 10)).toBe(result);
    });

    test('should truncate the result if it is longer than maxLength', () => {
        const result = '123456789012345';
        expect(formatResult(result, 10)).toBe('1234567890');
    });

    test('should handle default maxLength of 10', () => {
        const result = '123456789012345';
        expect(formatResult(result)).toBe('1234567890');
    });

    test('should return an empty string if result is empty', () => {
        const result = '';
        expect(formatResult(result, 10)).toBe('');
    });
});

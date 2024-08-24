import { act, renderHook } from '@testing-library/react';
import useKeyboardControls from './useKeyboardControls';

describe('useKeyboardControls', () => {
    it('should call onEscape when Escape key is pressed', () => {
        const onKeyPress = jest.fn();
        const onEscape = jest.fn();
        const onEnter = jest.fn();
        
        renderHook(() => useKeyboardControls(onKeyPress, onEscape, onEnter));

        act(() => {
            const event = new KeyboardEvent('keydown', { key: 'Escape' });
            window.dispatchEvent(event);
        });

        expect(onEscape).toHaveBeenCalled();
        expect(onKeyPress).not.toHaveBeenCalled();
        expect(onEnter).not.toHaveBeenCalled();
    });

    it('should call onEnter when Enter key is pressed', () => {
        const onKeyPress = jest.fn();
        const onEscape = jest.fn();
        const onEnter = jest.fn();
        
        renderHook(() => useKeyboardControls(onKeyPress, onEscape, onEnter));

        act(() => {
            const event = new KeyboardEvent('keydown', { key: 'Enter' });
            window.dispatchEvent(event);
        });

        expect(onEnter).toHaveBeenCalled();
        expect(onKeyPress).not.toHaveBeenCalled();
        expect(onEscape).not.toHaveBeenCalled();
    });

    it('should call onKeyPress for valid keys', () => {
        const onKeyPress = jest.fn();
        const onEscape = jest.fn();
        const onEnter = jest.fn();
        
        renderHook(() => useKeyboardControls(onKeyPress, onEscape, onEnter));

        const validKeys = ['+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
        validKeys.forEach(key => {
            act(() => {
                const event = new KeyboardEvent('keydown', { key });
                window.dispatchEvent(event);
            });
            expect(onKeyPress).toHaveBeenCalledWith(expect.objectContaining({ key }));
        });
    });

    it('should not call onKeyPress for invalid keys', () => {
        const onKeyPress = jest.fn();
        const onEscape = jest.fn();
        const onEnter = jest.fn();
        
        renderHook(() => useKeyboardControls(onKeyPress, onEscape, onEnter));

        act(() => {
            const event = new KeyboardEvent('keydown', { key: 'InvalidKey' });
            window.dispatchEvent(event);
        });

        expect(onKeyPress).not.toHaveBeenCalled();
    });
});

import { useEffect } from 'react';

type HandleKeyPressFunction = (event: KeyboardEvent) => void;

const useKeyboardControls = (
    onKeyPress: HandleKeyPressFunction,
    onEscape: () => void,
    onEnter: () => void
) => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            switch (event.key) {
                case 'Escape':
                    onEscape();
                    break;
                case 'Enter':
                    onEnter();
                    break;
                case '+':
                case '-':
                case '*':
                case '/':
                case '0':
                case '1':
                case '2':
                case '3':
                case '4':
                case '5':
                case '6':
                case '7':
                case '8':
                case '9':
                case '.':
                    onKeyPress(event);
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [onKeyPress, onEscape, onEnter]);
};

export default useKeyboardControls;

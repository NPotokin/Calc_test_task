import React, { useState } from 'react';
import styles from './Calculator.module.css';
import Button from '../Button/Button';
import Display from '../Display/Display';
import Result from '../Result/Result';
import useKeyboardControls from '../../Hooks/useKeyboardControls';
import { calculate } from '../../Utils/calculate';
import { formatResult } from '../../Utils/formatResults';
const Calculator: React.FC = () => {
    const [expression, setExpression] = useState<string>('');
    const [result, setResult] = useState<string>('0');

    const handleKeyPress = (event: KeyboardEvent) => {
        const key = event.key;
        if (!isNaN(Number(key)) || key === '.') {
            setExpression(prev => prev + (key === '.' ? ',' : key));
        } else if (['+', '-', '*', '/'].includes(key)) {
            setExpression(prev => prev + key);
        }
    };

    const handleEscape = () => {
        setExpression('');
        setResult('0');
    };

    const handleEnter = () => {
        calculateResult();
    };

    useKeyboardControls(handleKeyPress, handleEscape, handleEnter);

    const handleClick = (label: string) => {
        if (label === 'C') {
            setExpression('');
            setResult('0');
        } else {
            setExpression(prev => prev + label);
        }
    };

    const calculateResult = () => {
        const calculationResult = calculate(expression);
        const formattedResult = formatResult(calculationResult);
        setResult(formattedResult);
    };

    return (
        <div className={styles.calculator}>
            <Display value={expression} />
            <Result value={result} />
            <div className={styles.calculator__divider} />
            <div className={styles.calculator__buttons}>
                <Button label="C" onClick={() => handleClick('C')} />
                <Button label="%" onClick={() => handleClick('%')} />
                <Button label="√" onClick={() => handleClick('√')} />
                <Button label="/" onClick={() => handleClick('/')} />
                <Button label="7" onClick={() => handleClick('7')} />
                <Button label="8" onClick={() => handleClick('8')} />
                <Button label="9" onClick={() => handleClick('9')} />
                <Button label="*" onClick={() => handleClick('*')} />
                <Button label="4" onClick={() => handleClick('4')} />
                <Button label="5" onClick={() => handleClick('5')} />
                <Button label="6" onClick={() => handleClick('6')} />
                <Button label="-" onClick={() => handleClick('-')} />
                <Button label="1" onClick={() => handleClick('1')} />
                <Button label="2" onClick={() => handleClick('2')} />
                <Button label="3" onClick={() => handleClick('3')} />
                <Button label="+" onClick={() => handleClick('+')} />
                <Button label="00" onClick={() => handleClick('00')} />
                <Button label="0" onClick={() => handleClick('0')} />
                <Button label="," onClick={() => handleClick(',')} />
                <Button label="=" onClick={calculateResult} modifier="special" />
            </div>
        </div>
    );
};

export default Calculator;

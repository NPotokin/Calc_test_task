export const calculate = (expression: string): string => {
    try {
        let sanitizedExpression = expression.replace(',', '.');

        sanitizedExpression = sanitizedExpression.replace(/√(\d+\.?\d*)/g, (_, p1) => {
            return Math.sqrt(parseFloat(p1)).toString();
        });

        sanitizedExpression = sanitizedExpression.replace(/(\d+\.?\d*)%/g, (_, p1) => {
            return (parseFloat(p1) / 100).toString();
        });

        const result = new Function('return ' + sanitizedExpression)();
        
        if (result === Infinity || isNaN(result)) {
            return 'Error';
        }
        
        return result.toString();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return 'Error';
    }
};
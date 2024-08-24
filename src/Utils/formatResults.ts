export const formatResult = (result: string, maxLength: number = 10): string => {
    if (result.length > maxLength) {
        return result.slice(0, maxLength);
    }
    return result;
};

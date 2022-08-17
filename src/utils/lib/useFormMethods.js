export const checkLength = (inputValue, min, max) => inputValue.length < min || inputValue.length > max;

export const checkFirstLetterUppercase = (inputValue) => (inputValue[0] ? inputValue[0] !== inputValue[0].toUpperCase() : true);

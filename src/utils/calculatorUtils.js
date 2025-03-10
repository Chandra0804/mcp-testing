/**
 * Evaluates a mathematical expression with two operands and an operator
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @param {string} operator - Mathematical operator ('+', '-', '×', '÷')
 * @returns {number} - Result of the operation
 */
export const evaluateExpression = (a, b, operator) => {
  switch (operator) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '×':
      return a * b;
    case '÷':
      return b !== 0 ? a / b : 'Error';
    default:
      return b;
  }
};

/**
 * Formats a number for display
 * @param {string} value - Value to format
 * @returns {string} - Formatted value
 */
export const formatDisplayValue = (value) => {
  // Handle error cases
  if (value === 'Error') return value;
  
  // Convert to number for processing
  const num = parseFloat(value);
  
  // Check if the number is an integer
  if (Number.isInteger(num)) {
    return num.toString();
  }
  
  // For floating point numbers, limit to reasonable precision
  return num.toString();
};

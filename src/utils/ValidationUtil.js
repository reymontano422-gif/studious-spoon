/**
 * Validation Utility Functions
 */

class ValidationUtil {
  /**
   * Validate email format
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  /**
   * Validate phone number format
   */
  static isValidPhone(phone) {
    const phoneRegex = /^[\d\-\+\(\)\s]{10,}$/;
    return phoneRegex.test(phone);
  }

  /**
   * Validate positive number
   */
  static isPositiveNumber(num) {
    return typeof num === 'number' && num > 0;
  }

  /**
   * Validate non-empty string
   */
  static isNonEmptyString(str) {
    return typeof str === 'string' && str.trim().length > 0;
  }

  /**
   * Validate date
   */
  static isValidDate(date) {
    return date instanceof Date && !isNaN(date);
  }
}

module.exports = ValidationUtil;

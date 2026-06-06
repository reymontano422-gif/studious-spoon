/**
 * Date Utility Functions
 */

class DateUtil {
  /**
   * Format date to string
   */
  static formatDate(date) {
    return date.toISOString().split('T')[0];
  }

  /**
   * Parse date string to Date object
   */
  static parseDate(dateString) {
    return new Date(dateString);
  }

  /**
   * Get days between two dates
   */
  static daysBetween(startDate, endDate) {
    const diffTime = Math.abs(endDate - startDate);
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }

  /**
   * Add days to a date
   */
  static addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  /**
   * Check if date is in the past
   */
  static isInPast(date) {
    return date < new Date();
  }
}

module.exports = DateUtil;

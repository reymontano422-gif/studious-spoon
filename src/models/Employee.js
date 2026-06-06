/**
 * Employee Model
 * Represents a construction company employee
 */

class Employee {
  constructor(id, firstName, lastName, role, email, phone, salary, hireDate) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.role = role; // supervisor, crew-lead, general-laborer, etc.
    this.email = email;
    this.phone = phone;
    this.salary = salary;
    this.hireDate = hireDate;
    this.isActive = true;
    this.createdAt = new Date();
  }

  /**
   * Get full name
   */
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Calculate years of service
   */
  getYearsOfService() {
    const today = new Date();
    const years = today.getFullYear() - this.hireDate.getFullYear();
    return Math.floor(years);
  }

  /**
   * Deactivate employee
   */
  deactivate() {
    this.isActive = false;
  }

  /**
   * Reactivate employee
   */
  activate() {
    this.isActive = true;
  }

  /**
   * Update employee information
   */
  update(data) {
    Object.assign(this, data);
  }
}

module.exports = Employee;

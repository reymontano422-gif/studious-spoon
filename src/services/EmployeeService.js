/**
 * Employee Service
 * Handles business logic for employee management
 */

const Employee = require('../models/Employee');

class EmployeeService {
  constructor() {
    this.employees = [];
    this.nextId = 1;
  }

  /**
   * Hire a new employee
   */
  hireEmployee(firstName, lastName, role, email, phone, salary, hireDate) {
    const employee = new Employee(this.nextId++, firstName, lastName, role, email, phone, salary, hireDate);
    this.employees.push(employee);
    return employee;
  }

  /**
   * Get employee by ID
   */
  getEmployee(id) {
    return this.employees.find(e => e.id === id);
  }

  /**
   * Get all active employees
   */
  getActiveEmployees() {
    return this.employees.filter(e => e.isActive);
  }

  /**
   * Get all employees
   */
  getAllEmployees() {
    return this.employees;
  }

  /**
   * Get employees by role
   */
  getEmployeesByRole(role) {
    return this.employees.filter(e => e.role === role && e.isActive);
  }

  /**
   * Terminate employee
   */
  terminateEmployee(id) {
    const employee = this.getEmployee(id);
    if (employee) {
      employee.deactivate();
    }
    return employee;
  }

  /**
   * Get payroll summary
   */
  getPayrollSummary() {
    const activeEmployees = this.getActiveEmployees();
    const totalPayroll = activeEmployees.reduce((sum, emp) => sum + emp.salary, 0);
    return {
      totalEmployees: activeEmployees.length,
      totalMonthlyPayroll: totalPayroll,
      averageSalary: Math.round(totalPayroll / activeEmployees.length)
    };
  }
}

module.exports = EmployeeService;

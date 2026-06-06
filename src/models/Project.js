/**
 * Project Model
 * Represents a construction project
 */

class Project {
  constructor(id, name, clientId, description, startDate, endDate, budget, status = 'pending') {
    this.id = id;
    this.name = name;
    this.clientId = clientId;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
    this.budget = budget;
    this.status = status; // pending, in-progress, completed, on-hold
    this.expenses = 0;
    this.createdAt = new Date();
  }

  /**
   * Calculate project progress percentage
   */
  getProgress() {
    const total = this.endDate.getTime() - this.startDate.getTime();
    const elapsed = new Date().getTime() - this.startDate.getTime();
    return Math.min(100, Math.round((elapsed / total) * 100));
  }

  /**
   * Get remaining budget
   */
  getRemainingBudget() {
    return this.budget - this.expenses;
  }

  /**
   * Add expenses to project
   */
  addExpense(amount) {
    this.expenses += amount;
  }

  /**
   * Check if project is within budget
   */
  isWithinBudget() {
    return this.expenses <= this.budget;
  }

  /**
   * Update project status
   */
  updateStatus(newStatus) {
    const validStatuses = ['pending', 'in-progress', 'completed', 'on-hold'];
    if (validStatuses.includes(newStatus)) {
      this.status = newStatus;
    }
  }
}

module.exports = Project;

/**
 * Invoice Model
 * Represents a financial invoice for construction services
 */

class Invoice {
  constructor(id, projectId, clientId, amount, dueDate, status = 'pending') {
    this.id = id;
    this.projectId = projectId;
    this.clientId = clientId;
    this.amount = amount;
    this.dueDate = dueDate;
    this.status = status; // pending, paid, overdue
    this.items = [];
    this.createdAt = new Date();
    this.paidDate = null;
  }

  /**
   * Add line item to invoice
   */
  addItem(description, quantity, unitPrice) {
    const item = {
      description,
      quantity,
      unitPrice,
      total: quantity * unitPrice
    };
    this.items.push(item);
    this.calculateTotal();
  }

  /**
   * Calculate total invoice amount
   */
  calculateTotal() {
    this.amount = this.items.reduce((sum, item) => sum + item.total, 0);
  }

  /**
   * Mark invoice as paid
   */
  markAsPaid() {
    this.status = 'paid';
    this.paidDate = new Date();
  }

  /**
   * Check if invoice is overdue
   */
  isOverdue() {
    return this.status !== 'paid' && new Date() > this.dueDate;
  }

  /**
   * Get invoice summary
   */
  getSummary() {
    return {
      invoiceId: this.id,
      amount: this.amount,
      status: this.status,
      dueDate: this.dueDate,
      itemCount: this.items.length
    };
  }
}

module.exports = Invoice;

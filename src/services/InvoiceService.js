/**
 * Invoice Service
 * Handles business logic for invoice and financial management
 */

const Invoice = require('../models/Invoice');

class InvoiceService {
  constructor() {
    this.invoices = [];
    this.nextId = 1;
  }

  /**
   * Create a new invoice
   */
  createInvoice(projectId, clientId, amount, dueDate) {
    const invoice = new Invoice(this.nextId++, projectId, clientId, amount, dueDate);
    this.invoices.push(invoice);
    return invoice;
  }

  /**
   * Get invoice by ID
   */
  getInvoice(id) {
    return this.invoices.find(i => i.id === id);
  }

  /**
   * Get all invoices
   */
  getAllInvoices() {
    return this.invoices;
  }

  /**
   * Get invoices by project
   */
  getInvoicesByProject(projectId) {
    return this.invoices.filter(i => i.projectId === projectId);
  }

  /**
   * Get invoices by client
   */
  getInvoicesByClient(clientId) {
    return this.invoices.filter(i => i.clientId === clientId);
  }

  /**
   * Get overdue invoices
   */
  getOverdueInvoices() {
    return this.invoices.filter(i => i.isOverdue());
  }

  /**
   * Mark invoice as paid
   */
  payInvoice(id) {
    const invoice = this.getInvoice(id);
    if (invoice) {
      invoice.markAsPaid();
    }
    return invoice;
  }

  /**
   * Get financial summary
   */
  getFinancialSummary() {
    const totalInvoiced = this.invoices.reduce((sum, inv) => sum + inv.amount, 0);
    const totalPaid = this.invoices
      .filter(inv => inv.status === 'paid')
      .reduce((sum, inv) => sum + inv.amount, 0);
    const totalPending = totalInvoiced - totalPaid;

    return {
      totalInvoiced,
      totalPaid,
      totalPending,
      overdueCount: this.getOverdueInvoices().length
    };
  }
}

module.exports = InvoiceService;

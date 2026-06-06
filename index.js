/**
 * Main Application Entry Point
 * Construction Services Business Management System
 */

const ClientService = require('./src/services/ClientService');
const ProjectService = require('./src/services/ProjectService');
const EmployeeService = require('./src/services/EmployeeService');
const InvoiceService = require('./src/services/InvoiceService');

// Initialize services
const clientService = new ClientService();
const projectService = new ProjectService();
const employeeService = new EmployeeService();
const invoiceService = new InvoiceService();

/**
 * Demo: Create sample data
 */
function initializeSampleData() {
  console.log('\n=== Construction Services Management System ===\n');

  // Create sample clients
  const client1 = clientService.createClient(
    'John Smith Construction',
    'john@smithconstruction.com',
    '555-0101',
    '123 Oak Street',
    'Springfield',
    'IL',
    '62701'
  );

  const client2 = clientService.createClient(
    'BuildRight Corp',
    'contact@buildright.com',
    '555-0102',
    '456 Elm Avenue',
    'Chicago',
    'IL',
    '60601'
  );

  console.log('✓ Clients created:', clientService.getAllClients().length);

  // Create sample projects
  const project1 = projectService.createProject(
    'Office Building Renovation',
    client1.id,
    'Complete renovation of commercial office building',
    new Date('2026-06-01'),
    new Date('2026-12-31'),
    150000
  );

  const project2 = projectService.createProject(
    'Residential Home Construction',
    client2.id,
    'New 2-story residential home construction',
    new Date('2026-07-01'),
    new Date('2027-03-31'),
    250000
  );

  console.log('✓ Projects created:', projectService.getAllProjects().length);

  // Create sample employees
  const emp1 = employeeService.hireEmployee(
    'James',
    'Johnson',
    'supervisor',
    'james@company.com',
    '555-1001',
    75000,
    new Date('2020-01-15')
  );

  const emp2 = employeeService.hireEmployee(
    'Maria',
    'Garcia',
    'crew-lead',
    'maria@company.com',
    '555-1002',
    55000,
    new Date('2021-03-20')
  );

  const emp3 = employeeService.hireEmployee(
    'Robert',
    'Chen',
    'general-laborer',
    'robert@company.com',
    '555-1003',
    45000,
    new Date('2023-06-01')
  );

  console.log('✓ Employees hired:', employeeService.getActiveEmployees().length);

  // Create sample invoices
  const invoice1 = invoiceService.createInvoice(
    project1.id,
    client1.id,
    50000,
    new Date('2026-07-01')
  );
  invoice1.addItem('Foundation Work', 1, 15000);
  invoice1.addItem('Framing', 1, 25000);
  invoice1.addItem('Materials', 1, 10000);

  const invoice2 = invoiceService.createInvoice(
    project2.id,
    client2.id,
    75000,
    new Date('2026-08-01')
  );
  invoice2.addItem('Labor', 100, 500);
  invoice2.addItem('Materials', 1, 25000);

  console.log('✓ Invoices created:', invoiceService.getAllInvoices().length);

  // Display summaries
  console.log('\n--- PROJECT SUMMARIES ---');
  projectService.getAllProjects().forEach(project => {
    const budget = projectService.getBudgetSummary(project.id);
    console.log(`\n${project.name}:`);
    console.log(`  Budget: $${budget.totalBudget}`);
    console.log(`  Expenses: $${budget.totalExpenses}`);
    console.log(`  Remaining: $${budget.remaining}`);
  });

  console.log('\n--- PAYROLL SUMMARY ---');
  const payroll = employeeService.getPayrollSummary();
  console.log(`Total Employees: ${payroll.totalEmployees}`);
  console.log(`Monthly Payroll: $${payroll.totalMonthlyPayroll}`);
  console.log(`Average Salary: $${payroll.averageSalary}`);

  console.log('\n--- FINANCIAL SUMMARY ---');
  const financial = invoiceService.getFinancialSummary();
  console.log(`Total Invoiced: $${financial.totalInvoiced}`);
  console.log(`Total Paid: $${financial.totalPaid}`);
  console.log(`Total Pending: $${financial.totalPending}`);
  console.log(`Overdue Invoices: ${financial.overdueCount}`);

  console.log('\n✓ System initialized successfully!\n');
}

// Run the application
initializeSampleData();

module.exports = {
  clientService,
  projectService,
  employeeService,
  invoiceService
};

/**
 * Project Service
 * Handles business logic for project management
 */

const Project = require('../models/Project');

class ProjectService {
  constructor() {
    this.projects = [];
    this.nextId = 1;
  }

  /**
   * Create a new project
   */
  createProject(name, clientId, description, startDate, endDate, budget) {
    const project = new Project(this.nextId++, name, clientId, description, startDate, endDate, budget);
    this.projects.push(project);
    return project;
  }

  /**
   * Get project by ID
   */
  getProject(id) {
    return this.projects.find(p => p.id === id);
  }

  /**
   * Get all projects
   */
  getAllProjects() {
    return this.projects;
  }

  /**
   * Get projects by client
   */
  getProjectsByClient(clientId) {
    return this.projects.filter(p => p.clientId === clientId);
  }

  /**
   * Get projects by status
   */
  getProjectsByStatus(status) {
    return this.projects.filter(p => p.status === status);
  }

  /**
   * Update project
   */
  updateProject(id, data) {
    const project = this.getProject(id);
    if (project) {
      Object.assign(project, data);
    }
    return project;
  }

  /**
   * Delete project
   */
  deleteProject(id) {
    this.projects = this.projects.filter(p => p.id !== id);
  }

  /**
   * Get budget summary
   */
  getBudgetSummary(id) {
    const project = this.getProject(id);
    if (!project) return null;

    return {
      projectId: id,
      totalBudget: project.budget,
      totalExpenses: project.expenses,
      remaining: project.getRemainingBudget(),
      percentageUsed: Math.round((project.expenses / project.budget) * 100)
    };
  }
}

module.exports = ProjectService;

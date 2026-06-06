/**
 * Client Service
 * Handles business logic for client management
 */

const Client = require('../models/Client');

class ClientService {
  constructor() {
    this.clients = [];
    this.nextId = 1;
  }

  /**
   * Create a new client
   */
  createClient(name, email, phone, address, city, state, zipCode) {
    const client = new Client(this.nextId++, name, email, phone, address, city, state, zipCode);
    this.clients.push(client);
    return client;
  }

  /**
   * Get client by ID
   */
  getClient(id) {
    return this.clients.find(c => c.id === id);
  }

  /**
   * Get all clients
   */
  getAllClients() {
    return this.clients;
  }

  /**
   * Search clients by name
   */
  searchByName(name) {
    return this.clients.filter(c => c.name.toLowerCase().includes(name.toLowerCase()));
  }

  /**
   * Update client
   */
  updateClient(id, data) {
    const client = this.getClient(id);
    if (client) {
      client.update(data);
    }
    return client;
  }

  /**
   * Delete client
   */
  deleteClient(id) {
    this.clients = this.clients.filter(c => c.id !== id);
  }

  /**
   * Validate client data
   */
  isValidClient(client) {
    return client.isValid();
  }
}

module.exports = ClientService;

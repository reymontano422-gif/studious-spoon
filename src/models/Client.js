/**
 * Client Model
 * Represents a construction services client
 */

class Client {
  constructor(id, name, email, phone, address, city, state, zipCode) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zipCode = zipCode;
    this.createdAt = new Date();
  }

  /**
   * Get full address
   */
  getFullAddress() {
    return `${this.address}, ${this.city}, ${this.state} ${this.zipCode}`;
  }

  /**
   * Validate client information
   */
  isValid() {
    return this.name && this.email && this.phone && this.address;
  }

  /**
   * Update client information
   */
  update(data) {
    Object.assign(this, data);
  }
}

module.exports = Client;

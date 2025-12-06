class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class Node {
  constructor(contact) {
    this.contact = contact;
    this.left = null;
    this.right = null;
  }
}

class ContactTree {
    constructor(array) {
        this.root = buildContactTree(array);
    }
}

function buildContactTree(array) {
    
}
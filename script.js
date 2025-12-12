class Contact {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
  }
}

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class ContactTree {
    constructor(array) {
        this.root = buildContactTree(array);
    }

    insert(value) {
        this.root = insertContact(this.root, value);
    }
}

// 1
function buildContactTree(array) {
  if (!array || array.length === 0) return null;

  // sort array alphabetically by contact name
  const sorted = [...array].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // recursively build a balanced BST
  function buildBalanced(arr, start, end) {

    // base case
    if (start > end) return null; 

    // create root with middle element to keep  tree balanced
    const mid = Math.floor((start + end) / 2);
    const node = new Node(arr[mid]);

    // build left and right subtrees
    node.left = buildBalanced(arr, start, mid - 1);
    node.right = buildBalanced(arr, mid + 1, end);

    return node;
  }

  return buildBalanced(sorted, 0, sorted.length - 1);
}

// 2
function insertContact(node, value) {
  if (node === null) {
    console.log(`Inserting new node: ${value.name}`);
    return new Node(value);
  }

  if (value.name.localeCompare(node.data.name) < 0) {
    console.log(`Going left from ${node.data.name}`);
    node.left = insertContact(node.left, value);
  } else if (value.name.localeCompare(node.data.name) > 0) {
    console.log(`Going right from ${node.data.name}`);
    node.right = insertContact(node.right, value);
  } else {
    console.log(`Value ${value.name} already exists — skipping`);
  }

  return node;
}

const contacts = [
  new Contact("Alice Johnson", "555-1010"),
  new Contact("Brian Smith", "555-2020"),
  new Contact("Cynthia Adeyemi", "555-3030"),
  new Contact("David Okoro", "555-4040"),
  new Contact("Emily Carter", "555-5050"),
  new Contact("Farouk Musa", "555-6060"),
  new Contact("Grace Thompson", "555-7070"),
  new Contact("Henry Uche", "555-8080"),
  new Contact("Ibrahim Sule", "555-9090"),
  new Contact("Jessica Ono", "555-0001")
]

// create balanced tree
const balancedContactTree = new ContactTree(contacts);
console.log(balancedContactTree.root);

// insert new contact
person = new Contact("Kelly Bison", "555-0050")
balancedContactTree.insert(person);
console.log("\n New Tree:", balancedContactTree.root);

// FIX INSERTION LOGIC, UNDERSTAND ENDING RETURN STATEMENTS IN 1 AND 2 AFTER
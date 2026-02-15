// Create a base class User
// properties: name, email
// method: getRole() → returns "User"
// Create a class Admin that extends User
// additional property: permissions (array)
// override getRole() → returns "Admin"
// Create a method hasPermission(permission) in Admin
// returns true or false

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getRole() {
    return "User";
  }
}

class Admin extends User {
  constructor(name, email, permissions) {
    super(name, email);
    this.permissions = permissions;
  }

  getRole() {
    return "Admin";
  }

  hasPermission(permission) {
    return this.permissions.includes(permission);
  }
}

const admin = new Admin(
  "Ravish",
  "ravish@gmail.com",
  ["READ", "WRITE"]
);

console.log(admin.getRole()); // Admin
console.log(admin.hasPermission("WRITE")); // true
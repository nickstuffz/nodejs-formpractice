// storages/usersStorage.js
// This class lets us simulate interacting with a database.
class UsersStorage {
  constructor() {
    // this.storage, testing object
    this.storage = {
      0: {
        id: "0",
        firstName: "Nicholas",
        lastName: "Ng",
        email: "nickng62@gmail.com",
        age: "26",
        bio: "I like pretzels.",
      },
      1: {
        id: 1,
        firstName: "Toffle",
        lastName: "Waffle",
        email: "toffle@gmail.com",
        age: "18",
        bio: "I am a snek.",
      },
      2: {
        id: 2,
        firstName: "Chloe",
        lastName: "Blazey",
        email: "chloeblazey@gmail.com",
        age: "27",
        bio: "I am the gooby queen.",
      },
    };
    this.id = 0;
  }

  addUser({ firstName, lastName, email, age, bio }) {
    const id = this.id;
    this.storage[id] = { id, firstName, lastName, email, age, bio };
    this.id++;
  }

  getUsers() {
    console.log(Object.values(this.storage));
    return Object.values(this.storage);
  }

  getUser(id) {
    return this.storage[id];
  }

  updateUser(id, { firstName, lastName, email, age, bio }) {
    this.storage[id] = { id, firstName, lastName, email, age, bio };
  }

  deleteUser(id) {
    delete this.storage[id];
  }

  //WORKING
  searchUsers(query) {
    const users = Object.values(this.storage);

    const matches = users.filter((user) => {
      let userValues = Object.values(user);
      let match = userValues.some((value) => {
        let str = value.toString();
        return str.includes(query);
      });
      return match;
    });
    return matches;
  }
}
// Rather than exporting the class, we can export an instance of the class by instantiating it.
// This ensures only one instance of this class can exist, also known as the "singleton" pattern.
module.exports = new UsersStorage();

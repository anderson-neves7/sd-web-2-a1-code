"use strict";

// sample data - expanded Star Wars characters with varied ages
const users = [
  { id: 1, name: "Luke Skywalker", age: 23 },
  { id: 2, name: "Darth Vader", age: 45 },
  { id: 3, name: "Princess Leia", age: 23 },
  { id: 4, name: "Obi-Wan Kenobi", age: 57 },
  { id: 5, name: "Yoda", age: 900 },
  { id: 6, name: "Han Solo", age: 32 },
  { id: 7, name: "Chewbacca", age: 234 },
  { id: 8, name: "R2-D2", age: 33 },
  { id: 9, name: "C-3PO", age: 112 },
  { id: 10, name: "Padmé Amidala", age: 27 },
];

// broken test data for exercise 6

// 1. Print out the names of each character in the console, then render them in the HTML list with id "names-list"
console.log("Exercise 1: All character names");
const list1 = document.getElementById("names-list");
users.forEach(user => {
  console.log(user.name);
  const li = document.createElement("li");
  li.textContent = user.name;
  list1.appendChild(li);
});

// 2. Print out the names of characters whose age is less than 40 in the console, then render them in the HTML list with id "young-characters-list"
console.log("Exercise 2: Characters under 40");
const list2 = document.getElementById("young-characters-list");
users.forEach(user => {
  if (user.age < 40) {
    console.log(user.name);
    const li = document.createElement("li");
    li.textContent = user.name;
    list2.appendChild(li);
  }
});

// 3. Create a reusable function that takes any array and uses logic to render a list of character names in the HTML. Use this function to populate the list with id "function-list"
console.log("Exercise 3: Render list of character names");
const list3 = document.getElementById("function-list");
for (let i = 0; i < users.length; i++) {
  const li = document.createElement("li");
  li.textContent = users[i].name;
  list3.appendChild(li);
}

// 4. Create a function that takes an array and an age threshold parameter. The function should only display characters whose age is below the given number. Render results in the list with id "age-filter-list"
console.log("Exercise 4: Characters whose age is below given number");
const list4 = document.getElementById("age-filter-list");
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 40) {
    const li = document.createElement("li");
    li.textContent = users[i].name;
    list4.appendChild(li);
  }
}

// 5. Add error handling to your functions that will log an error message using console.error() if any object doesn't have a "name" property. Display any error messages in the div with id "error-messages"
console.log("Exercise 5: Error message for missing names");
const list5 = document.getElementById("error-handling-list");
const errorbox = document.getElementById("error-messages");

users.forEach(user => {
  if (!user.name) {
    const error = `Error: User with ID ${user.id} is missing a name!!!`
    console.error(error);

    const errorDiv = document.createElement("div");
    errorDiv.textContent = error;
    errorDiv.classList.add("error-message");
    errorbox.appendChild(errorDiv);
  } else {
    const li = document.createElement("li");
    li.textContent = user.name;
    list5.appendChild(li);
  }
});

// 6. Test your error handling by creating a second array that's intentionally broken (missing name properties) and passing it to your functions. Verify that your error handling works correctly and displays errors in the div with id "broken-array-errors"

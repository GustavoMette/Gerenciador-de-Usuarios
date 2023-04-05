let users = [];

function addUser(name, email, password, age, position) {
    let user = {
      id: users.length + 1,
      name: name,
      email: email,
      password: password,
      age: age,
      position: position
    };
    users.push(user);
  }

  function findUserById(id) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        return users[i];
      }
    }
    return null;
  }

  function editUser(id, name, email, password, age, position) {
    let user = findUserById(id);
    if (user) {
      user.name = name;
      user.email = email;
      user.password = password;
      user.age = age;
      user.position = position;
      return true;
    }
    return false;
  }

  function deleteUser(id) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        users.splice(i, 1);
        return true;
      }
    }
    return false;
  }
  
  function addUser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let age = document.getElementById("age").value;
    let position = document.getElementById("position").value;

    addUser(name, email, password, age, position);
renderUserList();

  }

  function editUser(id) {
    let name = prompt("Enter new name:");
    let email = prompt("Enter new email:");
    let password = prompt("Enter new password:");
    let age = prompt("Enter new age:");
    let position = prompt("Enter new position:");

    editUser(id, name, email, password, age, position);
renderUserList();
  }

  function deleteUser(id) {
    deleteUser(id);
    renderUserList();
    }
    
    function renderUserList() {
    let userList = document.getElementById("user-list");
    userList.innerHTML = "";

    for (let i = 0; i < users.length; i++) {
        let user = users[i];
        let li = document.createElement("li");
        li.textContent = user.name;
        
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = function() {
          editUser(user.id);
        };
        
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
          deleteUser(user.id);
        };
        
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        userList.appendChild(li);
      }
    }

    renderUserList();

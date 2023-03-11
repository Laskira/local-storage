const apiUrl = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();
let usersArray = [];

function saveDataLocalStorage() {
  usersArray = JSON.parse(this.response);
  users = JSON.stringify(usersArray);
  localStorage.setItem("users", users);
}

function getDataLocalStorage() {
  let usersArray = JSON.parse(localStorage.getItem("users"));

  let container = document.getElementById("data");
  for (var i = 0; i < usersArray.length; i++) {
    let card = document.createElement("div");
    card.classList.add("card");

    let name = document.createElement("p");
    name.innerHTML = "Nombre: " + usersArray[i].name;
    card.appendChild(name);

    let userImage = document.createElement("img");
    userImage.setAttribute("src", "profile.png");
    card.appendChild(userImage);

    let phone = document.createElement("p");
    phone.innerHTML = "Telefono: " + usersArray[i].phone;
    card.appendChild(phone);

    let email = document.createElement("p");
    email.innerHTML = "email: " + usersArray[i].email;
    card.appendChild(email);

    let websitecv = document.createElement("p");
    websitecv.innerHTML = "websitecv1: " + usersArray[i].website;
    card.appendChild(websitecv);

    container.appendChild(card);
  }
}

getDataLocalStorage();

//Request y llamado de mi función
xhr.addEventListener("load", saveDataLocalStorage);
xhr.open("GET", `${apiUrl}/users`);
xhr.send();

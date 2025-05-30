const userImageEl = document.getElementById("user-image");
const userNameEl = document.getElementById("user-name");
const userEmailEl = document.getElementById("user-email");
const newUserBtn = document.getElementById("new-user-btn");

fetchUser();
newUserBtn.addEventListener("click", fetchUser);

function fetchUser() {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];
      const { picture, name, email } = user;

      userImageEl.setAttribute("src", picture.large);
      userImageEl.setAttribute("alt", `${name.first} ${name.last}`);
      userNameEl.textContent = `Name: ${name.first} ${name.last}`;
      userEmailEl.textContent = `Email: ${email}`;
    });
}

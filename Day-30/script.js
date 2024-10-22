

const nameStorage = () => {
  const user = prompt("Please enter your name ?");
  if (user) localStorage.setItem("username", user); updateTheName();
};
const updateTheName = () => {
  const username = localStorage.getItem("username");
  document.querySelector("#storage").textContent = username? username : "Oops, no name exist";
};
document.querySelector("#btn").addEventListener("click", nameStorage), updateTheName();


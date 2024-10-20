

const username = () => {
    const name = document.querySelector("input").value;
    localStorage.setItem("The username is saved : ", name);
};
document.querySelector("button").addEventListener("click", username);



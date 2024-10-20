


const text = document.querySelector("#theText");
const toggleBtn = document.querySelector("#theBtn");

toggleBtn.addEventListener("click",()=>{
    text.style.display = text.style.display === "none" ? "block" : "none";
});



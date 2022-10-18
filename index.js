const body = document.querySelector("body")
const toggle = document.querySelector("#toggle")
const sunIcon = document.querySelector(".toggle .bxs-sun")
const moonIcon = document.querySelector(".toggle .bx-moon")

let rang = JSON.parse(localStorage.getItem("background")) || "light"

body.className = rang

toggle.addEventListener("change", () => {
    if (rang == "light") {
      localStorage.setItem("background", JSON.stringify("dark"))
      sunIcon.className = "bx bx-sun"
      body.className = "dark"
      rang = "dark"
    } else if  (body.className == "dark") {
      localStorage.setItem("background", JSON.stringify("light"))
      sunIcon.className = "bx bxs-sun"
      body.className = "light"
      rang = "light" 
    } 
    })




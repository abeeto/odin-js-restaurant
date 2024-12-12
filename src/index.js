import "./style.css";

import createHomePage from "./createHomePage";
import createAboutPage from "./createAboutPage";
import createMenuPage from "./createMenuPage";

const clearContent = () => {   
  const myNode = document.querySelector("#content");
  while (myNode.lastElementChild) {
    myNode.removeChild(myNode.lastElementChild);
  }}

const retrievePage = function(e) {
    clearContent();
    switch (e.target.innerText) {
        case "Home":
            createHomePage();
            break;
        case "About":
            createAboutPage();
            break;
        case "Menu":
            createMenuPage();
            break;
        default:
            console.error("NOT A BUTTON");
    }
};
const navButtonNodes = document.querySelectorAll(".nav-button");
navButtonNodes.forEach((node) => node.addEventListener("click", retrievePage))
const navBar = document.querySelector(".navbar");
navBar.addEventListener("click", (e) => console.log(retrieveButton(e)));

// createHomePage();
// createAboutPage();
// createMenuPage();

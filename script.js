import { createCard } from "./cardModule.js";

const createCardBtn = document.getElementById("createCardBtn");
const cardContainer = document.getElementById("cardContainer");

createCardBtn.addEventListener("click", () => {
  const newCard = createCard();
  cardContainer.appendChild(newCard);
});

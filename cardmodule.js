// Function to create a placeholder card
export function createCard() {
  const card = document.createElement("div");
  card.classList.add("card");

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "×";

  const title = document.createElement("h2");
  title.textContent = "Card Title";

  const desc = document.createElement("p");
  desc.textContent = "This is a sample card description.";

  deleteBtn.addEventListener("click", () => {
    card.remove();
  });

  card.appendChild(deleteBtn);
  card.appendChild(title);
  card.appendChild(desc);

  return card;
}

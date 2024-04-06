let id = 0;
function addExpense(event) {
  event.preventDefault();
  const amount = event.target.amount.value;
  const description = event.target.description.value;
  const category = event.target.category.value;
  console.log(amount + description + category);

  const list = document.getElementById("list-items");
  const item = document.createElement("li");
  item.setAttribute("id", id);
  item.innerHTML =
    amount +
    " " +
    description +
    " " +
    category +
    " <button class='delete-btn'>Delete </button>" +
    " " +
    "<button class='edit-btn'>Edit</button>";
  list.appendChild(item);
  let valuetoadd = amount + "-" + description + "-" + category;
  localStorage.setItem(id, valuetoadd);
  id++;
}

const list = document.querySelector("#list-items");
list.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const parent = event.target.parentElement;
    list.removeChild(parent);
    localStorage.removeItem(parent.id);
  } else if (event.target.classList.contains("edit-btn")) {
    console.log("Edit");
    const parent = event.target.parentElement;
    const values = localStorage.getItem(parent.id).split('-');
    document.getElementById('amount').value=values[0]; 
    document.getElementById('description').value=values[1]; 
    document.getElementById('category').value=values[2]; 
  }
});

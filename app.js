const list_item = document.getElementById("list-items");
const userInput = document.getElementById("userInput");
const addButton = document.getElementById("addButton");

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (userInput.value === "") {
    alert("Please Enter Text ");
  } else {
    let userText = userInput.value;
    // Create a new list item
    let li = document.createElement("li");

    li.innerHTML = `
      <p>${userText}</p>
      <span class="check-box"></span>
      <i class="fa-regular fa-pen-to-square edit"></i>
      <i class="fa-solid fa-trash delet"></i>
    `;
    list_item.appendChild(li);
    userInput.value = "";
    saveData();
  }
});

// Function to remove the parent <li> when .remove is clicked
function removeListItem(event) {
  if (
    event.target.classList.contains("delet") ||
    event.target.classList.contains("edit")
  ) {
    let listItem = event.target.parentElement;
    listItem.parentNode.removeChild(listItem);
    saveData();
  }
}

function edit_list_item(event) {
  if (event.target.classList.contains("edit")) {
    let listItem = event.target.parentElement;
    userInput.value = listItem.children[0].innerText;
    removeListItem(listItem);
  }
}

list_item.addEventListener("click", (event) => {
  if (event.target.classList.contains("check-box")) {
    event.target.parentNode.classList.toggle("checked");
    saveData();
  }
  if (event.target.classList.contains("edit")) {
    let listItem = event.target.parentElement;
    userInput.value = listItem.children[0].innerText;
  }
  if (
    event.target.classList.contains("delet") ||
    event.target.classList.contains("edit")
  ) {
    let listItem = event.target.parentElement;
    listItem.parentNode.removeChild(listItem);
    saveData();
  }
});

//set data to local storage
function saveData() {
  localStorage.setItem("data", list_item.innerHTML);
}
// get data from local storage
function showData() {
  list_item.innerHTML = localStorage.getItem("data");
}
showData();

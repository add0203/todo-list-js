const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function deleteAllTask() {
  if (confirm("Are you sure you want to delete all tasks?")) {
    listContainer.innerHTML = ""; // Clear the list container
    saveData(); // Save the updated data to localStorage
  }
}

function addTask() {
  if (inputBox.value === "") {
    alert("its empty ❌");
  } else {
    let ele = document.createElement("li");
    ele.setAttribute("class", "taskDisplay");
    ele.innerHTML = inputBox.value;
    listContainer.appendChild(ele);
    let button = document.createElement("button");
    button.setAttribute("class", "myButtonClass");
        button.style.backgroundColor = "red";
    button.innerText = "Delete";
    ele.appendChild(button);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "BUTTON") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function setData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

setData();

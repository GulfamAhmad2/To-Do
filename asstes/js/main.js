const list = document.querySelector(".to-do-list"),
toDOInput = document.querySelector(".to-do-input"),
toDOBtn = document.querySelector(".to-do-btn");

function todo() {
  toDOInput_value = toDOInput.value;
  if (toDOInput_value === "") {
    alert("Please write your work");
  } else {

    /* ============ Add task ============ */
    list.innerHTML += `
        <div class="task-list">
        <p class"task-text"> ${toDOInput_value}</P>
        <button class="delete-to-do">
        <i class="uil uil-trash-alt"></i>
        </button>
        </div>
        `;

    /* ============ Remove task ============ */
    let deleteToDO = document.querySelectorAll(".delete-to-do");
    for (let items of deleteToDO) {
      items.addEventListener("click", function () {
        this.parentNode.remove();
      });
    }

    /* ============ Check task ============ */
    let taskText = document.querySelectorAll(".task-list");
    for (let checkTask of taskText) {
      checkTask.addEventListener("click", () => {
        checkTask.style.color = "green";
      });
    }

  }
}

toDOBtn.addEventListener("click", todo);

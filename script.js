document.querySelector("#btn").addEventListener("click", () => {
  let taskInput = document.querySelector("#input");
  let task = taskInput.value.trim();

  //if input empty returns empty
  if (task === "") return;

  //creates li element
  let li = document.createElement("li");
  li.textContent = task;

  //creates delete button
  let delBtn = document.createElement("button");
  delBtn.textContent = "X";

  //adds delete button beside li
  li.append(delBtn);

  //on delete button click removes list
  delBtn.addEventListener("click", () => {
    li.remove();
  });

  //taskList(ol) adds the li end of the ol
  let taskList = document.querySelector("#taskList");
  taskList.append(li);

  taskInput.value = "";
});

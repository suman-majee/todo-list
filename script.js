function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return alert("Please enter a task!");

  const li = document.createElement("li");
  li.textContent = taskText;

  // Toggle completed
  li.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  // Add delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "✖";
  delBtn.onclick = function (e) {
    e.stopPropagation(); // Prevent li toggle
    li.remove();
  };

  li.appendChild(delBtn);
  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}

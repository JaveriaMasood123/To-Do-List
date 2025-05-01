function addTask() {
  let task =document.getElementById("task-input").value;
  let list =document.getElementById("task-list");
  let item =document.createElement("li");
  item.textContent = task;
  let btn=document.createElement("button")
  btn.textContent='Mark as completed';
  btn.onclick=() => item.classList.toggle('completed');
  item.appendChild(btn);
  list.appendChild(item);
  document.getElementById('task-input').value
  document.getElementById('task-input').value=''
  
}
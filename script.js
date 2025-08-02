document.addEventListener('DOMContentLoaded', (e) => {
const addButton = document.getElementById('add-task-btn');
const inputFiend = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTask = () =>{
    const taskText = inputFiend.value.trim();
    if (taskText === ""){
        alert("Please Enter a Task")
        return;
    }
    else{
        const makeListObj = document.createElement("li");;
        makeListObj.textContent = taskText;
        const makeRmBtn = document.createElement("button");
        makeRmBtn.className="remove-btn" ;
        makeRmBtn.textContent = "Remove";
        makeRmBtn.onclick = ()=>{ taskList.removeChild(makeListObj)};
        makeListObj.appendChild(makeRmBtn);
        taskList.appendChild(makeListObj);
        inputFiend.value = ""

    }
}
addButton.addEventListener("click",addTask);

inputFiend.addEventListener("keypress",(e)=>{
    if(e.key ==="Enter"){
        return addTask()
    }
})
});
 
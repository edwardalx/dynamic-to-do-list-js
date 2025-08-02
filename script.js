document.addEventListener('DOMContentLoaded', function(){
    const stored = localStorage.getItem('item');
    const getListFromLocalStg = stored? JSON.parse(stored):[];


const addButton = document.getElementById('add-task-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addTask = () =>{
    const taskText = taskInput.value.trim();
    if (taskText === ""){
        alert("Please Enter a Task")
        return;
    }
    else{
        const makeListObj = document.createElement("li");;
        makeListObj.textContent = taskText;
        const makeRmBtn = document.createElement("button");
        makeRmBtn.classList.add="remove-btn" ;
        makeRmBtn.textContent = "Remove";
        makeRmBtn.onclick = ()=>{ taskList.removeChild(makeListObj)};
        makeRmBtn.onclick = ()=>{localStorage.removeItem(makeListObj)}
        makeListObj.appendChild(makeRmBtn);
        taskList.appendChild(makeListObj);
        localStorage.setItem("items",JSON.stringify(makeListObj));
        taskInput.value = ""

    }
}



addButton.addEventListener("click",addTask);

taskInput.addEventListener("keypress",(event)=>{
    if(event.key ==="Enter"){
        return addTask()
    }
})
});
 
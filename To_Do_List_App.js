const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')

function addTask(){/* called by html button in .h */
    if(inputBox.value === ''){
        alert("you must write something!");
    }
    else {
        let li = document.createElement("li")/* li created here */
        li.innerHTML =inputBox.value
        listContainer.appendChild(li)/* display */

        let span = document.createElement("span");/* span created here */
        span.innerHTML = '\u00d7';   /* create x sign */
        li.appendChild(span);
    }
    inputBox.value = ""; 

    SaveDate()/* called */
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"/* alwys capital ,b/c 'li' and 'span create in .js ' */){
        e.target.classList.toggle("checked");

        SaveDate();
    }
   else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();/* parent element is LI element */
        SaveDate();
    }

},false);

function SaveDate(){
    localStorage.setItem("data", listContainer.innerHTML);/* to save data==>'setItem' */
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");/* to accept date==> 'getItem' */
}

showTask();
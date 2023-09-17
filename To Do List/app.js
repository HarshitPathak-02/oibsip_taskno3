let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");
let textArea = document.querySelector("textarea");

// addition of list item
btn.addEventListener("click",function(){
    let task = document.createElement("li");
    task.innerText = inp.value + " - ";
    let desc = document.createElement("span");
    desc.classList.add("desc");
    desc.innerText = textArea.value;
    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");
    task.appendChild(desc);
    task.appendChild(dltbtn);
    ul.appendChild(task);
    console.log(inp.value);
    console.log(textArea.value);
    textArea.value = "";
    inp.value = "";
    
})

// deletetion of list item
ul.addEventListener("click",function(event){
    if (event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
    }
})
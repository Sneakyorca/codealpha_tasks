const list = document.querySelector('ul');
const addBtn = document.querySelector('.add button');
const text = document.querySelector('input');

addBtn.addEventListener('click', ()=>{
    if(text.value != ''){
        const li = document.createElement('LI');
        li.innerHTML = `<span class = "one"></span><span class = "four">${text.value}</span><span class = "two"></span><span class = "three"></span>`;
        text.value = '';
        list.appendChild(li);
        saveData()
    }
    else{
        alert('Empty input')
    }
})

list.addEventListener('click', (e)=>{
    if(e.target.className == "three"){
        const untop = e.target.parentNode;
        untop.remove();
    }
    else if(e.target.className == "two"){
        const prev = e.target.previousSibling
        prev.contentEditable = "true"
        prev.focus();
        window.addEventListener('keypress', (e)=>{
            if(e.key == "Enter"){
                e.preventDefault();
                prev.contentEditable = "false";
                prev.blur();
            }
        })
        prev.addEventListener('input', saveData)
    }
    else if(e.target.className == "one"){
        e.target.parentNode.classList.toggle('checked');
    }
    saveData();
})

// storing the info
function saveData(){
    localStorage.setItem("set", list.innerHTML);
}
function getData(){
    list.innerHTML = localStorage.getItem("set");
}

getData();

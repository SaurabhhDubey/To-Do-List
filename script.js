
const inputText = document.getElementById('input-text');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputText.value === ''){
        alert("Type to add");
    }
    else{
       var li = document.createElement('li');
       li.innerHTML = inputText.value;
       listContainer.appendChild(li);
       let check = document.createElement('input');
       check.type = "checkbox";
       check.id = "mycheckbox";
       check.checked = false;
       li.appendChild(check);
       li.insertBefore(check,li.firstChild);
       let dlt = document.createElement('button');
       dlt.id = "btn2";
       dlt.innerText = "Delete"
       dlt.addEventListener('click' , 
        function(){
            li.remove();
        }
       )
       li.appendChild(dlt);
    }
    inputText.value = "";
}

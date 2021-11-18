document.body.onload = addElement;

function addElement () {

    let newDiv = document.createElement("div");
    let  newContent = document.createTextNode('Ce div a été ajouté en utilisant javascript');
    newDiv.appendChild(newContent);
    let currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}

let elem = document.getElementById('viewport')
elem.style.backgroundColor = 'red';
elem.style.width='100px';
elem.style.height='100px';
let elemto = document.getElementById('aSupprimer');
elemto.parentElement.removeChild(aSupprimer);
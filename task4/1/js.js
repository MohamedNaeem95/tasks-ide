//Variables

const btnItem = document.querySelectorAll('#btn-color');


//Actions (Function)

const removeFun = function(e) {
    let removeColor = document.getElementById('drop-down');

    removeColor.remove(removeColor.selecedIndex);
};

//Events

for (let i = 0; i < btnItem.length; i++) {
    btnItem[i].addEventListener('click' , removeFun);
}
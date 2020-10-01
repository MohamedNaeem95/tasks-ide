//Varibles
const changeColor = document.getElementsByClassName('change-color'),
      mouseSpan = document.querySelectorAll('.span');


//Actions (Functions)
const mouseOverHandle = function(e) {
   for (let i = 0; i < mouseSpan.length; i++) {
    mouseSpan[i].style.color = "green";
   }

};

const onMouseOut = function(e) {
    for (let i = 0; i < mouseSpan.length; i++) {
        mouseSpan[i].style.color = "black";
       }
};

//Events

for (let i = 0; i < changeColor.length; i++) {
    changeColor[i].addEventListener('mouseover', mouseOverHandle);
    
}
for (let i = 0; i < changeColor; i++){
    changeColor[i].addEventListener('mouseout' , onMouseOut);
}



    

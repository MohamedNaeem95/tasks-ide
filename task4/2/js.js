//Variables
const btnColor = document.getElementById('btn-color'),
      pColor1 = document.getElementById('paragraph1'),
      pColor2 = document.getElementById('paragraph2');
      

//Actions (Functions)

   function getBackground(e) {
    pColor1.style.background = "red";
    pColor2.style.background = "yellow";
   }

//Events

   btnColor.addEventListener('click' , getBackground);


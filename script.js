//your JS code here. If required.

let buttons = document.querySelectorAll('input[type=button]');
let btn = buttons[0];
let selec = document.getElementById("colorSelect");
let arr = selec.options;

function func (){
  let val = selec.options[selec.selectedIndex].text;
    for(let element of arr){
        console.log(element.innerHTML);
        if(element.innerHTML === val){

        }   
    }
}

btn.addEventListener("click", func);
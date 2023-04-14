let btn = document.querySelectorAll('input[type=button]')[0];
let selec = document.getElementById("colorSelect");

btn.addEventListener("click", function(){
    selec.remove(selec.selectedIndex);
});
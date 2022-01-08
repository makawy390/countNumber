
let value = document.querySelector(".count");
let count = 0;

let btns = document.querySelectorAll(".btns span");
btns.forEach((btn)=>{
    btn.addEventListener("click" , (e)=>{
        if (e.currentTarget.classList.contains("decrease")) {
            value.textContent = --count;
        }
        else if (e.currentTarget.classList.contains("increase")) {
            value.textContent = ++count;
        }
        else{
            count = 0;
            value.textContent = count;  
        }
        if (count > 0) {
            value.style.color = "#38cf83";   
        }
        else if (count < 0) {
            value.style.color = "#ff085a";
            
        }
        else{
            value.style.color = "#fff";
        }
    });
});

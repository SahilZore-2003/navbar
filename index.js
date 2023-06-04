let form = document.getElementById("form");
let billContent = document.getElementById("billContent");
let showOrder = document.getElementById("showOrder");

showOrder.addEventListener("click",()=>{
    billContent.classList.toggle("show")
    if(showOrder.className === "uil uil-times"){
        showOrder.className = "uil uil-bars"
    }else{
        showOrder.className = "uil uil-times"
    }
    
    
})
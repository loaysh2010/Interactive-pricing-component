const viewsValue = document.querySelector('.views-value');
const priceValue = document.querySelector('.price-value');

const inputSlider = document.querySelector('.slider');
const inputprogress = document.querySelector('.backcolor');
 
const priceSwitcher = document.querySelector(".price-switcher");

inputSlider.oninput=(()=>{
    let value = inputSlider.value;
    viewsValue.textContent=value+"K";
    if (priceSwitcher.checked){
        priceValue.textContent='$'+parseFloat(value*0.16*12).toFixed(2);
    }
    else{
        priceValue.textContent='$'+parseFloat(value*0.16).toFixed(2);
    }
    
    inputprogress.style.width=parseFloat(value*100/200).toFixed(2)+"%" ;
})

priceSwitcher.addEventListener('change',function(){
    let value = inputSlider.value;
    viewsValue.textContent=value+"K";
    if (priceSwitcher.checked){
        priceValue.textContent='$'+parseFloat(value*0.16*12).toFixed(2);
    }
    else{
        priceValue.textContent='$'+parseFloat(value*0.16).toFixed(2);
    }
})
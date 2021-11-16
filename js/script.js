"use strict";
let error = document.querySelector(".error");
let edad = prompt("Dime tu edad");
let body = document.querySelector("body");

if(isNaN(edad)==false){
    //es un número
    if(edad<18){
        body.style.backgroundColor="pink";
        // console.log("pink");
    }else{
        document.body.style.backgroundColor="blue";
        // console.log("blue");
    }

}else{
    // no es un numero
    error.textContent = "quiero un número-->"+edad;  
}

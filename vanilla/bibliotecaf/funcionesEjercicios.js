"use strict";
// Funciones para los ejercicios de la práctica 2-01
//Ejercicio1
function calcularIMC (peso, altura) {
    if(isNaN(peso) || isNaN(altura)){
        
        return console.log("Porfavor, introduce un dato válido");
        
    }else{
        return peso / (altura * altura);
        
    }

    
};

const imcMayor = (imc1, imc2) =>{
   //et mayor = 0;
    if(imc1 > imc2){
       //ayor = imc1;
        return imc1;
    }else{
        return imc2;

    }
}





//exports
export { calcularIMC };
export {imcMayor};

import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");//selecciona todos nuestros inputs, regresa un arreglo

inputs.forEach( input => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
    });
});
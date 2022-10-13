
const formulario= document.querySelector("form");

formulario.addEventListener("submit", function(e){
    e.preventDefault();


    const campo=document.querySelectorAll(".campo");
    const nombre=document.querySelector("#nombre");
    const email=document.querySelector("#email");
    const contrasenia=document.querySelector("#password");
    const terminos=document.querySelector("#terminos");


    if(nombre.value.length <1 || nombre.value.length >25){
        alert("¡ERROR! el nombre debe contener mínimo una letra y máximo 25")
    }
    
    if(!email.value.includes("@")){
        alert("¡ERROR! formato de email inválido falta el @")
    }

    if(contrasenia.value.length <8 || nombre.value.length >20){
        alert("¡ERROR! la contraseña debe contener entre 8 y 20 caracteres")
    }

    if(terminos.checked == false){
        alert("¡ERROR! debo aceptar términos y condiciones")

    }

    campo.forEach(item=>{
        if(item.value.trim().length==0){
           item.classList.add("campo-error")
        }
    });

    




})


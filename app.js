// let numero1 = document.getElementById("numero1")
// let numero2 = document.getElementById("numero2")
function sumar() {
    // resultado = +numero1.value + +numero2.value;
    // document.getElementById('resultado').innerHTML = `El resultado es ${resultado}`
    const forma = document.getElementById('form')
    let numero1 = forma["numero1"]
    let numero2 = forma["numero2"]
    if (numero1.value && numero2.value !== "") {
        let resultado = +numero1.value + +numero2.value
        document.getElementById('resultado').innerHTML = `El resultado es ${resultado}`
    }else{
        document.getElementById('alerta').innerHTML = `Los campos son obligatorios`
        setTimeout(()=>{document.getElementById('alerta').innerHTML = ``},3000)
        
    }

}
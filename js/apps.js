const pais = document.querySelector("#pais");
let selecionado = pais.options.selectedIndex


console.log(pais.options[selecionado]);


const passaporte = document.querySelector("#passaporte");

const padraoPassaporte = new RegExp("[a-zA-Z]{2}[0-9]{12}");

const enviar = document.querySelector("#enviar");
const validacaopassaporte= document.querySelector("#validar-passaporte");


const addValidacaoTexto = () => {

    
}
enviar.addEventListener("click", (e)=>{
e.preventDefault()
e.stopPropagation()
validacaopassaporte.classList = "validacao"


if(padraoPassaporte.test(passaporte.value)){
    validacaopassaporte.classList.add("valido")
    validacaopassaporte.innerHTML = "passaporte válido"
}
else{
    validacaopassaporte.classList.add("invalido")
    validacaopassaporte.innerHTML = "passaporte inválido"

}
})




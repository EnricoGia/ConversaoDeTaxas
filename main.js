
const entrada = document.querySelector("#conteudo__valor")

const valoresDeConversao = {"dia" : 1, 
                            "semana" : 7,
                            "mes" : 30,
                            "bimestre" : 60,
                            "trimestre" : 90,
                            "semestre" : 180,
                            "ano" : 360}

entrada.addEventListener("change", () =>{
    ConverteTaxaDeJuros()
})

const select = document.querySelectorAll("select")
select.forEach((element)=>{
    console.log(element)
    element.addEventListener("change",()=>{
        ConverteTaxaDeJuros()
    })
    
})

function ConverteTaxaDeJuros(){
    let tipoEntrada = valoresDeConversao[document.querySelector("#conteudo__entrada").value]
    let tipoSaida = valoresDeConversao[document.querySelector("#conteudo__saida").value]

    let valor = entrada.value
    let pow = tipoSaida/tipoEntrada
    let saida = (( (Math.pow(1 + valor/100,pow))-1) * 100).toFixed(2)
    document.querySelector("#conteudo__saida--valor").innerHTML = saida
}
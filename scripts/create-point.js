
function populateUFs(){
    const ufSelect = document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then( res => res.json() )
    .then( estados => {

        for (estado of estados){
            ufSelect.innerHTML += `<option value="${estado.id}">${estado.nome}</option>`

        }
        
    })
}

populateUFs()

function getcities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=state]")
    // console.log(event.target.value)
    const ufvalue = event.target.value

    const indexOfSelectedState = event.target.selectedIndex
    stateInput.value = event.target.options[indexOfSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`

    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true

    fetch(url)
    .then( res => res.json() )
    .then( cidades => {

        for (cidade of cidades){
            citySelect.innerHTML += `<option value="${cidade.nome}">${cidade.nome}</option>`
        }

        citySelect.disabled = false
        
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities )

 // itens de coleta
 // pegar todos os li´s

 const itensParaColetar = document.querySelectorAll(".items-grid li")

 for (const item of itensParaColetar){
     item.addEventListener("click", handleSelectedItem)
 }
 
 function handleSelectedItem(event){

    const itemLi = event.target
    //adicionar ou remover uma data com js
    itemLi.classList.toggle("selecionado")


     const itemId = event.target.dataset.id
     //console.log(event.target.dataset.id)

 }
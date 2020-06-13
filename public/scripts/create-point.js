
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

const ItensColetados = document.querySelector("input[name=itens]")
 
let selectedItems = []

 function handleSelectedItem(event){
    const itemLi = event.target

    //adicionar ou remover uma data com js
    itemLi.classList.toggle("selecionado")

     const itemId = itemLi.dataset.id
     //console.log(event.target.dataset.id)

     // verificar se existem itens selecionados, se sim
     // pegar os itens selecionados
        const itensSelecionados = selectedItems.findIndex( function(item){
            const itemFound = item == itemId // isso será true ou false
            return itemFound
        })

     // se ja estiver selecionado, tirar da seleção
     if(itensSelecionados >= 0){
            //tirar da seleção
            const itensFiltrados = selectedItems.filter(function(item){
                const itemDiferente = item != itemId // false
                return itemDiferente
            })

            selectedItems = itensFiltrados
     }else{
            // se não estiver selecionado, adicionar à seleção.
            selectedItems.push(itemId)

     }

     // atualizar o campo escondido(input:hidden) com os itens selecionados
     ItensColetados.value = selectedItems

 }
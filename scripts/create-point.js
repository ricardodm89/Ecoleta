
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
            citySelect.innerHTML += `<option value="${cidade.id}">${cidade.nome}</option>`
        }

        citySelect.disabled = false
        
    })
}

document
    .querySelector("select[name=uf]")
    .addEventListener("change", getcities )
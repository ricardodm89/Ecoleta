
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

document
    .querySelector("select[name=uf]")
    .addEventListener("change", () => {
        console.log("mudei")
    } )
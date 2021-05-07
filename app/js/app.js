import  getData  from "./api.js";
import  getData  from "./rendercards.js";

const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
const nivelFilter = document.querySelector('.nivel-filter')

showSpinner(false)

function showSpinner(isShow=false){
    if(isShow){
        spinner.style.display="block"
        return
    }
        spinner.style.display="none" 
}

async function getCursos(){
    showSpinner(true)
    const response = await getData('cursos')
    showSpinner(false)
    const cursosList = Array.from(response.data)
    renderCards(cursosList, apiData)
}

async function search(query){
    showSpinner(true)
    const response = await getData(`cursos?q=${query}`)
    showSpinner(false)
    const cursosList = Array.from(response.data)
    if(cursosList==""){
        apiData.innerHTML='<div class="alert alert-warning"> Nenhum resultadi para ${query} </div>'

    }else{
        apiData.innerHTML=""
        renderCards(cursosList, apiData)
    }
}
async function getNivel(){
    const response = await getData('nivel')
    const nivelList = Array.from(response.data)
    nivelList.forEach(function(nivel){
        nivelFilter.innerHTML+=`<option value="${nivel.description}">${nivel.description}</option>`
    })

}
const btnBuscar = document.querySelector('.btn-buscar')
const inputSearch = document.querySelector('input[type=search]')
btnBuscar.addEventListener('click',function(){
    search(inputSearch.value)
})
nivelFilter.addEventListener('change',function(){
    search(nivelFilter.value)
})
getCursos()
getNivel()




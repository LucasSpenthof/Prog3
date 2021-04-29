import  getData  from "./api.js";

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

function renderCards(cursosList){
    cursosList.forEach(async function(cursos){
        apiData.innerHTML+=`
        <div class="card m-2" style="width:220px">
            <section class="card-body">
                <h5 class="card-title">${cursos.curso}</h5>
                <p> 
                    Nivel: ${cursos.nivel}
                </p>
                <p>
                    Duracao: ${cursos.duracao}
                </p>
                <p>
                    Municipio: ${cursos.municipio}
                </p>
            </section>
        </div>
        `
    }) 

}

async function getCursos(){
    showSpinner(true)
    const response = await getData('cursos')
    showSpinner(false)
    const cursosList = Array.from(response.data)
    renderCards(cursosList)
}

async function search(query){
    showSpinner(true)
    const response = await getData(`cursos?q=${query}`)
    showSpinner(false)
    const cursosList = Array.from(response.data)
    apiData.innerHTML=""
    renderCards(cursosList)
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




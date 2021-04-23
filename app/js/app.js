const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
const nivelFilter = document.querySelector('.nivel-filter')

spinner.style.display="none"
async function getCursos(){
    const url = "http://localhost:3000/cursos"
    spinner.style.display="block"
    const response = await axios.get(url)
    spinner.style.display="none"
    const cursosList = Array.from(response.data)
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
async function search(query){
    const url =  `http://localhost:3000/cursos?q=${query}`
   
    
    const response = await axios.get(url);
    const cursosList = Array.from(response.data)
    apiData.innerHTML=""
    cursosList.forEach(function(cursos){
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
async function getNivel(){
    const url =`http://localhost:3000/nivel`
    const response = await axios.get(url)
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
getCursos()




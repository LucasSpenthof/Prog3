const apiData = document.querySelector('.api-data')
const spinner = document.querySelector('.spinner-grow')
spinner.style.display="none"
async function getMovies(){
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






export default function renderCards(cursosList, renderElement){
    renderElement.innerHTML=''
    cursosList.forEach(async function(cursos){
        renderElement.innerHTML+=`
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
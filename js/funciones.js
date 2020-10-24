

function pintarOneTarea(pTarea, pSeccion) {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    let input = document.createElement('input');
    input.setAttribute('type', 'button');
    input.value = 'Eliminar';
    input.id = 'deleteTarea';

    let contenidoh3 = document.createTextNode(`${pTarea.nombreTarea}`);
    h3.appendChild(contenidoh3);


    article.appendChild(h3);
    article.appendChild(input);

    pSeccion.appendChild(article);

    //hacer un if para cambiar las clases del article en funcion del color de la prioridad, classList, className
    /*  let urgente = document.querySelector('.urgente');
     let diaria = document.querySelector('.diaria');
     let mensual = document.querySelector('.mensual'); */



    if (prioridad = 'urgente') {
        article.classList.add('rojo')
    } else if (prioridad = 'diaria') {
        article.classList.add('amarillo');
    } else {
        article.classList.add('verde');
    }
}


function pintarTareas(pListaTareas, pSection) {

    pListaTareas.forEach(tarea => {
        pintarOneTarea(tarea, pSection)
    })
}


function filtrarPorPrioridad(pListaTareas, pPrioridad) {
    const arrayResultado = pListaTareas.filter(tarea => {
        return tarea.prioridad == pPrioridad
    })

    return arrayResultado
}



pintarTareas(listaTareas, seccionTareas)
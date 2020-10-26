

function pintarTareas(pListaTareas, pSection) {

    pSection.innerHTML = ''

    pListaTareas.forEach(tarea => {
        pintarOneTarea(tarea, pSection)
    })
}


function pintarOneTarea(pTarea, pSeccion) {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');

    let eliminar = document.createElement('button')
    eliminar.addEventListener('click', eliminarTarea)
    eliminar.innerText = 'Eliminar';
    eliminar.dataset.id = 'Eliminar';

    let contenidoh3 = document.createTextNode(`${pTarea.nombreTarea}`);
    h3.appendChild(contenidoh3);


    article.appendChild(h3);
    article.appendChild(eliminar);

    pSeccion.appendChild(article);

    //hacer un if para cambiar las clases del article en funcion del color de la prioridad, classList, className
    let prioridadTarea = prioridad.value;

    if (prioridadTarea == 1) {
        article.classList.add('rojo')
    } else if (prioridadTarea == 2) {
        article.classList.add('amarillo');
    } else if (prioridadTarea == 3) {
        article.classList.add('verde');
    }
}



function filtrarPorPrioridad(pListaTareas, pPrioridad) {
    const arrayResultado = pListaTareas.filter(tarea => {
        return tarea.prioridad == pPrioridad
    })

    return arrayResultado
}

function filtrarPorPalabra(pListaTareas, pPalabra) {
    const listraFiltrada = pListaTareas.filter(tarea => {
        let nombre = tarea.nombreTarea;
        return nombre.toLowerCase().includes(pPalabra.toLowerCase());
    })

    return listraFiltrada
}


function eliminarTarea(event) {
    event.preventDefault();

    let idBorrar = event.target.dataset.id;

    let posicion = listaTareas.findIndex(tarea => tarea.id == idBorrar);

    listaTareas.splice(posicion, 1);


    //pintarTareas(listaTareas, seccionTareas)//borrar tarea
}


//pintarTareas(listaTareas, seccionTareas)
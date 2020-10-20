

function pintarOneTarea(pTarea, pSeccion) {
    let article = createElement('article');
    let h3 = createElement('h3');
    let p = createElement('p');

    let contenidoh3 = document.createTextNode(`${pTarea.nombreTarea}`);
    h3.appendChild(contenidoh3);

    let contenidoP = document.createTextNode('Eliminar')
    p.appendChild(contenidoP);

    article.appendChild(h3);
    article.appendChild(p);

    pSeccion.appendChild(article);
}


function pintarTareas(pListaTareas, pSection) {
    if (pListaTareas.length != 0) {
        pListaTareas.forEach(tarea => {
            pintarOneTarea(tarea, pSection)
        })
    }
}


pintarTareas(listaTareas, seccionTareas)
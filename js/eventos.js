let agregarTarea = document.querySelector('#tarea');
let prioridad = document.querySelector('#prioridad');
let btnGuardar = document.querySelector('#btnGuardar');
let buscarTipoTarea = document.querySelector('#buscarTipoTarea');
let tareaBuscada = document.querySelector('#tareaBuscada');
let seccionTareas = document.querySelector('#seccionTareas');

let eliminar = document.querySelector('#deleteTarea');


agregarTarea.addEventListener('input', addTarea);
prioridad.addEventListener('change', addTarea);
btnGuardar.addEventListener('click', addTarea);


function addTarea(event) {

    event.preventDefault();
    let tareaAgregada = agregarTarea.value;
    let prioridadTarea = prioridad.value;

    let nuevaTarea = {
        nombreTarea: tareaAgregada,
        prioridad: prioridadTarea
    }
    listaTareas.push(nuevaTarea);

    console.log(listaTareas);

    pintarOneTarea(nuevaTarea, seccionTareas);

}

eliminar.addEventListener('click', eliminarTarea);


function eliminarTarea(event) {
    event.preventDefault();
    remonveItemFromArr(listaTareas, elimunar)

    pintarOneTarea(listaTareas, seccionTareas)//borrar tarea
}


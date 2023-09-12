let boton1 = document.getElementById('boton1')  // referencia para boton1 => id="boton1"
let boton2 = document.getElementById('boton2') // referencia para boton2 => id="boton2"



boton1.addEventListener('click', () => {
    let list = document.getElementById("garrafon");
    if (list.hasChildNodes()) {  // indicar si el elemento padre tiene hijos nodos
        list.removeChild(list.childNodes[0]); // remover la coleccion de hijos desde el indice 0
    }
})
boton2.addEventListener('click', () => {
    let list = document.getElementById("garrafon");
    if (list.hasChildNodes()) {
        list.removeChild(list.childNodes[0]);
    }
})

/**
 * Función para limpiar el HTML
 * @param {HTMLElement} div Elemento a limpiar
 * @returns {Void}
 */ 
export const limpiarHTML = (div) => {

    if(!div) throw new Error('EL elemento a limpiar es obligatorio');

    while(div.firstChild) {
        div.removeChild(div.firstChild);
    };
};
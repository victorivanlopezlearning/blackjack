
/**
 * Crea las cartas en el HTML
 * @param {String} carta Carta tomada.
 * @param {Number} turno Turno actual. 0 = jugador, 1 = maquina
 * @returns {HTMLElement} Crea la carta en el HTML
 */

import { isNumber } from "underscore";

export const crearCarta = (carta, turno) => {

    if(!carta) throw new Error('La carta es obligatoria');
    if(!isNumber(turno)) throw new Error('El número del turno es obligatorio');
    if(![0, 1].includes(turno)) throw new Error('El turno debe ser entre 0 y 1');

    const divCartasJugadores = document.querySelectorAll('.divCartas');

    const cartaHTML = document.createElement('IMG');
    cartaHTML.src = `assets/cartas/${carta}.png`;
    cartaHTML.classList.add('carta');
    cartaHTML.alt = 'Carta';
    divCartasJugadores[turno].appendChild(cartaHTML);
};
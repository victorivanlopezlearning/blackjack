
import { valorCarta } from './';

/**
 * Acumula puntos de los jugadores y muestra en pantalla
 * @param {String} carta Carta tomada.
 * @param {Number} turno Turno actual. 0 = jugador, 1 = maquina
 * @param {Array<Number>} puntosJugadores Puntos de todos jugadores
 * @returns {Number} Retorna los puntos del jugador
 */
export const acumularPuntos = (carta, turno, puntosJugadores) => {
    const marcadores = document.querySelectorAll('small');

    puntosJugadores[turno] += valorCarta(carta);
    marcadores[turno].textContent = puntosJugadores[turno];
    return puntosJugadores[turno];
};
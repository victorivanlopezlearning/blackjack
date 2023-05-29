
/**
 * Determina el ganador del juego
 * @param {Array<Number>} puntosJugadores Puntos de todos jugadores.
 * @returns {Void} 
 */

export const determinarGanador = (puntosJugadores) => {

    if(!puntosJugadores) throw new Error('Los puntos de los jugadores son obligatorios');

    const [ puntosJugador, puntosComputadora ] = puntosJugadores;

    setTimeout(() => {
        if(puntosComputadora === puntosJugador) {
            alert('Nadie gana :(');
        } else if((puntosJugador > puntosComputadora && puntosJugador <= 21)  || (puntosComputadora > 21)) {
            alert('Jugador gana :)');
        } else if((puntosJugador < puntosComputadora && puntosComputadora <= 21) || (puntosJugador > 21)) {
            alert('Lo siento, perdiste :(');
        };
    }, 200);
};
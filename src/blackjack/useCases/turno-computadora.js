import { acumularPuntos, crearCarta, pedirCarta, determinarGanador } from './'

 // Turno de la computadora
 /**
  * Ejecuta el turno de la computadora
  * @param {Number} puntosMinimos Puntos del jugador.
  * @param {Array<String>} deck Deck de cartas.
  * @param {Array<Number>} puntosJugadores Puntos de todos los jugadores.
  * @returns {Void}
  */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores) => {

    if(!puntosMinimos) throw new Error('Los puntos minimos son obligatorios');
    if(!deck) throw new Error('El deck es obligatorio');
    if(!puntosJugadores) throw new Error('Los puntos de los jugadores son obligatorios');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, 1, puntosJugadores);
        crearCarta(carta, 1);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
};

import _ from 'underscore';
import { crearDeck, pedirCarta, crearCarta, turnoComputadora, acumularPuntos, limpiarHTML } from './useCases';

// VARIABLES
let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// SELECTORES
const btnPedir = document.querySelector('#btnPedir'),
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo');

const divCartasJugadores = document.querySelectorAll('.divCartas'),
    marcadores = document.querySelectorAll('small');

// FUNCIONES
// Inicializar el juego
const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];

    for(let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    };
    marcadores.forEach(marcador => marcador.textContent = 0);
    divCartasJugadores.forEach(divCarta => limpiarHTML(divCarta));
    btnPedir.disabled = false;
    btnDetener.disabled = false;
};

// EVENTOS
btnPedir.addEventListener('click', () => { // Callback, función que se manda como árgumento
    const carta = pedirCarta(deck); 
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores);

    crearCarta(carta, 0);

    if(puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores);
    } else if(puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores);
    };
});

btnDetener.addEventListener('click', () => {
    const [ puntosJugador ] = puntosJugadores;
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador, deck, puntosJugadores);
});

btnNuevo.addEventListener('click', () => {
    inicializarJuego();
});
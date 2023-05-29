
/**
 * Esta función obtiene una carta del deck
 * @param {Array<String>} deck Deck de cartas
 * @returns {String} Retorna una carta del deck
 */
export const pedirCarta = (deck) => {

    if(!deck) throw new Error('El deck es obligatorio');

    if(!deck || deck.length === 0) throw new Error('El deck es obligatorio o no hay cartas en el deck');
    return deck.pop();
};
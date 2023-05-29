
/**
 * Devuelve el valor de la carta ingresada
 * @param {String} carta Carta tomada.
 * @returns {Number} Retorna el valor de la carta
 */

import { isString } from "underscore";

export const valorCarta = (carta) =>{
    if(!carta || !isString(carta)) throw new Error('La carta es obligatoria y debe ser un string');

    const valor = carta.substring(0, carta.length - 1);
    return  ( isNaN(valor) ) ? // isNaN(valor) | valida que el valor proporcionado es un número o no. Regresa TRUE o FALSE
            ( valor === 'A' ) ? 11 : 10 // El As es el único que vale 11, los demás valen 10
            : parseInt(valor);
};
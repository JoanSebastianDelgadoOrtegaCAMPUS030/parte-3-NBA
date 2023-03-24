import { jugador } from './jugador.js';
import { Equipo } from './equipo.js';
import { CuerpoApoyo } from './cuerpo.js';

let conferencias = ["conferencias", "conferencia Oeste"]
let divisiones = [
    {
        conferencia: "conferencia Este",
        divisiones: "DIVISION ATLANTICO",

    },
    {
        conferencias: "conferencia Este",
        divisiones: "DIVISION CENTRAL",

    },
    {
        conferencias: "conferencia Oeste",
        divisiones : "DIVISION PACIFICO",
    }
];
function verOcultar(cardview,cardsHidden){
    const _cardView = document.querySelector(cardview);
    _cardView.style.display = "block";
    cardsHidden.forEach(card => {
        const_cardView = document.querySelector(card);
    })
}
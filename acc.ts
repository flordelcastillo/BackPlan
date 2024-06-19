//import { menuPrincipal } from "./menu";

import { menu1 } from "../js/menues";
export const leer = require('prompt-sync')({sigint: true});


export function volver(encabezado: string) {
    // Mostrar el encabezado y esperar a que el usuario presione cualquier tecla antes de volver al menú principal
    leer("".concat(encabezado, "\nPresione enter para continuar...")); // Assuming leer is imported or defined elsewhere
    menu1();
}

export function borrarPantallayEncabezado(encabezado: string): void {
    // Limpiar la consola y mostrar el encabezado proporcionado
    console.clear();
    console.log(`${encabezado}`);
}
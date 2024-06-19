import { leer, volver } from '../js/acc';
import { Materia, Condiciones } from '../js/Materia';
import { arregloMaterias } from '../js/instancias';
import { chequearCorrelativas } from '../js/correlativas';

/**fijarse que en los argumentos de las funciones de agregar al arreglo pq lo tomo al arreglo como una variable glorbal */

export function menu1(): void {
    console.clear();
    console.log("    [1]    Ver plan de estudios completo."); /** */
    console.log("    [2]    Buscar correlativas de una materia."); /** falta mostrar las correlativas xd */
    console.log("    [3]    Ver promedio."); /** */
    console.log("    [4]    Ver porcentaje de avance de carrera.");/** */
    console.log("    [5]    Ver cantidad de finales regulares pendientes.");/** */
    console.log("    [6]    Ver plan de estudio por año."); /** funcion esta mal, hacer una aprte(?)*/
    console.log("    [7]    Ver que materias puedo cursar.");// preguntar año y de ahi mostrar separados los cuatri con las materias */
    console.log("    [8]    Ver materias que me falta regularizar/aprobar.");
    console.log("    [9]    Buscar materia por código.");
    console.log("    [10]   Modificar materia.");
    console.log("    [0]    Salir.");
    switchMenu(Number(leer("> ")));
}

export function switchMenu(opcion: number) {
    switch (opcion) {
        case 1:
            mostrarTodasLasMaterias(arregloMaterias);
            break;
        case 2:
            chequearCorrelativas();
            break;
        case 3:
            promediarNotas(filtrarNotas());
            break;
        case 4:
            porcentajeAprobadas();
            break;
        case 5:
            finalesPendientes();
            break;
        case 6:
            mostrarTodasLasMaterias(filtrarPorAño(Number(leer("> "))));
            break;
        case 0:
            process.exit(0);
        default:
            volver('Opción Incorrecta');
    }
}

export function filtrarPorAño(anio: number): Materia[] {
    return arregloMaterias.filter((materia: Materia) => materia.anio === anio);
}

export function filtrarNotas(): number[] {
    return arregloMaterias.filter(materia => typeof materia.nota === 'number').map(materia => materia.nota as number);
}

export function promediarNotas(notas: number[]): void {
    console.clear();
    console.log("Tu promedio es " + (notas.reduce((total, numero) => total + numero, 0)) / (notas.length));
    volver('');
}

export function filtrarPorCondicion(condicion: Condiciones): Materia[] {
    return arregloMaterias.filter((materia: Materia) => materia.condicion === condicion);
}

export function porcentajeAprobadas(): void {
    console.clear();
    console.log("Porcentaje de avance: " + ((filtrarPorCondicion('Aprobada').length) * 100) / arregloMaterias.length + "%.");
    volver('');
}

export function finalesPendientes(): void {
    console.clear();
    console.log("Tenés " + filtrarPorCondicion('Regular').length + " finales regulares pendientes.\n");
    filtrarPorCondicion('Regular').forEach((materiaReg: Materia, indice: number) => {
        console.log(`[${indice + 1}] ${materiaReg.nombre}`);
    });
    volver('');
}

export function mostrarTodasLasMaterias(arregloMaterias: Materia[]): void {
    console.clear();
    for (let i = 0; i < 5; i++) {
        console.log(`\n${i + 1}° Año\n`);
        filtrarPorAño(i + 1).forEach(function (elemento: Materia, indice: number) {
            if (elemento.nota === null) {
                console.log(" | Cuatri: " + elemento.periodo + " | " + elemento.codigo + " | " + elemento.nombre + " | " + elemento.condicion + " | ");
            }
            else {
                console.log(" | Cuatri: " + elemento.periodo + " | " + elemento.codigo + " | " + elemento.nombre + " | " + elemento.condicion + " | " + elemento.nota);
            }
        });
    }
    volver('');
}
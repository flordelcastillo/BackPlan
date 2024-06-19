
import { arregloMaterias } from '../js/instancias';
import { coloredText } from '../js/color';
import { volver, borrarPantallayEncabezado,leer } from '../js/acc';
import { Materia } from '../js/Materia';

export function chequearCorrelativas(): void {
    //console.clear();
    borrarPantallayEncabezado('Ingresá el código de la materia');
    let codigo = parseInt(leer('    > '));
    const materia = encontrarMateriaPorCodigo(codigo);

    if (!materia) {
        console.log(coloredText(`   No se encontró la materia con el código ${codigo}`, 'cyan'));
        return;
    }

    if (puedoRendir(codigo)) {
        console.log(coloredText(`   Podes cursar y rendir el final de ${materia.nombre}`, 'green')); //preguntar si quiere ver que correlativas le falta
        //cuando la materia este aprobada mostrar q este aprobada y no ese mensaje
    } else if (puedoCursar(codigo)) {
        console.log(coloredText(`   Podes solo cursar ${materia.nombre}`, 'yellow'));
    } else {
        console.log(coloredText(`   No podes cursar ${materia.nombre}`, 'red'));
    }
    volver('');
}

export function puedoCursar(codigoMateria: number): boolean | undefined {
    if (RegularesParaCursar(arregloMaterias[codigoMateria - 1]) && AprobadasParaCursar(arregloMaterias[codigoMateria - 1])) return true;
}

export function puedoRendir(codigoMateria: number): boolean | undefined {
    if (puedoCursar(codigoMateria) && AprobadasParaFinal(arregloMaterias[codigoMateria - 1])) return true;
}

export function regularOaprobada(correlativa: Materia): boolean {
    return correlativa.condicion === 'Regular' || correlativa.condicion === 'Aprobada';
}

export function encontrarMateriaPorCodigo(codigo: number): Materia | undefined {
    return arregloMaterias.find(materia => materia.codigo === codigo);
}

export function RegularesParaCursar(materia: Materia): boolean {
    if (!materia.correlativasRegularesCursar) return true;
    for (const codigoCorrelativa of materia.correlativasRegularesCursar) {

        const correlativa = encontrarMateriaPorCodigo(Number(codigoCorrelativa));
        if (!correlativa || !regularOaprobada(correlativa)) {
            return false;
        }
    }
    return true;
}

export function aprobada(correlativa: Materia): boolean {
    return correlativa.condicion === 'Aprobada';
}

export function AprobadasParaCursar(materia: Materia): boolean {
    if (!materia.correlativasAprobadasCursar) return true;
    for (const codigoCorrelativa of materia.correlativasAprobadasCursar) {
        const correlativa = encontrarMateriaPorCodigo(Number(codigoCorrelativa));
        if (!correlativa || !aprobada(correlativa)) {

            return false;
        }
    }
    return true;
}

export function AprobadasParaFinal(materia: Materia): boolean {
    if (!materia.correlativasAprobadasFinal) return true;
    for (const codigoCorrelativa of materia.correlativasAprobadasFinal) {
        const correlativa = encontrarMateriaPorCodigo(Number(codigoCorrelativa));
        if (!correlativa || !aprobada(correlativa)) {
            return false;
        }
    }
    return true;
}
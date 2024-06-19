export type Condiciones = 'No cursada' | 'Regular' | 'Aprobada';

export class Materia {
    private _codigo: number;
    private _nombre: string;
    private _condicion: Condiciones;
    private _periodo: number;
    private _anio: number;
    private _nota: number | null;
    private _correlativasRegularesCursar: number[] | null;
    private _correlativasAprobadasFinal: number[] | null;
    private _correlativasAprobadasCursar: number[] | null;

    constructor(codigo: number, nombre: string, condicion: Condiciones, periodo: number, anio: number, nota: number | null, correlativasRegularesCursar: number[] | null, correlativasAprobadasCursar: number[] | null, correlativasAprobadasFinal: number[] | null,) {
        this._codigo = codigo;
        this._nombre = nombre;
        this._condicion = condicion;
        this._periodo = periodo;
        this._anio = anio;
        this._nota = nota || null;
        this._correlativasRegularesCursar = correlativasRegularesCursar || null;
        this._correlativasAprobadasCursar = correlativasAprobadasCursar || null;
        this._correlativasAprobadasFinal = correlativasAprobadasFinal || null;
    }
    /** faltan las validacion de Condiciones */
    // Getters
    get codigo(): number {
        return this._codigo;
    }

    get nombre(): string {
        return this._nombre;
    }

    get condicion(): string {
        return this._condicion;
    }

    get periodo(): number {
        return this._periodo;
    }

    get anio(): number {
        return this._anio;
    }

    get nota(): number | null {
        return this._nota;
    }

    get correlativasRegularesCursar(): number[] | null {
        return this._correlativasRegularesCursar;
    }

    get correlativasAprobadasFinal(): number[] | null {
        return this._correlativasAprobadasFinal;
    }

    get correlativasAprobadasCursar(): number[] | null {
        return this._correlativasAprobadasCursar;
    }

    // Setters
    set codigo(codigo: number) {
        this._codigo = codigo;
    }

    set nombre(nombre: string) {
        this._nombre = nombre;
    }

    set condicion(condicion: Condiciones) {
        this._condicion = condicion;
    }

    set periodo(periodo: number) {
        this._periodo = periodo;
    }

    set anio(anio: number) {
        this._anio = anio;
    }

    set nota(nota: number | null) {
        this._nota = nota;
    }

    set correlativasRegularesCursar(correlativasRegularesCursar: number[] | null) {
        this._correlativasRegularesCursar = correlativasRegularesCursar;
    }

    set correlativasAprobadasFinal(correlativasAprobadasFinal: number[] | null) {
        this._correlativasAprobadasFinal = correlativasAprobadasFinal;
    }

    set correlativasAprobadasCursar(correlativasAprobadasCursar: number[] | null) {
        this._correlativasAprobadasCursar = correlativasAprobadasCursar;
    }
}
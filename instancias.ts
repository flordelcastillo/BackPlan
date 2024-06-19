import { Materia } from "./Materia";

export let arregloMaterias: Materia[] = [
    new Materia(1, "Matemática Discreta", 'Aprobada', 1, 1, 6, null, null, null),
    new Materia(2, "Introducción al Análisis Matemático", 'Aprobada', 1, 1, 8, null, null, null),
    new Materia(3, "Introducción a la Programación", 'Aprobada', 1, 1, 8, null, null, null),
    new Materia(4, "Química", 'Regular', 1, 1, null, null, null, null),
    new Materia(5, "Álgebra Lineal y Geometría Analítica", 'Regular', 2, 1, null, [1], null, [1]),
    new Materia(6, "Cálculo I", 'Aprobada', 2, 1, 9, [2], null, [2]),
    new Materia(7, "Algoritmos y Estructuras de Datos I", 'Aprobada', 2, 1, 10, [2], null, [2]),
    new Materia(8, "Arquitectura de Computadoras", 'Regular', 2, 1, null, [3], null, [3]),
    new Materia(9, "Cálculo II", 'Regular', 1, 2, null, [6, 5], [1], [6, 5]),
    new Materia(10, "Física I", 'Regular', 1, 2, null, [2], null, [2]),
    new Materia(11, "Algoritmos y Estructuras de Datos II", 'Aprobada', 1, 2, 8, [7], [3], [7]),
    new Materia(12, "Sistemas de Información I ", 'Aprobada', 1, 2, 8, [3], null, [3]),
    new Materia(13, "Física II", 'Regular', 2, 2, null, [10], null, [10]),
    new Materia(14, "Paradigmas de Programación", 'Aprobada', 2, 2, 9, [11], null, [11]),
    new Materia(15, "Sistemas de Información II", 'Regular', 2, 2, null, [12], null, [12]),
    new Materia(16, "Probabilidad y Estadística", 'No cursada', 2, 2, null, [9], null, [9]),
    new Materia(17, "Bases de Datos", 'Aprobada', 2, 2, 9.5, [11], null, [11]),
    new Materia(18, "Ingeniería de Software I", 'No cursada', 1, 3, null, [15, 17], [11], [15, 17]),
    new Materia(19, "Sistemas Operativos", 'No cursada', 1, 3, null, [11], [7, 8], [8, 11]),
    new Materia(20, "Redes", 'No cursada', 1, 3, null, [14], [11], [14]),
    new Materia(21, "Física III", 'No cursada', 1, 3, null, [13], [4, 10], [13]),
    new Materia(22, "Inglés", 'No cursada', 1, 3, null, null, null, null),
    /**CPORR */
    new Materia(23, "Organización Empresarial ", 'No cursada', 2, 3, null, [15, 16], [9, 12], [15, 16]),
    new Materia(24, "Análisis y Diseño de Algoritmos", 'No cursada', 2, 3, null, [14, 16], [9, 11], [14, 16]),
    new Materia(25, "Ingeniería de Software II", 'No cursada', 2, 3, null, [18], [15, 17], [18]),
    new Materia(26, "Programación Web", 'No cursada', 2, 3, null, [18, 20], [14, 17], [18, 20]),
    new Materia(27, "Ética y Habilitación Profesional", 'No cursada', 2, 3, null, [18], [9], [18]),

    
    new Materia(28, "Reingeniería de Sistemas", 'No cursada', 1, 4, null, [25], [18], [25]),
    new Materia(29, "Gestión Ambiental", 'No cursada', 1, 4, null, [27], [15, 21], [27]),
    new Materia(30, "Investigación Operativa", 'No cursada', 1, 4, null, [24], [14, 16], [24]),
    new Materia(31, "Teoría de la Computación", 'No cursada', 1, 4, null, [24], [14, 16], [24]),
    new Materia(32, "Métodos Numéricos", 'No cursada', 1, 4, null, [14], [9, 11], [14]),

    new Materia(33, "Inteligencia Artificial", 'No cursada', 2, 4, null, [31], [24], [31]),
    new Materia(34, "Compiladores", 'No cursada', 2, 4, null, [31], [19, 24], [31]),
    new Materia(35, "Modelos y Simulación", 'No cursada', 2, 4, null, [24], [16, 25], [24]),
    new Materia(36, "Elementos de Economía", 'No cursada', 2, 4, null, [23], [15, 16], [23]),
    new Materia(37, "Sistemas Distribuidos y Paralelos", 'No cursada', 2, 4, null, [25], [20], [25]),


    new Materia(38, "Auditoría y Peritaje de Sistemas", 'No cursada', 1, 5, null, [28], [25], [28]),
    new Materia(39, "Base de Datos Avanzadas", 'No cursada', 1, 5, null, [37], [17], [37]),
    new Materia(40, "Optativa 1", 'No cursada', 1, 5, null, null, null, null),
    new Materia(41, "Optativa 2", 'No cursada', 1, 5, null, null, null, null),
    new Materia(42, "Bioinformática", 'No cursada', 1, 5, null, [35, 37], [31], [35, 37]),
    
    new Materia(43, "Práctica Profesional Supervisada", 'No cursada', 2, 5, null, null, null, null),
    new Materia(44, "Proyecto Final", 'No cursada', 2, 5, null, [1, 2], [1, 2], [1, 4]),
    new Materia(45, "Sistemas de Representación", 'Aprobada', 1, 2, 8.5, null, null, null)
];

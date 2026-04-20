// ============================================
// DÍA 2 - CONDICIONALES (if, else if, else)
// ============================================

console.log("=" .repeat(60));
console.log("🧠 DÍA 2: HACIENDO QUE EL CÓDIGO TOME DECISIONES");
console.log("=" .repeat(60));
console.log("");

// ============================================
// PARTE 1: IF BÁSICO (si esto pasa, haz esto)
// ============================================

console.log("🔷 PARTE 1: IF básico");
console.log("-".repeat(40));

let hora = 9;  // Cambia este valor (0-23)

console.log(`📍 Son las ${hora}:00 horas`);

if (hora < 12) {
    console.log("🌅 ¡Buenos días! Sigue con el entrenamiento");
}

console.log("");

// ============================================
// PARTE 2: IF + ELSE (si no, haz esto otro)
// ============================================

console.log("🔷 PARTE 2: IF + ELSE");
console.log("-".repeat(40));

let tengoHambre = true;  // Cambia a false para ver qué pasa

if (tengoHambre) {
    console.log("🍕 ¡Tengo hambre! Voy a comer algo");
} else {
    console.log("💪 Estoy lleno de energía, sigo codeando");
}

console.log("");

// ============================================
// PARTE 3: ELSE IF (múltiples opciones)
// ============================================

console.log("🔷 PARTE 3: ELSE IF (múltiples decisiones)");
console.log("-".repeat(40));

let nota = 85;  // Cambia este valor: 95, 70, 50, 30

console.log(`📊 Tu nota es: ${nota}`);

if (nota >= 90) {
    console.log("🎉 ¡Excelente! Eres un CRACK");
    console.log("   Te mereces un descanso y celebrar");
} else if (nota >= 75) {
    console.log("👍 Muy bien! Vas por buen camino");
    console.log("   Sigue así, estás cerca de la excelencia");
} else if (nota >= 60) {
    console.log("⚠️ Aprobaste, pero puedes dar más");
    console.log("   Revisa los temas que te fallaron");
} else {
    console.log("📚 Necesitas repasar más");
    console.log("   No te rindas, todos empezamos así");
}

console.log("");

// ============================================
// PARTE 4: ANIDANDO CONDICIONALES (if dentro de if)
// ============================================

console.log("🔷 PARTE 4: Condicionales anidados");
console.log("-".repeat(40));

let edad = 18;
let tieneDocumento = true;

console.log(`📍 Edad: ${edad} años`);
console.log(`📍 Tiene documento: ${tieneDocumento}`);

if (edad >= 18) {
    if (tieneDocumento) {
        console.log("✅ PUEDES ingresar al evento");
        console.log("   Disfruta la noche");
    } else {
        console.log("❌ Tienes edad pero no documento");
        console.log("   Necesitas tu identificación");
    }
} else {
    console.log("❌ Eres menor de edad");
    console.log("   No puedes ingresar");
}

console.log("");

// ============================================
// PARTE 5: OPERADOR TERNARIO (if en una línea)
// ============================================

console.log("🔷 PARTE 5: Operador ternario ? :");
console.log("-".repeat(40));

let energia = 70;  // Cambia este valor
let estado = energia > 50 ? "💪 ACTIVO" : "😴 CANSADO";

console.log(`📍 Energía: ${energia}%`);
console.log(`📍 Estado: ${estado}`);

// Otro ejemplo ternario
let horaDelDia = 15;
let saludo = horaDelDia < 12 ? "Buenos días" : "Buenas tardes";
console.log(`📍 Son las ${horaDelDia}:00 → ${saludo}`);

console.log("");

// ============================================
// PARTE 6: SWITCH (múltiples casos específicos)
// ============================================

console.log("🔷 PARTE 6: SWITCH (para muchas opciones fijas)");
console.log("-".repeat(40));

let diaSemana = "martes";  // Cambia: lunes, martes, miercoles, etc.

console.log(`📍 Hoy es ${diaSemana}`);

switch (diaSemana) {
    case "lunes":
        console.log("📅 Inicio de semana, con toda la energía");
        console.log("   Plan: Repasar lo del fin de semana");
        break;
    case "martes":
    case "miercoles":
    case "jueves":
        console.log("📅 Mitad de semana, ritmo constante");
        console.log("   Plan: Nuevos conceptos y ejercicios");
        break;
    case "viernes":
        console.log("🎉 Viernes! Casi fin de semana");
        console.log("   Plan: Repasar la semana y practicar");
        break;
    case "sabado":
    case "domingo":
        console.log("🏖️ Fin de semana! Descanso activo");
        console.log("   Plan: Proyecto personal o repaso ligero");
        break;
    default:
        console.log("📆 Ese no es un día válido");
}

console.log("");

// ============================================
// PROYECTO PRINCIPAL: SIMULADOR DE DÍA LABORAL
// ============================================

console.log("🎯 PROYECTO DEL DÍA: SIMULADOR DE RUTINA");
console.log("=" .repeat(60));
console.log("");

// === CONFIGURACIÓN (CAMBIA ESTOS VALORES) ===
let horaActual = 10;           // 0-23
let tareasCompletadas = 3;     // Cuántas tareas has hecho
let tareasTotales = 5;         // Total de tareas del día
let estoyCansado = false;      // true o false
let energiaRestante = 75;      // 0-100

console.log("📋 TU ESTADO ACTUAL:");
console.log(`   ⏰ Hora: ${horaActual}:00`);
console.log(`   ✅ Tareas: ${tareasCompletadas}/${tareasTotales}`);
console.log(`   😴 ¿Cansado?: ${estoyCansado}`);
console.log(`   ⚡ Energía: ${energiaRestante}%`);
console.log("");

// === DECISIONES QUE TOMA EL PROGRAMA ===

// Decisión 1: ¿Es horario de trabajo?
console.log("🔍 ANALIZANDO SITUACIÓN...");
console.log("");

if (horaActual >= 8 && horaActual <= 18) {
    console.log("💼 ESTÁS EN HORARIO LABORAL");
    
    // Decisión dentro del horario laboral
    if (tareasCompletadas >= tareasTotales) {
        console.log("🎉 ¡COMPLETASTE TODAS LAS TAREAS!");
        console.log("   ✅ Puedes adelantar código personal");
        console.log("   ✅ O tomar un descanso merecido");
    } else {
        let tareasPendientes = tareasTotales - tareasCompletadas;
        console.log(`⚠️ Te faltan ${tareasPendientes} tareas por hacer`);
        
        if (energiaRestante < 30) {
            console.log("😴 Estás muy cansado, TOMA UN DESCANSO");
            console.log("   15 minutos de pausa y vuelves con más energía");
        } else if (energiaRestante < 60) {
            console.log("⚡ Energía media. Prioriza la tarea más importante");
            console.log("   Haz la más difícil primero");
        } else {
            console.log("💪 ¡Energía al 100%! A darle con todo");
            console.log("   Comienza con la tarea más rápida para agarrar ritmo");
        }
    }
} else {
    console.log("🌙 FUERA DE HORARIO LABORAL");
    
    if (estoyCansado) {
        console.log("😴 Estás cansado. Es momento de descansar");
        console.log("   Mañana será otro día productivo");
    } else {
        console.log("🚀 Aprovecha para estudiar o hacer proyectos personales");
        console.log("   El crecimiento no tiene horario");
    }
}

console.log("");
console.log("=" .repeat(60));

// ============================================
// EJERCICIOS PRÁCTICOS PARA TI
// ============================================

console.log("");
console.log("📝 EJERCICIOS PARA RESOLVER (modifica el código abajo)");
console.log("=" .repeat(60));

// === EJERCICIO 1: NÚMERO POSITIVO/NEGATIVO ===
console.log("");
console.log("🔢 EJERCICIO 1: ¿Positivo o negativo?");
let numero = -5;  // Cambia este valor

// ESCRIBE TU CÓDIGO AQUÍ:
if (numero > 0) {
    console.log("Es positivo");
} else if (numero < 0) {
    console.log("Es negativo");
} else {
    console.log("Es cero");
} 


// === EJERCICIO 2: ¿PUEDES VOTAR? ===
console.log("");
console.log("🗳️ EJERCICIO 2: ¿Puedes votar?");
let edadPersona = 16;  // Cambia este valor
let esCiudadano = true;  // true o false

// ESCRIBE TU CÓDIGO AQUÍ:
if (edadPersona >= 18 && esCiudadano) {
    console.log("✅ Puedes votar");
} else {
    console.log("❌ No puedes votar");
}


// === EJERCICIO 3: CALIFICACIÓN CON LETRA ===
console.log("");
console.log("📝 EJERCICIO 3: Calificación en letra");
let puntaje = 85;  // Cambia este valor

// 90-100 = A, 80-89 = B, 70-79 = C, 60-69 = D, <60 = F
// ESCRIBE TU CÓDIGO AQUÍ:
if (puntaje >= 90) {
    console.log("Calificación: A");
} else if (puntaje >= 80) {
    console.log("Calificación: B");
} else if (puntaje >= 70) {
    console.log("Calificación: C");
} else if (puntaje >= 60) {
    console.log("Calificación: D");
} else {
    console.log("Calificación: F");
}

// === EJERCICIO 4: ¿ES BISIESTO? ===
console.log("");
console.log("📅 EJERCICIO 4: ¿Año bisiesto?");
let año = 2024;  // Cambia este valor
// Un año es bisiesto si:
// - Es divisible por 4 Y
// - NO es divisible por 100, O es divisible por 400
// ESCRIBE TU CÓDIGO AQUÍ:
if ((año % 4 === 0 && año % 100 !== 0) || año % 400 === 0) {
    console.log("✅ Es un año bisiesto");
} else {
    console.log("❌ No es un año bisiesto");
}


console.log("");
console.log("=" .repeat(60));
console.log("✅ DÍA 2 COMPLETADO");
console.log("🚀 MAÑANA: Bucles (for, while) - Repetir código");
console.log("=" .repeat(60));
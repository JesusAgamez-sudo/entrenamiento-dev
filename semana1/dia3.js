// ============================================
// DÍA 3 - BUCLES (for, while, do while)
// ============================================

console.log("=" .repeat(60));
console.log("🔄 DÍA 3: REPETIR CÓDIGO AUTOMÁTICAMENTE");
console.log("=" .repeat(60));
console.log("");

// ============================================
// PARTE 1: BUCLE FOR (el más común)
// ============================================

console.log("🔷 PARTE 1: BUCLE FOR");
console.log("-".repeat(40));

// Estructura: for(inicio; condición; incremento)
console.log("📝 Ejemplo 1: Contar del 1 al 5");

for(let contador = 1; contador <= 5; contador++) {
    console.log(`   Vuelta número ${contador}`);
}

console.log("");

console.log("📝 Ejemplo 2: Contar hacia atrás del 5 al 1");

for(let i = 5; i >= 1; i--) {
    console.log(`   ${i}...`);
}
console.log("   ¡DESPEGUE! 🚀");

console.log("");

console.log("📝 Ejemplo 3: Tabla de multiplicar del 5");

let numero = 5;
for(let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`   ${numero} x ${i} = ${resultado}`);
}

console.log("");

// ============================================
// PARTE 2: BUCLE FOR CON ARRAYS (importante)
// ============================================

console.log("🔷 PARTE 2: FOR + ARRAYS");
console.log("-".repeat(40));

let lenguajes = ["JavaScript", "Python", "Java", "React", "Node.js"];

console.log("📝 Mis tecnologías:");

for(let i = 0; i < lenguajes.length; i++) {
    console.log(`   ${i + 1}. ${lenguajes[i]}`);
}

console.log("");

console.log("📝 Recorriendo mis metas diarias:");

let metasDiarias = [
    "Escribir código por 8 horas",
    "Aprender un concepto nuevo",
    "Hacer un ejercicio práctico",
    "Subir cambios a GitHub",
    "Repasar lo aprendido"
];

for(let i = 0; i < metasDiarias.length; i++) {
    console.log(`   ✅ ${metasDiarias[i]}`);
}

console.log("");

// ============================================
// PARTE 3: BUCLE WHILE (condicional al inicio)
// ============================================

console.log("🔷 PARTE 3: BUCLE WHILE");
console.log("-".repeat(40));

console.log("📝 While: mientras condición sea true, sigue");

let energia = 100;
let minutosEstudiando = 0;

console.log(`   Energía inicial: ${energia}%`);

while(energia > 60) {
    minutosEstudiando += 10;  // Estudia 10 minutos
    energia -= 10;            // Baja 10% de energía
    console.log(`   ⏰ ${minutosEstudiando} min - Energía: ${energia}%`);
}

console.log(`\n   ⚡ ¡Energía baja! Has estudiado ${minutosEstudiando} minutos`);
console.log("   🍵 Tómate un descanso");

console.log("");

// ============================================
// PARTE 4: BUCLE DO WHILE (ejecuta al menos una vez)
// ============================================

console.log("🔷 PARTE 4: BUCLE DO WHILE");
console.log("-".repeat(40));

console.log("📝 Do while: ejecuta primero, luego pregunta");

let intentos = 0;
let pinCorrecto = "1234";
let pinIngresado = "";

// Simulamos que el usuario ingresa un PIN
do {
    intentos++;
    console.log(`   🔐 Intento ${intentos}`);
    
    // Simulamos diferentes intentos
    if(intentos === 1) pinIngresado = "0000";
    else if(intentos === 2) pinIngresado = "1111";
    else if(intentos === 3) pinIngresado = "1234";
    
    console.log(`   📝 Ingresaste: ${pinIngresado}`);
    
} while(pinIngresado !== pinCorrecto && intentos < 3);

if(pinIngresado === pinCorrecto) {
    console.log("   ✅ ¡PIN CORRECTO! Acceso concedido");
} else {
    console.log("   ❌ Demasiados intentos. Cuenta bloqueada");
}

console.log("");

// ============================================
// PARTE 5: BREAK Y CONTINUE (control fino)
// ============================================

console.log("🔷 PARTE 5: BREAK y CONTINUE");
console.log("-".repeat(40));

console.log("📝 BREAK: sale del bucle inmediatamente");
console.log("   Buscando el número 7...");

for(let i = 1; i <= 10; i++) {
    if(i === 7) {
        console.log(`   🎯 ¡Encontré el ${i}! Salgo del bucle`);
        break;  // Sale del bucle
    }
    console.log(`   Revisando el ${i}...`);
}

console.log("");

console.log("📝 CONTINUE: salta a la siguiente iteración");
console.log("   Mostrando solo números pares:");

for(let i = 1; i <= 10; i++) {
    if(i % 2 !== 0) {  // Si es impar
        continue;  // Salta este, sigue con el siguiente
    }
    console.log(`   ✅ ${i} es par`);
}

console.log("");

// ============================================
// PROYECTO PRINCIPAL: SIMULADOR DE ENTRENAMIENTO
// ============================================

console.log("🎯 PROYECTO DEL DÍA: SIMULADOR DE ENTRENAMIENTO");
console.log("=" .repeat(60));
console.log("");

// Configuración del entrenamiento
let diasEntrenamiento = 60;
let horasDiarias = 10;
let metaTotalHoras = diasEntrenamiento * horasDiarias;
let horasCompletadas = 0;
let progresoPorcentaje = 0;

console.log("📋 PLAN DE ENTRENAMIENTO:");
console.log(`   🗓️  Días totales: ${diasEntrenamiento}`);
console.log(`   ⏰ Horas por día: ${horasDiarias}`);
console.log(`   🎯 Meta total: ${metaTotalHoras} horas`);
console.log("");

console.log("🔄 SIMULANDO PROGRESO DÍA A DÍA:");
console.log("-".repeat(40));

for(let dia = 1; dia <= diasEntrenamiento; dia++) {
    // Cada día completamos las horas
    horasCompletadas += horasDiarias;
    progresoPorcentaje = (horasCompletadas / metaTotalHoras) * 100;
    
    // Mostrar progreso cada 5 días (no cada día para no saturar)
    if(dia % 5 === 0 || dia === 1) {
        console.log(`   📅 Día ${dia}: ${horasCompletadas}/${metaTotalHoras} horas (${Math.floor(progresoPorcentaje)}%)`);
        
        // Mensajes de motivación según el progreso
        if(progresoPorcentaje === 25) {
            console.log("   🎉 ¡PRIMER CUARTO COMPLETADO! Sigue así");
        } else if(progresoPorcentaje === 50) {
            console.log("   🔥 ¡MITAD DEL CAMINO! Vas increíble");
        } else if(progresoPorcentaje === 75) {
            console.log("   💪 ¡ÚLTIMO TRAMO! No pares ahora");
        } else if(progresoPorcentaje === 100) {
            console.log("   🏆 ¡META ALCANZADA! Eres un campeón");
        }
    }
}

console.log("");
console.log("📊 RESUMEN FINAL:");
console.log(`   ✅ Horas completadas: ${horasCompletadas}`);
console.log(`   📈 Progreso: ${progresoPorcentaje}%`);
console.log("");

// ============================================
// EJERCICIOS PRÁCTICOS
// ============================================

console.log("=" .repeat(60));
console.log("📝 EJERCICIOS PARA RESOLVER");
console.log("=" .repeat(60));
console.log("");

// === EJERCICIO 1: SUMA DE NÚMEROS ===
console.log("🔢 EJERCICIO 1: Suma del 1 al 100");
console.log("   Usa un bucle para sumar 1+2+3+...+100");
console.log("   Resultado esperado: 5050");
console.log("");

// ESCRIBE TU CÓDIGO AQUÍ:
let suma = 0;
for(let i = 1; i <= 100; i++) {
    suma = suma + i;
}
console.log("   La suma es: " + suma);


// === EJERCICIO 2: NÚMEROS IMPARES ===
console.log("");
console.log("🔢 EJERCICIO 2: Mostrar números impares del 1 al 50");
console.log("");

// ESCRIBE TU CÓDIGO AQUÍ:

for(let i = 1; i <= 50; i++) {
    if(i % 2 !== 0) {
        console.log("   " + i);
    }
}

// === EJERCICIO 3: FACTORIAL ===
console.log("");
console.log("🔢 EJERCICIO 3: Calcular factorial de un número");
console.log("   Factorial de 5 = 5x4x3x2x1 = 120");
let numeroFactorial = 5;
console.log(`   Calcular factorial de ${numeroFactorial}`);
console.log("");

// ESCRIBE TU CÓDIGO AQUÍ:
let factorial = 1;
for(let i = 1; i <= numeroFactorial; i++) {
    factorial = factorial * i;
}
console.log("   El factorial es: " + factorial);


// === EJERCICIO 4: PIRÁMIDE DE ASTERISCOS ===
console.log("");
console.log("📐 EJERCICIO 4: Dibujar una pirámide");
console.log("   Con un bucle, dibuja:");
console.log("   *");
console.log("   **");
console.log("   ***");
console.log("   ****");
console.log("   *****");
console.log("");

// SOLUCIÓN:
for (let i = 1; i <= 5; i++) {
    let fila = "";
    for (let j = 1; j <= i; j++) {
        fila += "*";
    }
    console.log(fila);
}


// === EJERCICIO 5: BÚSQUEDA EN ARRAY ===
console.log("");
console.log("🔍 EJERCICIO 5: Buscar un número en un array");
let numeros = [3, 7, 2, 9, 5, 1, 8, 4, 6];
let buscar = 5;
console.log(`   Array: [${numeros.join(", ")}]`);
console.log(`   Buscar el número: ${buscar}`);
console.log("");

// Usa un bucle para encontrar en qué posición está el número 5
// ESCRIBE TU CÓDIGO AQUÍ:

for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] === buscar) {
        console.log(`   Posición: ${i}`);
        break;
    }
}

console.log("");
console.log("=" .repeat(60));
console.log("✅ DÍA 3 COMPLETADO");
console.log("🚀 MAÑANA: Funciones (Reutilizar código como un pro)");
console.log("=" .repeat(60));
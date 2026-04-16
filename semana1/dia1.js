// ============================================
// DÍA 1 - MI PRIMER PROGRAMA EN JAVASCRIPT
// ============================================

console.log("🎉 HOLA MUNDO!");
console.log("Soy Jesús y hoy empiezo mi camino a ser ingeniero de software");
console.log("📅 Fecha de inicio: " + new Date().toLocaleDateString());
console.log("🎯 Objetivo: En 60 días tendré 3 proyectos profesionales desplegados");
console.log("");

// Variable: donde guardamos información
let miNombre = "Jesús";
let horasPorDia = 10;
let diasCompromiso = 60;

console.log("📝 MIS DATOS:");
console.log("   Nombre: " + miNombre);
console.log("   Horas diarias: " + horasPorDia);
console.log("   Días de compromiso: " + diasCompromiso);
console.log("");

// Calcular horas totales
let horasTotales = horasPorDia * diasCompromiso;
console.log("⏰ Horas totales de entrenamiento: " + horasTotales + " horas");
console.log("");

// Una función: es una receta que hace algo
function saludar() {
    console.log("💪 ¡VAMOS CON TODO! 💪");
    console.log("Hoy es el día 1 de " + diasCompromiso);
}

// Llamar a la función (ejecutar la receta)
saludar();
console.log("");

// Array (lista) de mis metas
let metas = [
    "Aprender JavaScript a fondo",
    "Construir una API REST con Node.js",
    "Hacer un proyecto con React",
    "Crear una app con Inteligencia Artificial",
    "Desplegar todo en la nube",
    "Conseguir trabajo en esta empresa"
];

console.log("🎯 MIS 6 METAS:");
for (let i = 0; i < metas.length; i++) {
    console.log("   " + (i + 1) + ". " + metas[i]);
}
console.log("");

// Un objeto: agrupa información relacionada
let miPlan = {
    dia: 1,
    tecnologia: "JavaScript",
    tarea: "Mi primer programa",
    estado: "COMPLETADO ✅",
    sentimiento: "🔥 EMOCIONADO 🔥"
};

console.log("📋 MI PLAN DE HOY:");
console.log("   Día: " + miPlan.dia);
console.log("   Tecnología: " + miPlan.tecnologia);
console.log("   Tarea: " + miPlan.tarea);
console.log("   Estado: " + miPlan.estado);
console.log("   Sentimiento: " + miPlan.sentimiento);
console.log("");

// Promesa a mí mismo
console.log("📜 MI PROMESA:");
console.log("   \"No importa lo difícil que se ponga,");
console.log("    voy a escribir código TODOS los días,");
console.log("    aunque sean solo 10 líneas.");
console.log("    La constancia mata al talento.\"");

console.log("");
console.log("✅ PROGRAMA EJECUTADO CON ÉXITO");
console.log("🚀 SIGUIENTE: Aprender qué son las variables");

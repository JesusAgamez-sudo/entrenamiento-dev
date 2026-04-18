// ============================================
// DÍA 2 - CONDICIONALES (if, else if, else)
// ============================================

console.log("=" .repeat(60));
console.log("🧠 Dia 2: Haciendo que el codigo tome Decisiones");
console.log("=" .repeat(60));
console.log("");

// ============================================
// PARTE 1: IF BÁSICO (si esto pasa, haz esto)
// ============================================

console.log("🔷 Parte 1: IF BÁSICO");
console.log("-".repeat(40));

let hora = 9;
console.log(`📍son las ${hora} :00`);
if (hora < 12)
    console.log("🌞 Buenos días sigue con el entrenamiento");
console.log("");

// ============================================
// PARTE 2: IF-ELSE (si esto pasa, haz esto, sino haz esto otro)
// ============================================

console.log("🔷 Parte 2: IF-ELSE");
console.log("-".repeat(40));

let tengoHambre = true;

if(tengoHambre){
    console.log("🍕 ¡Tengo hambre ire a comer algo!");
} else {
    console.log("💪 No tengo hambre, seguiré con el entrenamiento");
}
console.log("");

// ============================================
// PARTE 3: IF-ELSE IF-ELSE (Multiples condiciones)
// ============================================

console.log("🔷 Parte 3: IF-ELSE IF-ELSE Multiples decisiones");
console.log("-".repeat(40));

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


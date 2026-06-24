import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>if / else if / else</h2>
<p>La estructura condicional <strong>if/else</strong> permite que el programa tome decisiones: ejecuta unas instrucciones u otras según se cumpla o no una condición. El <code>else if</code> permite encadenar múltiples condiciones. Las condiciones se evalúan en orden, y solo se ejecuta el primer bloque cuya condición sea verdadera.</p>
<pre><code>let nota = 7.5;

if (nota >= 9) {
  console.log("Sobresaliente");
} else if (nota >= 7) {
  console.log("Notable");
} else if (nota >= 5) {
  console.log("Aprobado");
} else {
  console.log("Suspenso");
}</code></pre>

<h2>Operador ternario</h2>
<p>El <strong>operador ternario</strong> es una forma compacta de escribir un if/else cuando se quiere asignar uno de dos valores según una condición. Sintaxis: <code>condición ? valor_si_verdad : valor_si_falso</code>. Úsalo solo para expresiones simples; anidarlo dificulta la lectura.</p>
<pre><code>let acceso = edad >= 18 ? "Permitido" : "Denegado";
// Útil para asignaciones simples. Evitar anidarlo.</code></pre>

<h2>switch</h2>
<p>La estructura <strong>switch</strong> evalúa una expresión y ejecuta el bloque cuyo <code>case</code> coincida con el valor. Es especialmente útil cuando hay muchos casos posibles para la misma variable, ya que resulta más legible que una cadena larga de <code>else if</code>. El <code>break</code> es obligatorio en cada caso para evitar que la ejecución continúe en el siguiente bloque (<em>fall-through</em>). Se pueden agrupar varios <code>case</code> juntos si deben ejecutar el mismo código.</p>
<pre><code>let dia = "lunes";
switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
  case "viernes":
    console.log("Día laboral");
    break;
  case "sábado":
    console.log("Sábado");
    break;
  case "domingo":
    console.log("Domingo");
    break;
  default:
    console.log("Día desconocido");
}</code></pre>

<h2>Año bisiesto</h2>
<p>Es un ejemplo clásico de condición compuesta. La regla tiene tres niveles: 1) divisible por 4 (años normales), 2) los divisibles por 100 <em>no</em> son bisiestos (excepción), 3) los divisibles por 400 <em>sí</em> son bisiestos (excepción de la excepción). Se expresa con <code>&amp;&amp;</code> y <code>||</code> en una sola condición.</p>
<pre><code>function esBisiesto(anio) {
  return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
}</code></pre>

<h2>Cortocircuito y guardia</h2>
<p>Los operadores <code>&amp;&amp;</code> y <code>||</code> usan <strong>evaluación de cortocircuito</strong>: si el primer operando determina el resultado, el segundo no se evalúa. El patrón <strong>guardia</strong> consiste en retornar o lanzar error al inicio de una función si los parámetros no son válidos, evitando el anidamiento excesivo.</p>
<pre><code>// Guardia: retorno temprano para casos inválidos
function dividir(a, b) {
  if (b === 0) return null;  // guardia
  return a / b;
}

// &&: evalúa el segundo solo si el primero es truthy
let nombre = usuario && usuario.nombre;

// ||: valor por defecto
let saludo = nombre || "Invitado";</code></pre>
`,

  python: `
<h2>if / elif / else</h2>
<p>En Python la indentación (sangrado) <strong>es obligatoria</strong> y define los bloques de código (no se usan llaves). Python usa <code>elif</code> en lugar de <code>else if</code>. El encadenamiento de comparaciones (<code>5 &lt;= nota &lt; 9</code>) es una característica única de Python que no existe en otros lenguajes.</p>
<pre><code>nota = 7.5

if nota >= 9:
    print("Sobresaliente")
elif nota >= 7:
    print("Notable")
elif nota >= 5:
    print("Aprobado")
else:
    print("Suspenso")</code></pre>

<h2>Expresión condicional (ternario)</h2>
<p>Python tiene su propio operador ternario con sintaxis más legible: <code>valor_si_verdad if condición else valor_si_falso</code>. La condición va en el medio, lo que algunos encuentran más natural en español.</p>
<pre><code>acceso = "Permitido" if edad >= 18 else "Denegado"</code></pre>

<h2>match (Python 3.10+)</h2>
<p>La sentencia <code>match</code> es el equivalente moderno del <code>switch</code> en Python. Permite agrupar varios casos con <code>|</code> y usa <code>_</code> como caso por defecto. Es más potente que un switch tradicional: también puede hacer <em>pattern matching</em> estructural.</p>
<pre><code>dia = "lunes"
match dia:
    case "lunes" | "martes" | "miércoles" | "jueves" | "viernes":
        print("Día laboral")
    case "sábado":
        print("Sábado")
    case "domingo":
        print("Domingo")
    case _:
        print("Día desconocido")</code></pre>

<h2>Año bisiesto</h2>
<pre><code>def es_bisiesto(anio):
    return (anio % 4 == 0 and anio % 100 != 0) or anio % 400 == 0

# O usar el módulo calendar
import calendar
calendar.isleap(2024)  # True</code></pre>

<h2>Encadenamiento de comparaciones</h2>
<pre><code># Python permite encadenar (¡único entre lenguajes principales!)
x = 5
if 0 < x < 10:
    print("x está entre 0 y 10")

if 18 <= edad < 65:
    print("Edad laboral")</code></pre>
`,

  java: `
<h2>if / else if / else</h2>
<pre><code>double nota = 7.5;

if (nota >= 9) {
    System.out.println("Sobresaliente");
} else if (nota >= 7) {
    System.out.println("Notable");
} else if (nota >= 5) {
    System.out.println("Aprobado");
} else {
    System.out.println("Suspenso");
}</code></pre>

<h2>Operador ternario</h2>
<pre><code>String acceso = edad >= 18 ? "Permitido" : "Denegado";</code></pre>

<h2>switch (clásico y expresión)</h2>
<pre><code>// Switch clásico
int mes = 3;
switch (mes) {
    case 1: case 3: case 5: case 7:
    case 8: case 10: case 12:
        System.out.println("31 días"); break;
    case 4: case 6: case 9: case 11:
        System.out.println("30 días"); break;
    case 2:
        System.out.println("28 o 29 días"); break;
    default:
        System.out.println("Mes inválido");
}

// Switch expression (Java 14+)
String tipo = switch (dia) {
    case "lunes", "martes", "miércoles", "jueves", "viernes" -> "Laboral";
    case "sábado", "domingo" -> "Fin de semana";
    default -> "Desconocido";
};</code></pre>

<h2>Año bisiesto</h2>
<pre><code>boolean esBisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;</code></pre>
`,

  cpp: `
<h2>if / else if / else</h2>
<pre><code>double nota = 7.5;

if (nota >= 9) {
    cout << "Sobresaliente" << endl;
} else if (nota >= 7) {
    cout << "Notable" << endl;
} else if (nota >= 5) {
    cout << "Aprobado" << endl;
} else {
    cout << "Suspenso" << endl;
}</code></pre>

<h2>Operador ternario</h2>
<pre><code>string acceso = edad >= 18 ? "Permitido" : "Denegado";</code></pre>

<h2>switch</h2>
<pre><code>int mes = 3;
switch (mes) {
    case 1: case 3: case 5: case 7:
    case 8: case 10: case 12:
        cout << "31 días" << endl; break;
    case 4: case 6: case 9: case 11:
        cout << "30 días" << endl; break;
    case 2:
        cout << "28 o 29 días" << endl; break;
    default:
        cout << "Mes inválido" << endl;
}</code></pre>

<h2>Año bisiesto</h2>
<pre><code>bool esBisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;</code></pre>
`,

  csharp: `
<h2>if / else if / else</h2>
<pre><code>double nota = 7.5;

if (nota >= 9)
    Console.WriteLine("Sobresaliente");
else if (nota >= 7)
    Console.WriteLine("Notable");
else if (nota >= 5)
    Console.WriteLine("Aprobado");
else
    Console.WriteLine("Suspenso");</code></pre>

<h2>Operador ternario y switch expression</h2>
<pre><code>string acceso = edad >= 18 ? "Permitido" : "Denegado";

// Switch expression (C# 8+)
string tipo = dia switch {
    "lunes" or "martes" or "miércoles" or "jueves" or "viernes" => "Laboral",
    "sábado" or "domingo" => "Fin de semana",
    _ => "Desconocido"
};</code></pre>

<h2>switch clásico</h2>
<pre><code>switch (mes) {
    case 1: case 3: case 5: case 7:
    case 8: case 10: case 12:
        Console.WriteLine("31 días"); break;
    case 4: case 6: case 9: case 11:
        Console.WriteLine("30 días"); break;
    case 2:
        Console.WriteLine("28 o 29 días"); break;
    default:
        Console.WriteLine("Mes inválido"); break;
}</code></pre>

<h2>Año bisiesto</h2>
<pre><code>bool esBisiesto = (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0;
// O usar la librería estándar:
bool esBisiesto2 = DateTime.IsLeapYear(anio);</code></pre>
`,
};

export const controlTopic: Topic = {
  id: 'control',
  title: 'Estructuras de Control',
  icon: 'git-branch',
  description: 'Condicionales if/else, switch, operador ternario y toma de decisiones.',
  lessons: {
    javascript: {
      id: 'control-javascript',
      title: 'Condicionales en JavaScript',
      description: 'if/else, switch, ternario y cortocircuito.',
      theory: theory.javascript,
      topics: ['if', 'switch', 'ternario'],
      exercises: [
        {
          id: 'ctrl-js-1',
          title: 'Clasificador de notas',
          description: 'Clasifica una nota numérica (0-10) en su calificación de letra.',
          instructions: 'Dada una variable `nota`, imprime "Sobresaliente" (>=9), "Notable" (>=7), "Aprobado" (>=5) o "Suspenso" (<5) usando if/else if/else.',
          starterCode: `let nota = 7.5;\n\n// Clasifica la nota con if/else if/else\n`,
          expectedConcept: 'Student should use if/else if/else chain (not switch) with comparison operators to classify the grade.',
          hints: ['Comprueba de mayor a menor', 'else if (nota >= 7) para notable'],
        },
        {
          id: 'ctrl-js-2',
          title: 'Día de la semana',
          description: 'Determina si un día es laboral, sábado o domingo usando switch.',
          instructions: 'Usa un switch con una variable `dia` (string en minúsculas). Imprime "Día laboral", "Sábado" o "Domingo". Agrupa los días laborales en un mismo bloque case.',
          starterCode: `let dia = "miércoles";\n\n// Usa switch (no if/else)\n`,
          expectedConcept: 'Student should use a switch statement (not if/else) with multiple cases sharing the same block for weekdays.',
          hints: ['case "lunes": case "martes": ... (sin break entre ellos)', 'break al final del bloque'],
        },
        {
          id: 'ctrl-js-3',
          title: 'Año bisiesto',
          description: 'Determina si un año es bisiesto.',
          instructions: 'Dado un año, imprime si es bisiesto o no. Un año es bisiesto si es divisible por 4, EXCEPTO los divisibles por 100, salvo que también sean divisibles por 400.',
          starterCode: `let anio = 2024;\n\n// Comprueba si es bisiesto\n// Pista: (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0\n`,
          expectedConcept: 'Student should implement the leap year rule correctly using && and || operators with the three conditions.',
          hints: ['Condición completa: (anio%4===0 && anio%100!==0) || anio%400===0'],
        },
        {
          id: 'ctrl-js-4',
          title: 'Días del mes',
          description: 'Indica cuántos días tiene un mes dado.',
          instructions: 'Dado un número de mes (1-12) y un año, imprime cuántos días tiene ese mes. Usa switch. Considera los años bisiestos para febrero.',
          starterCode: `let mes = 2;\nlet anio = 2024;\n\n// Usa switch para determinar los días\n// Considera si anio es bisiesto para febrero\n`,
          expectedConcept: 'Student should use switch with grouped cases for 31-day months, 30-day months, and February with leap year check.',
          hints: ['case 1: case 3: case 5: ... → 31 días', 'Febrero: bisiesto→29, normal→28'],
        },
        {
          id: 'ctrl-js-5',
          title: 'Calculadora con menú',
          description: 'Selecciona una operación matemática según la opción elegida.',
          instructions: 'Dados dos números y una operación ("+", "-", "*", "/"), calcula el resultado usando switch. Si el operador no es válido, imprime un error. Para división, comprueba que el divisor no sea 0.',
          starterCode: `let a = 10, b = 3;\nlet operacion = "/";\n\n// Usa switch con los casos: "+", "-", "*", "/"\n`,
          expectedConcept: 'Student should use switch on a string operator, handle each arithmetic case, check division by zero, and use default for invalid operators.',
          hints: ['switch(operacion) { case "+": ... }', 'Dentro de "/": comprueba b === 0'],
        },
      ],
    },
    python: {
      id: 'control-python',
      title: 'Condicionales en Python',
      description: 'if/elif/else, match y expresiones condicionales.',
      theory: theory.python,
      topics: ['if', 'match', 'ternario'],
      exercises: [
        {
          id: 'ctrl-py-1',
          title: 'Clasificador de notas',
          description: 'Clasifica una nota numérica en su calificación de letra.',
          instructions: 'Dada nota=7.5, imprime "Sobresaliente" (>=9), "Notable" (>=7), "Aprobado" (>=5) o "Suspenso" (<5) usando if/elif/else.',
          starterCode: `nota = 7.5\n\n# Clasifica la nota con if/elif/else\n`,
          expectedConcept: 'Student should use if/elif/else chain with comparison operators.',
          hints: ['Comprueba de mayor a menor', 'elif nota >= 7: para notable'],
        },
        {
          id: 'ctrl-py-2',
          title: 'Día de la semana',
          description: 'Determina si un día es laboral o fin de semana usando match.',
          instructions: 'Usa match con una variable `dia`. Agrupa los días laborales con |. Imprime "Día laboral", "Sábado" o "Domingo".',
          starterCode: `dia = "miércoles"\n\n# Usa match (Python 3.10+)\n`,
          expectedConcept: 'Student should use match statement with | to group weekday cases.',
          hints: ['case "lunes" | "martes" | ... :', 'case _: para default'],
        },
        {
          id: 'ctrl-py-3',
          title: 'Año bisiesto',
          description: 'Determina si un año es bisiesto.',
          instructions: 'Dado anio=2024, imprime si es bisiesto. Regla: divisible por 4, excepto los de 100, salvo los de 400.',
          starterCode: `anio = 2024\n\n# Comprueba si es bisiesto\n`,
          expectedConcept: 'Student should implement leap year logic using and/or operators.',
          hints: ['(anio % 4 == 0 and anio % 100 != 0) or anio % 400 == 0'],
        },
        {
          id: 'ctrl-py-4',
          title: 'Días del mes',
          description: 'Indica cuántos días tiene un mes.',
          instructions: 'Dado mes=2 y anio=2024, imprime los días del mes. Usa if/elif. Considera bisiestos para febrero.',
          starterCode: `mes = 2\nanio = 2024\n\n# Determina los días del mes\n`,
          expectedConcept: 'Student should use if/elif with in operator to group months and handle February with leap year.',
          hints: ['if mes in [1,3,5,7,8,10,12]: → 31 días', 'elif mes == 2: comprueba bisiesto'],
        },
        {
          id: 'ctrl-py-5',
          title: 'Calculadora con menú',
          description: 'Selecciona una operación matemática según la opción elegida.',
          instructions: 'Dados a=10, b=3 y operacion="/", calcula el resultado usando if/elif. Comprueba división por cero.',
          starterCode: `a = 10\nb = 3\noperacion = "/"\n\n# Usa if/elif para cada operación\n`,
          expectedConcept: 'Student should use if/elif chain on string operator, check division by zero, and handle invalid operators.',
          hints: ['if operacion == "+": ...', 'Para /: comprueba b == 0 primero'],
        },
      ],
    },
    java: {
      id: 'control-java',
      title: 'Condicionales en Java',
      description: 'if/else, switch clásico y switch expression.',
      theory: theory.java,
      topics: ['if', 'switch', 'ternario'],
      exercises: [
        {
          id: 'ctrl-java-1',
          title: 'Clasificador de notas',
          description: 'Clasifica una nota (0-10) en su calificación de letra.',
          instructions: 'Con double nota=7.5, imprime "Sobresaliente" (>=9), "Notable" (>=7), "Aprobado" (>=5) o "Suspenso" (<5).',
          starterCode: `public class Main {\n    public static void main(String[] args) {\n        double nota = 7.5;\n\n        // Clasifica la nota\n\n    }\n}`,
          expectedConcept: 'Student should use if/else if/else with double comparisons.',
          hints: ['else if (nota >= 7) para notable'],
        },
        {
          id: 'ctrl-java-2',
          title: 'Días del mes',
          description: 'Indica cuántos días tiene un mes dado.',
          instructions: 'Con int mes=2 y int anio=2024, usa switch para imprimir los días. Agrupa los meses con el mismo número de días. Considera bisiestos para febrero.',
          starterCode: `public class Main {\n    public static void main(String[] args) {\n        int mes = 2;\n        int anio = 2024;\n\n        // Usa switch\n\n    }\n}`,
          expectedConcept: 'Student should use switch with fall-through (multiple cases same block) for 31/30 day months and if check for February leap year.',
          hints: ['case 1: case 3: ... sin break entre ellos', 'case 2: comprueba bisiesto'],
        },
        {
          id: 'ctrl-java-3',
          title: 'Año bisiesto',
          description: 'Determina si un año es bisiesto.',
          instructions: 'Con int anio=2024, imprime si es bisiesto o no.',
          starterCode: `public class Main {\n    public static void main(String[] args) {\n        int anio = 2024;\n\n        // Comprueba si es bisiesto\n        // (anio % 4 == 0 && anio % 100 != 0) || anio % 400 == 0\n\n    }\n}`,
          expectedConcept: 'Student should implement leap year with correct boolean expression using && and ||.',
          hints: ['boolean bisiesto = (anio%4==0 && anio%100!=0) || anio%400==0;'],
        },
        {
          id: 'ctrl-java-4',
          title: 'Calculadora con menú',
          description: 'Selecciona una operación matemática según el operador.',
          instructions: 'Con int a=10, b=3 y String op="/", usa switch expression para calcular el resultado. Maneja división por cero y operador inválido.',
          starterCode: `public class Main {\n    public static void main(String[] args) {\n        int a = 10, b = 3;\n        String op = "/";\n\n        // Usa switch expression\n\n    }\n}`,
          expectedConcept: 'Student should use switch (classic or expression) on string operator with division by zero check.',
          hints: ['switch(op) { case "+": ... }', 'Para "/": if(b==0) manejar error'],
        },
      ],
    },
    cpp: {
      id: 'control-cpp',
      title: 'Condicionales en C++',
      description: 'if/else y switch en C++.',
      theory: theory.cpp,
      topics: ['if', 'switch', 'ternario'],
      exercises: [
        {
          id: 'ctrl-cpp-1',
          title: 'Clasificador de notas',
          description: 'Clasifica una nota (0-10) en su calificación de letra.',
          instructions: 'Con double nota=7.5, imprime la calificación usando if/else if/else.',
          starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    double nota = 7.5;\n\n    // Clasifica la nota\n\n    return 0;\n}`,
          expectedConcept: 'Student should use if/else if/else chain with double comparisons.',
          hints: ['else if (nota >= 7) para notable'],
        },
        {
          id: 'ctrl-cpp-2',
          title: 'Días del mes',
          description: 'Indica cuántos días tiene un mes dado.',
          instructions: 'Con int mes=2 y anio=2024, usa switch para imprimir los días.',
          starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int mes = 2, anio = 2024;\n\n    // Usa switch\n\n    return 0;\n}`,
          expectedConcept: 'Student should use switch with fall-through for grouped months and handle February.',
          hints: ['case 1: case 3: ... (sin break entre ellos) → 31 días'],
        },
        {
          id: 'ctrl-cpp-3',
          title: 'Año bisiesto',
          description: 'Determina si un año es bisiesto.',
          instructions: 'Con int anio=2024, imprime si es bisiesto.',
          starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int anio = 2024;\n\n    // Comprueba si es bisiesto\n\n    return 0;\n}`,
          expectedConcept: 'Student should implement leap year with correct boolean expression.',
          hints: ['bool bisiesto = (anio%4==0 && anio%100!=0) || anio%400==0;'],
        },
        {
          id: 'ctrl-cpp-4',
          title: 'Calculadora con menú',
          description: 'Selecciona una operación matemática según el operador.',
          instructions: 'Con int a=10, b=3 y char op=\'/\', usa switch para calcular el resultado.',
          starterCode: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int a = 10, b = 3;\n    char op = '/';\n\n    // Usa switch con los casos +, -, *, /\n\n    return 0;\n}`,
          expectedConcept: 'Student should use switch on char operator with division by zero check and default case.',
          hints: ['switch(op) { case \'+\': ... }', 'Para \'/\': if(b==0) error'],
        },
      ],
    },
    csharp: {
      id: 'control-csharp',
      title: 'Condicionales en C#',
      description: 'if/else, switch y switch expression en C#.',
      theory: theory.csharp,
      topics: ['if', 'switch', 'ternario'],
      exercises: [
        {
          id: 'ctrl-cs-1',
          title: 'Clasificador de notas',
          description: 'Clasifica una nota (0-10) en su calificación de letra.',
          instructions: 'Con double nota=7.5, imprime la calificación usando if/else if/else.',
          starterCode: `using System;\n\nclass Program {\n    static void Main() {\n        double nota = 7.5;\n\n        // Clasifica la nota\n\n    }\n}`,
          expectedConcept: 'Student should use if/else if/else chain with double comparisons.',
          hints: ['else if (nota >= 7) para notable'],
        },
        {
          id: 'ctrl-cs-2',
          title: 'Días del mes',
          description: 'Indica cuántos días tiene un mes.',
          instructions: 'Con int mes=2 y anio=2024, usa switch para imprimir los días.',
          starterCode: `using System;\n\nclass Program {\n    static void Main() {\n        int mes = 2, anio = 2024;\n\n        // Usa switch\n\n    }\n}`,
          expectedConcept: 'Student should use switch with fall-through or switch expression for grouped months, handle February.',
          hints: ['case 1: case 3: ... (sin break entre ellos)', 'DateTime.IsLeapYear(anio) para bisiestos'],
        },
        {
          id: 'ctrl-cs-3',
          title: 'Año bisiesto',
          description: 'Determina si un año es bisiesto.',
          instructions: 'Con int anio=2024, imprime si es bisiesto.',
          starterCode: `using System;\n\nclass Program {\n    static void Main() {\n        int anio = 2024;\n\n        // Comprueba si es bisiesto\n\n    }\n}`,
          expectedConcept: 'Student should use boolean expression or DateTime.IsLeapYear().',
          hints: ['bool b = (anio%4==0 && anio%100!=0) || anio%400==0;', 'O: DateTime.IsLeapYear(anio)'],
        },
        {
          id: 'ctrl-cs-4',
          title: 'Calculadora con menú',
          description: 'Selecciona una operación matemática según el operador.',
          instructions: 'Con int a=10, b=3 y string op="/", usa switch expression para calcular el resultado.',
          starterCode: `using System;\n\nclass Program {\n    static void Main() {\n        int a = 10, b = 3;\n        string op = "/";\n\n        // Usa switch expression\n\n    }\n}`,
          expectedConcept: 'Student should use switch expression on string with division by zero check.',
          hints: ['double resultado = op switch { "+" => a+b, "-" => a-b, ... };'],
        },
      ],
    },
  },
};

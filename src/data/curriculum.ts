import type { Topic, Language } from '../types';

// Helper to build a lesson key
export function lessonKey(topicId: string, lang: Language): string {
  return `${topicId}-${lang}`;
}

export const TOPICS: Topic[] = [
  {
    id: 'fundamentals',
    title: 'Fundamentos de la Programación',
    icon: 'cpu',
    description: 'Variables, tipos de datos, operadores y estructura básica de un programa.',
    lessons: {
      javascript: {
        id: 'fundamentals-javascript',
        title: 'Fundamentos en JavaScript',
        description: 'Variables, tipos primitivos y operadores en JS.',
        theory: `
<h2>Variables y tipos de datos</h2>
<p>En JavaScript usamos <code>let</code>, <code>const</code> y <code>var</code> para declarar variables.</p>
<pre><code>let nombre = "Ana";
const PI = 3.14;
let edad = 25;
let activo = true;</code></pre>
<h2>Tipos primitivos</h2>
<ul>
  <li><strong>string</strong>: texto entre comillas</li>
  <li><strong>number</strong>: números enteros y decimales</li>
  <li><strong>boolean</strong>: true / false</li>
  <li><strong>null</strong> / <strong>undefined</strong>: ausencia de valor</li>
</ul>
<h2>Operadores</h2>
<pre><code>// Aritméticos: + - * / % **
let suma = 10 + 5;       // 15
let potencia = 2 ** 8;   // 256

// Comparación: == === != !== < > <= >=
let igual = (3 === 3);   // true

// Lógicos: && || !
let y = true && false;   // false</code></pre>
<h2>Entrada / Salida</h2>
<pre><code>console.log("Hola Mundo");  // imprimir
// En Node.js no hay prompt() nativo; usamos valores hardcodeados para practicar</code></pre>
        `,
        exercises: [
          {
            id: 'fund-js-1',
            title: 'Calculadora básica',
            description: 'Crea variables para dos números y muestra su suma, resta, multiplicación y división.',
            instructions: 'Declara dos variables numéricas `a` y `b`. Imprime con console.log el resultado de a+b, a-b, a*b y a/b.',
            starterCode: `// Declara tus variables aquí
let a = 10;
let b = 3;

// Imprime las operaciones
`,
            expectedConcept: 'The student should declare numeric variables and use arithmetic operators (+, -, *, /) with console.log to print results.',
            hints: ['Usa console.log() para imprimir', 'Los operadores son +, -, *, /'],
          },
          {
            id: 'fund-js-2',
            title: 'Tipos y conversión',
            description: 'Explora los tipos de datos y conversiones básicas.',
            instructions: 'Crea variables de tipo string, number y boolean. Usa typeof para comprobar su tipo e imprime los resultados.',
            starterCode: `// Crea una variable de cada tipo
let texto = "";
let numero = 0;
let booleano = false;

// Usa typeof e imprime
`,
            expectedConcept: 'The student should create variables of different types (string, number, boolean) and use typeof operator to check them.',
            hints: ['typeof variable devuelve el tipo como string', 'Prueba typeof "hola" y typeof 42'],
          },
        ],
        topics: ['variables', 'tipos', 'operadores'],
      },
      python: {
        id: 'fundamentals-python',
        title: 'Fundamentos en Python',
        description: 'Variables, tipos y operadores en Python.',
        theory: `
<h2>Variables</h2>
<p>Python usa tipado dinámico. No necesitas declarar el tipo explícitamente.</p>
<pre><code>nombre = "Ana"
edad = 25
pi = 3.14
activo = True</code></pre>
<h2>Tipos básicos</h2>
<ul>
  <li><strong>str</strong>: cadena de texto</li>
  <li><strong>int</strong>: entero</li>
  <li><strong>float</strong>: decimal</li>
  <li><strong>bool</strong>: True / False</li>
</ul>
<h2>Operadores</h2>
<pre><code>suma = 10 + 5      # 15
potencia = 2 ** 8  # 256
division = 7 / 2   # 3.5
entero = 7 // 2    # 3 (división entera)
modulo = 7 % 2     # 1</code></pre>
<h2>Entrada / Salida</h2>
<pre><code>print("Hola Mundo")
nombre = input("¿Cómo te llamas? ")
print(f"Hola, {nombre}")</code></pre>
        `,
        exercises: [
          {
            id: 'fund-py-1',
            title: 'Calculadora básica',
            description: 'Crea variables y muestra resultados de operaciones aritméticas.',
            instructions: 'Declara dos variables `a` y `b`. Imprime el resultado de a+b, a-b, a*b, a/b y a**b.',
            starterCode: `a = 10
b = 3

# Imprime las operaciones
`,
            expectedConcept: 'Student should use arithmetic operators (+, -, *, /, **) and print() to display results.',
            hints: ['Usa print() para mostrar resultados', 'La potencia en Python es **'],
          },
          {
            id: 'fund-py-2',
            title: 'F-strings',
            description: 'Usa f-strings para formatear texto con variables.',
            instructions: 'Crea variables nombre (str), edad (int) y altura (float). Usa un f-string para imprimir una frase que las incluya.',
            starterCode: `nombre = "Ana"
edad = 25
altura = 1.68

# Usa un f-string
`,
            expectedConcept: 'Student should use f-string formatting (f"...{var}...") to embed variables in a string.',
            hints: ['F-string: f"Hola {nombre}, tienes {edad} años"'],
          },
        ],
        topics: ['variables', 'tipos', 'operadores'],
      },
      java: {
        id: 'fundamentals-java',
        title: 'Fundamentos en Java',
        description: 'Variables tipadas, tipos primitivos y operadores en Java.',
        theory: `
<h2>Variables y tipos</h2>
<p>Java es de tipado estático: debes declarar el tipo de cada variable.</p>
<pre><code>String nombre = "Ana";
int edad = 25;
double pi = 3.14;
boolean activo = true;</code></pre>
<h2>Tipos primitivos</h2>
<ul>
  <li><strong>int</strong>: entero 32-bit</li>
  <li><strong>long</strong>: entero 64-bit</li>
  <li><strong>double</strong>: decimal 64-bit</li>
  <li><strong>char</strong>: carácter</li>
  <li><strong>boolean</strong>: true / false</li>
</ul>
<h2>Salida</h2>
<pre><code>System.out.println("Hola Mundo");
System.out.printf("Hola %s, tienes %d años%n", nombre, edad);</code></pre>
        `,
        exercises: [
          {
            id: 'fund-java-1',
            title: 'Calculadora básica',
            description: 'Declara variables tipadas y realiza operaciones aritméticas.',
            instructions: 'En la clase Main, declara int a = 10 y int b = 3. Imprime suma, resta, multiplicación y división con System.out.println.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 3;

        // Imprime las operaciones

    }
}`,
            expectedConcept: 'Student should declare typed variables (int) and use arithmetic operators with System.out.println.',
            hints: ['System.out.println() para imprimir', 'División entera: 10/3 = 3 en Java'],
          },
        ],
        topics: ['variables', 'tipos', 'operadores'],
      },
      cpp: {
        id: 'fundamentals-cpp',
        title: 'Fundamentos en C++',
        description: 'Variables, tipos y operadores en C++.',
        theory: `
<h2>Variables y tipos</h2>
<pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int main() {
    string nombre = "Ana";
    int edad = 25;
    double pi = 3.14;
    bool activo = true;
}</code></pre>
<h2>Entrada / Salida</h2>
<pre><code>cout &lt;&lt; "Hola Mundo" &lt;&lt; endl;
cout &lt;&lt; "Nombre: " &lt;&lt; nombre &lt;&lt; endl;

string input;
cin &gt;&gt; input;</code></pre>
        `,
        exercises: [
          {
            id: 'fund-cpp-1',
            title: 'Calculadora básica',
            description: 'Declara variables y muestra operaciones aritméticas.',
            instructions: 'Declara int a = 10 y int b = 3. Imprime suma, resta, multiplicación y división usando cout.',
            starterCode: `#include <iostream>
using namespace std;

int main() {
    int a = 10;
    int b = 3;

    // Imprime las operaciones

    return 0;
}`,
            expectedConcept: 'Student should use typed variables and arithmetic operators with cout to display results.',
            hints: ['Usa cout << para imprimir', 'Encadena con << para múltiples valores'],
          },
        ],
        topics: ['variables', 'tipos', 'operadores'],
      },
      csharp: {
        id: 'fundamentals-csharp',
        title: 'Fundamentos en C#',
        description: 'Variables, tipos y operadores en C#.',
        theory: `
<h2>Variables</h2>
<pre><code>string nombre = "Ana";
int edad = 25;
double pi = 3.14;
bool activo = true;
var inferido = 42; // tipo inferido</code></pre>
<h2>Salida</h2>
<pre><code>Console.WriteLine("Hola Mundo");
Console.WriteLine($"Hola {nombre}, tienes {edad} años");</code></pre>
        `,
        exercises: [
          {
            id: 'fund-cs-1',
            title: 'Calculadora básica',
            description: 'Declara variables y muestra operaciones.',
            instructions: 'Declara int a = 10 y int b = 3. Imprime suma, resta, multiplicación y división con Console.WriteLine.',
            starterCode: `using System;

class Program {
    static void Main() {
        int a = 10;
        int b = 3;

        // Imprime las operaciones

    }
}`,
            expectedConcept: 'Student should declare typed variables and use arithmetic operators with Console.WriteLine.',
            hints: ['Console.WriteLine() para imprimir', 'Puedes usar interpolación: $"{a + b}"'],
          },
        ],
        topics: ['variables', 'tipos', 'operadores'],
      },
    },
  },
  {
    id: 'control',
    title: 'Estructuras de Control',
    icon: 'git-branch',
    description: 'Condicionales if/else, switch y toma de decisiones en el código.',
    lessons: {
      javascript: {
        id: 'control-javascript',
        title: 'Condicionales en JavaScript',
        description: 'if, else if, else y switch en JS.',
        theory: `
<h2>if / else</h2>
<pre><code>let edad = 18;

if (edad >= 18) {
  console.log("Mayor de edad");
} else if (edad >= 13) {
  console.log("Adolescente");
} else {
  console.log("Niño");
}</code></pre>
<h2>Operador ternario</h2>
<pre><code>let acceso = edad >= 18 ? "permitido" : "denegado";</code></pre>
<h2>switch</h2>
<pre><code>let dia = "lunes";
switch (dia) {
  case "lunes":
    console.log("Inicio de semana");
    break;
  case "viernes":
    console.log("¡Por fin viernes!");
    break;
  default:
    console.log("Día normal");
}</code></pre>
        `,
        exercises: [
          {
            id: 'ctrl-js-1',
            title: 'Clasificador de notas',
            description: 'Clasifica una nota numérica en una calificación de letra.',
            instructions: 'Dada una variable `nota` (0-10), imprime "Sobresaliente" (>=9), "Notable" (>=7), "Aprobado" (>=5) o "Suspenso" (<5) usando if/else if/else.',
            starterCode: `let nota = 7.5;

// Clasifica la nota
`,
            expectedConcept: 'Student should use if/else if/else chain with comparison operators to classify the grade.',
            hints: ['Encadena else if para múltiples condiciones', 'Comprueba de mayor a menor'],
          },
          {
            id: 'ctrl-js-2',
            title: 'Día de la semana',
            description: 'Usa switch para determinar el tipo de día.',
            instructions: 'Usa un switch con una variable `dia` (string). Imprime si es "Día laboral", "Sábado" o "Domingo".',
            starterCode: `let dia = "miércoles";

// Usa switch
`,
            expectedConcept: 'Student should use a switch statement (not if/else) with string cases.',
            hints: ['switch(dia) { case "lunes": ... }', 'Agrupa casos: case "lunes": case "martes":'],
          },
        ],
        topics: ['condicionales', 'switch', 'lógica'],
      },
      python: {
        id: 'control-python',
        title: 'Condicionales en Python',
        description: 'if, elif, else y match en Python.',
        theory: `
<h2>if / elif / else</h2>
<pre><code>edad = 18

if edad >= 18:
    print("Mayor de edad")
elif edad >= 13:
    print("Adolescente")
else:
    print("Niño")</code></pre>
<h2>Expresión condicional (ternario)</h2>
<pre><code>acceso = "permitido" if edad >= 18 else "denegado"</code></pre>
<h2>match (Python 3.10+)</h2>
<pre><code>dia = "lunes"
match dia:
    case "lunes":
        print("Inicio de semana")
    case "viernes":
        print("¡Por fin viernes!")
    case _:
        print("Día normal")</code></pre>
        `,
        exercises: [
          {
            id: 'ctrl-py-1',
            title: 'Clasificador de notas',
            description: 'Clasifica una nota en calificación de letra.',
            instructions: 'Dada una variable `nota`, imprime la calificación usando if/elif/else: >=9 "Sobresaliente", >=7 "Notable", >=5 "Aprobado", else "Suspenso".',
            starterCode: `nota = 7.5

# Clasifica la nota
`,
            expectedConcept: 'Student should use if/elif/else chain with comparison operators.',
            hints: ['Usa elif para condiciones intermedias', 'Comprueba de mayor a menor nota'],
          },
        ],
        topics: ['condicionales', 'match', 'lógica'],
      },
      java: {
        id: 'control-java',
        title: 'Condicionales en Java',
        description: 'if/else y switch en Java.',
        theory: `
<h2>if / else if / else</h2>
<pre><code>int edad = 18;

if (edad >= 18) {
    System.out.println("Mayor de edad");
} else if (edad >= 13) {
    System.out.println("Adolescente");
} else {
    System.out.println("Niño");
}</code></pre>
<h2>switch expression (Java 14+)</h2>
<pre><code>String dia = "lunes";
String tipo = switch (dia) {
    case "lunes", "martes", "miércoles", "jueves", "viernes" -> "Laboral";
    case "sábado" -> "Sábado";
    case "domingo" -> "Domingo";
    default -> "Desconocido";
};
System.out.println(tipo);</code></pre>
        `,
        exercises: [
          {
            id: 'ctrl-java-1',
            title: 'Clasificador de notas',
            description: 'Clasifica una nota en calificación.',
            instructions: 'Declara int nota = 75 (escala 0-100). Usa if/else if/else para imprimir: >=90 "A", >=70 "B", >=50 "C", else "F".',
            starterCode: `public class Main {
    public static void main(String[] args) {
        int nota = 75;

        // Clasifica la nota

    }
}`,
            expectedConcept: 'Student should use if/else if/else with integer comparison operators.',
            hints: ['Usa >= para comparar', 'El orden importa: comprueba de mayor a menor'],
          },
        ],
        topics: ['condicionales', 'switch', 'lógica'],
      },
      cpp: {
        id: 'control-cpp',
        title: 'Condicionales en C++',
        description: 'if/else y switch en C++.',
        theory: `
<h2>if / else</h2>
<pre><code>int edad = 18;

if (edad >= 18) {
    cout << "Mayor de edad" << endl;
} else if (edad >= 13) {
    cout << "Adolescente" << endl;
} else {
    cout << "Niño" << endl;
}</code></pre>
<h2>switch</h2>
<pre><code>int dia = 1;
switch (dia) {
    case 1:
        cout << "Lunes" << endl;
        break;
    case 5:
        cout << "Viernes" << endl;
        break;
    default:
        cout << "Otro día" << endl;
}</code></pre>
        `,
        exercises: [
          {
            id: 'ctrl-cpp-1',
            title: 'Clasificador de notas',
            description: 'Clasifica una nota usando if/else.',
            instructions: 'Declara int nota = 75. Usa if/else if/else para imprimir A (>=90), B (>=70), C (>=50) o F.',
            starterCode: `#include <iostream>
using namespace std;

int main() {
    int nota = 75;

    // Clasifica la nota

    return 0;
}`,
            expectedConcept: 'Student should use if/else if/else chain with comparison operators.',
            hints: ['Usa >= para comparar enteros', 'El orden de las condiciones importa'],
          },
        ],
        topics: ['condicionales', 'switch', 'lógica'],
      },
      csharp: {
        id: 'control-csharp',
        title: 'Condicionales en C#',
        description: 'if/else y switch en C#.',
        theory: `
<h2>if / else</h2>
<pre><code>int edad = 18;

if (edad >= 18)
    Console.WriteLine("Mayor de edad");
else if (edad >= 13)
    Console.WriteLine("Adolescente");
else
    Console.WriteLine("Niño");</code></pre>
<h2>switch expression (C# 8+)</h2>
<pre><code>string dia = "lunes";
string tipo = dia switch {
    "lunes" or "martes" or "miércoles" or "jueves" or "viernes" => "Laboral",
    "sábado" => "Sábado",
    "domingo" => "Domingo",
    _ => "Desconocido"
};
Console.WriteLine(tipo);</code></pre>
        `,
        exercises: [
          {
            id: 'ctrl-cs-1',
            title: 'Clasificador de notas',
            description: 'Clasifica una nota con condicionales.',
            instructions: 'Declara int nota = 75. Usa if/else if/else para imprimir A (>=90), B (>=70), C (>=50) o F.',
            starterCode: `using System;

class Program {
    static void Main() {
        int nota = 75;

        // Clasifica la nota

    }
}`,
            expectedConcept: 'Student should use if/else if/else with integer comparison.',
            hints: ['Comprueba de mayor a menor', 'Usa >= para las comparaciones'],
          },
        ],
        topics: ['condicionales', 'switch', 'lógica'],
      },
    },
  },
  {
    id: 'loops',
    title: 'Bucles',
    icon: 'repeat',
    description: 'for, while, do-while y cómo repetir acciones de forma eficiente.',
    lessons: {
      javascript: {
        id: 'loops-javascript',
        title: 'Bucles en JavaScript',
        description: 'for, while, for...of y forEach en JS.',
        theory: `
<h2>for clásico</h2>
<pre><code>for (let i = 0; i < 5; i++) {
  console.log(i); // 0, 1, 2, 3, 4
}</code></pre>
<h2>while</h2>
<pre><code>let n = 1;
while (n <= 5) {
  console.log(n);
  n++;
}</code></pre>
<h2>for...of (iterar arrays)</h2>
<pre><code>const frutas = ["manzana", "banana", "cereza"];
for (const fruta of frutas) {
  console.log(fruta);
}</code></pre>
<h2>break y continue</h2>
<pre><code>for (let i = 0; i < 10; i++) {
  if (i === 3) continue; // salta el 3
  if (i === 7) break;    // para en el 7
  console.log(i);
}</code></pre>
        `,
        exercises: [
          {
            id: 'loops-js-1',
            title: 'Tabla de multiplicar',
            description: 'Imprime la tabla de multiplicar de un número.',
            instructions: 'Usando un bucle for, imprime la tabla de multiplicar del 7 (del 1 al 10). Formato: "7 x 1 = 7".',
            starterCode: `// Imprime la tabla del 7
for (let i = 1; i <= 10; i++) {
  // completa aquí
}`,
            expectedConcept: 'Student should use a for loop with a counter variable to iterate from 1 to 10 and perform multiplication.',
            hints: ['Usa template literals: `7 x ${i} = ${7*i}`', 'El bucle va de 1 a 10 (i <= 10)'],
          },
          {
            id: 'loops-js-2',
            title: 'FizzBuzz',
            description: 'El clásico ejercicio de entrevista con bucles y condicionales.',
            instructions: 'Imprime números del 1 al 30. Si es múltiplo de 3, imprime "Fizz". Si es de 5, "Buzz". Si es de ambos, "FizzBuzz". Si no, el número.',
            starterCode: `for (let i = 1; i <= 30; i++) {
  // tu lógica aquí
}`,
            expectedConcept: 'Student must use a loop (for or while) combined with conditionals and the modulo operator (%) to check divisibility.',
            hints: ['El operador % da el resto de la división', 'Comprueba FizzBuzz primero (múltiplo de 3 Y 5)'],
          },
          {
            id: 'loops-js-3',
            title: 'Suma con while',
            description: 'Suma números hasta que la suma supere un límite.',
            instructions: 'Usa un bucle while para sumar números del 1 en adelante hasta que la suma supere 100. Imprime cuántos números sumaste y la suma final.',
            starterCode: `let suma = 0;
let contador = 0;

// Usa while
`,
            expectedConcept: 'Student should use a while loop (not for) with a condition that checks the running sum.',
            hints: ['while (suma <= 100) { ... }', 'Incrementa suma y contador dentro del bucle'],
          },
        ],
        topics: ['for', 'while', 'iteración'],
      },
      python: {
        id: 'loops-python',
        title: 'Bucles en Python',
        description: 'for, while y range() en Python.',
        theory: `
<h2>for con range()</h2>
<pre><code>for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

for i in range(1, 11):
    print(i)  # 1 al 10

for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8</code></pre>
<h2>while</h2>
<pre><code>n = 1
while n <= 5:
    print(n)
    n += 1</code></pre>
<h2>for sobre una lista</h2>
<pre><code>frutas = ["manzana", "banana", "cereza"]
for fruta in frutas:
    print(fruta)</code></pre>
<h2>enumerate</h2>
<pre><code>for i, fruta in enumerate(frutas):
    print(f"{i}: {fruta}")</code></pre>
        `,
        exercises: [
          {
            id: 'loops-py-1',
            title: 'Tabla de multiplicar',
            description: 'Genera la tabla de multiplicar del 7.',
            instructions: 'Usa un bucle for con range() para imprimir la tabla del 7 (del 1 al 10). Formato: "7 x 1 = 7".',
            starterCode: `# Imprime la tabla del 7
for i in range(1, 11):
    # completa aquí
    pass`,
            expectedConcept: 'Student should use for loop with range() and multiplication operator, printing formatted output.',
            hints: ['Usa f-strings: f"7 x {i} = {7*i}"', 'range(1, 11) va del 1 al 10 inclusive'],
          },
          {
            id: 'loops-py-2',
            title: 'FizzBuzz',
            description: 'Clásico ejercicio con bucles y condicionales.',
            instructions: 'Imprime del 1 al 30. Múltiplo de 3: "Fizz". De 5: "Buzz". De ambos: "FizzBuzz". Si no, el número.',
            starterCode: `for i in range(1, 31):
    # tu lógica aquí
    pass`,
            expectedConcept: 'Student must use a loop with the modulo operator (%) and conditionals. Should check FizzBuzz before Fizz and Buzz.',
            hints: ['El operador % da el resto', 'Comprueba i % 15 == 0 primero para FizzBuzz'],
          },
        ],
        topics: ['for', 'while', 'range', 'iteración'],
      },
      java: {
        id: 'loops-java',
        title: 'Bucles en Java',
        description: 'for, while, do-while y enhanced for en Java.',
        theory: `
<h2>for clásico</h2>
<pre><code>for (int i = 0; i < 5; i++) {
    System.out.println(i);
}</code></pre>
<h2>while y do-while</h2>
<pre><code>int n = 1;
while (n <= 5) {
    System.out.println(n++);
}

do {
    System.out.println("Se ejecuta al menos una vez");
} while (false);</code></pre>
<h2>Enhanced for (for-each)</h2>
<pre><code>int[] numeros = {1, 2, 3, 4, 5};
for (int num : numeros) {
    System.out.println(num);
}</code></pre>
        `,
        exercises: [
          {
            id: 'loops-java-1',
            title: 'Tabla de multiplicar',
            description: 'Genera la tabla de multiplicar del 7.',
            instructions: 'Usa un for clásico del 1 al 10 para imprimir la tabla del 7. Formato: "7 x 1 = 7".',
            starterCode: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            // completa aquí
        }
    }
}`,
            expectedConcept: 'Student should use a classic for loop with an integer counter and multiplication, printing with System.out.println or printf.',
            hints: ['System.out.printf("7 x %d = %d%n", i, 7*i)', 'O usa String.format()'],
          },
          {
            id: 'loops-java-2',
            title: 'FizzBuzz',
            description: 'Clásico FizzBuzz con bucle.',
            instructions: 'Itera del 1 al 30 con un for. Múltiplo de 3: "Fizz". De 5: "Buzz". De ambos: "FizzBuzz". Si no, el número.',
            starterCode: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 30; i++) {
            // tu lógica
        }
    }
}`,
            expectedConcept: 'Student must use a for loop with modulo operator (%) and if/else if chain. FizzBuzz check must come before Fizz and Buzz.',
            hints: ['Comprueba i % 15 == 0 para FizzBuzz', 'El orden de los if importa'],
          },
        ],
        topics: ['for', 'while', 'enhanced-for'],
      },
      cpp: {
        id: 'loops-cpp',
        title: 'Bucles en C++',
        description: 'for, while, do-while y range-based for en C++.',
        theory: `
<h2>for clásico</h2>
<pre><code>for (int i = 0; i < 5; i++) {
    cout << i << endl;
}</code></pre>
<h2>while</h2>
<pre><code>int n = 1;
while (n <= 5) {
    cout << n++ << endl;
}</code></pre>
<h2>Range-based for (C++11)</h2>
<pre><code>int arr[] = {1, 2, 3, 4, 5};
for (int x : arr) {
    cout << x << endl;
}</code></pre>
        `,
        exercises: [
          {
            id: 'loops-cpp-1',
            title: 'Tabla de multiplicar',
            description: 'Imprime la tabla del 7.',
            instructions: 'Usa un for del 1 al 10 para imprimir la tabla del 7. Formato: "7 x 1 = 7".',
            starterCode: `#include <iostream>
using namespace std;

int main() {
    for (int i = 1; i <= 10; i++) {
        // completa aquí
    }
    return 0;
}`,
            expectedConcept: 'Student should use a for loop with counter variable and multiplication, printing with cout.',
            hints: ['cout << "7 x " << i << " = " << 7*i << endl;'],
          },
        ],
        topics: ['for', 'while', 'range-based'],
      },
      csharp: {
        id: 'loops-csharp',
        title: 'Bucles en C#',
        description: 'for, while, do-while y foreach en C#.',
        theory: `
<h2>for</h2>
<pre><code>for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}</code></pre>
<h2>while</h2>
<pre><code>int n = 1;
while (n <= 5) {
    Console.WriteLine(n++);
}</code></pre>
<h2>foreach</h2>
<pre><code>int[] numeros = {1, 2, 3, 4, 5};
foreach (int num in numeros) {
    Console.WriteLine(num);
}</code></pre>
        `,
        exercises: [
          {
            id: 'loops-cs-1',
            title: 'Tabla de multiplicar',
            description: 'Imprime la tabla del 7.',
            instructions: 'Usa un for del 1 al 10 para imprimir la tabla del 7.',
            starterCode: `using System;

class Program {
    static void Main() {
        for (int i = 1; i <= 10; i++) {
            // completa aquí
        }
    }
}`,
            expectedConcept: 'Student should use a for loop with counter and multiplication, printing with Console.WriteLine.',
            hints: ['Console.WriteLine($"7 x {i} = {7*i}");'],
          },
        ],
        topics: ['for', 'while', 'foreach'],
      },
    },
  },
  {
    id: 'arrays',
    title: 'Arrays',
    icon: 'list',
    description: 'Colecciones de datos, acceso por índice, métodos útiles y recorridos.',
    lessons: {
      javascript: {
        id: 'arrays-javascript',
        title: 'Arrays en JavaScript',
        description: 'Arrays, métodos y desestructuración en JS.',
        theory: `
<h2>Crear y acceder</h2>
<pre><code>const frutas = ["manzana", "banana", "cereza"];
console.log(frutas[0]);  // "manzana"
console.log(frutas.length); // 3</code></pre>
<h2>Métodos esenciales</h2>
<pre><code>frutas.push("dátil");       // añade al final
frutas.pop();               // elimina del final
frutas.unshift("aguacate"); // añade al inicio
frutas.shift();             // elimina del inicio

frutas.includes("banana");  // true
frutas.indexOf("cereza");   // 2</code></pre>
<h2>Métodos funcionales</h2>
<pre><code>const nums = [1, 2, 3, 4, 5];
const dobles = nums.map(n => n * 2);       // [2,4,6,8,10]
const pares = nums.filter(n => n % 2 === 0); // [2,4]
const suma = nums.reduce((acc, n) => acc + n, 0); // 15</code></pre>
        `,
        exercises: [
          {
            id: 'arr-js-1',
            title: 'Estadísticas de array',
            description: 'Calcula máximo, mínimo y media de un array de números.',
            instructions: 'Dado el array [3, 7, 1, 9, 4, 6, 2, 8, 5], calcula e imprime: el máximo, el mínimo y la media aritmética.',
            starterCode: `const numeros = [3, 7, 1, 9, 4, 6, 2, 8, 5];

// Calcula máximo, mínimo y media
`,
            expectedConcept: 'Student should use array methods (Math.max/min with spread, or reduce) to find max, min and average. Should NOT manually index each element.',
            hints: ['Math.max(...numeros) o reduce', 'La media es la suma dividida entre la longitud'],
          },
          {
            id: 'arr-js-2',
            title: 'Filtrar y transformar',
            description: 'Usa filter y map para procesar datos.',
            instructions: 'Dado el array de números del 1 al 10, usa filter para quedarte con los pares y map para multiplicarlos por 3. Imprime el resultado.',
            starterCode: `const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Usa filter y map
`,
            expectedConcept: 'Student must use Array.filter() and Array.map() methods (not a manual loop) to process the array.',
            hints: ['numeros.filter(n => n % 2 === 0)', 'Encadena .map() después del .filter()'],
          },
        ],
        topics: ['arrays', 'métodos', 'map', 'filter', 'reduce'],
      },
      python: {
        id: 'arrays-python',
        title: 'Listas en Python',
        description: 'Listas, slicing, comprensiones y métodos.',
        theory: `
<h2>Listas</h2>
<pre><code>frutas = ["manzana", "banana", "cereza"]
print(frutas[0])    # "manzana"
print(frutas[-1])   # "cereza" (índice negativo)
print(len(frutas))  # 3</code></pre>
<h2>Slicing</h2>
<pre><code>nums = [0, 1, 2, 3, 4, 5]
print(nums[1:4])   # [1, 2, 3]
print(nums[:3])    # [0, 1, 2]
print(nums[::2])   # [0, 2, 4]</code></pre>
<h2>Métodos</h2>
<pre><code>frutas.append("dátil")
frutas.remove("banana")
frutas.sort()
frutas.reverse()</code></pre>
<h2>Comprensiones de lista</h2>
<pre><code>cuadrados = [x**2 for x in range(1, 6)]  # [1, 4, 9, 16, 25]
pares = [x for x in range(10) if x % 2 == 0]</code></pre>
        `,
        exercises: [
          {
            id: 'arr-py-1',
            title: 'Estadísticas de lista',
            description: 'Calcula máximo, mínimo y media.',
            instructions: 'Dada la lista [3, 7, 1, 9, 4, 6, 2, 8, 5], usa funciones built-in (max, min, sum, len) para calcular e imprimir el máximo, mínimo y media.',
            starterCode: `numeros = [3, 7, 1, 9, 4, 6, 2, 8, 5]

# Usa max(), min(), sum(), len()
`,
            expectedConcept: 'Student should use Python built-in functions max(), min(), sum() and len() to compute statistics, not manual loops.',
            hints: ['max(numeros), min(numeros)', 'media = sum(numeros) / len(numeros)'],
          },
          {
            id: 'arr-py-2',
            title: 'Comprensión de lista',
            description: 'Usa list comprehension para filtrar y transformar.',
            instructions: 'Usando list comprehension (no for loop explícito), crea una lista con los cuadrados de los números pares del 1 al 20.',
            starterCode: `# Usa list comprehension
resultado = []

print(resultado)`,
            expectedConcept: 'Student MUST use list comprehension syntax [expr for x in range(...) if condition], not a traditional for loop.',
            hints: ['[x**2 for x in range(1, 21) if x % 2 == 0]'],
          },
        ],
        topics: ['listas', 'slicing', 'comprensiones'],
      },
      java: {
        id: 'arrays-java',
        title: 'Arrays en Java',
        description: 'Arrays, ArrayList y operaciones comunes.',
        theory: `
<h2>Arrays básicos</h2>
<pre><code>int[] numeros = {3, 7, 1, 9, 4};
System.out.println(numeros[0]);      // 3
System.out.println(numeros.length);  // 5</code></pre>
<h2>ArrayList</h2>
<pre><code>import java.util.ArrayList;

ArrayList&lt;String&gt; frutas = new ArrayList&lt;&gt;();
frutas.add("manzana");
frutas.add("banana");
frutas.get(0);       // "manzana"
frutas.size();       // 2
frutas.remove("banana");</code></pre>
<h2>Arrays.sort y Arrays.stream</h2>
<pre><code>import java.util.Arrays;
Arrays.sort(numeros);

int suma = Arrays.stream(numeros).sum();
int max = Arrays.stream(numeros).max().getAsInt();</code></pre>
        `,
        exercises: [
          {
            id: 'arr-java-1',
            title: 'Estadísticas de array',
            description: 'Calcula máximo, mínimo y suma.',
            instructions: 'Dado int[] nums = {3,7,1,9,4,6,2,8,5}, usa Arrays.stream() para obtener e imprimir el máximo, mínimo y suma.',
            starterCode: `import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        int[] nums = {3, 7, 1, 9, 4, 6, 2, 8, 5};

        // Usa Arrays.stream()

    }
}`,
            expectedConcept: 'Student should use Arrays.stream() with .max(), .min(), .sum() instead of manual loops.',
            hints: ['Arrays.stream(nums).max().getAsInt()', 'Arrays.stream(nums).sum()'],
          },
        ],
        topics: ['arrays', 'ArrayList', 'streams'],
      },
      cpp: {
        id: 'arrays-cpp',
        title: 'Arrays y Vectores en C++',
        description: 'Arrays, std::vector y algoritmos STL.',
        theory: `
<h2>Arrays estáticos</h2>
<pre><code>int numeros[] = {3, 7, 1, 9, 4};
int tam = sizeof(numeros) / sizeof(numeros[0]); // 5</code></pre>
<h2>std::vector (preferido)</h2>
<pre><code>#include &lt;vector&gt;
vector&lt;int&gt; v = {3, 7, 1, 9, 4};
v.push_back(6);
v.size();  // 6</code></pre>
<h2>Algoritmos STL</h2>
<pre><code>#include &lt;algorithm&gt;
#include &lt;numeric&gt;

sort(v.begin(), v.end());
int maximo = *max_element(v.begin(), v.end());
int suma = accumulate(v.begin(), v.end(), 0);</code></pre>
        `,
        exercises: [
          {
            id: 'arr-cpp-1',
            title: 'Estadísticas de vector',
            description: 'Calcula máximo, mínimo y suma de un vector.',
            instructions: 'Dado vector<int> v = {3,7,1,9,4,6,2,8,5}, usa funciones STL (max_element, min_element, accumulate) para calcular e imprimir máximo, mínimo y suma.',
            starterCode: `#include <iostream>
#include <vector>
#include <algorithm>
#include <numeric>
using namespace std;

int main() {
    vector<int> v = {3, 7, 1, 9, 4, 6, 2, 8, 5};

    // Usa STL

    return 0;
}`,
            expectedConcept: 'Student should use STL algorithms (max_element, min_element, accumulate) with iterators, not manual loops.',
            hints: ['*max_element(v.begin(), v.end())', 'accumulate(v.begin(), v.end(), 0)'],
          },
        ],
        topics: ['arrays', 'vector', 'STL'],
      },
      csharp: {
        id: 'arrays-csharp',
        title: 'Arrays y Listas en C#',
        description: 'Arrays, List<T> y LINQ básico.',
        theory: `
<h2>Arrays</h2>
<pre><code>int[] numeros = {3, 7, 1, 9, 4};
Console.WriteLine(numeros[0]);      // 3
Console.WriteLine(numeros.Length);  // 5</code></pre>
<h2>List&lt;T&gt;</h2>
<pre><code>var frutas = new List&lt;string&gt;{"manzana", "banana"};
frutas.Add("cereza");
frutas.Remove("banana");
frutas.Count; // 2</code></pre>
<h2>LINQ básico</h2>
<pre><code>using System.Linq;

int max = numeros.Max();
int min = numeros.Min();
int suma = numeros.Sum();
var pares = numeros.Where(n => n % 2 == 0);</code></pre>
        `,
        exercises: [
          {
            id: 'arr-cs-1',
            title: 'Estadísticas con LINQ',
            description: 'Usa LINQ para obtener estadísticas de un array.',
            instructions: 'Dado int[] nums = {3,7,1,9,4,6,2,8,5}, usa LINQ (.Max(), .Min(), .Sum(), .Average()) para imprimir las estadísticas.',
            starterCode: `using System;
using System.Linq;

class Program {
    static void Main() {
        int[] nums = {3, 7, 1, 9, 4, 6, 2, 8, 5};

        // Usa LINQ

    }
}`,
            expectedConcept: 'Student should use LINQ extension methods (Max, Min, Sum, Average) instead of manual loops.',
            hints: ['nums.Max(), nums.Min(), nums.Sum()', 'nums.Average() para la media'],
          },
        ],
        topics: ['arrays', 'List', 'LINQ'],
      },
    },
  },
  {
    id: 'functions',
    title: 'Funciones',
    icon: 'code-2',
    description: 'Declaración, parámetros, retorno, scope y funciones de orden superior.',
    lessons: {
      javascript: {
        id: 'functions-javascript',
        title: 'Funciones en JavaScript',
        description: 'Funciones declaradas, expresadas, arrow functions y closures.',
        theory: `
<h2>Declaración de función</h2>
<pre><code>function saludar(nombre) {
  return \`Hola, \${nombre}!\`;
}
console.log(saludar("Ana")); // "Hola, Ana!"</code></pre>
<h2>Arrow functions</h2>
<pre><code>const sumar = (a, b) => a + b;
const cuadrado = x => x * x;</code></pre>
<h2>Parámetros por defecto</h2>
<pre><code>function potencia(base, exp = 2) {
  return base ** exp;
}
potencia(3);    // 9
potencia(2, 8); // 256</code></pre>
<h2>Funciones como valores</h2>
<pre><code>const nums = [1, 2, 3, 4, 5];
const dobles = nums.map(x => x * 2);

function aplicar(fn, valor) {
  return fn(valor);
}
aplicar(x => x * 3, 5); // 15</code></pre>
        `,
        exercises: [
          {
            id: 'fn-js-1',
            title: 'Calculadora funcional',
            description: 'Implementa operaciones como funciones puras.',
            instructions: 'Crea funciones sumar(a,b), restar(a,b), multiplicar(a,b) y dividir(a,b). La función dividir debe devolver null si b es 0. Prueba cada una.',
            starterCode: `function sumar(a, b) {
  // implementa
}

function restar(a, b) {
  // implementa
}

function multiplicar(a, b) {
  // implementa
}

function dividir(a, b) {
  // implementa (devuelve null si b === 0)
}

// Pruebas
console.log(sumar(5, 3));
console.log(dividir(10, 0));`,
            expectedConcept: 'Student should define named functions with parameters and return statements. dividir must handle division by zero. Should not use global state.',
            hints: ['Usa return para devolver el valor', 'if (b === 0) return null;'],
          },
          {
            id: 'fn-js-2',
            title: 'Función de orden superior',
            description: 'Crea una función que acepte otra función como argumento.',
            instructions: 'Crea una función `aplicarDosVeces(fn, valor)` que aplique `fn` al valor dos veces. Pruébala con una función que duplique un número.',
            starterCode: `function aplicarDosVeces(fn, valor) {
  // implementa
}

// Prueba: aplicar "duplicar" dos veces a 3 debería dar 12
const duplicar = x => x * 2;
console.log(aplicarDosVeces(duplicar, 3)); // 12`,
            expectedConcept: 'Student must create a higher-order function that accepts a function as parameter and calls it twice, demonstrating function composition.',
            hints: ['return fn(fn(valor))', 'Las funciones son valores en JS'],
          },
        ],
        topics: ['funciones', 'arrow', 'HOF', 'closure'],
      },
      python: {
        id: 'functions-python',
        title: 'Funciones en Python',
        description: 'def, args, kwargs, lambdas y decoradores básicos.',
        theory: `
<h2>def</h2>
<pre><code>def saludar(nombre):
    return f"Hola, {nombre}!"

print(saludar("Ana"))</code></pre>
<h2>Parámetros por defecto y *args</h2>
<pre><code>def potencia(base, exp=2):
    return base ** exp

def sumar(*args):
    return sum(args)

sumar(1, 2, 3, 4)  # 10</code></pre>
<h2>Lambda</h2>
<pre><code>cuadrado = lambda x: x ** 2
doble = lambda x: x * 2</code></pre>
<h2>Funciones de orden superior</h2>
<pre><code>nums = [1, 2, 3, 4, 5]
dobles = list(map(lambda x: x*2, nums))
pares = list(filter(lambda x: x%2==0, nums))
from functools import reduce
suma = reduce(lambda a, b: a+b, nums)</code></pre>
        `,
        exercises: [
          {
            id: 'fn-py-1',
            title: 'Calculadora funcional',
            description: 'Implementa operaciones como funciones.',
            instructions: 'Define funciones sumar(a,b), restar(a,b), multiplicar(a,b) y dividir(a,b). dividir devuelve None si b==0. Prueba cada una.',
            starterCode: `def sumar(a, b):
    pass  # implementa

def restar(a, b):
    pass

def multiplicar(a, b):
    pass

def dividir(a, b):
    pass  # devuelve None si b == 0

# Pruebas
print(sumar(5, 3))
print(dividir(10, 0))`,
            expectedConcept: 'Student should define functions with def, use return statements, and handle edge case (division by zero) with None.',
            hints: ['Sustituye pass con tu código', 'if b == 0: return None'],
          },
        ],
        topics: ['def', 'lambda', 'map', 'filter', 'reduce'],
      },
      java: {
        id: 'functions-java',
        title: 'Métodos en Java',
        description: 'Métodos estáticos, sobrecarga y uso básico de funciones.',
        theory: `
<h2>Métodos estáticos</h2>
<pre><code>public static int sumar(int a, int b) {
    return a + b;
}

public static void main(String[] args) {
    System.out.println(sumar(5, 3)); // 8
}</code></pre>
<h2>Sobrecarga (overloading)</h2>
<pre><code>public static double sumar(double a, double b) {
    return a + b;
}
// Java elige el método por los tipos de argumento</code></pre>
<h2>Varargs</h2>
<pre><code>public static int suma(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}</code></pre>
        `,
        exercises: [
          {
            id: 'fn-java-1',
            title: 'Calculadora con métodos',
            description: 'Implementa operaciones como métodos estáticos.',
            instructions: 'Crea métodos estáticos sumar(int,int), restar(int,int), multiplicar(int,int) y dividir(int,int) que devuelva -1 si divisor es 0. Llámalos desde main.',
            starterCode: `public class Main {

    public static int sumar(int a, int b) {
        // implementa
        return 0;
    }

    public static int restar(int a, int b) {
        return 0;
    }

    public static int multiplicar(int a, int b) {
        return 0;
    }

    public static int dividir(int a, int b) {
        // devuelve -1 si b == 0
        return 0;
    }

    public static void main(String[] args) {
        System.out.println(sumar(5, 3));
        System.out.println(dividir(10, 0));
    }
}`,
            expectedConcept: 'Student should implement static methods with correct return types, return statements, and handle division by zero edge case.',
            hints: ['return a + b; en sumar', 'if (b == 0) return -1; en dividir'],
          },
        ],
        topics: ['métodos', 'static', 'overloading'],
      },
      cpp: {
        id: 'functions-cpp',
        title: 'Funciones en C++',
        description: 'Funciones, sobrecarga, referencias y funciones lambda.',
        theory: `
<h2>Función básica</h2>
<pre><code>int sumar(int a, int b) {
    return a + b;
}</code></pre>
<h2>Parámetros por referencia</h2>
<pre><code>void swap(int& a, int& b) {
    int temp = a;
    a = b;
    b = temp;
}</code></pre>
<h2>Funciones lambda (C++11)</h2>
<pre><code>auto cuadrado = [](int x) { return x * x; };
cout << cuadrado(5); // 25

// Con captura
int factor = 3;
auto multiplicar = [factor](int x) { return x * factor; };</code></pre>
        `,
        exercises: [
          {
            id: 'fn-cpp-1',
            title: 'Calculadora funcional',
            description: 'Implementa operaciones como funciones.',
            instructions: 'Define funciones sumar, restar, multiplicar y dividir. dividir devuelve -1.0 si divisor es 0. Pruébalas desde main.',
            starterCode: `#include <iostream>
using namespace std;

double sumar(double a, double b) {
    // implementa
    return 0;
}

double restar(double a, double b) { return 0; }
double multiplicar(double a, double b) { return 0; }

double dividir(double a, double b) {
    // devuelve -1.0 si b == 0
    return 0;
}

int main() {
    cout << sumar(5, 3) << endl;
    cout << dividir(10, 0) << endl;
    return 0;
}`,
            expectedConcept: 'Student should implement functions with correct return types, return statements and edge case handling.',
            hints: ['return a + b; en sumar', 'if (b == 0) return -1.0;'],
          },
        ],
        topics: ['funciones', 'referencias', 'lambda'],
      },
      csharp: {
        id: 'functions-csharp',
        title: 'Métodos en C#',
        description: 'Métodos, parámetros opcionales, Func y Action.',
        theory: `
<h2>Métodos</h2>
<pre><code>static int Sumar(int a, int b) => a + b;

static void Main() {
    Console.WriteLine(Sumar(5, 3)); // 8
}</code></pre>
<h2>Parámetros opcionales y nombrados</h2>
<pre><code>static double Potencia(double base, int exp = 2) {
    return Math.Pow(base, exp);
}
Potencia(3);       // 9
Potencia(2, exp: 8); // 256</code></pre>
<h2>Func y Action (delegados)</h2>
<pre><code>Func&lt;int, int&gt; cuadrado = x => x * x;
Action&lt;string&gt; imprimir = s => Console.WriteLine(s);

imprimir(cuadrado(5).ToString()); // "25"</code></pre>
        `,
        exercises: [
          {
            id: 'fn-cs-1',
            title: 'Calculadora funcional',
            description: 'Métodos estáticos para operaciones básicas.',
            instructions: 'Implementa métodos estáticos Sumar, Restar, Multiplicar y Dividir. Dividir devuelve null (int?) si divisor es 0. Pruébalos desde Main.',
            starterCode: `using System;

class Program {
    static int Sumar(int a, int b) => 0; // implementa
    static int Restar(int a, int b) => 0;
    static int Multiplicar(int a, int b) => 0;
    static int? Dividir(int a, int b) => null; // devuelve null si b==0

    static void Main() {
        Console.WriteLine(Sumar(5, 3));
        Console.WriteLine(Dividir(10, 0));
    }
}`,
            expectedConcept: 'Student should implement static methods with correct return values and handle division by zero using nullable int (int?).',
            hints: ['=> a + b para la expresión de cuerpo', 'return b == 0 ? null : a / b;'],
          },
        ],
        topics: ['métodos', 'Func', 'Action', 'lambda'],
      },
    },
  },
  {
    id: 'oop',
    title: 'POO',
    icon: 'box',
    description: 'Clases, objetos, herencia, encapsulamiento y polimorfismo.',
    lessons: {
      javascript: {
        id: 'oop-javascript',
        title: 'POO en JavaScript',
        description: 'Clases ES6, herencia y métodos.',
        theory: `
<h2>Clases</h2>
<pre><code>class Animal {
  constructor(nombre, sonido) {
    this.nombre = nombre;
    this.sonido = sonido;
  }

  hablar() {
    return \`\${this.nombre} dice \${this.sonido}\`;
  }

  static crear(nombre, sonido) {
    return new Animal(nombre, sonido);
  }
}</code></pre>
<h2>Herencia</h2>
<pre><code>class Perro extends Animal {
  constructor(nombre) {
    super(nombre, "¡Guau!");
  }

  // Override
  hablar() {
    return super.hablar() + " 🐕";
  }

  fetch() {
    return \`\${this.nombre} trae la pelota\`;
  }
}</code></pre>
<h2>Encapsulamiento</h2>
<pre><code>class Cuenta {
  #saldo = 0; // campo privado

  depositar(cantidad) {
    if (cantidad > 0) this.#saldo += cantidad;
  }

  get saldo() { return this.#saldo; }
}</code></pre>
        `,
        exercises: [
          {
            id: 'oop-js-1',
            title: 'Sistema de figuras',
            description: 'Crea una jerarquía de clases para figuras geométricas.',
            instructions: 'Crea una clase base Figura con método area() que devuelva 0. Crea Rectangulo(ancho, alto) y Circulo(radio) que extiendan Figura y sobreescriban area(). Crea una instancia de cada una y muestra su área.',
            starterCode: `class Figura {
  area() {
    return 0;
  }
}

class Rectangulo extends Figura {
  constructor(ancho, alto) {
    super();
    // guarda las dimensiones
  }

  area() {
    // implementa
  }
}

class Circulo extends Figura {
  constructor(radio) {
    super();
    // guarda el radio
  }

  area() {
    // implementa (usa Math.PI)
  }
}

const rect = new Rectangulo(5, 3);
const circ = new Circulo(4);
console.log(rect.area());
console.log(circ.area());`,
            expectedConcept: 'Student must use class inheritance (extends), super(), constructor with properties, and method overriding. Must demonstrate polymorphism.',
            hints: ['this.ancho = ancho en el constructor', 'Math.PI * this.radio ** 2 para el círculo'],
          },
        ],
        topics: ['clases', 'herencia', 'polimorfismo'],
      },
      python: {
        id: 'oop-python',
        title: 'POO en Python',
        description: 'Clases, herencia, encapsulamiento y métodos especiales.',
        theory: `
<h2>Clases</h2>
<pre><code>class Animal:
    def __init__(self, nombre, sonido):
        self.nombre = nombre
        self.sonido = sonido

    def hablar(self):
        return f"{self.nombre} dice {self.sonido}"

    def __str__(self):
        return f"Animal({self.nombre})"</code></pre>
<h2>Herencia</h2>
<pre><code>class Perro(Animal):
    def __init__(self, nombre):
        super().__init__(nombre, "¡Guau!")

    def hablar(self):
        return super().hablar() + " 🐕"</code></pre>
<h2>Propiedades y encapsulamiento</h2>
<pre><code>class Cuenta:
    def __init__(self):
        self.__saldo = 0  # privado (name mangling)

    def depositar(self, cantidad):
        if cantidad > 0:
            self.__saldo += cantidad

    @property
    def saldo(self):
        return self.__saldo</code></pre>
        `,
        exercises: [
          {
            id: 'oop-py-1',
            title: 'Sistema de figuras',
            description: 'Jerarquía de clases para figuras geométricas.',
            instructions: 'Crea clase base Figura con método area() que devuelva 0. Crea Rectangulo(ancho, alto) y Circulo(radio) que hereden e implementen area(). Instancia y muestra áreas.',
            starterCode: `import math

class Figura:
    def area(self):
        return 0

class Rectangulo(Figura):
    def __init__(self, ancho, alto):
        pass  # guarda dimensiones

    def area(self):
        pass  # implementa

class Circulo(Figura):
    def __init__(self, radio):
        pass

    def area(self):
        pass  # implementa

rect = Rectangulo(5, 3)
circ = Circulo(4)
print(rect.area())
print(circ.area())`,
            expectedConcept: 'Student must use class inheritance, __init__ with self, super().__init__() if needed, and method overriding (polymorphism).',
            hints: ['self.ancho = ancho en __init__', 'math.pi * self.radio ** 2'],
          },
        ],
        topics: ['clases', 'herencia', 'propiedades'],
      },
      java: {
        id: 'oop-java',
        title: 'POO en Java',
        description: 'Clases, herencia, interfaces y modificadores de acceso.',
        theory: `
<h2>Clase con encapsulamiento</h2>
<pre><code>public class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() { return nombre; }
    public void setNombre(String n) { nombre = n; }

    @Override
    public String toString() {
        return nombre + " (" + edad + ")";
    }
}</code></pre>
<h2>Herencia</h2>
<pre><code>public class Empleado extends Persona {
    private double salario;

    public Empleado(String nombre, int edad, double salario) {
        super(nombre, edad);
        this.salario = salario;
    }

    @Override
    public String toString() {
        return super.toString() + " - Salario: " + salario;
    }
}</code></pre>
<h2>Interfaces</h2>
<pre><code>public interface Calculable {
    double calcularArea();
    default String descripcion() {
        return "Área: " + calcularArea();
    }
}</code></pre>
        `,
        exercises: [
          {
            id: 'oop-java-1',
            title: 'Sistema de figuras',
            description: 'Jerarquía de clases con herencia.',
            instructions: 'Crea clase abstracta Figura con método abstracto area(). Crea Rectangulo y Circulo que extiendan Figura. Crea instancias y muestra áreas.',
            starterCode: `public class Main {

    abstract static class Figura {
        public abstract double area();
    }

    static class Rectangulo extends Figura {
        // constructor y area()
    }

    static class Circulo extends Figura {
        // constructor y area()
    }

    public static void main(String[] args) {
        Figura rect = new Rectangulo(5, 3);
        Figura circ = new Circulo(4);
        System.out.println(rect.area());
        System.out.println(circ.area());
    }
}`,
            expectedConcept: 'Student must use abstract class, inheritance (extends), override abstract method, and demonstrate polymorphism via Figura reference.',
            hints: ['abstract class Figura { abstract double area(); }', 'Math.PI * radio * radio para círculo'],
          },
        ],
        topics: ['clases', 'herencia', 'interfaces', 'abstractas'],
      },
      cpp: {
        id: 'oop-cpp',
        title: 'POO en C++',
        description: 'Clases, herencia, polimorfismo y funciones virtuales.',
        theory: `
<h2>Clase básica</h2>
<pre><code>class Animal {
private:
    string nombre;
public:
    Animal(string n) : nombre(n) {}
    string getNombre() { return nombre; }
    virtual string hablar() { return "..."; }
};</code></pre>
<h2>Herencia y virtual</h2>
<pre><code>class Perro : public Animal {
public:
    Perro(string n) : Animal(n) {}
    string hablar() override { return "¡Guau!"; }
};</code></pre>
<h2>Clase abstracta</h2>
<pre><code>class Figura {
public:
    virtual double area() = 0; // método puro virtual
    virtual ~Figura() {}
};</code></pre>
        `,
        exercises: [
          {
            id: 'oop-cpp-1',
            title: 'Sistema de figuras',
            description: 'Clase abstracta con herencia.',
            instructions: 'Crea clase abstracta Figura con método virtual puro area(). Implementa Rectangulo y Circulo. Usa punteros a Figura para demostrar polimorfismo.',
            starterCode: `#include <iostream>
#include <cmath>
using namespace std;

class Figura {
public:
    virtual double area() = 0;
    virtual ~Figura() {}
};

class Rectangulo : public Figura {
    // implementa
};

class Circulo : public Figura {
    // implementa
};

int main() {
    Figura* rect = new Rectangulo(5, 3);
    Figura* circ = new Circulo(4);
    cout << rect->area() << endl;
    cout << circ->area() << endl;
    delete rect; delete circ;
    return 0;
}`,
            expectedConcept: 'Student must implement abstract class (pure virtual), inheritance with constructor, override area(), and use polymorphism via base class pointers.',
            hints: ['class Rectangulo : public Figura { double ancho, alto; public: Rectangulo(double a, double b): ancho(a), alto(b) {} ... }', 'M_PI * radio * radio'],
          },
        ],
        topics: ['clases', 'virtual', 'herencia', 'polimorfismo'],
      },
      csharp: {
        id: 'oop-csharp',
        title: 'POO en C#',
        description: 'Clases, herencia, interfaces y propiedades en C#.',
        theory: `
<h2>Clase con propiedades</h2>
<pre><code>public class Persona {
    public string Nombre { get; set; }
    public int Edad { get; private set; }

    public Persona(string nombre, int edad) {
        Nombre = nombre;
        Edad = edad;
    }

    public override string ToString() => $"{Nombre} ({Edad})";
}</code></pre>
<h2>Herencia</h2>
<pre><code>public class Empleado : Persona {
    public decimal Salario { get; set; }

    public Empleado(string nombre, int edad, decimal salario)
        : base(nombre, edad) {
        Salario = salario;
    }
}</code></pre>
<h2>Clases abstractas e interfaces</h2>
<pre><code>public abstract class Figura {
    public abstract double Area();
}

public interface IDescribible {
    string Describir();
}</code></pre>
        `,
        exercises: [
          {
            id: 'oop-cs-1',
            title: 'Sistema de figuras',
            description: 'Jerarquía con clase abstracta.',
            instructions: 'Crea clase abstracta Figura con método abstracto Area(). Implementa Rectangulo y Circulo. Crea instancias como Figura y muestra sus áreas.',
            starterCode: `using System;

abstract class Figura {
    public abstract double Area();
}

class Rectangulo : Figura {
    // implementa
}

class Circulo : Figura {
    // implementa
}

class Program {
    static void Main() {
        Figura rect = new Rectangulo(5, 3);
        Figura circ = new Circulo(4);
        Console.WriteLine(rect.Area());
        Console.WriteLine(circ.Area());
    }
}`,
            expectedConcept: 'Student must implement abstract class, override abstract method in derived classes, and use polymorphism via base class reference.',
            hints: ['override keyword para sobreescribir', 'Math.PI * radio * radio para círculo'],
          },
        ],
        topics: ['clases', 'herencia', 'abstractas', 'interfaces'],
      },
    },
  },
  {
    id: 'functional',
    title: 'Programación Funcional',
    icon: 'zap',
    description: 'Lambdas, funciones puras, inmutabilidad, map/filter/reduce y streams.',
    lessons: {
      javascript: {
        id: 'functional-javascript',
        title: 'Prog. Funcional en JavaScript',
        description: 'Inmutabilidad, funciones puras, composición y currying.',
        theory: `
<h2>Funciones puras</h2>
<pre><code>// Pura: mismo input → mismo output, sin efectos secundarios
const sumar = (a, b) => a + b;

// Impura: depende de estado externo
let contador = 0;
const incrementar = () => ++contador;</code></pre>
<h2>Inmutabilidad</h2>
<pre><code>const arr = [1, 2, 3];
// Mal: mutación directa
arr.push(4);

// Bien: crear nuevo array
const nuevoArr = [...arr, 4];

const obj = { a: 1 };
const nuevoObj = { ...obj, b: 2 };</code></pre>
<h2>Composición</h2>
<pre><code>const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const doble = x => x * 2;
const sumarUno = x => x + 1;
const processar = pipe(doble, sumarUno); // x*2 + 1
processar(3); // 7</code></pre>
<h2>Currying</h2>
<pre><code>const multiplicar = a => b => a * b;
const triplicar = multiplicar(3);
triplicar(5); // 15</code></pre>
        `,
        exercises: [
          {
            id: 'func-js-1',
            title: 'Pipeline de datos',
            description: 'Procesa un array usando composición de funciones.',
            instructions: 'Dado un array de precios, usa map, filter y reduce (encadenados, sin bucles) para: filtrar precios > 10, aplicar 20% de descuento y calcular el total.',
            starterCode: `const precios = [5, 15, 25, 8, 30, 12, 3, 20];

// Usa solo .filter(), .map(), .reduce() encadenados
const total = precios
  // filtrar > 10
  // aplicar descuento del 20%
  // sumar todo
  ;

console.log(total);`,
            expectedConcept: 'Student must use method chaining with filter, map, and reduce. No for/while loops allowed. Each step should be a pure function.',
            hints: ['.filter(p => p > 10)', '.map(p => p * 0.8)', '.reduce((acc, p) => acc + p, 0)'],
          },
          {
            id: 'func-js-2',
            title: 'Currying',
            description: 'Implementa funciones con currying.',
            instructions: 'Implementa una función currificada `multiplicar` que tome un número y devuelva una función que multiplique por ese número. Crea `doble`, `triple` y `cuadruple` usando `multiplicar`.',
            starterCode: `const multiplicar = (factor) => {
  // devuelve una función que multiplique por factor
};

const doble = multiplicar(2);
const triple = multiplicar(3);
const cuadruple = multiplicar(4);

console.log(doble(5));     // 10
console.log(triple(5));    // 15
console.log(cuadruple(5)); // 20`,
            expectedConcept: 'Student must implement currying: a function returning another function. The derived functions (doble, triple) should be created by partial application.',
            hints: ['return (x) => x * factor;', 'multiplicar(2) devuelve una función'],
          },
        ],
        topics: ['puras', 'inmutabilidad', 'composición', 'currying'],
      },
      python: {
        id: 'functional-python',
        title: 'Prog. Funcional en Python',
        description: 'Lambda, map, filter, reduce, functools y generadores.',
        theory: `
<h2>Lambda y funciones de orden superior</h2>
<pre><code>from functools import reduce

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares = list(filter(lambda x: x % 2 == 0, nums))
dobles = list(map(lambda x: x * 2, nums))
suma = reduce(lambda a, b: a + b, nums)</code></pre>
<h2>Funciones puras e inmutabilidad</h2>
<pre><code>def agregar_elemento(lista, elemento):
    return lista + [elemento]  # no muta la original

original = [1, 2, 3]
nueva = agregar_elemento(original, 4)
print(original)  # [1, 2, 3] sin cambios</code></pre>
<h2>Generadores</h2>
<pre><code>def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci()
[next(gen) for _ in range(8)]  # [0,1,1,2,3,5,8,13]</code></pre>
<h2>functools</h2>
<pre><code>from functools import partial, lru_cache

multiplicar = lambda a, b: a * b
triple = partial(multiplicar, 3)

@lru_cache(maxsize=None)
def fib(n):
    return n if n < 2 else fib(n-1) + fib(n-2)</code></pre>
        `,
        exercises: [
          {
            id: 'func-py-1',
            title: 'Pipeline funcional',
            description: 'Procesa datos usando map, filter y reduce.',
            instructions: 'Dado una lista de precios, usa filter, map y reduce (de functools) — sin bucles — para: filtrar > 10, aplicar 20% descuento y sumar el total.',
            starterCode: `from functools import reduce

precios = [5, 15, 25, 8, 30, 12, 3, 20]

# Usa filter, map, reduce (sin for/while)
total = reduce(
    lambda a, b: a + b,
    map(
        lambda p: p * 0.8,
        filter(lambda p: p > 10, precios)
    )
)

print(total)`,
            expectedConcept: 'Student must use filter(), map(), and reduce() from functools in a functional pipeline without explicit loops.',
            hints: ['filter(lambda p: p > 10, precios)', 'map(lambda p: p * 0.8, filtrados)'],
          },
        ],
        topics: ['lambda', 'map', 'filter', 'reduce', 'generadores'],
      },
      java: {
        id: 'functional-java',
        title: 'Prog. Funcional en Java',
        description: 'Streams, lambdas, Optional y método references.',
        theory: `
<h2>Streams y lambdas</h2>
<pre><code>import java.util.Arrays;
import java.util.List;

List&lt;Integer&gt; nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// filter + map + collect
List&lt;Integer&gt; resultado = nums.stream()
    .filter(n -> n % 2 == 0)
    .map(n -> n * 2)
    .collect(Collectors.toList());

// reduce
int suma = nums.stream()
    .reduce(0, Integer::sum);</code></pre>
<h2>Method references</h2>
<pre><code>nums.stream()
    .map(String::valueOf)
    .forEach(System.out::println);</code></pre>
<h2>Optional</h2>
<pre><code>Optional&lt;Integer&gt; max = nums.stream()
    .filter(n -> n > 5)
    .max(Integer::compareTo);

max.ifPresent(v -> System.out.println("Max: " + v));</code></pre>
        `,
        exercises: [
          {
            id: 'func-java-1',
            title: 'Stream pipeline',
            description: 'Procesa datos con Java Streams.',
            instructions: 'Dado List<Double> precios, usa streams para filtrar > 10, aplicar 20% descuento y calcular el total con reduce/sum. Sin bucles.',
            starterCode: `import java.util.*;
import java.util.stream.*;

public class Main {
    public static void main(String[] args) {
        List<Double> precios = Arrays.asList(5.0, 15.0, 25.0, 8.0, 30.0, 12.0, 3.0, 20.0);

        double total = precios.stream()
            // .filter(...)
            // .map(...)
            // .reduce o mapToDouble(...).sum()
            .mapToDouble(Double::doubleValue).sum(); // placeholder

        System.out.println(total);
    }
}`,
            expectedConcept: 'Student must use Java Stream API with filter(), map(), and reduce() or mapToDouble().sum(). No for/while loops allowed.',
            hints: ['.filter(p -> p > 10)', '.map(p -> p * 0.8)', '.mapToDouble(Double::doubleValue).sum()'],
          },
        ],
        topics: ['streams', 'lambdas', 'Optional', 'method-references'],
      },
      csharp: {
        id: 'functional-csharp',
        title: 'Prog. Funcional en C#',
        description: 'LINQ, Func, Action, delegates y expresiones lambda.',
        theory: `
<h2>LINQ funcional</h2>
<pre><code>using System.Linq;

var nums = new[] {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

var resultado = nums
    .Where(n => n % 2 == 0)
    .Select(n => n * 2)
    .ToList();

int suma = nums.Aggregate(0, (acc, n) => acc + n);</code></pre>
<h2>Func y Action</h2>
<pre><code>Func&lt;int, int, int&gt; sumar = (a, b) => a + b;
Func&lt;int, bool&gt; esPar = n => n % 2 == 0;
Action&lt;string&gt; log = s => Console.WriteLine($"[LOG] {s}");</code></pre>
<h2>Composición</h2>
<pre><code>Func&lt;int, int&gt; doble = x => x * 2;
Func&lt;int, int&gt; sumarUno = x => x + 1;
Func&lt;int, int&gt; proceso = x => sumarUno(doble(x));</code></pre>
        `,
        exercises: [
          {
            id: 'func-cs-1',
            title: 'LINQ pipeline',
            description: 'Procesa datos con LINQ.',
            instructions: 'Dado double[] precios, usa LINQ para filtrar > 10, aplicar 20% descuento y calcular el total con Sum(). Sin bucles.',
            starterCode: `using System;
using System.Linq;

class Program {
    static void Main() {
        double[] precios = {5, 15, 25, 8, 30, 12, 3, 20};

        double total = precios
            // .Where(...)
            // .Select(...)
            // .Sum();
            .Sum(); // placeholder

        Console.WriteLine(total);
    }
}`,
            expectedConcept: 'Student must use LINQ method chaining with Where(), Select(), and Sum(). No for/foreach loops allowed.',
            hints: ['.Where(p => p > 10)', '.Select(p => p * 0.8)', '.Sum()'],
          },
        ],
        topics: ['LINQ', 'Func', 'delegates', 'lambda'],
      },
    },
  },
];

export const TOPIC_MAP = Object.fromEntries(TOPICS.map(t => [t.id, t]));

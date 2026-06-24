import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>for clásico</h2>
<p>Los <strong>bucles</strong> (o estructuras repetitivas) permiten ejecutar un bloque de instrucciones un número determinado o indeterminado de veces. El bucle <code>for</code> se usa cuando se conoce de antemano el número exacto de repeticiones. Se compone de tres partes separadas por punto y coma: <strong>inicialización</strong> (se ejecuta una sola vez al inicio), <strong>condición</strong> (se evalúa antes de cada iteración; si es falsa, el bucle termina) e <strong>incremento</strong> (se ejecuta al final de cada iteración, normalmente para avanzar el contador).</p>
<pre><code>// Estructura: for (inicio; condición; incremento)
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Decremental
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Paso diferente de 1
for (let i = 0; i <= 20; i += 2) {
  console.log(i);  // pares: 0, 2, 4...
}</code></pre>

<h2>while</h2>
<p>El bucle <code>while</code> se usa cuando <strong>no se sabe de antemano</strong> cuántas veces se repetirá el bloque, y es posible que no deba ejecutarse ninguna vez. La condición se evalúa <strong>antes</strong> de entrar al bucle; si desde el inicio es falsa, el bloque no se ejecuta ni una vez. Es fundamental que dentro del bucle haya alguna instrucción que en algún momento haga que la condición sea falsa; de lo contrario se producirá un <strong>bucle infinito</strong>.</p>
<pre><code>// Se ejecuta MIENTRAS la condición sea true
let n = 1;
while (n <= 5) {
  console.log(n);
  n++;
}

// Útil cuando no se conoce el número de iteraciones
let suma = 0, i = 1;
while (suma < 100) {
  suma += i++;
}
console.log(\`Sumados \${i-1} números: \${suma}\`);</code></pre>

<h2>do...while</h2>
<p>El bucle <code>do...while</code> garantiza que el bloque se ejecute <strong>al menos una vez</strong>, ya que la condición se evalúa <strong>al final</strong> del bloque. Es útil para menús interactivos o cuando se necesita leer una entrada al menos una vez antes de comprobar si es válida.</p>
<pre><code>// Se ejecuta AL MENOS UNA VEZ
let opcion;
do {
  opcion = obtenerOpcion();
} while (opcion !== "salir");</code></pre>

<h2>break y continue</h2>
<p><code>break</code> detiene el bucle completamente y el programa continúa tras él. <code>continue</code> salta el resto del bloque en la iteración actual y pasa directamente a la siguiente. Ambas instrucciones rompen el flujo normal del bucle y deben usarse con moderación para mantener el código legible.</p>
<pre><code>for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;  // salta los pares
  if (i > 7) break;           // para al llegar a 8
  console.log(i);  // imprime: 1, 3, 5, 7
}</code></pre>

<h2>Bucles anidados</h2>
<p>Un <strong>bucle anidado</strong> es un bucle dentro de otro. Por cada iteración del bucle exterior, el bucle interior se ejecuta completo. Se usan para trabajar con estructuras bidimensionales como matrices o para generar patrones. El número total de iteraciones es el producto del número de iteraciones de cada bucle.</p>
<pre><code>// Tabla de multiplicar completa
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    process.stdout.write(\`\${i*j}\t\`);
  }
  console.log();
}</code></pre>
`,

  python: `
<h2>for con range()</h2>
<p>En Python el bucle <code>for</code> itera sobre cualquier secuencia (lista, string, rango...). La función <code>range()</code> genera secuencias de números: <code>range(n)</code> va de 0 a n-1; <code>range(inicio, fin)</code> va de inicio a fin-1; <code>range(inicio, fin, paso)</code> avanza de <code>paso</code> en <code>paso</code>. Para iterar de forma decremental se usa un paso negativo.</p>
<pre><code># range(fin): 0 hasta fin-1
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# range(inicio, fin): inicio hasta fin-1
for i in range(1, 6):
    print(i)  # 1, 2, 3, 4, 5

# range(inicio, fin, paso)
for i in range(0, 21, 2):
    print(i)  # pares: 0, 2, 4... 20

# Decremental
for i in range(10, 0, -1):
    print(i)  # 10, 9, 8... 1</code></pre>

<h2>while</h2>
<p>El bucle <code>while</code> repite el bloque mientras la condición sea verdadera. Úsalo cuando no conozcas de antemano cuántas iteraciones necesitas. Los <strong>acumuladores</strong> (variables que suman valores sucesivos) y los <strong>contadores</strong> (que cuentan iteraciones) son los elementos auxiliares más comunes dentro de un <code>while</code>.</p>
<pre><code>n = 1
while n <= 5:
    print(n)
    n += 1

# Acumulador
suma = 0
i = 1
while suma < 100:
    suma += i
    i += 1
print(f"Sumados {i-1} números: {suma}")</code></pre>

<h2>break, continue y else en bucles</h2>
<p>Python tiene una característica única: el bloque <code>else</code> en bucles se ejecuta solo si el bucle terminó de forma <strong>natural</strong> (sin un <code>break</code>). Esto es útil para detectar si se encontró o no un elemento buscado.</p>
<pre><code>for i in range(1, 11):
    if i % 2 == 0:
        continue  # salta pares
    if i > 7:
        break     # para en 8
    print(i)  # 1, 3, 5, 7

# else en bucle: se ejecuta si NO hubo break
for i in range(2, 10):
    if 10 % i == 0:
        print(f"10 no es primo, divisible por {i}")
        break
else:
    print("10 es primo")  # no se ejecuta en este caso</code></pre>

<h2>Bucles anidados</h2>
<pre><code>for i in range(1, 10):
    for j in range(1, 10):
        print(f"{i*j:3}", end="")
    print()  # salto de línea</code></pre>
`,

  java: `
<h2>for clásico</h2>
<pre><code>for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}

// Con múltiples variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println(i + " - " + j);
}</code></pre>

<h2>while y do-while</h2>
<pre><code>int n = 1;
while (n <= 5) {
    System.out.println(n++);
}

// do-while: mínimo una ejecución
int suma = 0, i = 1;
do {
    suma += i++;
} while (suma < 100);
System.out.println("Suma: " + suma);</code></pre>

<h2>break, continue y etiquetas</h2>
<pre><code>for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    System.out.println(i);
}

// Etiquetas para bucles anidados
externo:
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) break externo;
        System.out.println(i + "," + j);
    }
}</code></pre>

<h2>Enhanced for (for-each)</h2>
<pre><code>int[] numeros = {1, 2, 3, 4, 5};
for (int n : numeros) {
    System.out.println(n);
}</code></pre>
`,

  cpp: `
<h2>for clásico</h2>
<pre><code>for (int i = 1; i <= 5; i++) {
    cout << i << endl;
}

// Múltiples variables
for (int i = 0, j = 10; i < j; i++, j--) {
    cout << i << " - " << j << endl;
}</code></pre>

<h2>while y do-while</h2>
<pre><code>int n = 1;
while (n <= 5) {
    cout << n++ << endl;
}

int suma = 0, i = 1;
do {
    suma += i++;
} while (suma < 100);
cout << "Suma: " << suma << endl;</code></pre>

<h2>Range-based for (C++11)</h2>
<pre><code>int arr[] = {1, 2, 3, 4, 5};
for (int x : arr) {
    cout << x << endl;
}

// Con vector
#include &lt;vector&gt;
vector&lt;int&gt; v = {1, 2, 3, 4, 5};
for (int x : v) cout << x << " ";</code></pre>

<h2>break y continue</h2>
<pre><code>for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    cout << i << endl;
}</code></pre>
`,

  csharp: `
<h2>for</h2>
<pre><code>for (int i = 1; i <= 5; i++) {
    Console.WriteLine(i);
}</code></pre>

<h2>while y do-while</h2>
<pre><code>int n = 1;
while (n <= 5) {
    Console.WriteLine(n++);
}

int suma = 0, i = 1;
do {
    suma += i++;
} while (suma < 100);
Console.WriteLine($"Suma: {suma}");</code></pre>

<h2>foreach</h2>
<pre><code>int[] numeros = {1, 2, 3, 4, 5};
foreach (int n in numeros) {
    Console.WriteLine(n);
}</code></pre>

<h2>break y continue</h2>
<pre><code>for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;
    if (i > 7) break;
    Console.WriteLine(i);
}</code></pre>
`,
};

const exercises = [
  {
    id: 'loops-1',
    title: 'Primeros N números naturales',
    description: 'Imprime los primeros N números naturales usando un bucle for.',
    instructions: 'Usando un bucle for, imprime los números del 1 al 20, uno por línea.',
    hints: ['for de 1 a 20 inclusive (i <= 20)', 'Imprime i en cada iteración'],
    expectedConcept: 'Student must use a for loop with a counter variable from 1 to 20, printing each number.',
  },
  {
    id: 'loops-2',
    title: 'Tabla de multiplicar',
    description: 'Imprime la tabla de multiplicar de un número del 1 al 10.',
    instructions: 'Usando un bucle for, imprime la tabla del 7 del 1 al 10. Formato: "7 x 1 = 7".',
    hints: ['for de 1 a 10', 'Muestra: numero + " x " + i + " = " + (numero*i)'],
    expectedConcept: 'Student should use a for loop with counter from 1 to 10, computing and displaying multiplication with formatted output.',
  },
  {
    id: 'loops-3',
    title: 'FizzBuzz',
    description: 'Imprime números del 1 al 30, sustituyendo múltiplos de 3 y 5.',
    instructions: 'Del 1 al 30: si es múltiplo de 3 imprime "Fizz", si es de 5 "Buzz", si es de ambos "FizzBuzz", si no el número.',
    hints: ['Comprueba FizzBuzz primero (múltiplo de 3 Y 5)', 'El operador % da el resto'],
    expectedConcept: 'Student must use a loop with modulo operator (%) and conditionals. Must check FizzBuzz (divisible by both) before Fizz and Buzz.',
  },
  {
    id: 'loops-4',
    title: 'Factorial',
    description: 'Calcula el factorial de un número usando un bucle.',
    instructions: 'Calcula el factorial de n=10 usando un bucle (no recursión). El factorial de n es n × (n-1) × ... × 1. Imprime el resultado.',
    hints: ['Inicializa resultado=1', 'Multiplica resultado por i en cada iteración (i de 1 a n)'],
    expectedConcept: 'Student should use a loop (for or while) with an accumulator variable initialized to 1, multiplying by each number from 1 to n.',
  },
  {
    id: 'loops-5',
    title: 'Suma acumulada con while',
    description: 'Suma números consecutivos hasta superar un límite usando while.',
    instructions: 'Usando un bucle while (no for), suma números del 1 en adelante hasta que la suma supere 100. Imprime cuántos números se sumaron y el total.',
    hints: ['while (suma <= 100) { suma += i; i++; }', 'Inicializa suma=0 e i=1'],
    expectedConcept: 'Student MUST use a while loop (not for) with a condition checking the running sum. Must track both the count and the running sum.',
  },
  {
    id: 'loops-6',
    title: 'Serie de Fibonacci',
    description: 'Genera los primeros N términos de la serie de Fibonacci.',
    instructions: 'Genera e imprime los primeros 15 términos de la serie de Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13... Cada término es la suma de los dos anteriores.',
    hints: ['Empieza con a=0, b=1', 'En cada paso: imprime a, luego a,b = b,a+b (o temp=b; b=a+b; a=temp)'],
    expectedConcept: 'Student should use a loop with two variables tracking consecutive Fibonacci numbers, updating them each iteration.',
  },
  {
    id: 'loops-7',
    title: 'Triángulo de asteriscos',
    description: 'Dibuja un triángulo con asteriscos usando bucles anidados.',
    instructions: 'Usando bucles anidados (for dentro de for), imprime un triángulo de asteriscos de 5 filas:\n*\n**\n***\n****\n*****',
    hints: ['Bucle exterior: filas (i de 1 a 5)', 'Bucle interior: imprime i asteriscos', 'Imprime sin salto de línea dentro, con salto al acabar cada fila'],
    expectedConcept: 'Student must use nested loops: outer loop for rows, inner loop for printing asterisks. Cannot print the result hardcoded.',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'loops-1': `// Imprime los números del 1 al 20\nfor (let i = 1; i <= 20; i++) {\n  // completa aquí\n}`,
    'loops-2': `let numero = 7;\n// Imprime la tabla del 7 (del 1 al 10)\n`,
    'loops-3': `for (let i = 1; i <= 30; i++) {\n  // FizzBuzz\n}`,
    'loops-4': `let n = 10;\nlet factorial = 1;\n// Calcula n! con un bucle\n\nconsole.log(\`\${n}! = \${factorial}\`);`,
    'loops-5': `let suma = 0;\nlet contador = 0;\n\n// Usa while (no for)\n\nconsole.log(\`Sumados \${contador} números: \${suma}\`);`,
    'loops-6': `let a = 0, b = 1;\n// Imprime los 15 primeros términos de Fibonacci\n`,
    'loops-7': `// Dibuja triángulo de 5 filas con bucles anidados\n`,
  },
  python: {
    'loops-1': `# Imprime los números del 1 al 20\nfor i in range(1, 21):\n    pass  # completa aquí`,
    'loops-2': `numero = 7\n# Imprime la tabla del 7 (del 1 al 10)\n`,
    'loops-3': `for i in range(1, 31):\n    pass  # FizzBuzz`,
    'loops-4': `n = 10\nfactorial = 1\n# Calcula n! con un bucle\n\nprint(f"{n}! = {factorial}")`,
    'loops-5': `suma = 0\ncontador = 0\n\n# Usa while (no for)\n\nprint(f"Sumados {contador} números: {suma}")`,
    'loops-6': `a, b = 0, 1\n# Imprime los 15 primeros términos de Fibonacci\n`,
    'loops-7': `# Dibuja triángulo de 5 filas con bucles anidados\n`,
  },
  java: {
    'loops-1': `public class Main {\n    public static void main(String[] args) {\n        // Imprime del 1 al 20\n        for (int i = 1; i <= 20; i++) {\n            // completa\n        }\n    }\n}`,
    'loops-2': `public class Main {\n    public static void main(String[] args) {\n        int numero = 7;\n        // Imprime la tabla del 7\n    }\n}`,
    'loops-3': `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 30; i++) {\n            // FizzBuzz\n        }\n    }\n}`,
    'loops-4': `public class Main {\n    public static void main(String[] args) {\n        int n = 10;\n        long factorial = 1;\n        // Calcula n! con un bucle\n\n        System.out.println(n + "! = " + factorial);\n    }\n}`,
    'loops-5': `public class Main {\n    public static void main(String[] args) {\n        long suma = 0;\n        int contador = 0;\n\n        // Usa while\n\n        System.out.println("Sumados " + contador + " números: " + suma);\n    }\n}`,
    'loops-6': `public class Main {\n    public static void main(String[] args) {\n        long a = 0, b = 1;\n        // Imprime los 15 primeros términos de Fibonacci\n    }\n}`,
    'loops-7': `public class Main {\n    public static void main(String[] args) {\n        // Triángulo de 5 filas con bucles anidados\n    }\n}`,
  },
  cpp: {
    'loops-1': `#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 20; i++) {\n        // completa\n    }\n    return 0;\n}`,
    'loops-2': `#include <iostream>\nusing namespace std;\nint main() {\n    int numero = 7;\n    // Tabla del 7\n    return 0;\n}`,
    'loops-3': `#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 30; i++) {\n        // FizzBuzz\n    }\n    return 0;\n}`,
    'loops-4': `#include <iostream>\nusing namespace std;\nint main() {\n    int n = 10;\n    long long factorial = 1;\n    // Calcula n!\n\n    cout << n << "! = " << factorial << endl;\n    return 0;\n}`,
    'loops-5': `#include <iostream>\nusing namespace std;\nint main() {\n    long long suma = 0;\n    int contador = 0;\n\n    // Usa while\n\n    cout << "Sumados " << contador << " numeros: " << suma << endl;\n    return 0;\n}`,
    'loops-6': `#include <iostream>\nusing namespace std;\nint main() {\n    long long a = 0, b = 1;\n    // 15 primeros Fibonacci\n    return 0;\n}`,
    'loops-7': `#include <iostream>\nusing namespace std;\nint main() {\n    // Triángulo 5 filas con bucles anidados\n    return 0;\n}`,
  },
  csharp: {
    'loops-1': `using System;\nclass Program {\n    static void Main() {\n        for (int i = 1; i <= 20; i++) {\n            // completa\n        }\n    }\n}`,
    'loops-2': `using System;\nclass Program {\n    static void Main() {\n        int numero = 7;\n        // Tabla del 7\n    }\n}`,
    'loops-3': `using System;\nclass Program {\n    static void Main() {\n        for (int i = 1; i <= 30; i++) {\n            // FizzBuzz\n        }\n    }\n}`,
    'loops-4': `using System;\nclass Program {\n    static void Main() {\n        int n = 10;\n        long factorial = 1;\n        // Calcula n!\n\n        Console.WriteLine($"{n}! = {factorial}");\n    }\n}`,
    'loops-5': `using System;\nclass Program {\n    static void Main() {\n        long suma = 0;\n        int contador = 0;\n\n        // Usa while\n\n        Console.WriteLine($"Sumados {contador} números: {suma}");\n    }\n}`,
    'loops-6': `using System;\nclass Program {\n    static void Main() {\n        long a = 0, b = 1;\n        // 15 primeros Fibonacci\n    }\n}`,
    'loops-7': `using System;\nclass Program {\n    static void Main() {\n        // Triángulo 5 filas con bucles anidados\n    }\n}`,
  },
};

function buildLesson(lang: string, theoryContent: string, lessonId: string, title: string, description: string) {
  return {
    id: `${lessonId}-${lang}`,
    title,
    description,
    theory: theoryContent,
    topics: ['for', 'while', 'do-while', 'break', 'continue'],
    exercises: exercises.map(ex => ({
      ...ex,
      id: `${ex.id}-${lang}`,
      starterCode: starterCodes[lang][ex.id] ?? '',
    })),
  };
}

export const loopsTopic: Topic = {
  id: 'loops',
  title: 'Bucles',
  icon: 'repeat',
  description: 'for, while, do-while, bucles anidados, break y continue.',
  lessons: {
    javascript: buildLesson('javascript', theory.javascript, 'loops', 'Bucles en JavaScript', 'for, while, do-while y for...of en JS.') as any,
    python: buildLesson('python', theory.python, 'loops', 'Bucles en Python', 'for, while, range() y comprehensions.') as any,
    java: buildLesson('java', theory.java, 'loops', 'Bucles en Java', 'for, while, do-while y enhanced for.') as any,
    cpp: buildLesson('cpp', theory.cpp, 'loops', 'Bucles en C++', 'for, while, do-while y range-based for.') as any,
    csharp: buildLesson('csharp', theory.csharp, 'loops', 'Bucles en C#', 'for, while, do-while y foreach.') as any,
  },
};

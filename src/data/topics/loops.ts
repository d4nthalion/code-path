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

// ── Exercises from UD5 Bucles (ApuntesProgramacion) ──
const exercises = [
  {
    id: 'loops-1',
    title: '20 primeros números naturales',
    description: 'Muestra por pantalla los 20 primeros números naturales.',
    instructions: 'Escribe un programa que muestre por pantalla los 20 primeros números naturales (1, 2, 3, … , 20), uno por línea.',
    hints: ['Usa un bucle for con contador del 1 al 20', 'La condición es i <= 20'],
    expectedConcept: 'Student must use a for loop with a counter variable from 1 to 20, printing each value.',
  },
  {
    id: 'loops-2',
    title: 'Números pares (1-200)',
    description: 'Muestra los números pares comprendidos entre 1 y 200 de dos formas distintas.',
    instructions: 'Escribe dos versiones:\n1) Usa un contador que suma de 2 en 2 (empieza en 2, llega a 200).\n2) Usa un contador de 1 en 1 y comprueba si el número es par con el operador %.',
    hints: ['Versión 1: for (i=2; i<=200; i+=2)', 'Versión 2: for (i=1; i<=200; i++) { if (i%2==0) imprime }'],
    expectedConcept: 'Student must demonstrate two ways to iterate over even numbers: step-by-2 and modulo check. Both require a loop.',
  },
  {
    id: 'loops-3',
    title: 'Del 1 hasta N',
    description: 'Muestra los números desde el 1 hasta un número N introducido por teclado.',
    instructions: 'Pide al usuario un número N entero positivo. Luego muestra por pantalla todos los números desde 1 hasta N, uno por línea. Usa un bucle for con ese valor como límite.',
    hints: ['Lee N antes del bucle', 'La condición del for es i <= n'],
    expectedConcept: 'Student must read N from user input (hardcoded value acceptable if no input available) and use it as the loop upper bound.',
  },
  {
    id: 'loops-4',
    title: 'Factorial de N',
    description: 'Calcula y muestra el factorial de un número positivo N.',
    instructions: 'Escribe un programa que lea un número positivo N y calcule su factorial N! usando un bucle (sin recursión). Recuerda que 0! = 1, 1! = 1, 2! = 2×1, N! = N×(N-1)×...×1.',
    hints: ['Inicializa factorial = 1 antes del bucle', 'Multiplica factorial por cada número de 1 a N', 'Usa long/bigint para evitar desbordamiento con N grandes'],
    expectedConcept: 'Student must use a loop (for or while) with a multiplicative accumulator initialized to 1. No recursion allowed.',
  },
  {
    id: 'loops-5',
    title: 'Detectar negativos',
    description: 'Lee 10 números y determina si hay alguno negativo.',
    instructions: 'Escribe un programa que lea exactamente 10 números no nulos (puedes usar valores fijos si no tienes entrada de teclado) y al final muestre un mensaje indicando si se ha leído algún número negativo o no.',
    hints: ['Usa una variable booleana hayNegativo inicializada a false', 'Si encuentras un negativo, ponla a true', 'Imprime el mensaje al salir del bucle'],
    expectedConcept: 'Student must use a loop to read/check 10 values and a boolean flag variable to track if any negative was found.',
  },
  {
    id: 'loops-6',
    title: 'Contar positivos y negativos',
    description: 'Lee 10 números e indica cuántos son positivos y cuántos negativos.',
    instructions: 'Lee exactamente 10 números no nulos y al final muestra cuántos son positivos y cuántos son negativos (los ceros no cuentan en ninguno).',
    hints: ['Usa dos contadores: contPositivos y contNegativos', 'Incrementa el correcto en cada iteración', 'Al final imprime ambos contadores'],
    expectedConcept: 'Student must use a loop with two counter variables that are incremented conditionally based on the sign of each number.',
  },
  {
    id: 'loops-7',
    title: 'Suma y producto de los 10 primeros naturales',
    description: 'Calcula y muestra la suma y el producto de los 10 primeros números naturales.',
    instructions: 'Escribe un programa que calcule y muestre la suma (1+2+...+10) y el producto (1×2×...×10) de los 10 primeros números naturales usando un único bucle.',
    hints: ['Necesitas dos acumuladores: uno inicializado a 0 (suma) y otro a 1 (producto)', 'Actualiza ambos en cada iteración del bucle'],
    expectedConcept: 'Student must use a single loop with two accumulator variables: one for sum (initialized to 0) and one for product (initialized to 1).',
  },
  {
    id: 'loops-8',
    title: 'Notas: ¿hubo algún 10?',
    description: 'Lee una secuencia de notas hasta -1 y determina si hubo algún 10.',
    instructions: 'Lee una secuencia de notas (valores de 0 a 10) que termina cuando el usuario introduce -1. Al final, indica si hubo o no alguna nota con valor 10. Usa un bucle while con -1 como valor centinela.',
    hints: ['Usa while (nota != -1) o equivalente', 'Lee la nota dentro del bucle', 'Usa una variable booleana para recordar si hubo un 10'],
    expectedConcept: 'Student must use a while loop with a sentinel value (-1) and a boolean flag to detect if any grade equals 10.',
  },
  {
    id: 'loops-9',
    title: 'Sumar pares e impares (100-200)',
    description: 'Suma por separado los pares y los impares entre 100 y 200.',
    instructions: 'Escribe un programa que sume independientemente los números pares y los impares comprendidos entre 100 y 200 (ambos inclusive). Muestra por pantalla ambas sumas al final.',
    hints: ['Un único bucle del 100 al 200', 'Dentro: if (i%2==0) sumaPares += i; else sumaImpares += i'],
    expectedConcept: 'Student must use a single loop with two accumulator variables and the modulo operator to classify and sum even and odd numbers separately.',
  },
  {
    id: 'loops-10',
    title: 'Potencia sin operador ^',
    description: 'Calcula A elevado a B sin usar el operador de potencia.',
    instructions: 'Pide al usuario dos valores A y B enteros positivos. Calcula A^B usando un bucle que multiplique A por sí mismo B veces (sin usar **, Math.pow, pow o equivalentes). Muestra el resultado.',
    hints: ['resultado = 1', 'Multiplica resultado * A exactamente B veces', 'Usa un for con B iteraciones'],
    expectedConcept: 'Student must implement exponentiation using a loop that multiplies the base B times, without using any built-in power operator or function.',
  },
  {
    id: 'loops-11',
    title: 'Múltiplos de 3 hasta N',
    description: 'Cuenta los múltiplos de 3 desde 1 hasta un número N.',
    instructions: 'Pide al usuario un número entero positivo N. Cuenta e imprime cuántos múltiplos de 3 hay desde 1 hasta N (inclusive).',
    hints: ['Un número es múltiplo de 3 si i % 3 == 0', 'Usa un contador que incrementes cuando se cumpla la condición'],
    expectedConcept: 'Student must use a loop from 1 to N with the modulo operator to check divisibility by 3 and count the multiples.',
  },
  {
    id: 'loops-12',
    title: 'Pirámide de números (bucles anidados)',
    description: 'Muestra una pirámide en la que cada número se repite tantas veces como su valor.',
    instructions: 'Escribe un programa que pida un número entero N entre 0 y 20. Luego muestra por pantalla los números desde 1 hasta N, uno por línea, repitiendo cada número tantas veces como su valor.\nEjemplo para N=4:\n1\n2 2\n3 3 3\n4 4 4 4',
    hints: ['Necesitas bucles anidados', 'Bucle exterior: i de 1 a N (filas)', 'Bucle interior: imprime i exactamente i veces'],
    expectedConcept: 'Student must use nested loops: outer loop from 1 to N, inner loop that runs i times to print the number i repeated.',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'loops-1': `for (let i = 1; i <= 20; i++) {\n  // imprime i\n}`,
    'loops-2': `// Versión 1: suma de 2 en 2\nfor (let i = 2; i <= 200; i += 2) {\n  // imprime i\n}\n\n// Versión 2: de 1 en 1 comprobando par\nfor (let i = 1; i <= 200; i++) {\n  if (/* es par */) {\n    // imprime i\n  }\n}`,
    'loops-3': `let n = 10; // cambia este valor\nfor (let i = 1; i <= n; i++) {\n  // imprime i\n}`,
    'loops-4': `let n = 8;\nlet factorial = 1;\n\n// Calcula n! con un bucle (sin ** ni Math.pow)\n\nconsole.log(n + "! = " + factorial);`,
    'loops-5': `let numeros = [3, -1, 7, -4, 0, 8, -2, 5, 1, -3]; // usa estos 10 valores\nlet hayNegativo = false;\n\n// recorre numeros y actualiza hayNegativo\n\nconsole.log(hayNegativo ? "Sí hubo negativos" : "No hubo negativos");`,
    'loops-6': `let numeros = [3, -1, 7, -4, 0, 8, -2, 5, 1, -3];\nlet contPositivos = 0;\nlet contNegativos = 0;\n\n// recorre y cuenta\n\nconsole.log("Positivos:", contPositivos, "| Negativos:", contNegativos);`,
    'loops-7': `let suma = 0;\nlet producto = 1;\n\nfor (let i = 1; i <= 10; i++) {\n  // actualiza suma y producto\n}\n\nconsole.log("Suma:", suma, "| Producto:", producto);`,
    'loops-8': `let notas = [7, 10, 5, 8, -1]; // -1 es el centinela\nlet i = 0;\nlet hubo10 = false;\n\n// usa while con centinela -1\n\nconsole.log(hubo10 ? "Sí hubo algún 10" : "No hubo ningún 10");`,
    'loops-9': `let sumaPares = 0;\nlet sumaImpares = 0;\n\nfor (let i = 100; i <= 200; i++) {\n  // clasifica y acumula\n}\n\nconsole.log("Suma pares:", sumaPares);\nconsole.log("Suma impares:", sumaImpares);`,
    'loops-10': `let a = 3, b = 5; // calcula 3^5\nlet resultado = 1;\n\n// Multiplica a por sí mismo b veces (sin ** ni Math.pow)\n\nconsole.log(a + "^" + b + " = " + resultado);`,
    'loops-11': `let n = 30;\nlet contador = 0;\n\nfor (let i = 1; i <= n; i++) {\n  // si i es múltiplo de 3, incrementa contador\n}\n\nconsole.log("Múltiplos de 3 hasta " + n + ": " + contador);`,
    'loops-12': `let n = 5;\n\nfor (let i = 1; i <= n; i++) {\n  let linea = "";\n  for (let j = 0; j < i; j++) {\n    // añade i a linea\n  }\n  console.log(linea);\n}`,
  },
  python: {
    'loops-1': `for i in range(1, 21):\n    pass  # imprime i`,
    'loops-2': `# Versión 1: suma de 2 en 2\nfor i in range(2, 201, 2):\n    pass  # imprime i\n\n# Versión 2: de 1 en 1 comprobando par\nfor i in range(1, 201):\n    if False:  # condición par\n        pass  # imprime i`,
    'loops-3': `n = 10  # cambia este valor\nfor i in range(1, n + 1):\n    pass  # imprime i`,
    'loops-4': `n = 8\nfactorial = 1\n\n# Calcula n! con un bucle\n\nprint(f"{n}! = {factorial}")`,
    'loops-5': `numeros = [3, -1, 7, -4, 0, 8, -2, 5, 1, -3]\nhay_negativo = False\n\n# recorre y actualiza hay_negativo\n\nprint("Sí hubo negativos" if hay_negativo else "No hubo negativos")`,
    'loops-6': `numeros = [3, -1, 7, -4, 0, 8, -2, 5, 1, -3]\ncont_positivos = 0\ncont_negativos = 0\n\n# recorre y cuenta\n\nprint(f"Positivos: {cont_positivos} | Negativos: {cont_negativos}")`,
    'loops-7': `suma = 0\nproducto = 1\n\nfor i in range(1, 11):\n    pass  # actualiza suma y producto\n\nprint(f"Suma: {suma} | Producto: {producto}")`,
    'loops-8': `notas = [7, 10, 5, 8, -1]  # -1 es el centinela\ni = 0\nhubo_10 = False\n\n# usa while con centinela -1\n\nprint("Sí hubo algún 10" if hubo_10 else "No hubo ningún 10")`,
    'loops-9': `suma_pares = 0\nsuma_impares = 0\n\nfor i in range(100, 201):\n    pass  # clasifica y acumula\n\nprint(f"Suma pares: {suma_pares}")\nprint(f"Suma impares: {suma_impares}")`,
    'loops-10': `a, b = 3, 5\nresultado = 1\n\n# Multiplica a por sí mismo b veces (sin **)\n\nprint(f"{a}^{b} = {resultado}")`,
    'loops-11': `n = 30\ncontador = 0\n\nfor i in range(1, n + 1):\n    pass  # si múltiplo de 3, incrementa\n\nprint(f"Múltiplos de 3 hasta {n}: {contador}")`,
    'loops-12': `n = 5\n\nfor i in range(1, n + 1):\n    linea = ""\n    for j in range(i):\n        pass  # añade str(i) a linea\n    print(linea)`,
  },
  java: {
    'loops-1': `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 20; i++) {\n            // imprime i\n        }\n    }\n}`,
    'loops-2': `public class Main {\n    public static void main(String[] args) {\n        // Versión 1: de 2 en 2\n        for (int i = 2; i <= 200; i += 2) {\n            // imprime i\n        }\n        // Versión 2: de 1 en 1\n        for (int i = 1; i <= 200; i++) {\n            if (/* es par */) System.out.println(i);\n        }\n    }\n}`,
    'loops-3': `public class Main {\n    public static void main(String[] args) {\n        int n = 10;\n        for (int i = 1; i <= n; i++) {\n            // imprime i\n        }\n    }\n}`,
    'loops-4': `public class Main {\n    public static void main(String[] args) {\n        int n = 8;\n        long factorial = 1;\n        // Calcula n! con un bucle\n        System.out.println(n + "! = " + factorial);\n    }\n}`,
    'loops-5': `public class Main {\n    public static void main(String[] args) {\n        int[] numeros = {3, -1, 7, -4, 0, 8, -2, 5, 1, -3};\n        boolean hayNegativo = false;\n        // recorre y actualiza hayNegativo\n        System.out.println(hayNegativo ? "Sí hubo negativos" : "No hubo negativos");\n    }\n}`,
    'loops-6': `public class Main {\n    public static void main(String[] args) {\n        int[] numeros = {3, -1, 7, -4, 0, 8, -2, 5, 1, -3};\n        int contPos = 0, contNeg = 0;\n        // recorre y cuenta\n        System.out.println("Positivos: " + contPos + " | Negativos: " + contNeg);\n    }\n}`,
    'loops-7': `public class Main {\n    public static void main(String[] args) {\n        long suma = 0, producto = 1;\n        for (int i = 1; i <= 10; i++) {\n            // actualiza suma y producto\n        }\n        System.out.println("Suma: " + suma + " | Producto: " + producto);\n    }\n}`,
    'loops-8': `public class Main {\n    public static void main(String[] args) {\n        int[] notas = {7, 10, 5, 8, -1}; // -1 centinela\n        int i = 0;\n        boolean hubo10 = false;\n        // while con centinela\n        System.out.println(hubo10 ? "Sí hubo algún 10" : "No hubo ningún 10");\n    }\n}`,
    'loops-9': `public class Main {\n    public static void main(String[] args) {\n        long sumaPares = 0, sumaImpares = 0;\n        for (int i = 100; i <= 200; i++) {\n            // clasifica y acumula\n        }\n        System.out.println("Suma pares: " + sumaPares);\n        System.out.println("Suma impares: " + sumaImpares);\n    }\n}`,
    'loops-10': `public class Main {\n    public static void main(String[] args) {\n        int a = 3, b = 5;\n        long resultado = 1;\n        // Multiplica a por sí mismo b veces (sin Math.pow)\n        System.out.println(a + "^" + b + " = " + resultado);\n    }\n}`,
    'loops-11': `public class Main {\n    public static void main(String[] args) {\n        int n = 30, contador = 0;\n        for (int i = 1; i <= n; i++) {\n            // si múltiplo de 3, incrementa contador\n        }\n        System.out.println("Múltiplos de 3 hasta " + n + ": " + contador);\n    }\n}`,
    'loops-12': `public class Main {\n    public static void main(String[] args) {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            String linea = "";\n            for (int j = 0; j < i; j++) {\n                // añade i a linea\n            }\n            System.out.println(linea);\n        }\n    }\n}`,
  },
  cpp: {
    'loops-1': `#include <iostream>\nusing namespace std;\nint main() {\n    for (int i = 1; i <= 20; i++) {\n        // imprime i\n    }\n    return 0;\n}`,
    'loops-2': `#include <iostream>\nusing namespace std;\nint main() {\n    // Versión 1\n    for (int i = 2; i <= 200; i += 2) cout << i << endl;\n    // Versión 2\n    for (int i = 1; i <= 200; i++) {\n        if (/* par */) cout << i << endl;\n    }\n    return 0;\n}`,
    'loops-3': `#include <iostream>\nusing namespace std;\nint main() {\n    int n = 10;\n    for (int i = 1; i <= n; i++) {\n        // imprime i\n    }\n    return 0;\n}`,
    'loops-4': `#include <iostream>\nusing namespace std;\nint main() {\n    int n = 8;\n    long long factorial = 1;\n    // bucle para calcular n!\n    cout << n << "! = " << factorial << endl;\n    return 0;\n}`,
    'loops-5': `#include <iostream>\nusing namespace std;\nint main() {\n    int numeros[] = {3,-1,7,-4,0,8,-2,5,1,-3};\n    bool hayNegativo = false;\n    for (int x : numeros) { /* comprueba */ }\n    cout << (hayNegativo ? "Si hubo negativos" : "No hubo negativos") << endl;\n    return 0;\n}`,
    'loops-6': `#include <iostream>\nusing namespace std;\nint main() {\n    int numeros[] = {3,-1,7,-4,0,8,-2,5,1,-3};\n    int contPos = 0, contNeg = 0;\n    for (int x : numeros) { /* cuenta */ }\n    cout << "Positivos: " << contPos << " | Negativos: " << contNeg << endl;\n    return 0;\n}`,
    'loops-7': `#include <iostream>\nusing namespace std;\nint main() {\n    long long suma = 0, producto = 1;\n    for (int i = 1; i <= 10; i++) { /* acumula */ }\n    cout << "Suma: " << suma << " | Producto: " << producto << endl;\n    return 0;\n}`,
    'loops-8': `#include <iostream>\nusing namespace std;\nint main() {\n    int notas[] = {7,10,5,8,-1};\n    int i = 0;\n    bool hubo10 = false;\n    // while con centinela -1\n    cout << (hubo10 ? "Si hubo algun 10" : "No hubo ningun 10") << endl;\n    return 0;\n}`,
    'loops-9': `#include <iostream>\nusing namespace std;\nint main() {\n    long long sp = 0, si = 0;\n    for (int i = 100; i <= 200; i++) { /* clasifica */ }\n    cout << "Suma pares: " << sp << endl;\n    cout << "Suma impares: " << si << endl;\n    return 0;\n}`,
    'loops-10': `#include <iostream>\nusing namespace std;\nint main() {\n    int a = 3, b = 5;\n    long long resultado = 1;\n    // bucle: multiplica a por sí mismo b veces\n    cout << a << "^" << b << " = " << resultado << endl;\n    return 0;\n}`,
    'loops-11': `#include <iostream>\nusing namespace std;\nint main() {\n    int n = 30, contador = 0;\n    for (int i = 1; i <= n; i++) { /* si múltiplo de 3 */ }\n    cout << "Multiples de 3 hasta " << n << ": " << contador << endl;\n    return 0;\n}`,
    'loops-12': `#include <iostream>\nusing namespace std;\nint main() {\n    int n = 5;\n    for (int i = 1; i <= n; i++) {\n        for (int j = 0; j < i; j++) cout << i << " ";\n        cout << endl;\n    }\n    return 0;\n}`,
  },
  csharp: {
    'loops-1': `using System;\nclass Program {\n    static void Main() {\n        for (int i = 1; i <= 20; i++) { /* imprime */ }\n    }\n}`,
    'loops-2': `using System;\nclass Program {\n    static void Main() {\n        for (int i = 2; i <= 200; i += 2) Console.WriteLine(i);\n        for (int i = 1; i <= 200; i++) if (/* par */) Console.WriteLine(i);\n    }\n}`,
    'loops-3': `using System;\nclass Program {\n    static void Main() {\n        int n = 10;\n        for (int i = 1; i <= n; i++) { /* imprime */ }\n    }\n}`,
    'loops-4': `using System;\nclass Program {\n    static void Main() {\n        int n = 8;\n        long factorial = 1;\n        // bucle para n!\n        Console.WriteLine($"{n}! = {factorial}");\n    }\n}`,
    'loops-5': `using System;\nclass Program {\n    static void Main() {\n        int[] numeros = {3,-1,7,-4,0,8,-2,5,1,-3};\n        bool hayNegativo = false;\n        foreach (int x in numeros) { /* comprueba */ }\n        Console.WriteLine(hayNegativo ? "Sí hubo negativos" : "No hubo negativos");\n    }\n}`,
    'loops-6': `using System;\nclass Program {\n    static void Main() {\n        int[] numeros = {3,-1,7,-4,0,8,-2,5,1,-3};\n        int contPos = 0, contNeg = 0;\n        foreach (int x in numeros) { /* cuenta */ }\n        Console.WriteLine($"Positivos: {contPos} | Negativos: {contNeg}");\n    }\n}`,
    'loops-7': `using System;\nclass Program {\n    static void Main() {\n        long suma = 0, producto = 1;\n        for (int i = 1; i <= 10; i++) { /* acumula */ }\n        Console.WriteLine($"Suma: {suma} | Producto: {producto}");\n    }\n}`,
    'loops-8': `using System;\nclass Program {\n    static void Main() {\n        int[] notas = {7,10,5,8,-1};\n        int i = 0;\n        bool hubo10 = false;\n        // while con centinela -1\n        Console.WriteLine(hubo10 ? "Sí hubo algún 10" : "No hubo ningún 10");\n    }\n}`,
    'loops-9': `using System;\nclass Program {\n    static void Main() {\n        long sp = 0, si = 0;\n        for (int i = 100; i <= 200; i++) { /* clasifica */ }\n        Console.WriteLine($"Suma pares: {sp}");\n        Console.WriteLine($"Suma impares: {si}");\n    }\n}`,
    'loops-10': `using System;\nclass Program {\n    static void Main() {\n        int a = 3, b = 5;\n        long resultado = 1;\n        // bucle: multiplica a b veces (sin Math.Pow)\n        Console.WriteLine($"{a}^{b} = {resultado}");\n    }\n}`,
    'loops-11': `using System;\nclass Program {\n    static void Main() {\n        int n = 30, contador = 0;\n        for (int i = 1; i <= n; i++) { /* si múltiplo de 3 */ }\n        Console.WriteLine($"Múltiplos de 3 hasta {n}: {contador}");\n    }\n}`,
    'loops-12': `using System;\nclass Program {\n    static void Main() {\n        int n = 5;\n        for (int i = 1; i <= n; i++) {\n            string linea = "";\n            for (int j = 0; j < i; j++) linea += i + " ";\n            Console.WriteLine(linea.Trim());\n        }\n    }\n}`,
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

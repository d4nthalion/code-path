import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>Declaración de funciones</h2>
<p>Las <strong>funciones</strong> (también llamadas subprogramas) agrupan un conjunto de instrucciones bajo un nombre y permiten ejecutarlas desde cualquier parte del programa con solo invocar ese nombre. Su utilidad principal es <strong>evitar la repetición de código</strong> y <strong>dividir un problema complejo</strong> en partes más pequeñas y manejables. En JavaScript existen tres formas de declarar funciones, con diferencias en cuanto a <em>hoisting</em> (elevación) y manejo del contexto <code>this</code>.</p>
<pre><code>// Declarada (hoisting: se puede llamar antes de definirla)
function saludar(nombre) {
  return \`Hola, \${nombre}!\`;
}

// Expresión (no tiene hoisting)
const sumar = function(a, b) { return a + b; };

// Arrow function (concisa)
const multiplicar = (a, b) => a * b;
const cuadrado = x => x * x;  // un parámetro: sin paréntesis</code></pre>

<h2>Parámetros: valores por defecto y rest</h2>
<p>Los <strong>parámetros</strong> son los datos de entrada que recibe la función; los <strong>argumentos</strong> son los valores concretos que se pasan al llamarla. Los <strong>parámetros por defecto</strong> permiten que la función sea llamada sin pasar todos los argumentos. El operador <strong>rest</strong> (<code>...</code>) agrupa un número variable de argumentos en un array.</p>
<pre><code>function potencia(base, exp = 2) {
  return base ** exp;
}
potencia(3);     // 9
potencia(2, 8);  // 256

function sumarTodo(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
sumarTodo(1, 2, 3, 4, 5);  // 15</code></pre>

<h2>Retorno múltiple y desestructuración</h2>
<p>La instrucción <code>return</code> finaliza la ejecución de la función y devuelve un valor al punto donde fue llamada. Una función sin <code>return</code> (o con <code>return</code> sin valor) devuelve <code>undefined</code>. Para devolver varios valores se puede retornar un objeto o array y desestructurarlo al llamar.</p>
<pre><code>function minMax(arr) {
  return { min: Math.min(...arr), max: Math.max(...arr) };
}
const { min, max } = minMax([3, 1, 9, 2]);
console.log(min, max);  // 1 9</code></pre>

<h2>Funciones como valores (orden superior)</h2>
<p>En JavaScript las funciones son <strong>ciudadanos de primera clase</strong>: se pueden asignar a variables, pasar como argumentos a otras funciones o devolverlas como resultado. Las <strong>funciones de orden superior</strong> son aquellas que reciben o devuelven otras funciones. Este concepto es la base de la programación funcional.</p>
<pre><code>function aplicar(fn, valor) {
  return fn(valor);
}
aplicar(x => x * 2, 5);  // 10

// Devolver una función (closure)
function crearMultiplicador(factor) {
  return (x) => x * factor;
}
const doble = crearMultiplicador(2);
doble(7);  // 14</code></pre>

<h2>Recursión</h2>
<p>Una función <strong>recursiva</strong> es aquella que se llama a sí misma. Todo algoritmo recursivo debe tener dos partes: el <strong>caso base</strong> (condición de parada que evita la recursión infinita) y el <strong>caso recursivo</strong> (donde la función se llama con un problema más pequeño). Sin caso base la función entraría en recursión infinita y provocaría un error de <em>stack overflow</em>.</p>
<pre><code>function factorial(n) {
  if (n <= 1) return 1;       // caso base
  return n * factorial(n - 1); // caso recursivo
}
factorial(5);  // 120

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}</code></pre>
`,

  python: `
<h2>Definición de funciones</h2>
<pre><code>def saludar(nombre):
    return f"Hola, {nombre}!"

# Lambda (función anónima de una expresión)
multiplicar = lambda a, b: a * b
cuadrado = lambda x: x ** 2</code></pre>

<h2>Parámetros: defecto, *args y **kwargs</h2>
<pre><code>def potencia(base, exp=2):
    return base ** exp

potencia(3)      # 9
potencia(2, 8)   # 256

def sumar_todo(*args):
    return sum(args)

sumar_todo(1, 2, 3, 4, 5)  # 15

def info(**kwargs):
    for k, v in kwargs.items():
        print(f"{k}: {v}")

info(nombre="Ana", edad=25)</code></pre>

<h2>Retorno múltiple</h2>
<pre><code>def min_max(lista):
    return min(lista), max(lista)  # devuelve tupla

mn, mx = min_max([3, 1, 9, 2])
print(mn, mx)  # 1 9</code></pre>

<h2>Funciones de orden superior</h2>
<pre><code>def aplicar(fn, valor):
    return fn(valor)

aplicar(lambda x: x * 2, 5)  # 10

def crear_multiplicador(factor):
    return lambda x: x * factor

doble = crear_multiplicador(2)
doble(7)  # 14</code></pre>

<h2>Recursión</h2>
<pre><code>def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n - 1)

factorial(5)  # 120

def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)</code></pre>
`,

  java: `
<h2>Métodos estáticos</h2>
<pre><code>public static int sumar(int a, int b) {
    return a + b;
}

// Llamada
int resultado = sumar(5, 3);  // 8</code></pre>

<h2>Sobrecarga (overloading)</h2>
<pre><code>public static int sumar(int a, int b) {
    return a + b;
}
public static double sumar(double a, double b) {
    return a + b;
}
// Java elige automáticamente según los tipos</code></pre>

<h2>Varargs y parámetros</h2>
<pre><code>public static int sumarTodo(int... nums) {
    int total = 0;
    for (int n : nums) total += n;
    return total;
}
sumarTodo(1, 2, 3, 4, 5);  // 15</code></pre>

<h2>Recursión</h2>
<pre><code>public static long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

public static int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}</code></pre>

<h2>Funciones como valores (Java 8+)</h2>
<pre><code>import java.util.function.*;

Function&lt;Integer, Integer&gt; doble = x -> x * 2;
doble.apply(5);  // 10

BiFunction&lt;Integer, Integer, Integer&gt; sumar = (a, b) -> a + b;
sumar.apply(3, 4);  // 7</code></pre>
`,

  cpp: `
<h2>Funciones básicas</h2>
<pre><code>int sumar(int a, int b) {
    return a + b;
}

// Declaración previa (prototipo) si se define después de main
int sumar(int a, int b);  // prototipo</code></pre>

<h2>Parámetros por defecto y por referencia</h2>
<pre><code>double potencia(double base, int exp = 2) {
    double r = 1;
    for (int i = 0; i < exp; i++) r *= base;
    return r;
}

void intercambiar(int& a, int& b) {
    int tmp = a; a = b; b = tmp;
}

int x = 5, y = 10;
intercambiar(x, y);  // x=10, y=5</code></pre>

<h2>Sobrecarga</h2>
<pre><code>int sumar(int a, int b) { return a + b; }
double sumar(double a, double b) { return a + b; }</code></pre>

<h2>Recursión</h2>
<pre><code>long long factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n-1) + fibonacci(n-2);
}</code></pre>

<h2>Lambda (C++11)</h2>
<pre><code>auto doble = [](int x) { return x * 2; };
doble(5);  // 10

// Con captura
int factor = 3;
auto multiplicar = [factor](int x) { return x * factor; };</code></pre>
`,

  csharp: `
<h2>Métodos</h2>
<pre><code>static int Sumar(int a, int b) => a + b;

// Con cuerpo completo
static double Potencia(double base, int exp = 2) {
    return Math.Pow(base, exp);
}</code></pre>

<h2>Parámetros opcionales y por referencia</h2>
<pre><code>static void Intercambiar(ref int a, ref int b) {
    int tmp = a; a = b; b = tmp;
}

int x = 5, y = 10;
Intercambiar(ref x, ref y);  // x=10, y=5

// out: retorno múltiple
static void MinMax(int[] arr, out int min, out int max) {
    min = arr.Min(); max = arr.Max();
}
MinMax(nums, out int mn, out int mx);</code></pre>

<h2>Recursión</h2>
<pre><code>static long Factorial(int n) {
    if (n <= 1) return 1;
    return n * Factorial(n - 1);
}

static int Fibonacci(int n) {
    if (n <= 1) return n;
    return Fibonacci(n-1) + Fibonacci(n-2);
}</code></pre>

<h2>Func y Action</h2>
<pre><code>Func&lt;int, int&gt; doble = x => x * 2;
doble(5);  // 10

Func&lt;int, int, int&gt; sumar = (a, b) => a + b;
Action&lt;string&gt; imprimir = s => Console.WriteLine(s);</code></pre>
`,
};

const exercises = [
  {
    id: 'fn-1',
    title: 'Calculadora funcional',
    description: 'Implementa las 4 operaciones básicas como funciones independientes.',
    instructions: 'Crea funciones sumar(a,b), restar(a,b), multiplicar(a,b) y dividir(a,b). La función dividir debe devolver un valor especial (null/None/-1) si el divisor es 0. Prueba cada función e imprime los resultados.',
    hints: ['Cada función recibe 2 parámetros y devuelve el resultado', 'dividir debe comprobar si b==0 antes de dividir'],
    expectedConcept: 'Student should define separate named functions with parameters and return statements. dividir must handle division by zero edge case.',
  },
  {
    id: 'fn-2',
    title: 'Es número primo',
    description: 'Escribe una función que determine si un número es primo.',
    instructions: 'Implementa una función esPrimo(n) que devuelva true/false. Un número es primo si solo es divisible entre 1 y él mismo. Úsala para imprimir los primos del 1 al 50.',
    hints: ['Comprueba divisores del 2 hasta √n', 'Si encuentras un divisor, no es primo (break/return false)', 'Los números 0 y 1 no son primos'],
    expectedConcept: 'Student must implement a function with a loop from 2 to sqrt(n), returning false on first divisor found. Must use the function in a loop to find primes up to 50.',
  },
  {
    id: 'fn-3',
    title: 'Factorial recursivo',
    description: 'Calcula el factorial de un número usando recursión.',
    instructions: 'Implementa una función factorial(n) de forma RECURSIVA (no uses bucles). El factorial de n es n × (n-1) × ... × 1. Muestra los factoriales del 1 al 10.',
    hints: ['Caso base: factorial(0) = 1 o factorial(1) = 1', 'Caso recursivo: factorial(n) = n * factorial(n-1)'],
    expectedConcept: 'Student MUST implement factorial using recursion (function calling itself). No loops allowed. Must have a base case and recursive case.',
  },
  {
    id: 'fn-4',
    title: 'Es palíndromo',
    description: 'Determina si una cadena de texto es un palíndromo.',
    instructions: 'Implementa una función esPalindromo(texto) que devuelva true si el texto se lee igual al derecho que al revés (ignora mayúsculas/minúsculas y espacios). Pruébala con varios ejemplos.',
    hints: ['Limpia el texto: pasa a minúsculas y quita espacios', 'Compara el texto con su versión invertida', 'Puedes invertir con slicing/reverse/StringBuilder'],
    expectedConcept: 'Student should implement a function that normalizes input (lowercase, remove spaces) and compares it with its reverse. Should use string manipulation.',
  },
  {
    id: 'fn-5',
    title: 'Validar fecha',
    description: 'Comprueba si una fecha (día, mes, año) es válida.',
    instructions: 'Implementa una función validarFecha(dia, mes, anio) que devuelva true si la fecha es válida. Considera: meses de 30/31 días, febrero (28/29 en bisiestos), y rangos válidos.',
    hints: ['Primero valida que mes esté entre 1-12 y dia >= 1', 'Luego determina los días máximos de ese mes', 'Para febrero: comprueba si anio es bisiesto'],
    expectedConcept: 'Student must implement a function that validates day ranges per month, handles February with leap year logic, and returns a boolean.',
  },
  {
    id: 'fn-6',
    title: 'Función de orden superior',
    description: 'Crea una función que aplique otra función varias veces.',
    instructions: 'Implementa una función aplicarNVeces(fn, valor, n) que aplique la función fn al valor n veces consecutivas. Por ejemplo: aplicarNVeces(x=>x*2, 1, 4) debe dar 16 (dobla 1 cuatro veces: 1→2→4→8→16).',
    hints: ['Usa un bucle que aplique fn(valor) y guarde el resultado en valor', 'Devuelve el valor final'],
    expectedConcept: 'Student must create a higher-order function that accepts another function as parameter and applies it n times using a loop, demonstrating functions as first-class values.',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'fn-1': `function sumar(a, b) { /* implementa */ }\nfunction restar(a, b) { /* implementa */ }\nfunction multiplicar(a, b) { /* implementa */ }\nfunction dividir(a, b) { /* devuelve null si b===0 */ }\n\nconsole.log(sumar(10, 3));       // 13\nconsole.log(multiplicar(4, 5));  // 20\nconsole.log(dividir(10, 0));     // null`,
    'fn-2': `function esPrimo(n) {\n  // implementa\n}\n\n// Imprime los primos del 1 al 50\nfor (let i = 1; i <= 50; i++) {\n  if (esPrimo(i)) console.log(i);\n}`,
    'fn-3': `function factorial(n) {\n  // implementa de forma RECURSIVA\n}\n\nfor (let i = 1; i <= 10; i++) {\n  console.log(\`\${i}! = \${factorial(i)}\`);\n}`,
    'fn-4': `function esPalindromo(texto) {\n  // normaliza (minúsculas, sin espacios) y comprueba\n}\n\nconsole.log(esPalindromo("Ana"));         // true\nconsole.log(esPalindromo("A man a plan")); // false\nconsole.log(esPalindromo("radar"));       // true`,
    'fn-5': `function validarFecha(dia, mes, anio) {\n  // implementa\n}\n\nconsole.log(validarFecha(29, 2, 2024));  // true (bisiesto)\nconsole.log(validarFecha(29, 2, 2023));  // false\nconsole.log(validarFecha(31, 4, 2024));  // false (abril tiene 30)`,
    'fn-6': `function aplicarNVeces(fn, valor, n) {\n  // implementa\n}\n\nconsole.log(aplicarNVeces(x => x * 2, 1, 4));  // 16\nconsole.log(aplicarNVeces(x => x + 3, 0, 5));  // 15`,
  },
  python: {
    'fn-1': `def sumar(a, b): pass\ndef restar(a, b): pass\ndef multiplicar(a, b): pass\ndef dividir(a, b): pass  # devuelve None si b==0\n\nprint(sumar(10, 3))\nprint(multiplicar(4, 5))\nprint(dividir(10, 0))`,
    'fn-2': `def es_primo(n):\n    pass  # implementa\n\n# Imprime los primos del 1 al 50\nfor i in range(1, 51):\n    if es_primo(i):\n        print(i)`,
    'fn-3': `def factorial(n):\n    pass  # implementa de forma RECURSIVA\n\nfor i in range(1, 11):\n    print(f"{i}! = {factorial(i)}")`,
    'fn-4': `def es_palindromo(texto):\n    pass  # normaliza y comprueba\n\nprint(es_palindromo("Ana"))    # True\nprint(es_palindromo("radar"))  # True\nprint(es_palindromo("hola"))   # False`,
    'fn-5': `def validar_fecha(dia, mes, anio):\n    pass  # implementa\n\nprint(validar_fecha(29, 2, 2024))  # True\nprint(validar_fecha(29, 2, 2023))  # False\nprint(validar_fecha(31, 4, 2024))  # False`,
    'fn-6': `def aplicar_n_veces(fn, valor, n):\n    pass  # implementa\n\nprint(aplicar_n_veces(lambda x: x*2, 1, 4))  # 16\nprint(aplicar_n_veces(lambda x: x+3, 0, 5))  # 15`,
  },
  java: {
    'fn-1': `public class Main {\n    static int sumar(int a, int b) { return 0; }\n    static int restar(int a, int b) { return 0; }\n    static int multiplicar(int a, int b) { return 0; }\n    static Integer dividir(int a, int b) { return null; } // null si b==0\n\n    public static void main(String[] args) {\n        System.out.println(sumar(10, 3));\n        System.out.println(multiplicar(4, 5));\n        System.out.println(dividir(10, 0));\n    }\n}`,
    'fn-2': `public class Main {\n    static boolean esPrimo(int n) {\n        // implementa\n        return false;\n    }\n\n    public static void main(String[] args) {\n        for (int i = 1; i <= 50; i++)\n            if (esPrimo(i)) System.out.println(i);\n    }\n}`,
    'fn-3': `public class Main {\n    static long factorial(int n) {\n        // RECURSIVO\n        return 0;\n    }\n\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++)\n            System.out.println(i + "! = " + factorial(i));\n    }\n}`,
    'fn-4': `public class Main {\n    static boolean esPalindromo(String texto) {\n        // normaliza y comprueba\n        return false;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(esPalindromo("Ana"));    // true\n        System.out.println(esPalindromo("radar"));  // true\n        System.out.println(esPalindromo("hola"));   // false\n    }\n}`,
    'fn-5': `public class Main {\n    static boolean validarFecha(int dia, int mes, int anio) {\n        return false; // implementa\n    }\n\n    public static void main(String[] args) {\n        System.out.println(validarFecha(29, 2, 2024)); // true\n        System.out.println(validarFecha(29, 2, 2023)); // false\n        System.out.println(validarFecha(31, 4, 2024)); // false\n    }\n}`,
    'fn-6': `import java.util.function.Function;\n\npublic class Main {\n    static int aplicarNVeces(Function<Integer,Integer> fn, int valor, int n) {\n        // implementa\n        return valor;\n    }\n\n    public static void main(String[] args) {\n        System.out.println(aplicarNVeces(x -> x*2, 1, 4)); // 16\n        System.out.println(aplicarNVeces(x -> x+3, 0, 5)); // 15\n    }\n}`,
  },
  cpp: {
    'fn-1': `#include <iostream>\nusing namespace std;\n\nint sumar(int a, int b) { return 0; }\nint restar(int a, int b) { return 0; }\nint multiplicar(int a, int b) { return 0; }\n// dividir: devuelve -1 si b==0\ndouble dividir(int a, int b) { return 0; }\n\nint main() {\n    cout << sumar(10,3) << endl;\n    cout << multiplicar(4,5) << endl;\n    cout << dividir(10,0) << endl;\n    return 0;\n}`,
    'fn-2': `#include <iostream>\n#include <cmath>\nusing namespace std;\n\nbool esPrimo(int n) {\n    // implementa\n    return false;\n}\n\nint main() {\n    for (int i = 1; i <= 50; i++)\n        if (esPrimo(i)) cout << i << endl;\n    return 0;\n}`,
    'fn-3': `#include <iostream>\nusing namespace std;\n\nlong long factorial(int n) {\n    // RECURSIVO\n    return 0;\n}\n\nint main() {\n    for (int i = 1; i <= 10; i++)\n        cout << i << "! = " << factorial(i) << endl;\n    return 0;\n}`,
    'fn-4': `#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nbool esPalindromo(string texto) {\n    // normaliza y comprueba\n    return false;\n}\n\nint main() {\n    cout << esPalindromo("Ana") << endl;    // 1\n    cout << esPalindromo("radar") << endl;  // 1\n    cout << esPalindromo("hola") << endl;   // 0\n    return 0;\n}`,
    'fn-5': `#include <iostream>\nusing namespace std;\n\nbool validarFecha(int dia, int mes, int anio) {\n    return false; // implementa\n}\n\nint main() {\n    cout << validarFecha(29,2,2024) << endl; // 1\n    cout << validarFecha(29,2,2023) << endl; // 0\n    cout << validarFecha(31,4,2024) << endl; // 0\n    return 0;\n}`,
    'fn-6': `#include <iostream>\n#include <functional>\nusing namespace std;\n\nint aplicarNVeces(function<int(int)> fn, int valor, int n) {\n    // implementa\n    return valor;\n}\n\nint main() {\n    cout << aplicarNVeces([](int x){ return x*2; }, 1, 4) << endl; // 16\n    cout << aplicarNVeces([](int x){ return x+3; }, 0, 5) << endl; // 15\n    return 0;\n}`,
  },
  csharp: {
    'fn-1': `using System;\n\nclass Program {\n    static int Sumar(int a, int b) => 0;\n    static int Restar(int a, int b) => 0;\n    static int Multiplicar(int a, int b) => 0;\n    static int? Dividir(int a, int b) => null; // null si b==0\n\n    static void Main() {\n        Console.WriteLine(Sumar(10,3));\n        Console.WriteLine(Multiplicar(4,5));\n        Console.WriteLine(Dividir(10,0));\n    }\n}`,
    'fn-2': `using System;\n\nclass Program {\n    static bool EsPrimo(int n) {\n        return false; // implementa\n    }\n\n    static void Main() {\n        for (int i = 1; i <= 50; i++)\n            if (EsPrimo(i)) Console.WriteLine(i);\n    }\n}`,
    'fn-3': `using System;\n\nclass Program {\n    static long Factorial(int n) {\n        return 0; // RECURSIVO\n    }\n\n    static void Main() {\n        for (int i = 1; i <= 10; i++)\n            Console.WriteLine($"{i}! = {Factorial(i)}");\n    }\n}`,
    'fn-4': `using System;\n\nclass Program {\n    static bool EsPalindromo(string texto) {\n        return false; // normaliza y comprueba\n    }\n\n    static void Main() {\n        Console.WriteLine(EsPalindromo("Ana"));    // True\n        Console.WriteLine(EsPalindromo("radar"));  // True\n        Console.WriteLine(EsPalindromo("hola"));   // False\n    }\n}`,
    'fn-5': `using System;\n\nclass Program {\n    static bool ValidarFecha(int dia, int mes, int anio) {\n        return false; // implementa\n    }\n\n    static void Main() {\n        Console.WriteLine(ValidarFecha(29,2,2024)); // True\n        Console.WriteLine(ValidarFecha(29,2,2023)); // False\n        Console.WriteLine(ValidarFecha(31,4,2024)); // False\n    }\n}`,
    'fn-6': `using System;\n\nclass Program {\n    static int AplicarNVeces(Func<int,int> fn, int valor, int n) {\n        return valor; // implementa\n    }\n\n    static void Main() {\n        Console.WriteLine(AplicarNVeces(x => x*2, 1, 4)); // 16\n        Console.WriteLine(AplicarNVeces(x => x+3, 0, 5)); // 15\n    }\n}`,
  },
};

function buildLesson(lang: string, theoryContent: string, title: string, desc: string) {
  return {
    id: `functions-${lang}`,
    title,
    description: desc,
    theory: theoryContent,
    topics: ['funciones', 'recursión', 'HOF', 'parámetros'],
    exercises: exercises.map(ex => ({
      ...ex,
      id: `${ex.id}-${lang}`,
      starterCode: starterCodes[lang][ex.id] ?? '',
    })),
  };
}

export const functionsTopic: Topic = {
  id: 'functions',
  title: 'Funciones',
  icon: 'code-2',
  description: 'Declaración, parámetros, retorno, recursión y funciones de orden superior.',
  lessons: {
    javascript: buildLesson('javascript', theory.javascript, 'Funciones en JavaScript', 'Funciones, arrow functions, closures y recursión.') as any,
    python: buildLesson('python', theory.python, 'Funciones en Python', 'def, lambda, *args, **kwargs y recursión.') as any,
    java: buildLesson('java', theory.java, 'Métodos en Java', 'Métodos estáticos, sobrecarga, varargs y recursión.') as any,
    cpp: buildLesson('cpp', theory.cpp, 'Funciones en C++', 'Funciones, referencias, sobrecarga, lambda y recursión.') as any,
    csharp: buildLesson('csharp', theory.csharp, 'Métodos en C#', 'Métodos, parámetros ref/out, Func, Action y recursión.') as any,
  },
};

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

// ── Exercises from UD7 Funciones (ApuntesProgramacion) ──
const exercises = [
  {
    id: 'fn-1',
    title: 'multiplica(a, b)',
    description: 'Escribe un programa que pida dos números y muestre su producto. Implementa y usa la función multiplica.',
    instructions: 'Implementa la función:\n  multiplica(a, b) → devuelve la multiplicación de dos números\nLuego úsala para pedir dos números reales por teclado (o usa valores fijos) y mostrar su producto.',
    hints: ['La función solo calcula, no imprime (a no ser que se indique lo contrario)', 'return a * b;'],
    expectedConcept: 'Student must define a named function with two parameters that returns the product. Must call the function from the main program and print the result.',
  },
  {
    id: 'fn-2',
    title: 'esMayorEdad(edad)',
    description: 'Implementa una función que determine si una persona es mayor de edad.',
    instructions: 'Implementa la función:\n  esMayorEdad(edad) → devuelve true si edad >= 18, false en caso contrario\nPide la edad por teclado (o usa un valor fijo) y muestra si es mayor de edad o no.',
    hints: ['Usa un condicional dentro de la función', 'La función devuelve un booleano'],
    expectedConcept: 'Student must define a function with a parameter that returns a boolean based on a comparison. Must use the return value to print a message.',
  },
  {
    id: 'fn-3',
    title: 'minimo(a, b)',
    description: 'Implementa una función que devuelva el menor de dos números.',
    instructions: 'Implementa la función:\n  minimo(a, b) → devuelve el menor entre a y b\nPide dos números por teclado (o usa valores fijos) y muestra el mínimo.',
    hints: ['if (a < b) return a; else return b;', 'No uses funciones min() del lenguaje'],
    expectedConcept: 'Student must implement a manual minimum function with an if/else, without using built-in min functions.',
  },
  {
    id: 'fn-4',
    title: 'precioConIVA(precio)',
    description: 'Calcula el precio de venta de varios artículos aplicando un 21% de IVA.',
    instructions: 'Implementa la función:\n  precioConIVA(precio) → devuelve el precio tras sumarle un 21% de IVA\nÚsala para pedir 5 precios (o usa valores fijos) y mostrar el precio con IVA de cada uno.',
    hints: ['return precio * 1.21;', 'Recuerda que IVA del 21% significa multiplicar por 1.21'],
    expectedConcept: 'Student must implement a function that applies a fixed 21% tax rate and call it for multiple prices.',
  },
  {
    id: 'fn-5',
    title: 'Area y perímetro del rectángulo',
    description: 'Implementa funciones para calcular el área y el perímetro de un rectángulo.',
    instructions: 'Implementa las dos funciones:\n  perimetroRectangulo(ancho, alto) → devuelve 2*(ancho+alto)\n  areaRectangulo(ancho, alto) → devuelve ancho*alto\nPide el ancho y alto (o usa valores fijos) y muestra el área y perímetro.',
    hints: ['Dos funciones separadas, cada una con dos parámetros', 'Cada función solo realiza un cálculo y devuelve el resultado'],
    expectedConcept: 'Student must implement two separate functions, each computing a different geometric property of a rectangle.',
  },
  {
    id: 'fn-6',
    title: 'Tabla de multiplicar con función',
    description: 'Escribe un programa que muestre la tabla de multiplicar de un número usando una función.',
    instructions: 'Implementa una función tablaMultiplicar(n) que reciba un número entero y muestre por pantalla su tabla de multiplicar del 1 al 10. Llámala desde el programa principal con varios valores.',
    hints: ['La función imprime (no devuelve) — en este caso la función sí muestra por pantalla', 'Usa un bucle for del 1 al 10 dentro de la función'],
    expectedConcept: 'Student must implement a function with a loop inside that prints the multiplication table. Must call the function at least once from main.',
  },
  {
    id: 'fn-7',
    title: 'Validar fecha (todos los meses 30 días)',
    description: 'Comprueba si una fecha es correcta suponiendo que todos los meses tienen 30 días.',
    instructions: 'Implementa la función validarFecha(dia, mes, anio) que devuelva true si la fecha es válida:\n  - dia entre 1 y 30\n  - mes entre 1 y 12\n  - anio > 0\nSuponemos que todos los meses tienen 30 días (simplificación del repo).',
    hints: ['Tres condiciones con &&', 'if (dia < 1 || dia > 30) return false'],
    expectedConcept: 'Student must implement a function that validates three conditions (day 1-30, month 1-12, year > 0) and returns a boolean.',
  },
  {
    id: 'fn-8',
    title: 'Es número primo',
    description: 'Implementa una función que determine si un número es primo. Úsala para pedir números hasta introducir 0.',
    instructions: 'Implementa la función esPrimo(n) que devuelva true si n es primo (solo divisible por 1 y sí mismo). Recuerda: el 1 NO es primo por convenio. Pide números enteros y di si cada uno es primo o no, hasta que el usuario introduzca 0.',
    hints: ['Un número es primo si no tiene divisores entre 2 y √n', 'if (n <= 1) return false', 'Comprueba divisores del 2 hasta Math.sqrt(n)'],
    expectedConcept: 'Student must implement a prime-checking function with a loop from 2 to sqrt(n), returning false on first divisor. Must use it in a while loop until 0 is entered (or simulate with fixed values).',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'fn-1': `function multiplica(a, b) {\n  // devuelve a * b\n}\n\nlet a = 4.5, b = 3.2;\nconsole.log(a + " x " + b + " = " + multiplica(a, b));`,
    'fn-2': `function esMayorEdad(edad) {\n  // devuelve true si edad >= 18\n}\n\nlet edad = 20;\nconsole.log("Edad " + edad + ": " + (esMayorEdad(edad) ? "mayor de edad" : "menor de edad"));`,
    'fn-3': `function minimo(a, b) {\n  // devuelve el menor de a y b (sin usar Math.min)\n}\n\nconsole.log("min(5, 3) =", minimo(5, 3));   // 3\nconsole.log("min(8, 12) =", minimo(8, 12));  // 8`,
    'fn-4': `function precioConIVA(precio) {\n  // devuelve precio + 21% IVA\n}\n\nlet precios = [10, 25.5, 7.99, 150, 3.5];\nfor (let p of precios) {\n  console.log(p + "€ → " + precioConIVA(p).toFixed(2) + "€ (con IVA)");\n}`,
    'fn-5': `function perimetroRectangulo(ancho, alto) {\n  // devuelve 2*(ancho+alto)\n}\n\nfunction areaRectangulo(ancho, alto) {\n  // devuelve ancho*alto\n}\n\nlet ancho = 5, alto = 3;\nconsole.log("Perímetro:", perimetroRectangulo(ancho, alto));\nconsole.log("Área:", areaRectangulo(ancho, alto));`,
    'fn-6': `function tablaMultiplicar(n) {\n  // imprime la tabla de multiplicar de n (del 1 al 10)\n  for (let i = 1; i <= 10; i++) {\n    // imprime: n + " x " + i + " = " + (n*i)\n  }\n}\n\ntablaMultiplicar(7);\ntablaMultiplicar(3);`,
    'fn-7': `function validarFecha(dia, mes, anio) {\n  // dia: 1-30, mes: 1-12, anio > 0\n  // todos los meses tienen 30 días (simplificación)\n  return false; // implementa\n}\n\nconsole.log(validarFecha(15, 6, 2024));  // true\nconsole.log(validarFecha(0, 6, 2024));   // false (dia=0)\nconsole.log(validarFecha(15, 13, 2024)); // false (mes=13)\nconsole.log(validarFecha(31, 6, 2024));  // false (dia>30)`,
    'fn-8': `function esPrimo(n) {\n  // n es primo si solo divisible por 1 y n\n  // el 1 NO es primo por convenio\n  return false; // implementa\n}\n\nlet numeros = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 17, 0];\nfor (let n of numeros) {\n  if (n === 0) break;\n  console.log(n + ": " + (esPrimo(n) ? "primo" : "no primo"));\n}`,
  },
  python: {
    'fn-1': `def multiplica(a, b):\n    pass  # devuelve a * b\n\na, b = 4.5, 3.2\nprint(f"{a} x {b} = {multiplica(a, b)}")`,
    'fn-2': `def es_mayor_edad(edad):\n    pass  # devuelve True si edad >= 18\n\nedad = 20\nprint(f"Edad {edad}:", "mayor de edad" if es_mayor_edad(edad) else "menor de edad")`,
    'fn-3': `def minimo(a, b):\n    pass  # devuelve el menor de a y b (sin min())\n\nprint("min(5,3) =", minimo(5, 3))\nprint("min(8,12) =", minimo(8, 12))`,
    'fn-4': `def precio_con_iva(precio):\n    pass  # devuelve precio * 1.21\n\nprecios = [10, 25.5, 7.99, 150, 3.5]\nfor p in precios:\n    print(f"{p}€ -> {precio_con_iva(p):.2f}€ (con IVA)")`,
    'fn-5': `def perimetro_rectangulo(ancho, alto):\n    pass  # 2*(ancho+alto)\n\ndef area_rectangulo(ancho, alto):\n    pass  # ancho*alto\n\nancho, alto = 5, 3\nprint("Perímetro:", perimetro_rectangulo(ancho, alto))\nprint("Área:", area_rectangulo(ancho, alto))`,
    'fn-6': `def tabla_multiplicar(n):\n    for i in range(1, 11):\n        pass  # imprime n x i = n*i\n\ntabla_multiplicar(7)\ntabla_multiplicar(3)`,
    'fn-7': `def validar_fecha(dia, mes, anio):\n    # dia: 1-30, mes: 1-12, anio > 0\n    return False  # implementa\n\nprint(validar_fecha(15, 6, 2024))   # True\nprint(validar_fecha(0, 6, 2024))    # False\nprint(validar_fecha(15, 13, 2024))  # False`,
    'fn-8': `def es_primo(n):\n    # 1 NO es primo por convenio\n    return False  # implementa\n\nnumeros = [1, 2, 3, 4, 5, 7, 9, 11, 13, 15, 17, 0]\nfor n in numeros:\n    if n == 0: break\n    print(f"{n}:", "primo" if es_primo(n) else "no primo")`,
  },
  java: {
    'fn-1': `public class Main {\n    static double multiplica(double a, double b) {\n        return 0; // implementa\n    }\n    public static void main(String[] args) {\n        double a = 4.5, b = 3.2;\n        System.out.printf("%.1f x %.1f = %.2f%n", a, b, multiplica(a, b));\n    }\n}`,
    'fn-2': `public class Main {\n    static boolean esMayorEdad(int edad) {\n        return false; // implementa\n    }\n    public static void main(String[] args) {\n        int edad = 20;\n        System.out.println("Edad " + edad + ": " + (esMayorEdad(edad) ? "mayor" : "menor") + " de edad");\n    }\n}`,
    'fn-3': `public class Main {\n    static int minimo(int a, int b) {\n        return 0; // sin Math.min\n    }\n    public static void main(String[] args) {\n        System.out.println("min(5,3) = " + minimo(5,3));\n        System.out.println("min(8,12) = " + minimo(8,12));\n    }\n}`,
    'fn-4': `public class Main {\n    static double precioConIVA(double precio) {\n        return 0; // precio * 1.21\n    }\n    public static void main(String[] args) {\n        double[] precios = {10, 25.5, 7.99, 150, 3.5};\n        for (double p : precios)\n            System.out.printf("%.2f -> %.2f (IVA)%n", p, precioConIVA(p));\n    }\n}`,
    'fn-5': `public class Main {\n    static double perimetro(double a, double b) { return 0; }\n    static double area(double a, double b) { return 0; }\n    public static void main(String[] args) {\n        System.out.println("Perimetro: " + perimetro(5,3));\n        System.out.println("Area: " + area(5,3));\n    }\n}`,
    'fn-6': `public class Main {\n    static void tablaMultiplicar(int n) {\n        for (int i = 1; i <= 10; i++) {\n            // imprime la tabla\n        }\n    }\n    public static void main(String[] args) {\n        tablaMultiplicar(7);\n        tablaMultiplicar(3);\n    }\n}`,
    'fn-7': `public class Main {\n    static boolean validarFecha(int dia, int mes, int anio) {\n        return false; // implementa\n    }\n    public static void main(String[] args) {\n        System.out.println(validarFecha(15,6,2024));   // true\n        System.out.println(validarFecha(0,6,2024));    // false\n        System.out.println(validarFecha(15,13,2024));  // false\n    }\n}`,
    'fn-8': `public class Main {\n    static boolean esPrimo(int n) {\n        return false; // implementa (1 no es primo)\n    }\n    public static void main(String[] args) {\n        int[] nums = {1,2,3,4,5,7,9,11,13,15,17};\n        for (int n : nums)\n            System.out.println(n + ": " + (esPrimo(n) ? "primo" : "no primo"));\n    }\n}`,
  },
  cpp: {
    'fn-1': `#include <iostream>\nusing namespace std;\ndouble multiplica(double a, double b) { return 0; }\nint main() {\n    printf("%.1f x %.1f = %.2f\\n", 4.5, 3.2, multiplica(4.5, 3.2));\n    return 0;\n}`,
    'fn-2': `#include <iostream>\nusing namespace std;\nbool esMayorEdad(int edad) { return false; }\nint main() {\n    int edad = 20;\n    cout << edad << ": " << (esMayorEdad(edad) ? "mayor" : "menor") << " de edad" << endl;\n    return 0;\n}`,
    'fn-3': `#include <iostream>\nusing namespace std;\nint minimo(int a, int b) { return 0; /* sin std::min */ }\nint main() {\n    cout << "min(5,3)=" << minimo(5,3) << endl;\n    cout << "min(8,12)=" << minimo(8,12) << endl;\n    return 0;\n}`,
    'fn-4': `#include <iostream>\nusing namespace std;\ndouble precioConIVA(double p) { return 0; }\nint main() {\n    double precios[] = {10, 25.5, 7.99, 150, 3.5};\n    for (double p : precios)\n        printf("%.2f -> %.2f\\n", p, precioConIVA(p));\n    return 0;\n}`,
    'fn-5': `#include <iostream>\nusing namespace std;\ndouble perimetro(double a, double b) { return 0; }\ndouble area(double a, double b) { return 0; }\nint main() {\n    cout << "Perimetro: " << perimetro(5,3) << endl;\n    cout << "Area: " << area(5,3) << endl;\n    return 0;\n}`,
    'fn-6': `#include <iostream>\nusing namespace std;\nvoid tablaMultiplicar(int n) {\n    for (int i=1;i<=10;i++) cout << n << "x" << i << "=" << n*i << endl;\n}\nint main() {\n    tablaMultiplicar(7);\n    tablaMultiplicar(3);\n    return 0;\n}`,
    'fn-7': `#include <iostream>\nusing namespace std;\nbool validarFecha(int d, int m, int a) { return false; }\nint main() {\n    cout << validarFecha(15,6,2024) << endl;   // 1\n    cout << validarFecha(0,6,2024) << endl;    // 0\n    cout << validarFecha(15,13,2024) << endl;  // 0\n    return 0;\n}`,
    'fn-8': `#include <iostream>\n#include <cmath>\nusing namespace std;\nbool esPrimo(int n) { return false; /* 1 no es primo */ }\nint main() {\n    int nums[] = {1,2,3,4,5,7,9,11,13,15,17};\n    for (int n : nums)\n        cout << n << ": " << (esPrimo(n) ? "primo" : "no primo") << endl;\n    return 0;\n}`,
  },
  csharp: {
    'fn-1': `using System;\nclass Program {\n    static double Multiplica(double a, double b) => 0;\n    static void Main() {\n        Console.WriteLine($"4.5 x 3.2 = {Multiplica(4.5, 3.2):F2}");\n    }\n}`,
    'fn-2': `using System;\nclass Program {\n    static bool EsMayorEdad(int edad) => false;\n    static void Main() {\n        int edad = 20;\n        Console.WriteLine($"Edad {edad}: {(EsMayorEdad(edad) ? "mayor" : "menor")} de edad");\n    }\n}`,
    'fn-3': `using System;\nclass Program {\n    static int Minimo(int a, int b) => 0; // sin Math.Min\n    static void Main() {\n        Console.WriteLine($"min(5,3)={Minimo(5,3)}");\n        Console.WriteLine($"min(8,12)={Minimo(8,12)}");\n    }\n}`,
    'fn-4': `using System;\nclass Program {\n    static double PrecioConIVA(double precio) => 0;\n    static void Main() {\n        double[] precios = {10, 25.5, 7.99, 150, 3.5};\n        foreach (double p in precios)\n            Console.WriteLine($"{p:F2}€ -> {PrecioConIVA(p):F2}€");\n    }\n}`,
    'fn-5': `using System;\nclass Program {\n    static double Perimetro(double a, double b) => 0;\n    static double Area(double a, double b) => 0;\n    static void Main() {\n        Console.WriteLine($"Perímetro: {Perimetro(5,3)}");\n        Console.WriteLine($"Área: {Area(5,3)}");\n    }\n}`,
    'fn-6': `using System;\nclass Program {\n    static void TablaMultiplicar(int n) {\n        for (int i=1;i<=10;i++) Console.WriteLine($"{n} x {i} = {n*i}");\n    }\n    static void Main() {\n        TablaMultiplicar(7);\n        TablaMultiplicar(3);\n    }\n}`,
    'fn-7': `using System;\nclass Program {\n    static bool ValidarFecha(int d, int m, int a) => false;\n    static void Main() {\n        Console.WriteLine(ValidarFecha(15,6,2024));   // True\n        Console.WriteLine(ValidarFecha(0,6,2024));    // False\n        Console.WriteLine(ValidarFecha(15,13,2024));  // False\n    }\n}`,
    'fn-8': `using System;\nclass Program {\n    static bool EsPrimo(int n) => false; // 1 no es primo\n    static void Main() {\n        int[] nums = {1,2,3,4,5,7,9,11,13,15,17};\n        foreach (int n in nums)\n            Console.WriteLine($"{n}: {(EsPrimo(n) ? "primo" : "no primo")}");\n    }\n}`,
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

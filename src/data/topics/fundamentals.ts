import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>Variables y tipos de datos</h2>
<p>Una <strong>variable</strong> es un espacio reservado en la memoria del ordenador donde se almacena un dato que puede cambiar durante la ejecución del programa. Cada variable tiene un nombre (identificador), un tipo y un valor. Una <strong>constante</strong> es igual, pero su valor permanece invariable durante toda la ejecución.</p>
<p>En JavaScript usamos <code>let</code> (reasignable), <code>const</code> (constante) y <code>var</code> (evitar en código moderno). Los tipos básicos son: <strong>string</strong> (texto), <strong>number</strong> (número), <strong>boolean</strong> (verdadero/falso), <strong>null</strong> (ausencia intencional de valor) y <strong>undefined</strong> (variable declarada pero no asignada).</p>
<pre><code>let nombre = "Ana";       // string
const PI = 3.14159;       // number (constante)
let edad = 25;            // number
let activo = true;        // boolean
let nada = null;          // null (ausencia intencional)
let sinValor;             // undefined (sin asignar)</code></pre>

<h2>Operadores aritméticos</h2>
<p>Los <strong>operadores</strong> son símbolos que realizan operaciones sobre uno o más valores (operandos). Los operadores aritméticos producen resultados numéricos. El operador <strong>módulo</strong> (<code>%</code>) es especialmente útil: devuelve el resto de la división entera (por ejemplo, para saber si un número es par o impar).</p>
<pre><code>let a = 10, b = 3;
a + b   // 13   (suma)
a - b   // 7    (resta)
a * b   // 30   (multiplicación)
a / b   // 3.333... (división real)
a % b   // 1    (módulo / resto)
a ** b  // 1000 (potencia)
Math.floor(a / b) // 3  (división entera)</code></pre>

<h2>Prioridad de operadores</h2>
<p>Cuando una expresión contiene varios operadores, el orden de evaluación sigue reglas de <strong>prioridad</strong> (precedencia). Los <strong>paréntesis</strong> tienen la mayor prioridad y permiten forzar cualquier orden. La multiplicación y división se evalúan antes que la suma y la resta. Ante operadores de igual prioridad, se evalúa de izquierda a derecha.</p>
<pre><code>2 + 3 * 4    // 14  (*, / antes que +, -)
(2 + 3) * 4  // 20  (paréntesis primero)
10 % 3 + 1   // 2   (% igual prioridad que *)</code></pre>

<h2>Operadores de comparación y lógicos</h2>
<p>Los <strong>operadores relacionales</strong> comparan dos valores y devuelven un <strong>booleano</strong> (verdadero o falso). Los <strong>operadores lógicos</strong> (AND, OR, NOT) permiten combinar o invertir condiciones booleanas para construir expresiones más complejas.</p>
<pre><code>// Comparación (devuelven boolean)
5 === 5   // true  (igual valor Y tipo — usar siempre)
5 == "5"  // true  (igual valor, distinto tipo — evitar)
5 !== 3   // true  (distinto)
5 > 3     // true

// Lógicos
true && false  // false (AND)
true || false  // true  (OR)
!true          // false (NOT)

// Cortocircuito
null ?? "default"  // "default" (nullish coalescing)
valor && valor.prop // no falla si valor es null/undefined</code></pre>

<h2>Conversión de tipos</h2>
<p>Cada lenguaje permite convertir datos de un tipo a otro. La conversión <strong>implícita</strong> (coerción) la realiza el lenguaje automáticamente. La conversión <strong>explícita</strong> (cast) la fuerza el programador. Siempre que sea posible, usa conversión explícita para evitar comportamientos inesperados.</p>
<pre><code>Number("42")      // 42
Number("hola")    // NaN
String(42)        // "42"
Boolean(0)        // false
Boolean("")       // false
Boolean("hola")   // true
parseInt("3.7")   // 3
parseFloat("3.7") // 3.7</code></pre>

<h2>Salida por consola</h2>
<p>Para que un programa comunique sus resultados al usuario, necesita instrucciones de <strong>salida</strong>. En JavaScript, <code>console.log()</code> imprime en la consola del navegador o de Node.js. Los <strong>template literals</strong> (cadenas con backtick <code>`</code>) permiten incrustar expresiones directamente en el texto.</p>
<pre><code>console.log("Hola");
console.log(\`Nombre: \${nombre}, Edad: \${edad}\`);  // template literal
console.log(typeof nombre);  // "string"</code></pre>
`,

  python: `
<h2>Variables y tipos de datos</h2>
<p>Una <strong>variable</strong> es un espacio en memoria donde se almacena un dato. En Python el tipado es <strong>dinámico</strong>: el tipo se determina automáticamente según el valor asignado y puede cambiar en tiempo de ejecución. Los tipos básicos son <code>str</code>, <code>int</code>, <code>float</code>, <code>bool</code> y <code>None</code>.</p>
<pre><code>nombre = "Ana"        # str
pi = 3.14159          # float
edad = 25             # int
activo = True         # bool (mayúscula)
nada = None           # None (equivale a null)</code></pre>

<h2>Operadores aritméticos</h2>
<p>Python distingue entre <strong>división real</strong> (<code>/</code>, siempre devuelve float) y <strong>división entera</strong> (<code>//</code>, trunca los decimales). El operador <code>**</code> calcula potencias. El módulo (<code>%</code>) devuelve el resto de la división entera, muy útil para comprobar divisibilidad.</p>
<pre><code>a, b = 10, 3
a + b    # 13
a - b    # 7
a * b    # 30
a / b    # 3.333... (división real, siempre float)
a // b   # 3   (división entera)
a % b    # 1   (módulo)
a ** b   # 1000 (potencia)</code></pre>

<h2>Prioridad de operadores</h2>
<p>Python sigue las mismas reglas matemáticas de precedencia. Atención: en Python <code>-2 ** 2</code> da <code>-4</code> porque la potencia <code>**</code> tiene mayor prioridad que el menos unario. Usa paréntesis para evitar ambigüedades.</p>
<pre><code>2 + 3 * 4    # 14
(2 + 3) * 4  # 20
-2 ** 2      # -4  (** tiene más prioridad que unario -)
(-2) ** 2    # 4</code></pre>

<h2>Operadores de comparación y lógicos</h2>
<p>En Python los operadores lógicos se escriben como palabras (<code>and</code>, <code>or</code>, <code>not</code>) en vez de símbolos. Una característica única de Python es el <strong>encadenamiento de comparaciones</strong>: <code>1 &lt; x &lt; 10</code> comprueba simultáneamente las dos condiciones.</p>
<pre><code># Comparación
5 == 5    # True
5 != 3    # True
5 > 3     # True
1 < x < 10  # encadenamiento (Python único)

# Lógicos (palabras, no símbolos)
True and False   # False
True or False    # True
not True         # False</code></pre>

<h2>Conversión de tipos</h2>
<p>Python proporciona funciones integradas para convertir entre tipos: <code>int()</code>, <code>float()</code>, <code>str()</code>, <code>bool()</code>. La conversión de <code>float</code> a <code>int</code> <strong>trunca</strong> los decimales (no redondea). La función <code>input()</code> siempre devuelve <code>str</code>, por lo que hay que convertirla si se espera un número.</p>
<pre><code>int("42")       # 42
int(3.9)        # 3  (trunca, no redondea)
float("3.14")   # 3.14
str(42)         # "42"
bool(0)         # False
bool("")        # False
bool("hola")    # True</code></pre>

<h2>Entrada y salida</h2>
<p><code>print()</code> muestra datos por pantalla. Los <strong>f-strings</strong> (desde Python 3.6) son la forma más cómoda de formatear texto: se antepone <code>f</code> a la cadena y las expresiones se escriben entre llaves. <code>input()</code> lee texto del teclado y siempre devuelve un <code>str</code>.</p>
<pre><code>print("Hola")
print(f"Nombre: {nombre}, Edad: {edad}")   # f-string
nombre = input("¿Cómo te llamas? ")        # siempre devuelve str
edad = int(input("¿Cuántos años tienes? ")) # convertir a int
print(type(nombre))  # &lt;class 'str'&gt;</code></pre>
`,

  java: `
<h2>Variables y tipos de datos</h2>
<p>Java es un lenguaje de <strong>tipado estático y fuerte</strong>: el tipo de cada variable debe declararse explícitamente y no puede cambiar. Los <strong>tipos primitivos</strong> (<code>int</code>, <code>double</code>, <code>boolean</code>...) se almacenan directamente en la pila y NO son objetos. Los tipos referencia (como <code>String</code>) son objetos que viven en el heap.</p>
<pre><code>// Primitivos
int    edad    = 25;
double salario = 1500.50;
char   inicial = 'A';
boolean activo = true;
long   poblacion = 8000000000L;
float  pi = 3.14f;

// Objeto
String nombre = "Ana";  // String es una clase</code></pre>

<h2>Operadores aritméticos</h2>
<p>En Java la división entre dos <code>int</code> produce un resultado <code>int</code> (división entera, se descarta el decimal). Para obtener un resultado decimal hay que hacer un <strong>cast</strong> a <code>double</code>: <code>(double) a / b</code>. Ten cuidado con el <strong>desbordamiento</strong> (overflow): si el resultado supera el rango del tipo, se produce un error silencioso.</p>
<pre><code>int a = 10, b = 3;
a + b   // 13
a - b   // 7
a * b   // 30
a / b   // 3   (división ENTERA entre int)
a % b   // 1
(double) a / b  // 3.333... (cast a double)</code></pre>

<h2>Prioridad y cast</h2>
<p>Java permite dos tipos de conversión: <strong>widening</strong> (implícita, de tipo menor a mayor, ej. <code>int</code> → <code>double</code>) y <strong>narrowing</strong> (explícita, requiere cast, puede perder información). El cast se escribe poniendo el tipo destino entre paréntesis antes del valor.</p>
<pre><code>// División entera vs real
int x = 7, y = 2;
System.out.println(x / y);          // 3
System.out.println((double) x / y); // 3.5

// Desbordamiento
int max = Integer.MAX_VALUE;  // 2147483647
System.out.println(max + 1);  // -2147483648 (overflow!)</code></pre>

<h2>Operadores de comparación y lógicos</h2>
<pre><code>// Comparación (primitivos)
5 == 5   // true
5 != 3   // true

// Strings: usar .equals(), NO ==
"hola".equals("hola")          // true
"hola".equalsIgnoreCase("HOLA") // true

// Lógicos
true && false  // false
true || false  // true
!true          // false</code></pre>

<h2>Conversión de tipos</h2>
<p>Para convertir entre <code>String</code> y número usamos métodos estáticos de las clases envoltorio (<code>Integer</code>, <code>Double</code>...). Para la salida formateada, <code>System.out.printf()</code> usa especificadores como <code>%d</code> (entero), <code>%f</code> (decimal), <code>%s</code> (texto) y <code>%n</code> (salto de línea).</p>
<pre><code>// Implícita (widening): int → long → double
int i = 42;
double d = i;  // OK, automático

// Explícita (narrowing cast)
double pi = 3.14;
int n = (int) pi;  // 3 (pierde decimales)

// String ↔ número
int num = Integer.parseInt("42");
double dec = Double.parseDouble("3.14");
String s = String.valueOf(42);  // "42"
String s2 = Integer.toString(42); // equivalente</code></pre>

<h2>Salida</h2>
<pre><code>System.out.println("Hola");
System.out.println("Edad: " + edad);
System.out.printf("Nombre: %s, Edad: %d%n", nombre, edad);
System.out.printf("Precio: %.2f%n", 3.14159);</code></pre>
`,

  cpp: `
<h2>Variables y tipos de datos</h2>
<p>C++ es de <strong>tipado estático</strong>: el tipo se declara en tiempo de compilación. Los tipos tienen tamaños fijos dependientes de la plataforma (<code>int</code>: 4 bytes, <code>double</code>: 8 bytes). Desde C++11 se puede usar <code>auto</code> para que el compilador infiera el tipo, pero el tipo sigue siendo fijo en tiempo de compilación.</p>
<pre><code>#include &lt;iostream&gt;
#include &lt;string&gt;
using namespace std;

int    edad    = 25;       // 4 bytes
double salario = 1500.50;  // 8 bytes, doble precisión
float  pi      = 3.14f;    // 4 bytes, simple precisión
char   inicial = 'A';      // 1 byte
bool   activo  = true;
string nombre  = "Ana";    // clase std::string

// C++11: inferencia de tipo
auto x = 42;      // int
auto y = 3.14;    // double</code></pre>

<h2>Operadores aritméticos</h2>
<p>Al igual que en Java, la división entre enteros en C++ produce un entero. Para obtener un resultado decimal, al menos uno de los operandos debe ser <code>double</code> o <code>float</code>, o se debe hacer un cast explícito. El operador módulo <code>%</code> solo funciona con enteros.</p>
<pre><code>int a = 10, b = 3;
a + b    // 13
a - b    // 7
a * b    // 30
a / b    // 3   (división ENTERA entre int)
a % b    // 1   (solo con enteros)

double da = 10.0;
da / b   // 3.333... (mixto → double)</code></pre>

<h2>Conversión de tipos (cast)</h2>
<p>C++ ofrece varios tipos de cast. El <strong>cast estilo C</strong> <code>(tipo)</code> es rápido pero poco seguro. El <strong>cast de C++</strong> <code>static_cast&lt;tipo&gt;()</code> es más explícito y seguro. Para convertir entre <code>string</code> y número se usan las funciones <code>stoi()</code>, <code>stod()</code> y <code>to_string()</code> (desde C++11).</p>
<pre><code>// C-style cast
int a = 7, b = 2;
double resultado = (double)a / b;  // 3.5

// C++ cast (preferido)
double r2 = static_cast&lt;double&gt;(a) / b;

// String ↔ número (C++11)
#include &lt;string&gt;
string s = to_string(42);
int n = stoi("42");
double d = stod("3.14");</code></pre>

<h2>Operadores de comparación y lógicos</h2>
<pre><code>5 == 5    // true
5 != 3    // true
// strings: == funciona con std::string
string s1 = "hola", s2 = "hola";
s1 == s2  // true

// Lógicos
true && false  // false
true || false  // true
!true          // false</code></pre>

<h2>Entrada y salida</h2>
<p><code>cout</code> (salida) y <code>cin</code> (entrada) son objetos de stream de la librería <code>&lt;iostream&gt;</code>. El operador <code>&lt;&lt;</code> envía datos a <code>cout</code>; el operador <code>&gt;&gt;</code> lee datos de <code>cin</code>. <code>getline(cin, variable)</code> lee una línea completa incluyendo espacios, a diferencia de <code>cin &gt;&gt;</code> que para en el primer espacio.</p>
<pre><code>cout &lt;&lt; "Hola" &lt;&lt; endl;
cout &lt;&lt; "Edad: " &lt;&lt; edad &lt;&lt; endl;

int numero;
cin &gt;&gt; numero;       // lee un valor

string linea;
getline(cin, linea);  // lee línea completa</code></pre>
`,

  csharp: `
<h2>Variables y tipos de datos</h2>
<p>C# es de <strong>tipado estático y fuerte</strong>, con inferencia de tipo opcional mediante <code>var</code>. A diferencia de Java, en C# <strong>todos</strong> los tipos (incluso los primitivos) heredan de <code>object</code>, lo que permite un sistema de tipos unificado. <code>string</code> es un alias de <code>System.String</code> y los tipos nullable (con <code>?</code>) permiten que una variable de tipo valor también pueda ser <code>null</code>.</p>
<pre><code>int    edad    = 25;
double salario = 1500.50;
float  pi      = 3.14f;
char   inicial = 'A';
bool   activo  = true;
string nombre  = "Ana";    // alias de System.String

// Inferencia de tipo
var x = 42;      // int
var y = 3.14;    // double
var s = "hola";  // string

// Tipos nullable
int? edadOpcional = null;  // int que puede ser null</code></pre>

<h2>Operadores aritméticos</h2>
<p>C# sigue las mismas reglas que Java: la división entre enteros produce un entero. El cast explícito <code>(double)</code> fuerza la división real. C# también incluye el tipo <code>decimal</code> (de 128 bits) para cálculos financieros donde la precisión es crítica.</p>
<pre><code>int a = 10, b = 3;
a + b    // 13
a - b    // 7
a * b    // 30
a / b    // 3   (división ENTERA entre int)
a % b    // 1

(double)a / b  // 3.333... (cast)</code></pre>

<h2>Conversión de tipos</h2>
<p>C# ofrece <code>int.Parse()</code> y el más seguro <code>int.TryParse()</code> que devuelve <code>bool</code> en vez de lanzar excepción si la cadena no es válida. Los métodos de formato como <code>.ToString("F2")</code> permiten controlar la precisión de los decimales al mostrar números.</p>
<pre><code>// Implícita (widening)
int i = 42;
double d = i;  // OK

// Explícita
double pi = 3.14;
int n = (int)pi;  // 3

// Parse
int num = int.Parse("42");
double dec = double.Parse("3.14");
bool ok = int.TryParse("abc", out int r); // false, seguro

// ToString
string s = 42.ToString();
string s2 = 3.14.ToString("F2"); // "3,14" (2 decimales)</code></pre>

<h2>Operadores de comparación y lógicos</h2>
<pre><code>5 == 5    // true
5 != 3    // true
"hola" == "hola"  // true (strings por valor)

// Lógicos
true && false   // false
true || false   // true
!true           // false

// Null-coalescing
string? val = null;
string resultado = val ?? "defecto";  // "defecto"</code></pre>

<h2>Entrada y salida</h2>
<p><code>Console.WriteLine()</code> imprime con salto de línea; <code>Console.Write()</code> sin él. La <strong>interpolación de strings</strong> con <code>$"...{expresión}..."</code> es la forma más cómoda de formatear salida. Los especificadores de formato (<code>:F2</code>, <code>:N0</code>, <code>:C</code>) permiten controlar decimales, separadores de miles o formato de moneda.</p>
<pre><code>Console.WriteLine("Hola");
Console.WriteLine($"Nombre: {nombre}, Edad: {edad}");  // interpolación
Console.Write("Sin salto de línea");

string linea = Console.ReadLine()!;
int num = int.Parse(Console.ReadLine()!);
Console.WriteLine(num.GetType()); // System.Int32</code></pre>
`,
};

const starterCode = {
  javascript: {
    temperatura: `// Conversión de temperatura
// Fórmula: F = C * 9/5 + 32 | K = C + 273.15
let celsius = 100;

// Calcula e imprime Fahrenheit y Kelvin
`,
    imc: `// Índice de Masa Corporal (IMC = peso / altura²)
let peso = 70;   // kg
let altura = 1.75; // metros

// Calcula el IMC e imprime la categoría:
// < 18.5: "Bajo peso"
// 18.5 - 24.9: "Normal"
// 25 - 29.9: "Sobrepeso"
// >= 30: "Obesidad"
`,
    intercambio: `// Intercambio de variables SIN variable auxiliar
let a = 5;
let b = 10;

// Intercambia a y b sin usar una tercera variable
// Pista: usa suma/resta o desestructuración

console.log("Antes:", a, b);
// tu código aquí
console.log("Después:", a, b); // debe mostrar 10 5
`,
  },
  python: {
    temperatura: `# Conversión de temperatura
# Fórmula: F = C * 9/5 + 32 | K = C + 273.15
celsius = 100

# Calcula e imprime Fahrenheit y Kelvin
`,
    imc: `# Índice de Masa Corporal (IMC = peso / altura²)
peso = 70    # kg
altura = 1.75  # metros

# Calcula el IMC e imprime la categoría:
# < 18.5: "Bajo peso"
# 18.5 - 24.9: "Normal"
# 25 - 29.9: "Sobrepeso"
# >= 30: "Obesidad"
`,
    intercambio: `# Intercambio de variables SIN variable auxiliar
a = 5
b = 10

# Intercambia a y b sin usar una tercera variable
print("Antes:", a, b)
# tu código aquí
print("Después:", a, b)  # debe mostrar 10 5
`,
  },
  java: {
    temperatura: `public class Main {
    public static void main(String[] args) {
        // Conversión de temperatura
        double celsius = 100;

        // Calcula e imprime Fahrenheit y Kelvin
        // F = C * 9.0/5 + 32 | K = C + 273.15

    }
}`,
    imc: `public class Main {
    public static void main(String[] args) {
        double peso = 70;    // kg
        double altura = 1.75; // metros

        // Calcula IMC e imprime categoría:
        // < 18.5: "Bajo peso" | 18.5-24.9: "Normal"
        // 25-29.9: "Sobrepeso" | >= 30: "Obesidad"

    }
}`,
    intercambio: `public class Main {
    public static void main(String[] args) {
        int a = 5, b = 10;
        System.out.println("Antes: a=" + a + " b=" + b);

        // Intercambia a y b SIN variable auxiliar

        System.out.println("Después: a=" + a + " b=" + b); // 10 5
    }
}`,
  },
  cpp: {
    temperatura: `#include <iostream>
using namespace std;

int main() {
    double celsius = 100;

    // Calcula e imprime Fahrenheit y Kelvin
    // F = C * 9.0/5 + 32 | K = C + 273.15

    return 0;
}`,
    imc: `#include <iostream>
using namespace std;

int main() {
    double peso = 70;
    double altura = 1.75;

    // Calcula IMC e imprime categoría

    return 0;
}`,
    intercambio: `#include <iostream>
using namespace std;

int main() {
    int a = 5, b = 10;
    cout << "Antes: a=" << a << " b=" << b << endl;

    // Intercambia a y b SIN variable auxiliar

    cout << "Después: a=" << a << " b=" << b << endl;
    return 0;
}`,
  },
  csharp: {
    temperatura: `using System;

class Program {
    static void Main() {
        double celsius = 100;

        // Calcula e imprime Fahrenheit y Kelvin
        // F = C * 9.0/5 + 32 | K = C + 273.15

    }
}`,
    imc: `using System;

class Program {
    static void Main() {
        double peso = 70;
        double altura = 1.75;

        // Calcula IMC e imprime categoría

    }
}`,
    intercambio: `using System;

class Program {
    static void Main() {
        int a = 5, b = 10;
        Console.WriteLine($"Antes: a={a} b={b}");

        // Intercambia a y b SIN variable auxiliar

        Console.WriteLine($"Después: a={a} b={b}"); // 10 5
    }
}`,
  },
};

export const fundamentalsTopic: Topic = {
  id: 'fundamentals',
  title: 'Fundamentos de la Programación',
  icon: 'cpu',
  description: 'Variables, tipos de datos, operadores, conversiones y estructura básica de un programa.',
  lessons: {
    javascript: {
      id: 'fundamentals-javascript',
      title: 'Fundamentos en JavaScript',
      description: 'Variables, tipos primitivos, operadores y conversiones en JS.',
      theory: theory.javascript,
      topics: ['variables', 'tipos', 'operadores', 'conversión'],
      exercises: [
        {
          id: 'fund-js-1',
          title: 'Calculadora básica',
          description: 'Declara dos variables numéricas y muestra el resultado de las 4 operaciones aritméticas básicas.',
          instructions: 'Declara dos variables numéricas `a = 10` y `b = 3`. Imprime con console.log el resultado de a+b, a-b, a*b, a/b y a%b.',
          starterCode: `let a = 10;
let b = 3;

// Imprime las operaciones (suma, resta, multiplicación, división, módulo)
`,
          expectedConcept: 'Student should declare numeric variables and use arithmetic operators (+, -, *, /, %) with console.log.',
          hints: ['Usa console.log() para cada operación', 'El módulo % da el resto de la división'],
        },
        {
          id: 'fund-js-2',
          title: 'Conversión de temperatura',
          description: 'Convierte una temperatura de Celsius a Fahrenheit y Kelvin usando variables y operadores.',
          instructions: 'Dada una variable `celsius = 100`, calcula e imprime la temperatura en Fahrenheit (F = C × 9/5 + 32) y en Kelvin (K = C + 273.15). Muestra los resultados con 2 decimales.',
          starterCode: starterCode.javascript.temperatura,
          expectedConcept: 'Student should use arithmetic operators with correct formula and display results using console.log with number formatting.',
          hints: ['F = celsius * 9/5 + 32', 'K = celsius + 273.15', 'toFixed(2) para 2 decimales'],
        },
        {
          id: 'fund-js-3',
          title: 'Índice de Masa Corporal',
          description: 'Calcula el IMC y clasifica el resultado con un mensaje descriptivo.',
          instructions: 'Dados `peso` (kg) y `altura` (m), calcula el IMC = peso / altura². Imprime el valor y la categoría: <18.5 "Bajo peso", 18.5-24.9 "Normal", 25-29.9 "Sobrepeso", ≥30 "Obesidad".',
          starterCode: starterCode.javascript.imc,
          expectedConcept: 'Student should compute IMC using arithmetic operators and classify the result using if/else conditionals.',
          hints: ['IMC = peso / (altura * altura)', 'Usa if/else if/else para clasificar'],
        },
        {
          id: 'fund-js-4',
          title: 'Intercambio de variables',
          description: 'Intercambia el valor de dos variables sin usar una tercera variable auxiliar.',
          instructions: 'Con a=5 y b=10, intercambia sus valores sin usar ninguna variable auxiliar. El resultado debe ser a=10 y b=5. Imprime los valores antes y después.',
          starterCode: starterCode.javascript.intercambio,
          expectedConcept: 'Student should swap variables without a temp variable, using either destructuring ([a,b]=[b,a]) or arithmetic (a=a+b; b=a-b; a=a-b).',
          hints: ['Desestructuración: [a, b] = [b, a]', 'O usa suma/resta: a=a+b; b=a-b; a=a-b'],
        },
      ],
    },
    python: {
      id: 'fundamentals-python',
      title: 'Fundamentos en Python',
      description: 'Variables, tipos, operadores y conversiones en Python.',
      theory: theory.python,
      topics: ['variables', 'tipos', 'operadores', 'conversión'],
      exercises: [
        {
          id: 'fund-py-1',
          title: 'Calculadora básica',
          description: 'Declara dos variables numéricas y muestra el resultado de las operaciones aritméticas.',
          instructions: 'Con a=10 y b=3, imprime el resultado de a+b, a-b, a*b, a/b, a//b (entera) y a%b.',
          starterCode: `a = 10\nb = 3\n\n# Imprime las operaciones\n`,
          expectedConcept: 'Student should use arithmetic operators including integer division (//) and modulo (%) with print().',
          hints: ['print() para cada operación', '// es división entera en Python', '% es el módulo (resto)'],
        },
        {
          id: 'fund-py-2',
          title: 'Conversión de temperatura',
          description: 'Convierte Celsius a Fahrenheit y Kelvin.',
          instructions: 'Dada celsius=100, calcula e imprime Fahrenheit (F = C × 9/5 + 32) y Kelvin (K = C + 273.15). Muestra 2 decimales con f-strings.',
          starterCode: starterCode.python.temperatura,
          expectedConcept: 'Student should use arithmetic operators with correct formula and f-string formatting with :.2f.',
          hints: ['f = celsius * 9/5 + 32', 'Usa f"{valor:.2f}" para 2 decimales'],
        },
        {
          id: 'fund-py-3',
          title: 'Índice de Masa Corporal',
          description: 'Calcula el IMC y clasifica el resultado.',
          instructions: 'Con peso=70 y altura=1.75, calcula IMC = peso/altura². Imprime el valor y la categoría (Bajo peso/Normal/Sobrepeso/Obesidad).',
          starterCode: starterCode.python.imc,
          expectedConcept: 'Student should compute IMC using ** or multiplication and use if/elif/else for classification.',
          hints: ['imc = peso / altura**2', 'Usa if/elif/else para clasificar'],
        },
        {
          id: 'fund-py-4',
          title: 'Intercambio de variables',
          description: 'Intercambia dos variables sin auxiliar.',
          instructions: 'Con a=5 y b=10, intercambia sin variable auxiliar. Muestra antes y después.',
          starterCode: starterCode.python.intercambio,
          expectedConcept: 'Student should use Python tuple unpacking (a, b = b, a) to swap variables.',
          hints: ['Python permite: a, b = b, a'],
        },
      ],
    },
    java: {
      id: 'fundamentals-java',
      title: 'Fundamentos en Java',
      description: 'Tipos primitivos, operadores, cast y salida formateada.',
      theory: theory.java,
      topics: ['tipos', 'operadores', 'cast', 'printf'],
      exercises: [
        {
          id: 'fund-java-1',
          title: 'Calculadora básica',
          description: 'Declara variables tipadas y muestra las operaciones aritméticas.',
          instructions: 'Con int a=10 y int b=3, imprime suma, resta, multiplicación, división entera y módulo. Muestra también la división real haciendo cast a double.',
          starterCode: `public class Main {\n    public static void main(String[] args) {\n        int a = 10;\n        int b = 3;\n\n        // Imprime las operaciones\n\n    }\n}`,
          expectedConcept: 'Student should use arithmetic operators, understand integer division vs real division, and use cast (double) for real division.',
          hints: ['System.out.println(a + b)', 'Para división real: (double)a / b'],
        },
        {
          id: 'fund-java-2',
          title: 'Conversión de temperatura',
          description: 'Convierte Celsius a Fahrenheit y Kelvin.',
          instructions: 'Con double celsius=100, calcula Fahrenheit (F = C × 9.0/5 + 32) y Kelvin (K = C + 273.15). Usa printf con %.2f para 2 decimales.',
          starterCode: starterCode.java.temperatura,
          expectedConcept: 'Student should use double arithmetic with correct formula and System.out.printf with %.2f format specifier.',
          hints: ['double f = celsius * 9.0/5 + 32;', 'System.out.printf("%.2f%n", f);'],
        },
        {
          id: 'fund-java-3',
          title: 'Índice de Masa Corporal',
          description: 'Calcula el IMC y clasifica el resultado.',
          instructions: 'Con peso=70.0 y altura=1.75, calcula IMC = peso/altura². Imprime el valor y la categoría.',
          starterCode: starterCode.java.imc,
          expectedConcept: 'Student should compute IMC using double arithmetic and classify with if/else if chain.',
          hints: ['double imc = peso / (altura * altura);', 'Usa if/else if/else para clasificar'],
        },
        {
          id: 'fund-java-4',
          title: 'Intercambio de variables',
          description: 'Intercambia dos variables sin auxiliar.',
          instructions: 'Con int a=5 y b=10, intercambia sin variable auxiliar usando suma/resta.',
          starterCode: starterCode.java.intercambio,
          expectedConcept: 'Student should swap without temp variable using arithmetic (a=a+b; b=a-b; a=a-b) or XOR.',
          hints: ['a = a + b; b = a - b; a = a - b;'],
        },
      ],
    },
    cpp: {
      id: 'fundamentals-cpp',
      title: 'Fundamentos en C++',
      description: 'Tipos, operadores, cast y entrada/salida.',
      theory: theory.cpp,
      topics: ['tipos', 'operadores', 'cast', 'cin/cout'],
      exercises: [
        {
          id: 'fund-cpp-1',
          title: 'Calculadora básica',
          description: 'Declara variables y muestra las operaciones aritméticas.',
          instructions: 'Con int a=10 y b=3, imprime suma, resta, multiplicación, división entera y módulo. Muestra la división real con cast a double.',
          starterCode: starterCode.cpp.temperatura.replace('celsius = 100', 'a = 10, b = 3').replace(/\/\/ Calcula.*\n/, '// Imprime operaciones\n'),
          expectedConcept: 'Student should use arithmetic operators and understand integer division. Must use static_cast<double> or (double) for real division.',
          hints: ['cout << a + b << endl;', 'static_cast<double>(a) / b para división real'],
        },
        {
          id: 'fund-cpp-2',
          title: 'Conversión de temperatura',
          description: 'Convierte Celsius a Fahrenheit y Kelvin.',
          instructions: 'Con double celsius=100, calcula F = C × 9.0/5 + 32 y K = C + 273.15. Muestra 2 decimales con fixed y setprecision.',
          starterCode: starterCode.cpp.temperatura,
          expectedConcept: 'Student should use double arithmetic with correct formula and cout with fixed << setprecision(2) for formatting.',
          hints: ['#include <iomanip>', 'cout << fixed << setprecision(2) << f << endl;'],
        },
        {
          id: 'fund-cpp-3',
          title: 'Índice de Masa Corporal',
          description: 'Calcula el IMC y clasifica el resultado.',
          instructions: 'Con peso=70.0 y altura=1.75, calcula IMC y clasifica.',
          starterCode: starterCode.cpp.imc,
          expectedConcept: 'Student should compute IMC with double arithmetic and use if/else if chain.',
          hints: ['double imc = peso / (altura * altura);'],
        },
        {
          id: 'fund-cpp-4',
          title: 'Intercambio de variables',
          description: 'Intercambia dos variables sin auxiliar.',
          instructions: 'Con int a=5 y b=10, intercambia sin variable auxiliar.',
          starterCode: starterCode.cpp.intercambio,
          expectedConcept: 'Student should swap without temp variable using arithmetic or XOR bitwise operators.',
          hints: ['a = a + b; b = a - b; a = a - b;', 'O usa XOR: a^=b; b^=a; a^=b;'],
        },
      ],
    },
    csharp: {
      id: 'fundamentals-csharp',
      title: 'Fundamentos en C#',
      description: 'Tipos, operadores, conversiones y Console.',
      theory: theory.csharp,
      topics: ['tipos', 'operadores', 'cast', 'Console'],
      exercises: [
        {
          id: 'fund-cs-1',
          title: 'Calculadora básica',
          description: 'Declara variables y muestra las operaciones aritméticas.',
          instructions: 'Con int a=10 y b=3, imprime suma, resta, multiplicación, división entera y módulo. Muestra la división real con cast a double.',
          starterCode: `using System;\n\nclass Program {\n    static void Main() {\n        int a = 10;\n        int b = 3;\n\n        // Imprime las operaciones\n\n    }\n}`,
          expectedConcept: 'Student should use arithmetic operators, understand integer vs real division, and use (double) cast.',
          hints: ['Console.WriteLine(a + b)', '(double)a / b para división real'],
        },
        {
          id: 'fund-cs-2',
          title: 'Conversión de temperatura',
          description: 'Convierte Celsius a Fahrenheit y Kelvin.',
          instructions: 'Con double celsius=100, calcula F = C × 9.0/5 + 32 y K = C + 273.15. Muestra 2 decimales con interpolación de strings.',
          starterCode: starterCode.csharp.temperatura,
          expectedConcept: 'Student should use double arithmetic with formula and string interpolation with :F2 format.',
          hints: ['$"{fahrenheit:F2}" para 2 decimales'],
        },
        {
          id: 'fund-cs-3',
          title: 'Índice de Masa Corporal',
          description: 'Calcula el IMC y clasifica el resultado.',
          instructions: 'Con peso=70.0 y altura=1.75, calcula IMC y clasifica.',
          starterCode: starterCode.csharp.imc,
          expectedConcept: 'Student should compute IMC with double arithmetic and use if/else if chain for classification.',
          hints: ['double imc = peso / (altura * altura);'],
        },
        {
          id: 'fund-cs-4',
          title: 'Intercambio de variables',
          description: 'Intercambia dos variables sin auxiliar.',
          instructions: 'Con int a=5 y b=10, intercambia sin variable auxiliar.',
          starterCode: starterCode.csharp.intercambio,
          expectedConcept: 'Student should swap without temp variable using arithmetic.',
          hints: ['a = a + b; b = a - b; a = a - b;'],
        },
      ],
    },
  },
};

import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>Funciones puras e impuras</h2>
<p>Una <strong>función pura</strong> cumple dos propiedades: 1) dado el mismo input, siempre devuelve el mismo output, y 2) no produce <em>efectos secundarios</em> (no modifica variables externas, no hace I/O, no muta sus argumentos). Las funciones puras son más fáciles de probar, razonar y depurar, porque su comportamiento es completamente predecible. Una función <strong>impura</strong> depende de o modifica el estado externo.</p>
<pre><code>// PURA: mismo input → mismo output, sin efectos secundarios
const sumar = (a, b) => a + b;
const doblar = arr => arr.map(x => x * 2);  // no muta

// IMPURA: depende de estado externo o lo modifica
let total = 0;
const acumular = x => { total += x; };  // muta estado externo</code></pre>

<h2>Inmutabilidad</h2>
<p>La <strong>inmutabilidad</strong> es el principio de no modificar los datos originales, sino crear versiones nuevas con los cambios aplicados. Evita errores causados por mutaciones inesperadas del estado compartido, especialmente en código concurrente o en frameworks como React donde las mutaciones directas causan problemas de renderizado. El operador spread (<code>...</code>) facilita crear copias modificadas.</p>
<pre><code>// Mal: mutación directa
const arr = [1, 2, 3];
arr.push(4);  // muta arr

// Bien: crear nuevo array
const nuevo = [...arr, 4];
const sinPrimero = arr.slice(1);

// Objetos
const obj = { a: 1, b: 2 };
const actualizado = { ...obj, b: 99, c: 3 };</code></pre>

<h2>map, filter, reduce encadenados</h2>
<p><code>map</code> transforma cada elemento de un array aplicando una función y devuelve un nuevo array del mismo tamaño. <code>filter</code> selecciona solo los elementos que cumplen una condición. <code>reduce</code> combina todos los elementos en un único valor acumulado. Encadenar estas tres operaciones forma el <strong>pipeline funcional</strong> fundamental: transforma → filtra → agrega, sin usar bucles explícitos.</p>
<pre><code>const datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const resultado = datos
  .filter(x => x % 2 === 0)      // [2, 4, 6, 8, 10]
  .map(x => x * x)               // [4, 16, 36, 64, 100]
  .reduce((acc, x) => acc + x, 0); // 220</code></pre>

<h2>Currying y aplicación parcial</h2>
<p>El <strong>currying</strong> convierte una función de N parámetros en una cadena de N funciones de un solo parámetro. Permite crear funciones especializadas a partir de una función más general mediante <strong>aplicación parcial</strong>: se fija uno o más argumentos y se obtiene una función nueva que acepta el resto. Esto facilita la reutilización y la composición.</p>
<pre><code>// Currying: función que devuelve función
const multiplicar = a => b => a * b;
const doble = multiplicar(2);
const triple = multiplicar(3);

doble(5);   // 10
triple(7);  // 21

// Aplicación parcial con bind
const sumar = (a, b) => a + b;
const sumar10 = sumar.bind(null, 10);
sumar10(5);  // 15</code></pre>

<h2>Composición de funciones</h2>
<p>La <strong>composición de funciones</strong> combina funciones simples para construir funciones más complejas: la salida de una función se convierte en la entrada de la siguiente. <code>pipe</code> aplica las funciones de izquierda a derecha (igual que una tubería); <code>compose</code> las aplica de derecha a izquierda (notación matemática). Es una alternativa a las variables intermedias y hace el flujo de transformación explícito.</p>
<pre><code>const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const doblar = x => x * 2;
const sumarUno = x => x + 1;
const alCuadrado = x => x * x;

const proceso = pipe(doblar, sumarUno, alCuadrado);
proceso(3);  // ((3*2)+1)^2 = 49</code></pre>

<h2>Memoización</h2>
<p>La <strong>memoización</strong> es una técnica de optimización que almacena (cachea) los resultados de llamadas a funciones costosas. Si la función se llama con los mismos argumentos, devuelve el resultado del caché en vez de recalcularlo. Es especialmente útil en recursión (como Fibonacci), donde muchos subproblemas se calculan repetidamente.</p>
<pre><code>function memoizar(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const resultado = fn(...args);
    cache.set(key, resultado);
    return resultado;
  };
}

const fibMemo = memoizar(function fib(n) {
  if (n <= 1) return n;
  return fibMemo(n-1) + fibMemo(n-2);
});</code></pre>
`,

  python: `
<h2>Funciones puras e inmutabilidad</h2>
<pre><code># Pura: sin efectos secundarios
def sumar(a, b):
    return a + b

def doblar_lista(lst):
    return [x * 2 for x in lst]  # devuelve nueva lista

# Impura: muta o depende de estado global
total = 0
def acumular(x):
    global total
    total += x  # muta variable global</code></pre>

<h2>map, filter, reduce</h2>
<pre><code>from functools import reduce

datos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

pares = list(filter(lambda x: x % 2 == 0, datos))
cuadrados = list(map(lambda x: x**2, pares))
total = reduce(lambda a, b: a + b, cuadrados)

# Equivalente con comprensión (más pythónico)
total2 = sum(x**2 for x in datos if x % 2 == 0)</code></pre>

<h2>Currying con partial</h2>
<pre><code>from functools import partial

def multiplicar(a, b):
    return a * b

doble = partial(multiplicar, 2)
triple = partial(multiplicar, 3)

doble(5)   # 10
triple(7)  # 21

# Currying manual
def curry_multiplicar(a):
    return lambda b: a * b

cuadruple = curry_multiplicar(4)
cuadruple(5)  # 20</code></pre>

<h2>Generadores</h2>
<pre><code>def fibonacci():
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

gen = fibonacci()
primeros_10 = [next(gen) for _ in range(10)]

# Generator expression (lazy)
cuadrados = (x**2 for x in range(1000000))  # no ocupa memoria
primeros_5 = [next(iter(cuadrados)) for _ in range(5)]</code></pre>

<h2>functools: lru_cache y reduce</h2>
<pre><code>from functools import lru_cache, reduce

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1: return n
    return fib(n-1) + fib(n-2)

fib(100)  # rápido gracias al cache</code></pre>
`,

  java: `
<h2>Streams y lambdas (Java 8+)</h2>
<pre><code>import java.util.*;
import java.util.stream.*;

List&lt;Integer&gt; datos = Arrays.asList(1,2,3,4,5,6,7,8,9,10);

// filter → map → collect
List&lt;Integer&gt; resultado = datos.stream()
    .filter(x -> x % 2 == 0)
    .map(x -> x * x)
    .collect(Collectors.toList());

// reduce
int total = datos.stream()
    .reduce(0, Integer::sum);

// mapToInt + estadísticas
IntSummaryStatistics stats = datos.stream()
    .mapToInt(Integer::intValue)
    .summaryStatistics();
System.out.println("Max: " + stats.getMax());</code></pre>

<h2>Method references</h2>
<pre><code>// Instancia::método → referencia a método
datos.stream()
    .map(String::valueOf)
    .forEach(System.out::println);

// Clase::método estático
datos.stream()
    .map(Math::sqrt)
    .forEach(System.out::println);</code></pre>

<h2>Optional</h2>
<pre><code>Optional&lt;Integer&gt; max = datos.stream()
    .filter(x -> x > 5)
    .max(Integer::compareTo);

max.ifPresent(v -> System.out.println("Max > 5: " + v));
int valor = max.orElse(0);</code></pre>

<h2>Función pura con Predicate y Function</h2>
<pre><code>import java.util.function.*;

Predicate&lt;Integer&gt; esPar = x -> x % 2 == 0;
Function&lt;Integer, Integer&gt; cuadrado = x -> x * x;
Function&lt;Integer, Integer&gt; doble = x -> x * 2;

// Composición
Function&lt;Integer, Integer&gt; dobleLuegoCuadrado =
    doble.andThen(cuadrado);

dobleLuegoCuadrado.apply(3);  // (3*2)^2 = 36</code></pre>
`,

  csharp: `
<h2>LINQ funcional</h2>
<pre><code>using System.Linq;

var datos = Enumerable.Range(1, 10).ToList();

// Where → Select → Aggregate
int resultado = datos
    .Where(x => x % 2 == 0)
    .Select(x => x * x)
    .Aggregate(0, (acc, x) => acc + x);

// Equivalente con Sum
int total = datos
    .Where(x => x % 2 == 0)
    .Select(x => x * x)
    .Sum();</code></pre>

<h2>Func, Action y predicados</h2>
<pre><code>Func&lt;int, int&gt; doble = x => x * 2;
Func&lt;int, int&gt; cuadrado = x => x * x;
Func&lt;int, bool&gt; esPar = x => x % 2 == 0;
Action&lt;string&gt; log = s => Console.WriteLine($"[LOG] {s}");

var resultado = datos
    .Where(esPar)
    .Select(doble)
    .ToList();</code></pre>

<h2>Composición y currying</h2>
<pre><code>static Func&lt;T, R&gt; Compose&lt;T, M, R&gt;(
    Func&lt;T, M&gt; f, Func&lt;M, R&gt; g) => x => g(f(x));

var dobleLuegoCuadrado = Compose&lt;int,int,int&gt;(x=>x*2, x=>x*x);
dobleLuegoCuadrado(3);  // 36

// Currying manual
static Func&lt;int, int&gt; Multiplicador(int factor)
    => x => x * factor;

var triple = Multiplicador(3);
triple(5);  // 15</code></pre>

<h2>Inmutabilidad con record (C# 9+)</h2>
<pre><code>record Punto(double X, double Y) {
    public double Distancia =>
        Math.Sqrt(X * X + Y * Y);
}

var p1 = new Punto(3, 4);
var p2 = p1 with { X = 0 };  // nuevo objeto, no muta p1
Console.WriteLine(p1.Distancia);  // 5</code></pre>
`,
};

const exercises = [
  {
    id: 'func-1',
    title: 'Pipeline de datos',
    description: 'Procesa una lista de números usando map, filter y reduce encadenados.',
    instructions: 'Dada una lista de precios [5, 15, 25, 8, 30, 12, 3, 20], usa SOLO map/filter/reduce (o sus equivalentes en tu lenguaje). Sin bucles for/while: filtra los mayores de 10, aplica un 20% de descuento, y calcula el total. Imprime el resultado.',
    hints: ['filter primero (precio > 10)', 'map para aplicar el descuento (precio * 0.8)', 'reduce/sum para sumar'],
    expectedConcept: 'Student MUST use functional pipeline: filter, map, reduce (or equivalent). No for/while loops allowed. Each step must be a pure function.',
  },
  {
    id: 'func-2',
    title: 'Currying',
    description: 'Implementa funciones usando currying para crear versiones especializadas.',
    instructions: 'Implementa una función `multiplicar` que use currying: al llamarla con un argumento devuelve una nueva función que multiplica por ese factor. Crea doble, triple y cuadruple usando multiplicar. Pruébalas.',
    hints: ['multiplicar(2) debe devolver una función', 'La función devuelta recibe x y devuelve x * factor', 'doble = multiplicar(2); doble(5) → 10'],
    expectedConcept: 'Student must implement currying: a function that returns another function. The derived functions (doble, triple) must be created by partial application, not defined independently.',
  },
  {
    id: 'func-3',
    title: 'Composición de funciones',
    description: 'Implementa una función pipe que componga funciones en secuencia.',
    instructions: 'Implementa una función `pipe(fn1, fn2, fn3, ...)` que aplique las funciones en orden: el resultado de cada una pasa como entrada a la siguiente. Úsala para crear un proceso: doblar → sumar 1 → elevar al cuadrado. Pruébala con varios valores.',
    hints: ['pipe(f, g)(x) = g(f(x))', 'Usa reduce/fold para aplicar las funciones en cadena', 'pipe(doblar, sumar1, cuadrado)(3) = ((3*2)+1)^2 = 49'],
    expectedConcept: 'Student must implement function composition using reduce/fold, where output of each function feeds into the next. Must use the pipe function, not manually chain calls.',
  },
  {
    id: 'func-4',
    title: 'Función pura vs impura',
    description: 'Refactoriza funciones impuras para hacerlas puras.',
    instructions: 'Tienes una función impura calcularDescuento que modifica un array externo. Refactorízala como función pura: recibe los datos como parámetro, devuelve un nuevo array con los precios con descuento sin modificar el original. Verifica que el original no cambia.',
    hints: ['Una función pura no modifica sus argumentos', 'Devuelve un NUEVO array/lista, no modifica el original', 'Usa map en vez de un bucle que mute'],
    expectedConcept: 'Student must convert an impure function (that mutates state) into a pure function (that takes input and returns new output without side effects). Must verify original array is unchanged.',
  },
  {
    id: 'func-5',
    title: 'Memoización',
    description: 'Implementa memoización para acelerar funciones recursivas.',
    instructions: 'Implementa una función memoizar(fn) que cachee los resultados. Úsala con una función fibonacci recursiva. Compara la velocidad calculando fib(40) con y sin memoización (cronometrando o simplemente observando).',
    hints: ['Usa un objeto/diccionario como caché', 'Antes de calcular, comprueba si ya está en el caché', 'Si está, devuelve el valor cacheado; si no, calcula y guarda'],
    expectedConcept: 'Student must implement a memoization wrapper function that uses a cache (object/dict/map) to store and retrieve previously computed results.',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'func-1': `const precios = [5, 15, 25, 8, 30, 12, 3, 20];\n\n// USA SOLO .filter(), .map(), .reduce() — sin bucles\nconst total = precios\n  // .filter(...)\n  // .map(...)\n  // .reduce(...)\n  ;\n\nconsole.log(\`Total con descuento: \${total.toFixed(2)}€\`);`,
    'func-2': `// Implementa multiplicar con currying\nconst multiplicar = (factor) => {\n  // devuelve una función que multiplica por factor\n};\n\nconst doble = multiplicar(2);\nconst triple = multiplicar(3);\nconst cuadruple = multiplicar(4);\n\nconsole.log(doble(5));      // 10\nconsole.log(triple(5));     // 15\nconsole.log(cuadruple(5));  // 20`,
    'func-3': `// Implementa pipe\nconst pipe = (...fns) => {\n  // aplica las funciones en orden usando reduce\n};\n\nconst doblar = x => x * 2;\nconst sumarUno = x => x + 1;\nconst cuadrado = x => x * x;\n\nconst proceso = pipe(doblar, sumarUno, cuadrado);\nconsole.log(proceso(3));   // ((3*2)+1)^2 = 49\nconsole.log(proceso(4));   // ((4*2)+1)^2 = 81`,
    'func-4': `// IMPURA (no modificar)\nlet precios = [100, 50, 200, 75];\nfunction impura(descuento) {\n  for (let i = 0; i < precios.length; i++)\n    precios[i] *= (1 - descuento);\n}\n\n// Refactoriza como función PURA\nfunction calcularDescuento(precios, descuento) {\n  // devuelve un NUEVO array, no modifica precios\n}\n\nconst originales = [100, 50, 200, 75];\nconst conDescuento = calcularDescuento(originales, 0.2);\nconsole.log("Original:", originales);     // no debe cambiar\nconsole.log("Con descuento:", conDescuento);`,
    'func-5': `function memoizar(fn) {\n  const cache = {};\n  return function(...args) {\n    const key = JSON.stringify(args);\n    // comprueba caché, calcula si no está\n  };\n}\n\nfunction fib(n) {\n  if (n <= 1) return n;\n  return fib(n-1) + fib(n-2);\n}\n\nconst fibMemo = memoizar(fib);\n\nconsole.time("sin memo");  fib(35);      console.timeEnd("sin memo");\nconsole.time("con memo");  fibMemo(35);  console.timeEnd("con memo");`,
  },
  python: {
    'func-1': `from functools import reduce\n\nprecios = [5, 15, 25, 8, 30, 12, 3, 20]\n\n# USA SOLO filter, map, reduce — sin for/while\ntotal = reduce(\n    lambda a, b: a + b,\n    map(\n        lambda p: p * 0.8,\n        filter(lambda p: p > 10, precios)\n    )\n)\n# O encadena de otra forma\nprint(f"Total con descuento: {total:.2f}€")`,
    'func-2': `# Implementa con currying\ndef multiplicar(factor):\n    pass  # devuelve una función\n\ndoble = multiplicar(2)\ntriple = multiplicar(3)\ncuadruple = multiplicar(4)\n\nprint(doble(5))      # 10\nprint(triple(5))     # 15\nprint(cuadruple(5))  # 20`,
    'func-3': `from functools import reduce\n\ndef pipe(*fns):\n    pass  # aplica las funciones en orden\n\ndoblar = lambda x: x * 2\nsumar_uno = lambda x: x + 1\ncuadrado = lambda x: x * x\n\nproceso = pipe(doblar, sumar_uno, cuadrado)\nprint(proceso(3))   # 49\nprint(proceso(4))   # 81`,
    'func-4': `# IMPURA — no modificar\nprecios = [100, 50, 200, 75]\ndef impura(descuento):\n    for i in range(len(precios)):\n        precios[i] *= (1 - descuento)\n\n# Refactoriza como PURA\ndef calcular_descuento(precios, descuento):\n    pass  # devuelve NUEVA lista\n\noriginales = [100, 50, 200, 75]\ncon_descuento = calcular_descuento(originales, 0.2)\nprint("Original:", originales)      # no debe cambiar\nprint("Con descuento:", con_descuento)`,
    'func-5': `def memoizar(fn):\n    cache = {}\n    def wrapper(*args):\n        if args not in cache:\n            cache[args] = fn(*args)\n        return cache[args]\n    return wrapper\n\ndef fib(n):\n    if n <= 1: return n\n    return fib(n-1) + fib(n-2)\n\nfib_memo = memoizar(fib)\n\nimport time\nt = time.time(); fib(35); print(f"Sin memo: {time.time()-t:.3f}s")\nt = time.time(); fib_memo(35); print(f"Con memo: {time.time()-t:.3f}s")`,
  },
  java: {
    'func-1': `import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        List<Double> precios = Arrays.asList(5.0,15.0,25.0,8.0,30.0,12.0,3.0,20.0);\n\n        // USA SOLO stream: filter → map → reduce/sum\n        double total = precios.stream()\n            // .filter(...)\n            // .map(...)\n            // .mapToDouble(...).sum() o .reduce(...)\n            .mapToDouble(Double::doubleValue).sum(); // placeholder\n\n        System.out.printf("Total: %.2f€%n", total);\n    }\n}`,
    'func-2': `import java.util.function.Function;\n\npublic class Main {\n    // multiplicar con currying: devuelve Function<Integer,Integer>\n    static Function<Integer,Integer> multiplicar(int factor) {\n        // implementa\n        return x -> 0;\n    }\n\n    public static void main(String[] args) {\n        var doble = multiplicar(2);\n        var triple = multiplicar(3);\n        var cuadruple = multiplicar(4);\n\n        System.out.println(doble.apply(5));      // 10\n        System.out.println(triple.apply(5));     // 15\n        System.out.println(cuadruple.apply(5));  // 20\n    }\n}`,
    'func-3': `import java.util.function.Function;\nimport java.util.Arrays;\n\npublic class Main {\n    @SafeVarargs\n    static Function<Integer,Integer> pipe(Function<Integer,Integer>... fns) {\n        // usa reduce/fold para componer las funciones\n        return Arrays.stream(fns)\n            .reduce(Function.identity(), Function::andThen);\n    }\n\n    public static void main(String[] args) {\n        Function<Integer,Integer> doblar = x -> x*2;\n        Function<Integer,Integer> sumarUno = x -> x+1;\n        Function<Integer,Integer> cuadrado = x -> x*x;\n\n        var proceso = pipe(doblar, sumarUno, cuadrado);\n        System.out.println(proceso.apply(3));  // 49\n        System.out.println(proceso.apply(4));  // 81\n    }\n}`,
    'func-4': `import java.util.*;\nimport java.util.stream.*;\n\npublic class Main {\n    // IMPURA — referencia\n    static void impura(List<Double> precios, double desc) {\n        for (int i = 0; i < precios.size(); i++)\n            precios.set(i, precios.get(i) * (1-desc));\n    }\n\n    // Refactoriza como PURA\n    static List<Double> calcularDescuento(List<Double> precios, double desc) {\n        // devuelve NUEVA lista\n        return Collections.emptyList(); // implementa\n    }\n\n    public static void main(String[] args) {\n        var originales = Arrays.asList(100.0,50.0,200.0,75.0);\n        var conDesc = calcularDescuento(originales, 0.2);\n        System.out.println("Original: " + originales);     // no cambia\n        System.out.println("Con descuento: " + conDesc);\n    }\n}`,
    'func-5': `import java.util.*;\nimport java.util.function.*;\n\npublic class Main {\n    static <T,R> Function<T,R> memoizar(Function<T,R> fn) {\n        Map<T,R> cache = new HashMap<>();\n        return x -> cache.computeIfAbsent(x, fn);\n    }\n\n    static long fib(int n) {\n        if (n <= 1) return n;\n        return fib(n-1) + fib(n-2);\n    }\n\n    public static void main(String[] args) {\n        // Nota: la memoización simple no funciona con recursión directa\n        // Prueba con valores pequeños o implementa fib iterativo dentro\n        long t = System.currentTimeMillis();\n        System.out.println(fib(40));\n        System.out.println("Tiempo: " + (System.currentTimeMillis()-t) + "ms");\n    }\n}`,
  },
  csharp: {
    'func-1': `using System;\nusing System.Linq;\n\nclass Program {\n    static void Main() {\n        double[] precios = {5, 15, 25, 8, 30, 12, 3, 20};\n\n        // USA SOLO Where, Select, Sum — sin bucles\n        double total = precios\n            // .Where(...)\n            // .Select(...)\n            // .Sum();\n            .Sum(); // placeholder\n\n        Console.WriteLine($"Total con descuento: {total:F2}€");\n    }\n}`,
    'func-2': `using System;\n\nclass Program {\n    static Func<int,int> Multiplicar(int factor) {\n        // implementa: devuelve función que multiplica por factor\n        return x => 0;\n    }\n\n    static void Main() {\n        var doble = Multiplicar(2);\n        var triple = Multiplicar(3);\n        var cuadruple = Multiplicar(4);\n\n        Console.WriteLine(doble(5));      // 10\n        Console.WriteLine(triple(5));     // 15\n        Console.WriteLine(cuadruple(5));  // 20\n    }\n}`,
    'func-3': `using System;\nusing System.Linq;\n\nclass Program {\n    static Func<int,int> Pipe(params Func<int,int>[] fns) {\n        // compone las funciones en orden usando Aggregate\n        return fns.Aggregate((f, g) => x => g(f(x)));\n    }\n\n    static void Main() {\n        Func<int,int> doblar = x => x*2;\n        Func<int,int> sumarUno = x => x+1;\n        Func<int,int> cuadrado = x => x*x;\n\n        var proceso = Pipe(doblar, sumarUno, cuadrado);\n        Console.WriteLine(proceso(3));   // 49\n        Console.WriteLine(proceso(4));   // 81\n    }\n}`,
    'func-4': `using System;\nusing System.Collections.Generic;\nusing System.Linq;\n\nclass Program {\n    // IMPURA — referencia\n    static void Impura(List<double> precios, double desc) {\n        for (int i = 0; i < precios.Count; i++)\n            precios[i] *= (1-desc);\n    }\n\n    // Refactoriza como PURA\n    static List<double> CalcularDescuento(IEnumerable<double> precios, double desc) {\n        return new List<double>(); // implementa\n    }\n\n    static void Main() {\n        var originales = new List<double> {100, 50, 200, 75};\n        var conDesc = CalcularDescuento(originales, 0.2);\n        Console.WriteLine("Original: " + string.Join(", ", originales));\n        Console.WriteLine("Con descuento: " + string.Join(", ", conDesc));\n    }\n}`,
    'func-5': `using System;\nusing System.Collections.Generic;\n\nclass Program {\n    static Func<int,long> Memoizar(Func<int,long> fn) {\n        var cache = new Dictionary<int,long>();\n        return n => {\n            if (!cache.ContainsKey(n)) cache[n] = fn(n);\n            return cache[n];\n        };\n    }\n\n    static long Fib(int n) {\n        if (n <= 1) return n;\n        return Fib(n-1) + Fib(n-2);\n    }\n\n    static void Main() {\n        var t = DateTime.Now;\n        Console.WriteLine(Fib(40));\n        Console.WriteLine($"Sin memo: {(DateTime.Now-t).TotalMilliseconds:F0}ms");\n    }\n}`,
  },
};

function buildLesson(lang: string, theoryContent: string, title: string, desc: string) {
  return {
    id: `functional-${lang}`,
    title,
    description: desc,
    theory: theoryContent,
    topics: ['funciones puras', 'inmutabilidad', 'map/filter/reduce', 'currying', 'composición'],
    exercises: exercises.map(ex => ({
      ...ex,
      id: `${ex.id}-${lang}`,
      starterCode: starterCodes[lang][ex.id] ?? '',
    })),
  };
}

export const functionalTopic: Topic = {
  id: 'functional',
  title: 'Programación Funcional',
  icon: 'zap',
  description: 'Funciones puras, inmutabilidad, map/filter/reduce, currying y composición.',
  lessons: {
    javascript: buildLesson('javascript', theory.javascript, 'Prog. Funcional en JavaScript', 'Funciones puras, inmutabilidad, composición y memoización.') as any,
    python: buildLesson('python', theory.python, 'Prog. Funcional en Python', 'Lambda, map/filter/reduce, generadores y lru_cache.') as any,
    java: buildLesson('java', theory.java, 'Prog. Funcional en Java', 'Streams, lambdas, Function, Optional y composición.') as any,
    csharp: buildLesson('csharp', theory.csharp, 'Prog. Funcional en C#', 'LINQ, Func, composición y records inmutables.') as any,
  },
};

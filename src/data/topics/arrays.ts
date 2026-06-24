import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>Crear y acceder a arrays</h2>
<p>Un <strong>array</strong> (o vector) es una colección de valores del mismo tipo agrupados bajo un único nombre. En lugar de declarar N variables separadas para datos relacionados, se crea una sola variable con N posiciones. Cada posición se identifica por su <strong>índice</strong>, que siempre comienza en <strong>0</strong> (no en 1). Así, el primer elemento está en el índice 0, el segundo en el 1, y el último en el índice <code>longitud - 1</code>.</p>
<pre><code>const nums = [3, 7, 1, 9, 4, 6, 2, 8, 5];
console.log(nums[0]);       // 3 (primer elemento)
console.log(nums.length);   // 9
console.log(nums[nums.length - 1]); // 5 (último)</code></pre>

<h2>Métodos de mutación</h2>
<p>Algunos métodos de array <strong>modifican el array original</strong> (mutación). Es importante saber cuáles mutan y cuáles no, especialmente en programación funcional donde se prefiere no modificar los datos originales. Los métodos <code>push/pop</code> trabajan al final del array; <code>unshift/shift</code> al principio.</p>
<pre><code>const frutas = ["manzana", "banana"];
frutas.push("cereza");      // añade al final → length 3
frutas.pop();               // elimina del final → "cereza"
frutas.unshift("aguacate"); // añade al inicio
frutas.shift();             // elimina del inicio
frutas.splice(1, 1, "kiwi"); // reemplaza 1 elemento en índice 1</code></pre>

<h2>Búsqueda</h2>
<p>La <strong>búsqueda secuencial</strong> (lineal) recorre el array elemento por elemento hasta encontrar el valor buscado. Su coste es O(n): en el peor caso revisa todos los elementos. JavaScript ofrece métodos como <code>indexOf</code>, <code>find</code> o <code>includes</code> que implementan esta búsqueda internamente.</p>
<pre><code>const nums = [3, 7, 1, 9, 4];
nums.includes(7);           // true
nums.indexOf(9);            // 3 (índice)
nums.indexOf(99);           // -1 (no encontrado)
nums.find(x => x > 5);     // 7 (primer elemento que cumple)
nums.findIndex(x => x > 5);// 1 (índice del primero que cumple)</code></pre>

<h2>Transformación (no mutan el original)</h2>
<p>Los métodos <code>map</code>, <code>filter</code> y <code>reduce</code> son los más potentes de los arrays. <code>map</code> transforma cada elemento. <code>filter</code> selecciona elementos según una condición. <code>reduce</code> combina todos en un único valor. Ninguno modifica el array original, sino que devuelven uno nuevo. Se pueden encadenar para construir pipelines de procesamiento de datos.</p>
<pre><code>const nums = [1, 2, 3, 4, 5];
nums.map(x => x * 2);           // [2,4,6,8,10]
nums.filter(x => x % 2 === 0);  // [2,4]
nums.reduce((acc, x) => acc + x, 0); // 15
nums.slice(1, 3);               // [2,3] (del índice 1 al 2)

// Ordenar (muta el array!)
const copia = [...nums].sort((a, b) => a - b); // ascendente
const desc  = [...nums].sort((a, b) => b - a); // descendente</code></pre>

<h2>Arrays 2D (matrices)</h2>
<p>Los <strong>arrays bidimensionales</strong> (matrices) se pueden pensar como tablas con filas y columnas. En JavaScript son arrays de arrays. Para acceder a un elemento se usan dos índices: primero la fila, luego la columna. Para recorrerlos completos se necesitan <strong>dos bucles anidados</strong>: el exterior para las filas y el interior para las columnas.</p>
<pre><code>const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz[1][2]); // 6 (fila 1, columna 2)

// Recorrer con bucles anidados
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    process.stdout.write(matriz[i][j] + "\\t");
  }
  console.log();
}</code></pre>
`,

  python: `
<h2>Listas: crear y acceder</h2>
<pre><code>nums = [3, 7, 1, 9, 4, 6, 2, 8, 5]
print(nums[0])        # 3
print(nums[-1])       # 5 (índice negativo desde el final)
print(len(nums))      # 9

# Slicing [inicio:fin:paso]
print(nums[1:4])      # [7, 1, 9]
print(nums[:3])       # [3, 7, 1]
print(nums[::2])      # [3, 1, 4, 2, 5] (cada 2)
print(nums[::-1])     # invertido</code></pre>

<h2>Métodos de lista</h2>
<pre><code>frutas = ["manzana", "banana"]
frutas.append("cereza")         # añade al final
frutas.insert(0, "aguacate")    # inserta en posición 0
frutas.remove("banana")         # elimina primera ocurrencia
del frutas[0]                   # elimina por índice
popped = frutas.pop()           # elimina y devuelve el último
frutas.sort()                   # ordena in-place
frutas.reverse()                # invierte in-place
copia = sorted(frutas)          # devuelve nueva lista ordenada</code></pre>

<h2>Búsqueda y estadísticas</h2>
<pre><code>nums = [3, 7, 1, 9, 4]
7 in nums           # True
nums.index(9)       # 3
max(nums)           # 9
min(nums)           # 1
sum(nums)           # 24</code></pre>

<h2>Comprensiones de lista</h2>
<pre><code>cuadrados = [x**2 for x in range(1, 11)]
pares = [x for x in range(20) if x % 2 == 0]
dobles_pares = [x*2 for x in range(10) if x % 2 == 0]</code></pre>

<h2>Listas 2D (matrices)</h2>
<pre><code>matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]
print(matriz[1][2])  # 6

for fila in matriz:
    for elem in fila:
        print(elem, end="\\t")
    print()</code></pre>
`,

  java: `
<h2>Arrays básicos</h2>
<pre><code>int[] nums = {3, 7, 1, 9, 4, 6, 2, 8, 5};
System.out.println(nums[0]);       // 3
System.out.println(nums.length);   // 9

// Declarar y asignar
int[] arr = new int[5];  // todos 0
arr[0] = 10;</code></pre>

<h2>Arrays.sort y Arrays.stream</h2>
<pre><code>import java.util.Arrays;

int[] nums = {3, 7, 1, 9, 4};
Arrays.sort(nums);  // ordena in-place
System.out.println(Arrays.toString(nums));  // [1, 3, 4, 7, 9]

int max  = Arrays.stream(nums).max().getAsInt();  // 9
int min  = Arrays.stream(nums).min().getAsInt();  // 1
int suma = Arrays.stream(nums).sum();             // 24</code></pre>

<h2>ArrayList (tamaño dinámico)</h2>
<pre><code>import java.util.ArrayList;
import java.util.Collections;

ArrayList&lt;Integer&gt; lista = new ArrayList&lt;&gt;();
lista.add(5); lista.add(3); lista.add(8);
lista.get(0);       // 5
lista.size();       // 3
lista.remove(0);    // elimina índice 0
lista.contains(8);  // true
Collections.sort(lista);      // ordena
Collections.reverse(lista);   // invierte</code></pre>

<h2>Arrays 2D</h2>
<pre><code>int[][] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
System.out.println(matriz[1][2]);  // 6

for (int[] fila : matriz) {
    for (int elem : fila) {
        System.out.printf("%3d", elem);
    }
    System.out.println();
}</code></pre>
`,

  cpp: `
<h2>Arrays estáticos</h2>
<pre><code>int nums[] = {3, 7, 1, 9, 4, 6, 2, 8, 5};
int tam = sizeof(nums) / sizeof(nums[0]);  // 9
cout &lt;&lt; nums[0] &lt;&lt; endl;  // 3</code></pre>

<h2>std::vector (preferido)</h2>
<pre><code>#include &lt;vector&gt;
vector&lt;int&gt; v = {3, 7, 1, 9, 4};
v.push_back(6);     // añade al final
v.pop_back();       // elimina del final
v.size();           // tamaño
v.at(2);            // acceso con comprobación de límites</code></pre>

<h2>Algoritmos STL</h2>
<pre><code>#include &lt;algorithm&gt;
#include &lt;numeric&gt;

sort(v.begin(), v.end());           // ascendente
sort(v.begin(), v.end(), greater&lt;int&gt;()); // descendente
int mx = *max_element(v.begin(), v.end());
int mn = *min_element(v.begin(), v.end());
int suma = accumulate(v.begin(), v.end(), 0);

// Buscar
auto it = find(v.begin(), v.end(), 7);
if (it != v.end()) cout &lt;&lt; "Encontrado en " &lt;&lt; distance(v.begin(), it);</code></pre>

<h2>Vectores 2D (matrices)</h2>
<pre><code>vector&lt;vector&lt;int&gt;&gt; matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
cout &lt;&lt; matriz[1][2] &lt;&lt; endl;  // 6

for (auto& fila : matriz) {
    for (int elem : fila) {
        cout &lt;&lt; elem &lt;&lt; "\t";
    }
    cout &lt;&lt; endl;
}</code></pre>
`,

  csharp: `
<h2>Arrays</h2>
<pre><code>int[] nums = {3, 7, 1, 9, 4, 6, 2, 8, 5};
Console.WriteLine(nums[0]);       // 3
Console.WriteLine(nums.Length);   // 9

int[] arr = new int[5];  // todos 0</code></pre>

<h2>List&lt;T&gt; (tamaño dinámico)</h2>
<pre><code>var lista = new List&lt;int&gt; {3, 7, 1, 9, 4};
lista.Add(6);
lista.Remove(1);        // elimina primer 1
lista.RemoveAt(0);      // elimina índice 0
lista.Contains(7);      // true
lista.Count;            // tamaño
lista.Sort();           // ordena in-place
lista.Reverse();        // invierte</code></pre>

<h2>LINQ para búsqueda y estadísticas</h2>
<pre><code>using System.Linq;

int[] nums = {3, 7, 1, 9, 4};
nums.Max();         // 9
nums.Min();         // 1
nums.Sum();         // 24
nums.Average();     // 4.8
nums.Contains(7);   // true
nums.Where(x => x > 5).ToArray();  // [7, 9]
Array.Sort(nums);   // ordena in-place</code></pre>

<h2>Arrays 2D</h2>
<pre><code>int[,] matriz = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
Console.WriteLine(matriz[1, 2]);  // 6

for (int i = 0; i &lt; 3; i++) {
    for (int j = 0; j &lt; 3; j++) {
        Console.Write($"{matriz[i,j],3}");
    }
    Console.WriteLine();
}</code></pre>
`,
};

const exercises = [
  {
    id: 'arr-1',
    title: 'Estadísticas de un array',
    description: 'Calcula el máximo, mínimo, suma y media de un array de números.',
    instructions: 'Dado el array [3, 7, 1, 9, 4, 6, 2, 8, 5], calcula e imprime: el valor máximo, mínimo, la suma total y la media. Usa funciones/métodos del lenguaje (no calcules a mano con bucles si hay una función disponible).',
    hints: ['Busca funciones como max(), min(), sum() en tu lenguaje', 'Media = suma / cantidad de elementos'],
    expectedConcept: 'Student should use built-in functions/methods to find max, min, sum, and average. Should NOT manually loop through all elements if library functions are available.',
  },
  {
    id: 'arr-2',
    title: 'Buscar un elemento',
    description: 'Implementa búsqueda lineal en un array sin usar funciones de búsqueda del lenguaje.',
    instructions: 'Dado el array [3, 7, 1, 9, 4, 6, 2, 8, 5] y el número 9, implementa una búsqueda lineal usando un bucle. Imprime el índice donde se encontró o -1 si no está. NO uses funciones de búsqueda nativas (indexOf, find, etc.).',
    hints: ['Recorre el array con un for', 'Compara cada elemento con el buscado', 'Si encuentras, guarda el índice y para (break)'],
    expectedConcept: 'Student must implement linear search manually with a loop and comparison, without using indexOf, find, or equivalent built-in search methods.',
  },
  {
    id: 'arr-3',
    title: 'Invertir un array',
    description: 'Invierte el orden de los elementos de un array sin usar reverse().',
    instructions: 'Dado el array [1, 2, 3, 4, 5], inviértelo SIN usar funciones reverse() nativas. Usa un bucle que intercambie elementos desde los extremos hacia el centro. Imprime el array original y el invertido.',
    hints: ['Intercambia arr[0] con arr[n-1], arr[1] con arr[n-2]...', 'El bucle va hasta la mitad (i < longitud/2)'],
    expectedConcept: 'Student must use a loop swapping elements from both ends toward the center, without built-in reverse functions.',
  },
  {
    id: 'arr-4',
    title: 'Ordenación burbuja',
    description: 'Implementa el algoritmo de ordenación burbuja (bubble sort).',
    instructions: 'Dado el array [5, 3, 8, 1, 9, 2, 7, 4, 6], implementa bubble sort con bucles anidados. Imprime el array antes y después. El algoritmo compara pares adyacentes e intercambia si están desordenados, repitiendo hasta que esté ordenado.',
    hints: ['Dos bucles: exterior (pasadas) e interior (comparaciones)', 'Si arr[j] > arr[j+1]: intercambiar', 'El bucle interior va hasta n-i-1 (los últimos ya están ordenados)'],
    expectedConcept: 'Student must implement bubble sort with nested loops, comparing adjacent pairs and swapping. Cannot use built-in sort functions.',
  },
  {
    id: 'arr-5',
    title: 'Contar ocurrencias',
    description: 'Cuenta cuántas veces aparece cada elemento en un array.',
    instructions: 'Dado el array [1, 3, 2, 3, 1, 5, 3, 2, 1], cuenta cuántas veces aparece cada número e imprime el resultado. Muestra los números únicos y su frecuencia.',
    hints: ['Usa un objeto/diccionario/mapa para guardar las frecuencias', 'Recorre el array e incrementa el contador de cada valor'],
    expectedConcept: 'Student should use a hash map/dictionary/object to count frequencies of each element, demonstrating understanding of key-value data structures.',
  },
  {
    id: 'arr-6',
    title: 'Suma de filas de una matriz',
    description: 'Calcula la suma de cada fila de una matriz 3x3.',
    instructions: 'Dada la matriz 3x3 [[1,2,3],[4,5,6],[7,8,9]], usa bucles anidados para calcular e imprimir la suma de cada fila y la suma total.',
    hints: ['Bucle exterior: filas', 'Bucle interior: suma los elementos de la fila', 'Acumula también el total'],
    expectedConcept: 'Student must use nested loops to iterate over a 2D array (matrix), summing each row and total.',
  },
  {
    id: 'arr-7',
    title: 'Contar valores mayores que R',
    description: 'Crea un array de valores y cuenta cuántos son mayores o iguales a un umbral R.',
    instructions: 'Crea un array con 15 números reales (entre 0.0 y 1.0). Dado R=0.5, muestra cuántos valores del array son mayores o iguales a R.',
    hints: ['Recorre el array con un bucle', 'if (arr[i] >= R): contador++', 'Imprime el contador al final'],
    expectedConcept: 'Student must iterate through an array and count elements meeting a threshold condition using a counter variable.',
  },
  {
    id: 'arr-8',
    title: 'Copiar array al revés',
    description: 'Copia los valores de un array en un segundo array en orden inverso.',
    instructions: 'Crea un array con los números del 1 al 10. Crea un segundo array del mismo tamaño y copia los valores del primero al segundo en orden inverso (el primero del segundo debe ser 10, el último 1). Muestra ambos arrays.',
    hints: ['array2[i] = array1[n-1-i]', 'El bucle va de 0 a n-1', 'Puedes usar también un segundo índice que empieza por el final'],
    expectedConcept: 'Student must copy an array in reverse order into a second array using index arithmetic.',
  },
  {
    id: 'arr-9',
    title: 'Tablas de multiplicar en matriz 10×10',
    description: 'Rellena una matriz 10×10 con las tablas de multiplicar del 1 al 10.',
    instructions: 'Crea una matriz 10×10. Rellénala con bucles anidados de forma que la celda [i][j] = (i+1) × (j+1). Muestra la matriz formateada por pantalla.',
    hints: ['Dos bucles anidados para rellenar: matriz[i][j] = (i+1) * (j+1)', 'Usa tabulaciones o espacios para alinear la salida'],
    expectedConcept: 'Student must use nested loops to fill a 2D array with multiplication table values and display it formatted.',
  },
  {
    id: 'arr-10',
    title: 'Notas de alumnos (matriz)',
    description: 'Calcula estadísticas de notas a partir de una matriz de alumnos × asignaturas.',
    instructions: 'Crea una matriz de 4 alumnos × 5 asignaturas con notas entre 0 y 10 (valores fijos). Con bucles anidados, muestra para cada alumno: su nota media, la nota máxima y la mínima.',
    hints: ['Bucle exterior: alumnos (filas)', 'Bucle interior: asignaturas (columnas)', 'Para cada alumno: acumula, busca max y min de sus notas'],
    expectedConcept: 'Student must use nested loops to process a 2D array row by row, computing per-row statistics (average, max, min).',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'arr-1': `const nums = [4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9];\n\n// Recorre con bucle y muestra cada elemento\nfor (let i = 0; i < nums.length; i++) {\n  // imprime nums[i]\n}`,
    'arr-2': `const nums = [4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9];\nlet suma = 0;\n\n// Suma todos los elementos con un bucle\n\nconsole.log("Suma:", suma);`,
    'arr-3': `const nums = [4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9];\nlet max = nums[0];\nlet min = nums[0];\n\n// Recorre desde índice 1 buscando max y min\n// (NO uses Math.max/min)\n\nconsole.log("Máximo:", max, "| Mínimo:", min);`,
    'arr-4': `const nums = [3, -1, 7, -4, 2, -8, 5, -3, 9, -6, 4, -2, 8, -5, 1, -7, 6, -9, 0, -10];\nlet sumaPos = 0, sumaNeg = 0;\n\n// Clasifica y acumula\n\nconsole.log("Suma positivos:", sumaPos);\nconsole.log("Suma negativos (abs):", sumaNeg);`,
    'arr-5': `const nums = [1.5, 3.2, 7.8, 2.1, 9.4, 0.6, 5.5, 4.3, 8.9, 6.7,\n             3.8, 7.1, 2.9, 5.0, 1.2, 8.3, 4.6, 9.1, 0.4, 6.2];\nlet media = 0;\n\n// Calcula la media\n\nconsole.log("Media:", media);`,
    'arr-6': `// Array1: números del 1 al 10\nconst arr1 = Array.from({length: 10}, (_, i) => i + 1);\nconst arr2 = new Array(10);\n\n// Copia arr1 en arr2 en orden inverso\n\nconsole.log("arr1:", arr1);\nconsole.log("arr2:", arr2);`,
    'arr-7': `const nums = [0.1, 0.8, 0.3, 0.9, 0.5, 0.2, 0.7, 0.6, 0.4, 0.95, 0.15, 0.75, 0.35, 0.85, 0.55];\nconst R = 0.5;\nlet contador = 0;\n\n// Cuenta cuántos >= R\n\nconsole.log(\`Valores >= \${R}: \${contador}\`);`,
    'arr-8': `const arr = [5, 3, 8, 1, 9, 2, 7, 4, 6];\nconsole.log("Original:", [...arr]);\n\n// Bubble sort con bucles anidados (sin .sort())\nfor (let i = 0; i < arr.length - 1; i++) {\n  for (let j = 0; j < arr.length - 1 - i; j++) {\n    // compara arr[j] y arr[j+1], intercambia si hace falta\n  }\n}\n\nconsole.log("Ordenado:", arr);`,
    'arr-9': `const matriz = Array.from({length: 10}, () => new Array(10).fill(0));\n\n// Rellena: matriz[i][j] = (i+1) * (j+1)\nfor (let i = 0; i < 10; i++) {\n  for (let j = 0; j < 10; j++) {\n    // rellena\n  }\n  console.log(matriz[i].join("\\t"));\n}`,
    'arr-10': `const notas = [\n  [8, 7, 9, 6, 8],\n  [5, 6, 4, 7, 5],\n  [9, 10, 8, 9, 10],\n  [3, 5, 6, 4, 5],\n];\n\nfor (let i = 0; i < notas.length; i++) {\n  let suma = 0, max = notas[i][0], min = notas[i][0];\n  // calcula suma, max y min del alumno i\n  console.log(\`Alumno \${i+1}: media=\${(suma/notas[i].length).toFixed(1)}, max=\${max}, min=\${min}\`);\n}`,
  },
  python: {
    'arr-1': `nums = [4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9]\n\nfor i in range(len(nums)):\n    pass  # imprime nums[i]`,
    'arr-2': `nums = [4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9]\nsuma = 0\n\n# Suma con bucle\n\nprint("Suma:", suma)`,
    'arr-3': `nums = [4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9]\nmaximo = nums[0]\nminimo = nums[0]\n\n# Busca max y min con bucle (sin max()/min())\n\nprint(f"Máximo: {maximo} | Mínimo: {minimo}")`,
    'arr-4': `nums = [3,-1,7,-4,2,-8,5,-3,9,-6,4,-2,8,-5,1,-7,6,-9,0,-10]\nsuma_pos = 0\nsuma_neg = 0\n\n# Clasifica y acumula\n\nprint(f"Suma positivos: {suma_pos}")\nprint(f"Suma negativos (abs): {suma_neg}")`,
    'arr-5': `nums = [1.5,3.2,7.8,2.1,9.4,0.6,5.5,4.3,8.9,6.7,3.8,7.1,2.9,5.0,1.2,8.3,4.6,9.1,0.4,6.2]\nmedia = 0\n\n# Calcula la media\n\nprint(f"Media: {media:.2f}")`,
    'arr-6': `arr1 = list(range(1, 11))\narr2 = [0] * 10\n\n# Copia arr1 en arr2 al revés\n\nprint("arr1:", arr1)\nprint("arr2:", arr2)`,
    'arr-7': `nums = [0.1,0.8,0.3,0.9,0.5,0.2,0.7,0.6,0.4,0.95,0.15,0.75,0.35,0.85,0.55]\nR = 0.5\ncontador = 0\n\n# Cuenta cuántos >= R\n\nprint(f"Valores >= {R}: {contador}")`,
    'arr-8': `arr = [5, 3, 8, 1, 9, 2, 7, 4, 6]\nprint("Original:", arr[:])\n\n# Bubble sort\nfor i in range(len(arr) - 1):\n    for j in range(len(arr) - 1 - i):\n        pass  # compara e intercambia\n\nprint("Ordenado:", arr)`,
    'arr-9': `matriz = [[0]*10 for _ in range(10)]\n\nfor i in range(10):\n    for j in range(10):\n        pass  # matriz[i][j] = (i+1)*(j+1)\n    print(matriz[i])`,
    'arr-10': `notas = [\n    [8, 7, 9, 6, 8],\n    [5, 6, 4, 7, 5],\n    [9, 10, 8, 9, 10],\n    [3, 5, 6, 4, 5],\n]\n\nfor i, alumno in enumerate(notas):\n    suma = maximo = minimo = 0  # calcula correctamente\n    print(f"Alumno {i+1}: media={suma/len(alumno):.1f}, max={maximo}, min={minimo}")`,
  },
  java: {
    'arr-1': `public class Main {\n    public static void main(String[] args) {\n        double[] nums = {4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9};\n        for (int i = 0; i < nums.length; i++) {\n            // imprime nums[i]\n        }\n    }\n}`,
    'arr-2': `public class Main {\n    public static void main(String[] args) {\n        double[] nums = {4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9};\n        double suma = 0;\n        // suma con bucle\n        System.out.println("Suma: " + suma);\n    }\n}`,
    'arr-3': `public class Main {\n    public static void main(String[] args) {\n        double[] nums = {4.5, 7.2, 1.1, 9.8, 3.3, 6.6, 2.0, 8.4, 5.7, 0.9};\n        double max = nums[0], min = nums[0];\n        // busca max y min sin Arrays\n        System.out.println("Max: " + max + " | Min: " + min);\n    }\n}`,
    'arr-4': `public class Main {\n    public static void main(String[] args) {\n        int[] nums = {3,-1,7,-4,2,-8,5,-3,9,-6,4,-2,8,-5,1,-7,6,-9,0,-10};\n        int sumaPos = 0, sumaNeg = 0;\n        // clasifica y acumula\n        System.out.println("Positivos: " + sumaPos);\n        System.out.println("Negativos: " + sumaNeg);\n    }\n}`,
    'arr-5': `public class Main {\n    public static void main(String[] args) {\n        double[] nums = {1.5,3.2,7.8,2.1,9.4,0.6,5.5,4.3,8.9,6.7,3.8,7.1,2.9,5.0,1.2,8.3,4.6,9.1,0.4,6.2};\n        double media = 0;\n        // calcula media\n        System.out.printf("Media: %.2f%n", media);\n    }\n}`,
    'arr-6': `import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr1 = new int[10];\n        for (int i = 0; i < 10; i++) arr1[i] = i + 1;\n        int[] arr2 = new int[10];\n        // copia al revés\n        System.out.println(Arrays.toString(arr1));\n        System.out.println(Arrays.toString(arr2));\n    }\n}`,
    'arr-7': `public class Main {\n    public static void main(String[] args) {\n        double[] nums = {0.1,0.8,0.3,0.9,0.5,0.2,0.7,0.6,0.4,0.95,0.15,0.75,0.35,0.85,0.55};\n        double R = 0.5;\n        int contador = 0;\n        // cuenta >= R\n        System.out.println("Valores >= " + R + ": " + contador);\n    }\n}`,
    'arr-8': `import java.util.Arrays;\npublic class Main {\n    public static void main(String[] args) {\n        int[] arr = {5, 3, 8, 1, 9, 2, 7, 4, 6};\n        System.out.println("Original: " + Arrays.toString(arr));\n        // Bubble sort\n        for (int i = 0; i < arr.length - 1; i++)\n            for (int j = 0; j < arr.length - 1 - i; j++)\n                if (arr[j] > arr[j+1]) { int t = arr[j]; arr[j]=arr[j+1]; arr[j+1]=t; }\n        System.out.println("Ordenado: " + Arrays.toString(arr));\n    }\n}`,
    'arr-9': `public class Main {\n    public static void main(String[] args) {\n        int[][] m = new int[10][10];\n        for (int i = 0; i < 10; i++) {\n            for (int j = 0; j < 10; j++) {\n                m[i][j] = 0; // rellena correctamente\n            }\n            // muestra la fila i\n        }\n    }\n}`,
    'arr-10': `public class Main {\n    public static void main(String[] args) {\n        int[][] notas = {{8,7,9,6,8},{5,6,4,7,5},{9,10,8,9,10},{3,5,6,4,5}};\n        for (int i = 0; i < notas.length; i++) {\n            double suma = 0; int max = notas[i][0], min = notas[i][0];\n            // calcula\n            System.out.printf("Alumno %d: media=%.1f, max=%d, min=%d%n", i+1, suma/notas[i].length, max, min);\n        }\n    }\n}`,
  },
  cpp: {
    'arr-1': `#include <iostream>\nusing namespace std;\nint main() {\n    double nums[] = {4.5,7.2,1.1,9.8,3.3,6.6,2.0,8.4,5.7,0.9};\n    for (int i = 0; i < 10; i++) cout << nums[i] << endl;\n    return 0;\n}`,
    'arr-2': `#include <iostream>\nusing namespace std;\nint main() {\n    double nums[] = {4.5,7.2,1.1,9.8,3.3,6.6,2.0,8.4,5.7,0.9};\n    double suma = 0;\n    for (double x : nums) { /* suma */ }\n    cout << "Suma: " << suma << endl;\n    return 0;\n}`,
    'arr-3': `#include <iostream>\nusing namespace std;\nint main() {\n    double nums[] = {4.5,7.2,1.1,9.8,3.3,6.6,2.0,8.4,5.7,0.9};\n    double mx = nums[0], mn = nums[0];\n    for (int i = 1; i < 10; i++) { /* busca */ }\n    cout << "Max: " << mx << " | Min: " << mn << endl;\n    return 0;\n}`,
    'arr-4': `#include <iostream>\nusing namespace std;\nint main() {\n    int nums[] = {3,-1,7,-4,2,-8,5,-3,9,-6,4,-2,8,-5,1,-7,6,-9,0,-10};\n    int sp = 0, sn = 0;\n    for (int x : nums) { /* clasifica */ }\n    cout << "Pos: " << sp << " Neg: " << sn << endl;\n    return 0;\n}`,
    'arr-5': `#include <iostream>\nusing namespace std;\nint main() {\n    double nums[] = {1.5,3.2,7.8,2.1,9.4,0.6,5.5,4.3,8.9,6.7,3.8,7.1,2.9,5.0,1.2,8.3,4.6,9.1,0.4,6.2};\n    double media = 0;\n    // calcula media\n    cout << "Media: " << media << endl;\n    return 0;\n}`,
    'arr-6': `#include <iostream>\nusing namespace std;\nint main() {\n    int arr1[10], arr2[10];\n    for (int i = 0; i < 10; i++) arr1[i] = i+1;\n    for (int i = 0; i < 10; i++) arr2[i] = 0; // copia al revés\n    for (int x : arr1) cout << x << " "; cout << endl;\n    for (int x : arr2) cout << x << " "; cout << endl;\n    return 0;\n}`,
    'arr-7': `#include <iostream>\nusing namespace std;\nint main() {\n    double nums[] = {0.1,0.8,0.3,0.9,0.5,0.2,0.7,0.6,0.4,0.95,0.15,0.75,0.35,0.85,0.55};\n    double R = 0.5; int cnt = 0;\n    for (double x : nums) { /* cuenta */ }\n    cout << "Valores >= " << R << ": " << cnt << endl;\n    return 0;\n}`,
    'arr-8': `#include <iostream>\nusing namespace std;\nint main() {\n    int arr[] = {5,3,8,1,9,2,7,4,6}; int n=9;\n    // Bubble sort\n    for (int i=0;i<n-1;i++)\n        for (int j=0;j<n-1-i;j++)\n            if (arr[j]>arr[j+1]) { int t=arr[j]; arr[j]=arr[j+1]; arr[j+1]=t; }\n    for (int x : arr) cout << x << " ";\n    return 0;\n}`,
    'arr-9': `#include <iostream>\nusing namespace std;\nint main() {\n    int m[10][10];\n    for (int i=0;i<10;i++) {\n        for (int j=0;j<10;j++) m[i][j]=0; // rellena\n        for (int j=0;j<10;j++) cout << m[i][j] << "\\t";\n        cout << endl;\n    }\n    return 0;\n}`,
    'arr-10': `#include <iostream>\nusing namespace std;\nint main() {\n    int notas[4][5] = {{8,7,9,6,8},{5,6,4,7,5},{9,10,8,9,10},{3,5,6,4,5}};\n    for (int i=0;i<4;i++) {\n        double s=0; int mx=notas[i][0],mn=notas[i][0];\n        // calcula\n        printf("Alumno %d: media=%.1f max=%d min=%d\\n",i+1,s/5,mx,mn);\n    }\n    return 0;\n}`,
  },
  csharp: {
    'arr-1': `using System;\nclass Program {\n    static void Main() {\n        double[] nums = {4.5,7.2,1.1,9.8,3.3,6.6,2.0,8.4,5.7,0.9};\n        for (int i = 0; i < nums.Length; i++) Console.WriteLine(nums[i]);\n    }\n}`,
    'arr-2': `using System;\nclass Program {\n    static void Main() {\n        double[] nums = {4.5,7.2,1.1,9.8,3.3,6.6,2.0,8.4,5.7,0.9};\n        double suma = 0;\n        foreach (double x in nums) { /* suma */ }\n        Console.WriteLine($"Suma: {suma}");\n    }\n}`,
    'arr-3': `using System;\nclass Program {\n    static void Main() {\n        double[] nums = {4.5,7.2,1.1,9.8,3.3,6.6,2.0,8.4,5.7,0.9};\n        double max = nums[0], min = nums[0];\n        for (int i = 1; i < nums.Length; i++) { /* busca */ }\n        Console.WriteLine($"Max: {max} | Min: {min}");\n    }\n}`,
    'arr-4': `using System;\nclass Program {\n    static void Main() {\n        int[] nums = {3,-1,7,-4,2,-8,5,-3,9,-6,4,-2,8,-5,1,-7,6,-9,0,-10};\n        int sp = 0, sn = 0;\n        foreach (int x in nums) { /* clasifica */ }\n        Console.WriteLine($"Positivos: {sp} | Negativos: {sn}");\n    }\n}`,
    'arr-5': `using System;\nclass Program {\n    static void Main() {\n        double[] nums = {1.5,3.2,7.8,2.1,9.4,0.6,5.5,4.3,8.9,6.7,3.8,7.1,2.9,5.0,1.2,8.3,4.6,9.1,0.4,6.2};\n        double media = 0;\n        // calcula media\n        Console.WriteLine($"Media: {media:F2}");\n    }\n}`,
    'arr-6': `using System;\nclass Program {\n    static void Main() {\n        int[] arr1 = new int[10];\n        for (int i=0;i<10;i++) arr1[i]=i+1;\n        int[] arr2 = new int[10];\n        // copia al revés\n        Console.WriteLine(string.Join(", ", arr1));\n        Console.WriteLine(string.Join(", ", arr2));\n    }\n}`,
    'arr-7': `using System;\nclass Program {\n    static void Main() {\n        double[] nums = {0.1,0.8,0.3,0.9,0.5,0.2,0.7,0.6,0.4,0.95,0.15,0.75,0.35,0.85,0.55};\n        double R = 0.5; int cnt = 0;\n        foreach (double x in nums) { /* cuenta */ }\n        Console.WriteLine($"Valores >= {R}: {cnt}");\n    }\n}`,
    'arr-8': `using System;\nclass Program {\n    static void Main() {\n        int[] arr = {5,3,8,1,9,2,7,4,6};\n        Console.WriteLine("Original: " + string.Join(", ", arr));\n        for (int i=0;i<arr.Length-1;i++)\n            for (int j=0;j<arr.Length-1-i;j++)\n                if (arr[j]>arr[j+1]) { int t=arr[j]; arr[j]=arr[j+1]; arr[j+1]=t; }\n        Console.WriteLine("Ordenado: " + string.Join(", ", arr));\n    }\n}`,
    'arr-9': `using System;\nclass Program {\n    static void Main() {\n        int[,] m = new int[10,10];\n        for (int i=0;i<10;i++) {\n            for (int j=0;j<10;j++) m[i,j]=0; // rellena\n            for (int j=0;j<10;j++) Console.Write($"{m[i,j],4}");\n            Console.WriteLine();\n        }\n    }\n}`,
    'arr-10': `using System;\nclass Program {\n    static void Main() {\n        int[,] notas = {{8,7,9,6,8},{5,6,4,7,5},{9,10,8,9,10},{3,5,6,4,5}};\n        for (int i=0;i<4;i++) {\n            double s=0; int mx=notas[i,0],mn=notas[i,0];\n            // calcula\n            Console.WriteLine($"Alumno {i+1}: media={s/5:F1} max={mx} min={mn}");\n        }\n    }\n}`,
  },
};

function buildLesson(lang: string, theoryContent: string, title: string, desc: string) {
  return {
    id: `arrays-${lang}`,
    title,
    description: desc,
    theory: theoryContent,
    topics: ['arrays', 'búsqueda', 'ordenación', 'matrices'],
    exercises: exercises.map(ex => ({
      ...ex,
      id: `${ex.id}-${lang}`,
      starterCode: starterCodes[lang][ex.id] ?? '',
    })),
  };
}

export const arraysTopic: Topic = {
  id: 'arrays',
  title: 'Arrays',
  icon: 'list',
  description: 'Arrays/listas, búsqueda, ordenación, matrices y operaciones comunes.',
  lessons: {
    javascript: buildLesson('javascript', theory.javascript, 'Arrays en JavaScript', 'Arrays, métodos de búsqueda, transformación y matrices.') as any,
    python: buildLesson('python', theory.python, 'Listas en Python', 'Listas, slicing, comprensiones y matrices.') as any,
    java: buildLesson('java', theory.java, 'Arrays en Java', 'Arrays, ArrayList, streams y matrices.') as any,
    cpp: buildLesson('cpp', theory.cpp, 'Vectores en C++', 'Arrays, std::vector, algoritmos STL y matrices.') as any,
    csharp: buildLesson('csharp', theory.csharp, 'Arrays en C#', 'Arrays, List<T>, LINQ y matrices.') as any,
  },
};

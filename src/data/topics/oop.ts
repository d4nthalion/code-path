import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>Clases y constructores</h2>
<p>La <strong>Programación Orientada a Objetos (POO)</strong> organiza el código en torno a <strong>objetos</strong> que combinan datos (atributos) y comportamiento (métodos). Una <strong>clase</strong> es como un molde o plantilla: define cómo serán todos los objetos de ese tipo. Un <strong>objeto</strong> es una instancia concreta de una clase, creada con el operador <code>new</code>. El <strong>constructor</strong> es el método especial que se ejecuta automáticamente al crear el objeto y se usa para inicializar sus atributos.</p>
<pre><code>class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    return \`Hola, soy \${this.nombre}\`;
  }

  toString() {
    return \`Persona(\${this.nombre}, \${this.edad})\`;
  }
}

const ana = new Persona("Ana", 25);
console.log(ana.saludar());</code></pre>

<h2>Encapsulamiento (campos privados)</h2>
<p>El <strong>encapsulamiento</strong> consiste en ocultar los detalles internos de una clase, haciendo los atributos <strong>privados</strong>, y proporcionar métodos públicos controlados para acceder o modificarlos. Esto protege la integridad de los datos: nadie puede modificar el saldo directamente desde fuera, solo a través de los métodos que validan la operación. Los <strong>getters</strong> permiten leer un atributo privado; los <strong>setters</strong> permiten modificarlo con validaciones.</p>
<pre><code>class CuentaBancaria {
  #saldo = 0;  // campo privado (ES2022)

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(cantidad) {
    if (cantidad <= 0) throw new Error("Cantidad inválida");
    this.#saldo += cantidad;
  }

  retirar(cantidad) {
    if (cantidad > this.#saldo) throw new Error("Saldo insuficiente");
    this.#saldo -= cantidad;
  }

  get saldo() { return this.#saldo; }
}</code></pre>

<h2>Herencia</h2>
<p>La <strong>herencia</strong> permite que una clase (subclase o clase hija) tome los atributos y métodos de otra (superclase o clase padre), usando la palabra clave <code>extends</code>. Modela relaciones "es-un": un Perro ES UN Animal. La subclase puede <strong>sobreescribir</strong> (override) métodos de la clase padre para cambiar su comportamiento. <code>super()</code> llama al constructor de la clase padre.</p>
<pre><code>class Animal {
  constructor(nombre) { this.nombre = nombre; }
  sonido() { return "..."; }
  toString() { return \`\${this.constructor.name}(\${this.nombre})\`; }
}

class Perro extends Animal {
  sonido() { return "¡Guau!"; }
  buscar() { return \`\${this.nombre} busca la pelota\`; }
}

class Gato extends Animal {
  sonido() { return "¡Miau!"; }
}

const animales = [new Perro("Rex"), new Gato("Whiskers")];
animales.forEach(a => console.log(\`\${a}: \${a.sonido()}\`));</code></pre>

<h2>Métodos estáticos y getters/setters</h2>
<p>El <strong>polimorfismo</strong> permite tratar objetos de distintas subclases de forma uniforme a través de una referencia de la clase base. Al llamar al mismo método (<code>sonido()</code>) en distintos objetos, cada uno responde diferente según su implementación. Los <strong>métodos estáticos</strong> pertenecen a la clase, no a las instancias; se llaman directamente sobre la clase. Los <strong>getters</strong> se acceden como propiedades (sin paréntesis) aunque internamente ejecutan lógica.</p>
<pre><code>class Circulo {
  constructor(radio) { this._radio = radio; }

  get area() { return Math.PI * this._radio ** 2; }
  get perimetro() { return 2 * Math.PI * this._radio; }

  static desdeDiametro(d) { return new Circulo(d / 2); }
}

const c = Circulo.desdeDiametro(10);
console.log(c.area.toFixed(2));</code></pre>
`,

  python: `
<h2>Clases y constructores</h2>
<pre><code>class Persona:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    def saludar(self):
        return f"Hola, soy {self.nombre}"

    def __str__(self):
        return f"Persona({self.nombre}, {self.edad})"

    def __repr__(self):
        return self.__str__()

ana = Persona("Ana", 25)
print(ana.saludar())</code></pre>

<h2>Encapsulamiento</h2>
<pre><code>class CuentaBancaria:
    def __init__(self, titular, saldo_inicial=0):
        self.titular = titular
        self.__saldo = saldo_inicial  # privado (name mangling)

    def depositar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("Cantidad inválida")
        self.__saldo += cantidad

    def retirar(self, cantidad):
        if cantidad > self.__saldo:
            raise ValueError("Saldo insuficiente")
        self.__saldo -= cantidad

    @property
    def saldo(self):
        return self.__saldo</code></pre>

<h2>Herencia y polimorfismo</h2>
<pre><code>class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def sonido(self):
        return "..."

    def __str__(self):
        return f"{type(self).__name__}({self.nombre})"

class Perro(Animal):
    def sonido(self):
        return "¡Guau!"

class Gato(Animal):
    def sonido(self):
        return "¡Miau!"

animales = [Perro("Rex"), Gato("Whiskers")]
for a in animales:
    print(f"{a}: {a.sonido()}")</code></pre>

<h2>Métodos de clase y estáticos</h2>
<pre><code>class Circulo:
    PI = 3.14159

    def __init__(self, radio):
        self.radio = radio

    @property
    def area(self):
        return self.PI * self.radio ** 2

    @classmethod
    def desde_diametro(cls, d):
        return cls(d / 2)

    @staticmethod
    def es_valido(radio):
        return radio > 0</code></pre>
`,

  java: `
<h2>Clases y encapsulamiento</h2>
<pre><code>public class Persona {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    public String getNombre() { return nombre; }
    public int getEdad() { return edad; }
    public void setNombre(String n) { this.nombre = n; }

    public String saludar() {
        return "Hola, soy " + nombre;
    }

    @Override
    public String toString() {
        return "Persona(" + nombre + ", " + edad + ")";
    }
}</code></pre>

<h2>Herencia y polimorfismo</h2>
<pre><code>public abstract class Animal {
    protected String nombre;
    public Animal(String nombre) { this.nombre = nombre; }
    public abstract String sonido();  // método abstracto

    @Override
    public String toString() {
        return getClass().getSimpleName() + "(" + nombre + ")";
    }
}

public class Perro extends Animal {
    public Perro(String nombre) { super(nombre); }

    @Override
    public String sonido() { return "¡Guau!"; }
}

// Polimorfismo
Animal[] animales = { new Perro("Rex"), new Gato("Whiskers") };
for (Animal a : animales)
    System.out.println(a + ": " + a.sonido());</code></pre>

<h2>Interfaces</h2>
<pre><code>public interface Calculable {
    double calcularArea();
    default String descripcion() {
        return "Área: " + String.format("%.2f", calcularArea());
    }
}

public class Rectangulo implements Calculable {
    private double ancho, alto;
    public Rectangulo(double ancho, double alto) {
        this.ancho = ancho; this.alto = alto;
    }
    @Override
    public double calcularArea() { return ancho * alto; }
}</code></pre>
`,

  cpp: `
<h2>Clases y encapsulamiento</h2>
<pre><code>#include &lt;string&gt;
#include &lt;iostream&gt;
using namespace std;

class Persona {
private:
    string nombre;
    int edad;

public:
    Persona(string nombre, int edad)
        : nombre(nombre), edad(edad) {}

    string getNombre() const { return nombre; }
    int getEdad() const { return edad; }

    string saludar() const {
        return "Hola, soy " + nombre;
    }

    friend ostream& operator<<(ostream& os, const Persona& p) {
        return os << "Persona(" << p.nombre << ", " << p.edad << ")";
    }
};</code></pre>

<h2>Herencia y polimorfismo</h2>
<pre><code>class Animal {
protected:
    string nombre;
public:
    Animal(string n) : nombre(n) {}
    virtual string sonido() const { return "..."; }
    virtual ~Animal() {}  // destructor virtual
    virtual string str() const {
        return string(typeid(*this).name()) + "(" + nombre + ")";
    }
};

class Perro : public Animal {
public:
    Perro(string n) : Animal(n) {}
    string sonido() const override { return "¡Guau!"; }
};

// Polimorfismo con punteros
vector&lt;Animal*&gt; animales = { new Perro("Rex"), new Gato("Whiskers") };
for (auto a : animales) {
    cout &lt;&lt; a-&gt;str() &lt;&lt; ": " &lt;&lt; a-&gt;sonido() &lt;&lt; endl;
    delete a;
}</code></pre>

<h2>Clases abstractas</h2>
<pre><code>class Figura {
public:
    virtual double area() const = 0;  // método puro virtual
    virtual double perimetro() const = 0;
    virtual ~Figura() {}
};</code></pre>
`,

  csharp: `
<h2>Clases y propiedades</h2>
<pre><code>public class Persona {
    public string Nombre { get; set; }
    public int Edad { get; private set; }

    public Persona(string nombre, int edad) {
        Nombre = nombre;
        Edad = edad;
    }

    public string Saludar() => $"Hola, soy {Nombre}";

    public override string ToString() =>
        $"Persona({Nombre}, {Edad})";
}</code></pre>

<h2>Herencia y polimorfismo</h2>
<pre><code>public abstract class Animal {
    public string Nombre { get; protected set; }
    protected Animal(string nombre) { Nombre = nombre; }
    public abstract string Sonido();

    public override string ToString() =>
        $"{GetType().Name}({Nombre})";
}

public class Perro : Animal {
    public Perro(string nombre) : base(nombre) {}
    public override string Sonido() => "¡Guau!";
}

// Polimorfismo
Animal[] animales = { new Perro("Rex"), new Gato("Whiskers") };
foreach (var a in animales)
    Console.WriteLine($"{a}: {a.Sonido()}");</code></pre>

<h2>Interfaces y clases abstractas</h2>
<pre><code>public interface ICalculable {
    double CalcularArea();
    string Descripcion() => $"Área: {CalcularArea():F2}";
}

public abstract class Figura : ICalculable {
    public abstract double CalcularArea();
    public abstract double CalcularPerimetro();
}

public class Rectangulo : Figura {
    public double Ancho { get; }
    public double Alto { get; }
    public Rectangulo(double ancho, double alto) {
        Ancho = ancho; Alto = alto;
    }
    public override double CalcularArea() => Ancho * Alto;
    public override double CalcularPerimetro() => 2 * (Ancho + Alto);
}</code></pre>
`,
};

// ── Exercises from UD8 POO (ApuntesProgramacion) ──
const exercises = [
  {
    id: 'oop-1',
    title: 'Clase Punto',
    description: 'Crea una clase Punto que represente un punto en un plano de dos dimensiones.',
    instructions: 'Crea una clase Punto con dos atributos enteros x e y (coordenadas). Añade un constructor que reciba las coordenadas. Instancia 3 objetos Punto con coordenadas (5,0), (10,10) y (-3,7). Muestra sus coordenadas por pantalla. Luego modifica las coordenadas y vuelve a imprimirlas.',
    hints: ['El constructor recibe x e y y los asigna como atributos (this.x = x o self.x = x)', 'Crea los objetos con new Punto(5,0) o Punto(5,0)', 'Para mostrar: accede a objeto.x y objeto.y'],
    expectedConcept: 'Student must define a class with a constructor that initializes instance attributes, instantiate multiple objects, access their attributes, and modify them.',
  },
  {
    id: 'oop-2',
    title: 'Clase Persona',
    description: 'Crea una clase Persona con datos personales y un método que muestre si es mayor de edad.',
    instructions: 'Crea una clase Persona con los atributos: dni (string), nombre (string), apellidos (string) y edad (int). Añade un constructor con esos parámetros. Crea dos objetos Persona e imprime para cada uno un mensaje del estilo: "[nombre] [apellidos] con DNI [dni] es/no es mayor de edad".',
    hints: ['El método esMayorEdad() devuelve edad >= 18', 'Accede a los atributos con this.nombre (JS/Java/C++) o self.nombre (Python)', 'Usa los atributos dentro del mensaje'],
    expectedConcept: 'Student must define a class with multiple attributes, a constructor that initializes all of them, and a method that uses the attributes to compute a result.',
  },
  {
    id: 'oop-3',
    title: 'Clase Rectángulo',
    description: 'Crea una clase Rectángulo que represente un rectángulo mediante dos coordenadas opuestas.',
    instructions: 'Crea una clase Rectangulo con cuatro atributos enteros: x1, y1 (esquina superior izquierda) y x2, y2 (esquina inferior derecha). Añade métodos:\n  - perimetro() → suma de todos los lados: 2*(|x2-x1| + |y2-y1|)\n  - area() → |x2-x1| * |y2-y1|\nInstancia 2 objetos en (0,0)-(5,5) y (7,9)-(2,3). Muestra coordenadas, perímetro y área.',
    hints: ['Usa Math.abs() / abs() para el valor absoluto', 'ancho = |x2-x1|, alto = |y2-y1|', 'perimetro = 2*(ancho+alto), area = ancho*alto'],
    expectedConcept: 'Student must define a class with 4 attributes, a constructor, and two methods that compute geometric properties using the stored attributes.',
  },
  {
    id: 'oop-4',
    title: 'Clase Artículo',
    description: 'Crea una clase Artículo que represente un producto de una tienda.',
    instructions: 'Crea una clase Articulo con los atributos: nombre (string), precio (double, sin IVA), iva (int, siempre 21) y cuantosQuedan (int). Añade un método pvp() que devuelva el precio de venta al público (precio con IVA = precio * (1 + iva/100)). Crea un artículo, asígnale valores y muestra un mensaje como: "Pijama - Precio: 10€ - IVA: 21% - PVP: 12.10€".',
    hints: ['pvp = precio * (1 + iva/100.0)', 'El IVA es siempre 21, puedes inicializarlo en el constructor', 'Formatea el precio con 2 decimales'],
    expectedConcept: 'Student must define a class with numeric attributes, initialize iva to 21 in constructor, and implement a method that computes the final price including tax.',
  },
  {
    id: 'oop-5',
    title: 'Figuras geométricas con herencia',
    description: 'Jerarquía de clases para figuras usando herencia y polimorfismo.',
    instructions: 'Crea una clase base Figura con un método area() que devuelva 0. Crea Rectangulo(ancho, alto) y Circulo(radio) que hereden de Figura y sobreescriban area(). Crea una lista con varias figuras (mezcla de rectángulos y círculos) e imprime el área de cada una usando polimorfismo (sin saber el tipo concreto).',
    hints: ['Usa extends/hereda de Figura', 'Sobreescribe area() en cada subclase', 'Math.PI (JS), math.pi (Python), Math.PI (Java/C#), M_PI (C++) para π'],
    expectedConcept: 'Student must use class inheritance, method overriding (polymorphism), and demonstrate calling area() through a base class reference on a list of mixed figure types.',
  },
  {
    id: 'oop-6',
    title: 'Empresa y empleados',
    description: 'Modela una empresa con diferentes tipos de empleados usando herencia.',
    instructions: 'Crea clase base Empleado(nombre, salarioBase) con método calcularSalario() que devuelve salarioBase. Crea:\n  - EmpleadoFijo(nombre, salarioBase, bonus): salario = salarioBase + bonus\n  - EmpleadoPorHoras(nombre, precioHora, horas): salario = precioHora × horas\nAmbas subclases deben sobreescribir calcularSalario(). Crea varios empleados de ambos tipos y calcula la nómina total.',
    hints: ['EmpleadoFijo hereda de Empleado con super() en el constructor', 'EmpleadoPorHoras pasa 0 como salarioBase al padre', 'La nómina es la suma de calcularSalario() de todos'],
    expectedConcept: 'Student must implement polymorphic inheritance where calcularSalario() is overridden with different logic in each subclass.',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'oop-1': `class Punto {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n// Instancia 3 puntos con coordenadas (5,0), (10,10) y (-3,7)\nconst p1 = new Punto(5, 0);\nconst p2 = new Punto(10, 10);\nconst p3 = new Punto(-3, 7);\n\n// Muestra las coordenadas\nconsole.log(\`P1: (\${p1.x}, \${p1.y})\`);\n\n// Modifica las coordenadas y vuelve a imprimir`,
    'oop-2': `class Persona {\n  constructor(dni, nombre, apellidos, edad) {\n    this.dni = dni;\n    this.nombre = nombre;\n    this.apellidos = apellidos;\n    this.edad = edad;\n  }\n\n  esMayorEdad() {\n    return this.edad >= 18;\n  }\n}\n\nconst p1 = new Persona("12345678A", "Ana", "García López", 25);\nconst p2 = new Persona("87654321B", "Carlos", "Martínez Ruiz", 16);\n\n// Imprime: "[nombre] [apellidos] con DNI [dni] es/no es mayor de edad"\nconsole.log(\`\${p1.nombre} \${p1.apellidos} con DNI \${p1.dni} \${p1.esMayorEdad() ? "es" : "no es"} mayor de edad\`);\n// Haz lo mismo para p2`,
    'oop-3': `class Rectangulo {\n  constructor(x1, y1, x2, y2) {\n    this.x1 = x1; this.y1 = y1;\n    this.x2 = x2; this.y2 = y2;\n  }\n\n  perimetro() {\n    // 2 * (|x2-x1| + |y2-y1|)\n    return 0;\n  }\n\n  area() {\n    // |x2-x1| * |y2-y1|\n    return 0;\n  }\n}\n\nconst r1 = new Rectangulo(0, 0, 5, 5);\nconst r2 = new Rectangulo(7, 9, 2, 3);\n\nconsole.log(\`R1: (\${r1.x1},\${r1.y1})-(\${r1.x2},\${r1.y2}) | Perím: \${r1.perimetro()} | Área: \${r1.area()}\`);\nconsole.log(\`R2: (\${r2.x1},\${r2.y1})-(\${r2.x2},\${r2.y2}) | Perím: \${r2.perimetro()} | Área: \${r2.area()}\`);`,
    'oop-4': `class Articulo {\n  constructor(nombre, precio, iva = 21, cuantosQuedan) {\n    this.nombre = nombre;\n    this.precio = precio;\n    this.iva = iva;\n    this.cuantosQuedan = cuantosQuedan;\n  }\n\n  pvp() {\n    // precio * (1 + iva/100)\n    return 0;\n  }\n}\n\nconst art = new Articulo("Pijama", 10, 21, 5);\nconsole.log(\`\${art.nombre} - Precio: \${art.precio}€ - IVA: \${art.iva}% - PVP: \${art.pvp().toFixed(2)}€\`);\n\n// Cambia el precio y vuelve a imprimir\nart.precio = 15;\nconsole.log(\`\${art.nombre} - Precio: \${art.precio}€ - IVA: \${art.iva}% - PVP: \${art.pvp().toFixed(2)}€\`);`,
    'oop-5': `class Figura {\n  area() { return 0; }\n}\n\nclass Rectangulo extends Figura {\n  constructor(ancho, alto) {\n    super();\n    this.ancho = ancho;\n    this.alto = alto;\n  }\n  area() { /* implementa: ancho * alto */ }\n}\n\nclass Circulo extends Figura {\n  constructor(radio) {\n    super();\n    this.radio = radio;\n  }\n  area() { /* implementa: Math.PI * radio^2 */ }\n}\n\nconst figuras = [new Rectangulo(5,3), new Circulo(4), new Rectangulo(2,7)];\nfiguras.forEach(f => console.log(\`Área: \${f.area().toFixed(2)}\`));`,
    'oop-6': `class Empleado {\n  constructor(nombre, salarioBase) {\n    this.nombre = nombre;\n    this.salarioBase = salarioBase;\n  }\n  calcularSalario() { return this.salarioBase; }\n}\n\nclass EmpleadoFijo extends Empleado {\n  constructor(nombre, salarioBase, bonus) {\n    super(nombre, salarioBase);\n    this.bonus = bonus;\n  }\n  calcularSalario() { /* salarioBase + bonus */ }\n}\n\nclass EmpleadoPorHoras extends Empleado {\n  constructor(nombre, precioHora, horas) {\n    super(nombre, 0);\n    this.precioHora = precioHora;\n    this.horas = horas;\n  }\n  calcularSalario() { /* precioHora * horas */ }\n}\n\nconst empleados = [\n  new EmpleadoFijo("Ana", 1500, 300),\n  new EmpleadoPorHoras("Luis", 15, 160),\n  new EmpleadoPorHoras("María", 12, 120),\n];\nconst nomina = empleados.reduce((t, e) => t + e.calcularSalario(), 0);\nconsole.log(\`Nómina total: \${nomina}€\`);`,
  },
  python: {
    'oop-1': `class Punto:\n    def __init__(self, x, y):\n        self.x = x\n        self.y = y\n\n# Instancia 3 puntos\np1 = Punto(5, 0)\np2 = Punto(10, 10)\np3 = Punto(-3, 7)\n\n# Muestra coordenadas\nprint(f"P1: ({p1.x}, {p1.y})")\n\n# Modifica y vuelve a imprimir`,
    'oop-2': `class Persona:\n    def __init__(self, dni, nombre, apellidos, edad):\n        self.dni = dni\n        self.nombre = nombre\n        self.apellidos = apellidos\n        self.edad = edad\n\n    def es_mayor_edad(self):\n        return self.edad >= 18\n\np1 = Persona("12345678A", "Ana", "García López", 25)\np2 = Persona("87654321B", "Carlos", "Martínez Ruiz", 16)\n\nfor p in [p1, p2]:\n    estado = "es" if p.es_mayor_edad() else "no es"\n    print(f"{p.nombre} {p.apellidos} con DNI {p.dni} {estado} mayor de edad")`,
    'oop-3': `class Rectangulo:\n    def __init__(self, x1, y1, x2, y2):\n        self.x1, self.y1 = x1, y1\n        self.x2, self.y2 = x2, y2\n\n    def perimetro(self):\n        return 0  # 2*(|x2-x1| + |y2-y1|)\n\n    def area(self):\n        return 0  # |x2-x1| * |y2-y1|\n\nr1 = Rectangulo(0, 0, 5, 5)\nr2 = Rectangulo(7, 9, 2, 3)\nfor r in [r1, r2]:\n    print(f"({r.x1},{r.y1})-({r.x2},{r.y2}) | Perím: {r.perimetro()} | Área: {r.area()}")`,
    'oop-4': `class Articulo:\n    def __init__(self, nombre, precio, iva=21, cuantos_quedan=0):\n        self.nombre = nombre\n        self.precio = precio\n        self.iva = iva\n        self.cuantos_quedan = cuantos_quedan\n\n    def pvp(self):\n        return 0  # precio * (1 + iva/100)\n\nart = Articulo("Pijama", 10, 21, 5)\nprint(f"{art.nombre} - Precio: {art.precio}€ - IVA: {art.iva}% - PVP: {art.pvp():.2f}€")\n\nart.precio = 15\nprint(f"{art.nombre} - Precio: {art.precio}€ - IVA: {art.iva}% - PVP: {art.pvp():.2f}€")`,
    'oop-5': `class Figura:\n    def area(self):\n        return 0\n\nclass Rectangulo(Figura):\n    def __init__(self, ancho, alto):\n        self.ancho = ancho\n        self.alto = alto\n    def area(self):\n        pass  # ancho * alto\n\nclass Circulo(Figura):\n    def __init__(self, radio):\n        self.radio = radio\n    def area(self):\n        import math\n        pass  # math.pi * radio**2\n\nfiguras = [Rectangulo(5,3), Circulo(4), Rectangulo(2,7)]\nfor f in figuras:\n    print(f"Área: {f.area():.2f}")`,
    'oop-6': `class Empleado:\n    def __init__(self, nombre, salario_base):\n        self.nombre = nombre\n        self.salario_base = salario_base\n    def calcular_salario(self):\n        return self.salario_base\n\nclass EmpleadoFijo(Empleado):\n    def __init__(self, nombre, salario_base, bonus):\n        super().__init__(nombre, salario_base)\n        self.bonus = bonus\n    def calcular_salario(self):\n        pass  # salario_base + bonus\n\nclass EmpleadoPorHoras(Empleado):\n    def __init__(self, nombre, precio_hora, horas):\n        super().__init__(nombre, 0)\n        self.precio_hora = precio_hora\n        self.horas = horas\n    def calcular_salario(self):\n        pass  # precio_hora * horas\n\nempleados = [EmpleadoFijo("Ana",1500,300), EmpleadoPorHoras("Luis",15,160), EmpleadoPorHoras("María",12,120)]\nnomina = sum(e.calcular_salario() for e in empleados)\nprint(f"Nómina total: {nomina}€")`,
  },
  java: {
    'oop-1': `public class Main {\n    static class Punto {\n        int x, y;\n        Punto(int x, int y) { this.x = x; this.y = y; }\n    }\n    public static void main(String[] args) {\n        Punto p1 = new Punto(5, 0);\n        Punto p2 = new Punto(10, 10);\n        Punto p3 = new Punto(-3, 7);\n        System.out.println("P1: (" + p1.x + ", " + p1.y + ")");\n        // imprime p2 y p3\n        // modifica coordenadas y vuelve a imprimir\n    }\n}`,
    'oop-2': `public class Main {\n    static class Persona {\n        String dni, nombre, apellidos;\n        int edad;\n        Persona(String dni, String nombre, String apellidos, int edad) {\n            this.dni=dni; this.nombre=nombre; this.apellidos=apellidos; this.edad=edad;\n        }\n        boolean esMayorEdad() { return edad >= 18; }\n    }\n    public static void main(String[] args) {\n        Persona p1 = new Persona("12345678A","Ana","García López",25);\n        Persona p2 = new Persona("87654321B","Carlos","Martínez Ruiz",16);\n        for (Persona p : new Persona[]{p1,p2})\n            System.out.println(p.nombre+" "+p.apellidos+" con DNI "+p.dni+" "+(p.esMayorEdad()?"es":"no es")+" mayor de edad");\n    }\n}`,
    'oop-3': `public class Main {\n    static class Rectangulo {\n        int x1,y1,x2,y2;\n        Rectangulo(int x1,int y1,int x2,int y2){this.x1=x1;this.y1=y1;this.x2=x2;this.y2=y2;}\n        int perimetro(){return 0;} // 2*(|x2-x1|+|y2-y1|)\n        int area(){return 0;}      // |x2-x1|*|y2-y1|\n    }\n    public static void main(String[] args) {\n        Rectangulo r1=new Rectangulo(0,0,5,5);\n        Rectangulo r2=new Rectangulo(7,9,2,3);\n        for(Rectangulo r:new Rectangulo[]{r1,r2})\n            System.out.printf("(%d,%d)-(%d,%d) | Perim:%d | Area:%d%n",r.x1,r.y1,r.x2,r.y2,r.perimetro(),r.area());\n    }\n}`,
    'oop-4': `public class Main {\n    static class Articulo {\n        String nombre;\n        double precio;\n        int iva = 21;\n        int cuantosQuedan;\n        Articulo(String n,double p,int c){nombre=n;precio=p;cuantosQuedan=c;}\n        double pvp(){return 0;} // precio*(1+iva/100.0)\n    }\n    public static void main(String[] args) {\n        Articulo a = new Articulo("Pijama",10,5);\n        System.out.printf("%s - Precio:%.2f€ - IVA:%d%% - PVP:%.2f€%n",a.nombre,a.precio,a.iva,a.pvp());\n        a.precio = 15;\n        System.out.printf("%s - Precio:%.2f€ - IVA:%d%% - PVP:%.2f€%n",a.nombre,a.precio,a.iva,a.pvp());\n    }\n}`,
    'oop-5': `public class Main {\n    abstract static class Figura { public abstract double area(); }\n    static class Rectangulo extends Figura {\n        double ancho,alto;\n        Rectangulo(double a,double b){ancho=a;alto=b;}\n        public double area(){return 0;}\n    }\n    static class Circulo extends Figura {\n        double radio;\n        Circulo(double r){radio=r;}\n        public double area(){return 0;}\n    }\n    public static void main(String[] args) {\n        Figura[] figs={new Rectangulo(5,3),new Circulo(4),new Rectangulo(2,7)};\n        for(Figura f:figs) System.out.printf("Área: %.2f%n",f.area());\n    }\n}`,
    'oop-6': `public class Main {\n    static class Empleado {\n        protected String nombre;\n        protected double salarioBase;\n        Empleado(String n,double s){nombre=n;salarioBase=s;}\n        public double calcularSalario(){return salarioBase;}\n    }\n    static class EmpleadoFijo extends Empleado {\n        double bonus;\n        EmpleadoFijo(String n,double s,double b){super(n,s);bonus=b;}\n        @Override public double calcularSalario(){return 0;}\n    }\n    static class EmpleadoPorHoras extends Empleado {\n        double precioHora,horas;\n        EmpleadoPorHoras(String n,double p,double h){super(n,0);precioHora=p;horas=h;}\n        @Override public double calcularSalario(){return 0;}\n    }\n    public static void main(String[] args) {\n        Empleado[] emp={new EmpleadoFijo("Ana",1500,300),new EmpleadoPorHoras("Luis",15,160),new EmpleadoPorHoras("María",12,120)};\n        double nomina=0;\n        for(Empleado e:emp) nomina+=e.calcularSalario();\n        System.out.printf("Nómina: %.2f€%n",nomina);\n    }\n}`,
  },
  cpp: {
    'oop-1': `#include <iostream>\nusing namespace std;\nstruct Punto { int x, y; Punto(int x,int y):x(x),y(y){} };\nint main() {\n    Punto p1(5,0), p2(10,10), p3(-3,7);\n    cout<<"P1:("<<p1.x<<","<<p1.y<<")"<<endl;\n    // imprime p2 y p3\n    // modifica y vuelve a imprimir\n    return 0;\n}`,
    'oop-2': `#include <iostream>\n#include <string>\nusing namespace std;\nclass Persona {\npublic:\n    string dni,nombre,apellidos; int edad;\n    Persona(string d,string n,string a,int e):dni(d),nombre(n),apellidos(a),edad(e){}\n    bool esMayorEdad(){return edad>=18;}\n};\nint main() {\n    Persona p1("12345678A","Ana","García López",25);\n    Persona p2("87654321B","Carlos","Martínez Ruiz",16);\n    for(Persona& p:{p1,p2})\n        cout<<p.nombre<<" "<<p.apellidos<<" con DNI "<<p.dni<<" "<<(p.esMayorEdad()?"es":"no es")<<" mayor de edad"<<endl;\n    return 0;\n}`,
    'oop-3': `#include <iostream>\n#include <cmath>\nusing namespace std;\nclass Rectangulo {\npublic:\n    int x1,y1,x2,y2;\n    Rectangulo(int a,int b,int c,int d):x1(a),y1(b),x2(c),y2(d){}\n    int perimetro(){return 0;}\n    int area(){return 0;}\n};\nint main() {\n    Rectangulo r1(0,0,5,5), r2(7,9,2,3);\n    for(Rectangulo& r:{r1,r2})\n        printf("(%d,%d)-(%d,%d) Perim:%d Area:%d\\n",r.x1,r.y1,r.x2,r.y2,r.perimetro(),r.area());\n    return 0;\n}`,
    'oop-4': `#include <iostream>\n#include <string>\nusing namespace std;\nclass Articulo {\npublic:\n    string nombre; double precio; int iva=21,cuantosQuedan;\n    Articulo(string n,double p,int c):nombre(n),precio(p),cuantosQuedan(c){}\n    double pvp(){return 0;}\n};\nint main() {\n    Articulo a("Pijama",10,5);\n    printf("%s - Precio:%.2f - IVA:%d%% - PVP:%.2f\\n",a.nombre.c_str(),a.precio,a.iva,a.pvp());\n    a.precio=15;\n    printf("%s - Precio:%.2f - IVA:%d%% - PVP:%.2f\\n",a.nombre.c_str(),a.precio,a.iva,a.pvp());\n    return 0;\n}`,
    'oop-5': `#include <iostream>\n#include <cmath>\n#include <vector>\nusing namespace std;\nclass Figura{public: virtual double area()const=0; virtual~Figura(){}};  \nclass Rectangulo:public Figura{double a,b;public: Rectangulo(double a,double b):a(a),b(b){} double area()const override{return 0;}};\nclass Circulo:public Figura{double r;public: Circulo(double r):r(r){} double area()const override{return 0;}};\nint main(){\n    vector<Figura*>figs={new Rectangulo(5,3),new Circulo(4),new Rectangulo(2,7)};\n    for(auto f:figs){printf("Area: %.2f\\n",f->area());delete f;}\n    return 0;\n}`,
    'oop-6': `#include <iostream>\n#include <vector>\nusing namespace std;\nclass Empleado{protected:string nombre;double salBase;public:\n    Empleado(string n,double s):nombre(n),salBase(s){}\n    virtual double calcularSalario()const{return salBase;}\n    virtual~Empleado(){}};\nclass EmpleadoFijo:public Empleado{double bonus;public:\n    EmpleadoFijo(string n,double s,double b):Empleado(n,s),bonus(b){}\n    double calcularSalario()const override{return 0;}};\nclass EmpleadoPorHoras:public Empleado{double ph,h;public:\n    EmpleadoPorHoras(string n,double p,double ho):Empleado(n,0),ph(p),h(ho){}\n    double calcularSalario()const override{return 0;}};\nint main(){\n    vector<Empleado*>emp={new EmpleadoFijo("Ana",1500,300),new EmpleadoPorHoras("Luis",15,160)};\n    double nom=0;\n    for(auto e:emp){nom+=e->calcularSalario();delete e;}\n    printf("Nomina: %.2f\\n",nom);\n    return 0;\n}`,
  },
  csharp: {
    'oop-1': `using System;\nclass Punto { public int X,Y; public Punto(int x,int y){X=x;Y=y;} }\nclass Program {\n    static void Main() {\n        var p1=new Punto(5,0); var p2=new Punto(10,10); var p3=new Punto(-3,7);\n        Console.WriteLine($"P1: ({p1.X}, {p1.Y})");\n        // imprime p2 y p3, modifica y vuelve a imprimir\n    }\n}`,
    'oop-2': `using System;\nclass Persona {\n    public string Dni,Nombre,Apellidos; public int Edad;\n    public Persona(string d,string n,string a,int e){Dni=d;Nombre=n;Apellidos=a;Edad=e;}\n    public bool EsMayorEdad()=>Edad>=18;\n}\nclass Program {\n    static void Main() {\n        var p1=new Persona("12345678A","Ana","García López",25);\n        var p2=new Persona("87654321B","Carlos","Martínez Ruiz",16);\n        foreach(var p in new[]{p1,p2})\n            Console.WriteLine($"{p.Nombre} {p.Apellidos} con DNI {p.Dni} {(p.EsMayorEdad()?"es":"no es")} mayor de edad");\n    }\n}`,
    'oop-3': `using System;\nclass Rectangulo {\n    public int X1,Y1,X2,Y2;\n    public Rectangulo(int x1,int y1,int x2,int y2){X1=x1;Y1=y1;X2=x2;Y2=y2;}\n    public int Perimetro()=>0;\n    public int Area()=>0;\n}\nclass Program {\n    static void Main() {\n        var r1=new Rectangulo(0,0,5,5); var r2=new Rectangulo(7,9,2,3);\n        foreach(var r in new[]{r1,r2})\n            Console.WriteLine($"({r.X1},{r.Y1})-({r.X2},{r.Y2}) Perím:{r.Perimetro()} Área:{r.Area()}");\n    }\n}`,
    'oop-4': `using System;\nclass Articulo {\n    public string Nombre; public double Precio; public int Iva=21,CuantosQuedan;\n    public Articulo(string n,double p,int c){Nombre=n;Precio=p;CuantosQuedan=c;}\n    public double Pvp()=>0;\n}\nclass Program {\n    static void Main() {\n        var a=new Articulo("Pijama",10,5);\n        Console.WriteLine($"{a.Nombre} - Precio:{a.Precio:F2}€ - IVA:{a.Iva}% - PVP:{a.Pvp():F2}€");\n        a.Precio=15;\n        Console.WriteLine($"{a.Nombre} - Precio:{a.Precio:F2}€ - IVA:{a.Iva}% - PVP:{a.Pvp():F2}€");\n    }\n}`,
    'oop-5': `using System;\nabstract class Figura{public abstract double Area();}\nclass Rectangulo:Figura{double a,b;public Rectangulo(double a,double b){this.a=a;this.b=b;} public override double Area()=>0;}\nclass Circulo:Figura{double r;public Circulo(double r){this.r=r;} public override double Area()=>0;}\nclass Program{\n    static void Main(){\n        Figura[]figs={new Rectangulo(5,3),new Circulo(4),new Rectangulo(2,7)};\n        foreach(var f in figs) Console.WriteLine($"Área: {f.Area():F2}");\n    }\n}`,
    'oop-6': `using System;\nclass Empleado{protected string n;protected double s;\n    public Empleado(string n,double s){this.n=n;this.s=s;}\n    public virtual double CalcularSalario()=>s;}\nclass EmpleadoFijo:Empleado{double b;\n    public EmpleadoFijo(string n,double s,double b):base(n,s){this.b=b;}\n    public override double CalcularSalario()=>0;}\nclass EmpleadoPorHoras:Empleado{double ph,h;\n    public EmpleadoPorHoras(string n,double p,double ho):base(n,0){ph=p;h=ho;}\n    public override double CalcularSalario()=>0;}\nclass Program{\n    static void Main(){\n        Empleado[]emp={new EmpleadoFijo("Ana",1500,300),new EmpleadoPorHoras("Luis",15,160)};\n        double nom=0; foreach(var e in emp) nom+=e.CalcularSalario();\n        Console.WriteLine($"Nómina: {nom:F2}€");\n    }\n}`,
  },
};

function buildLesson(lang: string, theoryContent: string, title: string, desc: string) {
  return {
    id: `oop-${lang}`,
    title,
    description: desc,
    theory: theoryContent,
    topics: ['clases', 'herencia', 'polimorfismo', 'encapsulamiento'],
    exercises: exercises.map(ex => ({
      ...ex,
      id: `${ex.id}-${lang}`,
      starterCode: starterCodes[lang][ex.id] ?? '',
    })),
  };
}

export const oopTopic: Topic = {
  id: 'oop',
  title: 'POO',
  icon: 'box',
  description: 'Clases, objetos, herencia, encapsulamiento y polimorfismo.',
  lessons: {
    javascript: buildLesson('javascript', theory.javascript, 'POO en JavaScript', 'Clases ES6, herencia y encapsulamiento.') as any,
    python: buildLesson('python', theory.python, 'POO en Python', 'Clases, herencia, propiedades y métodos especiales.') as any,
    java: buildLesson('java', theory.java, 'POO en Java', 'Clases, interfaces, herencia y polimorfismo.') as any,
    cpp: buildLesson('cpp', theory.cpp, 'POO en C++', 'Clases, herencia, virtual y polimorfismo.') as any,
    csharp: buildLesson('csharp', theory.csharp, 'POO en C#', 'Clases, propiedades, interfaces y herencia.') as any,
  },
};

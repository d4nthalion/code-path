import type { Topic } from '../../types';

const theory = {
  javascript: `
<h2>Clases y constructores</h2>
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

const exercises = [
  {
    id: 'oop-1',
    title: 'Clase Persona',
    description: 'Crea una clase Persona con nombre, edad y métodos básicos.',
    instructions: 'Implementa una clase Persona con atributos nombre (string) y edad (int). Añade un método saludar() que devuelva "Hola, soy [nombre] y tengo [edad] años", y un método toString/str que represente el objeto. Crea 3 instancias y muéstralas.',
    hints: ['Constructor recibe nombre y edad', 'saludar() usa los atributos del objeto', 'toString/__str__ permite imprimir el objeto directamente'],
    expectedConcept: 'Student must define a class with constructor, instance attributes (this/self), and at least two methods. Must instantiate the class and call methods.',
  },
  {
    id: 'oop-2',
    title: 'Cuenta bancaria',
    description: 'Implementa una clase CuentaBancaria con saldo encapsulado.',
    instructions: 'Crea clase CuentaBancaria con: atributo privado saldo, constructor(titular, saldoInicial=0), método depositar(cantidad) (rechaza cantidades <= 0), método retirar(cantidad) (rechaza si no hay saldo), getter para saldo, y método verEstado() que muestre titular y saldo. Prueba con operaciones válidas e inválidas.',
    hints: ['El saldo debe ser privado (__saldo / #saldo / private)', 'Valida las cantidades antes de modificar el saldo', 'Captura o maneja el error al intentar operaciones inválidas'],
    expectedConcept: 'Student must encapsulate balance as private field, validate deposits/withdrawals, and expose balance through a getter only. Must demonstrate encapsulation principle.',
  },
  {
    id: 'oop-3',
    title: 'Figuras geométricas',
    description: 'Jerarquía de clases para figuras con herencia y polimorfismo.',
    instructions: 'Crea una clase base (abstracta si el lenguaje lo permite) Figura con método area(). Implementa Rectangulo(ancho, alto) y Circulo(radio) que hereden de Figura. Crea una lista con varias figuras e imprime el área de cada una usando polimorfismo.',
    hints: ['Usa extends/hereda de Figura', 'Override/sobreescribe el método area()', 'Math.PI / Math.PI / M_PI para π'],
    expectedConcept: 'Student must use class inheritance (extends), constructor chaining (super), and method overriding to demonstrate polymorphism. Should call area() through base class reference.',
  },
  {
    id: 'oop-4',
    title: 'Sistema de vehículos',
    description: 'Modela una jerarquía de vehículos con herencia múltiple.',
    instructions: 'Crea clase base Vehiculo(marca, modelo, anio) con método descripcion(). Crea Coche(marca, modelo, anio, numPuertas) y Moto(marca, modelo, anio, tipo) que hereden de Vehiculo. Añade un método propio a cada subclase. Crea instancias y muestra polimorfismo.',
    hints: ['Llama al constructor padre con super(marca, modelo, anio)', 'Añade atributos propios en el constructor de la subclase', 'Override descripcion() para añadir info específica'],
    expectedConcept: 'Student must implement multi-level inheritance with super() constructor calls, additional attributes in subclasses, and method override with super() call.',
  },
  {
    id: 'oop-5',
    title: 'Empresa y empleados',
    description: 'Modela una empresa con diferentes tipos de empleados.',
    instructions: 'Crea clase Empleado(nombre, salarioBase) con método calcularSalario() que devuelve salarioBase. Crea EmpleadoFijo(nombre, salarioBase, bonus) y EmpleadoPorHoras(nombre, precioHora, horasTrabajadas) que hereden de Empleado y sobreescriban calcularSalario(). Crea una lista mixta y calcula la nómina total.',
    hints: ['EmpleadoFijo: salario = salarioBase + bonus', 'EmpleadoPorHoras: salario = precioHora * horas', 'La nómina total suma todos los salarios'],
    expectedConcept: 'Student must implement a polymorphic hierarchy where calcularSalario() is overridden differently in each subclass, demonstrating the Open/Closed principle.',
  },
];

const starterCodes: Record<string, Record<string, string>> = {
  javascript: {
    'oop-1': `class Persona {\n  constructor(nombre, edad) {\n    // implementa\n  }\n\n  saludar() {\n    // devuelve "Hola, soy [nombre] y tengo [edad] años"\n  }\n\n  toString() {\n    // devuelve representación del objeto\n  }\n}\n\nconst p1 = new Persona("Ana", 25);\nconsole.log(p1.saludar());\nconsole.log(p1.toString());`,
    'oop-2': `class CuentaBancaria {\n  #saldo = 0;\n\n  constructor(titular, saldoInicial = 0) {\n    this.titular = titular;\n    this.#saldo = saldoInicial;\n  }\n\n  depositar(cantidad) { /* valida y suma */ }\n  retirar(cantidad) { /* valida y resta */ }\n  get saldo() { return this.#saldo; }\n\n  verEstado() {\n    console.log(\`Titular: \${this.titular} | Saldo: \${this.saldo}€\`);\n  }\n}\n\nconst cuenta = new CuentaBancaria("Ana", 100);\ncuenta.depositar(50);\ncuenta.verEstado();\ntry { cuenta.retirar(200); } catch(e) { console.log(e.message); }`,
    'oop-3': `class Figura {\n  area() { return 0; }\n}\n\nclass Rectangulo extends Figura {\n  constructor(ancho, alto) {\n    super();\n    // implementa\n  }\n  area() { /* ancho * alto */ }\n}\n\nclass Circulo extends Figura {\n  constructor(radio) {\n    super();\n    // implementa\n  }\n  area() { /* Math.PI * radio^2 */ }\n}\n\nconst figuras = [new Rectangulo(5,3), new Circulo(4), new Rectangulo(2,7)];\nfiguras.forEach(f => console.log(\`Área: \${f.area().toFixed(2)}\`));`,
    'oop-4': `class Vehiculo {\n  constructor(marca, modelo, anio) { /* implementa */ }\n  descripcion() { return \`\${this.marca} \${this.modelo} (\${this.anio})\`; }\n}\n\nclass Coche extends Vehiculo {\n  constructor(marca, modelo, anio, numPuertas) {\n    super(marca, modelo, anio);\n    // implementa\n  }\n  descripcion() { return super.descripcion() + \` - \${this.numPuertas} puertas\`; }\n}\n\nclass Moto extends Vehiculo {\n  constructor(marca, modelo, anio, tipo) {\n    super(marca, modelo, anio);\n    // implementa\n  }\n}\n\nconst v = [new Coche("Toyota","Corolla",2022,4), new Moto("Honda","CBR",2023,"deportiva")];\nv.forEach(x => console.log(x.descripcion()));`,
    'oop-5': `class Empleado {\n  constructor(nombre, salarioBase) { /* implementa */ }\n  calcularSalario() { return this.salarioBase; }\n}\n\nclass EmpleadoFijo extends Empleado {\n  constructor(nombre, salarioBase, bonus) {\n    super(nombre, salarioBase);\n    // implementa\n  }\n  calcularSalario() { /* salarioBase + bonus */ }\n}\n\nclass EmpleadoPorHoras extends Empleado {\n  constructor(nombre, precioHora, horas) {\n    super(nombre, 0);\n    // implementa\n  }\n  calcularSalario() { /* precioHora * horas */ }\n}\n\nconst empleados = [\n  new EmpleadoFijo("Ana", 1500, 300),\n  new EmpleadoPorHoras("Luis", 15, 160),\n];\nconst nomina = empleados.reduce((t, e) => t + e.calcularSalario(), 0);\nconsole.log(\`Nómina total: \${nomina}€\`);`,
  },
  python: {
    'oop-1': `class Persona:\n    def __init__(self, nombre, edad):\n        pass  # implementa\n\n    def saludar(self):\n        pass  # devuelve "Hola, soy [nombre] y tengo [edad] años"\n\n    def __str__(self):\n        pass  # representación del objeto\n\np1 = Persona("Ana", 25)\nprint(p1.saludar())\nprint(p1)`,
    'oop-2': `class CuentaBancaria:\n    def __init__(self, titular, saldo_inicial=0):\n        self.titular = titular\n        self.__saldo = saldo_inicial\n\n    def depositar(self, cantidad):\n        pass  # valida y suma\n\n    def retirar(self, cantidad):\n        pass  # valida y resta\n\n    @property\n    def saldo(self):\n        return self.__saldo\n\n    def ver_estado(self):\n        print(f"Titular: {self.titular} | Saldo: {self.saldo}€")\n\ncuenta = CuentaBancaria("Ana", 100)\ncuenta.depositar(50)\ncuenta.ver_estado()\ntry:\n    cuenta.retirar(200)\nexcept ValueError as e:\n    print(e)`,
    'oop-3': `class Figura:\n    def area(self):\n        return 0\n\nclass Rectangulo(Figura):\n    def __init__(self, ancho, alto):\n        pass  # implementa\n    def area(self):\n        pass  # ancho * alto\n\nclass Circulo(Figura):\n    def __init__(self, radio):\n        pass\n    def area(self):\n        import math\n        pass  # math.pi * radio**2\n\nfiguras = [Rectangulo(5,3), Circulo(4), Rectangulo(2,7)]\nfor f in figuras:\n    print(f"Área: {f.area():.2f}")`,
    'oop-4': `class Vehiculo:\n    def __init__(self, marca, modelo, anio):\n        pass  # implementa\n    def descripcion(self):\n        return f"{self.marca} {self.modelo} ({self.anio})"\n\nclass Coche(Vehiculo):\n    def __init__(self, marca, modelo, anio, num_puertas):\n        super().__init__(marca, modelo, anio)\n        # implementa\n    def descripcion(self):\n        return super().descripcion() + f" - {self.num_puertas} puertas"\n\nclass Moto(Vehiculo):\n    def __init__(self, marca, modelo, anio, tipo):\n        super().__init__(marca, modelo, anio)\n        # implementa\n\nv = [Coche("Toyota","Corolla",2022,4), Moto("Honda","CBR",2023,"deportiva")]\nfor x in v:\n    print(x.descripcion())`,
    'oop-5': `class Empleado:\n    def __init__(self, nombre, salario_base):\n        pass  # implementa\n    def calcular_salario(self):\n        return self.salario_base\n\nclass EmpleadoFijo(Empleado):\n    def __init__(self, nombre, salario_base, bonus):\n        super().__init__(nombre, salario_base)\n        # implementa\n    def calcular_salario(self):\n        pass  # salario_base + bonus\n\nclass EmpleadoPorHoras(Empleado):\n    def __init__(self, nombre, precio_hora, horas):\n        super().__init__(nombre, 0)\n        # implementa\n    def calcular_salario(self):\n        pass  # precio_hora * horas\n\nempleados = [EmpleadoFijo("Ana",1500,300), EmpleadoPorHoras("Luis",15,160)]\nnomina = sum(e.calcular_salario() for e in empleados)\nprint(f"Nómina total: {nomina}€")`,
  },
  java: {
    'oop-1': `public class Main {\n    static class Persona {\n        private String nombre;\n        private int edad;\n\n        public Persona(String nombre, int edad) {\n            // implementa\n        }\n\n        public String saludar() {\n            return ""; // "Hola, soy [nombre] y tengo [edad] años"\n        }\n\n        @Override\n        public String toString() {\n            return ""; // representación\n        }\n    }\n\n    public static void main(String[] args) {\n        Persona p = new Persona("Ana", 25);\n        System.out.println(p.saludar());\n        System.out.println(p);\n    }\n}`,
    'oop-2': `public class Main {\n    static class CuentaBancaria {\n        private String titular;\n        private double saldo;\n\n        public CuentaBancaria(String titular, double saldoInicial) {\n            // implementa\n        }\n\n        public void depositar(double cantidad) { /* valida y suma */ }\n        public void retirar(double cantidad) { /* valida y resta */ }\n        public double getSaldo() { return saldo; }\n\n        public void verEstado() {\n            System.out.printf("Titular: %s | Saldo: %.2f€%n", titular, saldo);\n        }\n    }\n\n    public static void main(String[] args) {\n        CuentaBancaria c = new CuentaBancaria("Ana", 100);\n        c.depositar(50);\n        c.verEstado();\n        try { c.retirar(200); }\n        catch (Exception e) { System.out.println(e.getMessage()); }\n    }\n}`,
    'oop-3': `public class Main {\n    abstract static class Figura {\n        public abstract double area();\n    }\n    static class Rectangulo extends Figura {\n        // implementa\n        public double area() { return 0; }\n    }\n    static class Circulo extends Figura {\n        // implementa\n        public double area() { return 0; }\n    }\n    public static void main(String[] args) {\n        Figura[] figs = { new Rectangulo(/*5,3*/), new Circulo(/*4*/) };\n        for (Figura f : figs)\n            System.out.printf("Área: %.2f%n", f.area());\n    }\n}`,
    'oop-4': `public class Main {\n    static class Vehiculo {\n        protected String marca, modelo;\n        protected int anio;\n        public Vehiculo(String marca, String modelo, int anio) { /* implementa */ }\n        public String descripcion() { return marca + " " + modelo + " (" + anio + ")"; }\n    }\n    static class Coche extends Vehiculo {\n        private int numPuertas;\n        public Coche(String m, String mo, int a, int p) { super(m,mo,a); /* implementa */ }\n        @Override public String descripcion() { return super.descripcion() + " - " + numPuertas + " puertas"; }\n    }\n    static class Moto extends Vehiculo {\n        private String tipo;\n        public Moto(String m, String mo, int a, String t) { super(m,mo,a); /* implementa */ }\n    }\n    public static void main(String[] args) {\n        Vehiculo[] v = { new Coche("Toyota","Corolla",2022,4), new Moto("Honda","CBR",2023,"deportiva") };\n        for (Vehiculo x : v) System.out.println(x.descripcion());\n    }\n}`,
    'oop-5': `public class Main {\n    static class Empleado {\n        protected String nombre;\n        protected double salarioBase;\n        public Empleado(String n, double s) { nombre=n; salarioBase=s; }\n        public double calcularSalario() { return salarioBase; }\n    }\n    static class EmpleadoFijo extends Empleado {\n        private double bonus;\n        public EmpleadoFijo(String n, double s, double b) { super(n,s); bonus=b; }\n        @Override public double calcularSalario() { return 0; /* implementa */ }\n    }\n    static class EmpleadoPorHoras extends Empleado {\n        private double precioHora, horas;\n        public EmpleadoPorHoras(String n, double p, double h) { super(n,0); precioHora=p; horas=h; }\n        @Override public double calcularSalario() { return 0; /* implementa */ }\n    }\n    public static void main(String[] args) {\n        Empleado[] emp = { new EmpleadoFijo("Ana",1500,300), new EmpleadoPorHoras("Luis",15,160) };\n        double nomina = 0;\n        for (Empleado e : emp) nomina += e.calcularSalario();\n        System.out.printf("Nómina: %.2f€%n", nomina);\n    }\n}`,
  },
  cpp: {
    'oop-1': `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Persona {\nprivate:\n    string nombre;\n    int edad;\npublic:\n    Persona(string nombre, int edad) { /* implementa */ }\n    string saludar() const { return ""; }\n    friend ostream& operator<<(ostream& os, const Persona& p) {\n        return os << "Persona(" << p.nombre << ", " << p.edad << ")";\n    }\n};\n\nint main() {\n    Persona p("Ana", 25);\n    cout << p.saludar() << endl;\n    cout << p << endl;\n    return 0;\n}`,
    'oop-2': `#include <iostream>\n#include <string>\n#include <stdexcept>\nusing namespace std;\n\nclass CuentaBancaria {\nprivate:\n    string titular;\n    double saldo;\npublic:\n    CuentaBancaria(string t, double s=0) { /* implementa */ }\n    void depositar(double c) { /* valida y suma */ }\n    void retirar(double c) { /* valida y resta */ }\n    double getSaldo() const { return saldo; }\n    void verEstado() const {\n        cout << "Titular: " << titular << " | Saldo: " << saldo << "eur" << endl;\n    }\n};\n\nint main() {\n    CuentaBancaria c("Ana", 100);\n    c.depositar(50);\n    c.verEstado();\n    try { c.retirar(200); } catch(exception& e) { cout << e.what() << endl; }\n    return 0;\n}`,
    'oop-3': `#include <iostream>\n#include <cmath>\n#include <vector>\nusing namespace std;\n\nclass Figura {\npublic:\n    virtual double area() const = 0;\n    virtual ~Figura() {}\n};\n\nclass Rectangulo : public Figura {\n    // implementa\npublic:\n    Rectangulo(double a, double b) { /* implementa */ }\n    double area() const override { return 0; }\n};\n\nclass Circulo : public Figura {\n    // implementa\npublic:\n    Circulo(double r) { /* implementa */ }\n    double area() const override { return 0; }\n};\n\nint main() {\n    vector<Figura*> figs = { new Rectangulo(5,3), new Circulo(4) };\n    for (auto f : figs) { cout << "Area: " << f->area() << endl; delete f; }\n    return 0;\n}`,
    'oop-4': `#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Vehiculo {\nprotected:\n    string marca, modelo;\n    int anio;\npublic:\n    Vehiculo(string m, string mo, int a) : marca(m), modelo(mo), anio(a) {}\n    virtual string descripcion() const {\n        return marca + " " + modelo + " (" + to_string(anio) + ")";\n    }\n    virtual ~Vehiculo() {}\n};\n\nclass Coche : public Vehiculo {\n    int numPuertas;\npublic:\n    Coche(string m, string mo, int a, int p) : Vehiculo(m,mo,a), numPuertas(p) {}\n    string descripcion() const override {\n        return Vehiculo::descripcion() + " - " + to_string(numPuertas) + " puertas";\n    }\n};\n\nint main() {\n    vector<Vehiculo*> v = {new Coche("Toyota","Corolla",2022,4)};\n    for (auto x : v) { cout << x->descripcion() << endl; delete x; }\n    return 0;\n}`,
    'oop-5': `#include <iostream>\n#include <string>\n#include <vector>\nusing namespace std;\n\nclass Empleado {\nprotected:\n    string nombre;\n    double salarioBase;\npublic:\n    Empleado(string n, double s) : nombre(n), salarioBase(s) {}\n    virtual double calcularSalario() const { return salarioBase; }\n    virtual ~Empleado() {}\n};\n\nclass EmpleadoFijo : public Empleado {\n    double bonus;\npublic:\n    EmpleadoFijo(string n, double s, double b) : Empleado(n,s), bonus(b) {}\n    double calcularSalario() const override { return 0; /* implementa */ }\n};\n\nclass EmpleadoPorHoras : public Empleado {\n    double precioHora, horas;\npublic:\n    EmpleadoPorHoras(string n, double p, double h) : Empleado(n,0), precioHora(p), horas(h) {}\n    double calcularSalario() const override { return 0; /* implementa */ }\n};\n\nint main() {\n    vector<Empleado*> emp = {new EmpleadoFijo("Ana",1500,300), new EmpleadoPorHoras("Luis",15,160)};\n    double nomina = 0;\n    for (auto e : emp) { nomina += e->calcularSalario(); delete e; }\n    cout << "Nomina: " << nomina << "eur" << endl;\n    return 0;\n}`,
  },
  csharp: {
    'oop-1': `using System;\n\nclass Persona {\n    public string Nombre { get; }\n    public int Edad { get; }\n\n    public Persona(string nombre, int edad) {\n        // implementa\n    }\n\n    public string Saludar() => ""; // "Hola, soy [nombre] y tengo [edad] años"\n\n    public override string ToString() => ""; // representación\n}\n\nclass Program {\n    static void Main() {\n        var p = new Persona("Ana", 25);\n        Console.WriteLine(p.Saludar());\n        Console.WriteLine(p);\n    }\n}`,
    'oop-2': `using System;\n\nclass CuentaBancaria {\n    private double saldo;\n    public string Titular { get; }\n\n    public CuentaBancaria(string titular, double saldoInicial = 0) {\n        // implementa\n    }\n\n    public void Depositar(double cantidad) { /* valida y suma */ }\n    public void Retirar(double cantidad) { /* valida y resta */ }\n    public double Saldo => saldo;\n\n    public void VerEstado() =>\n        Console.WriteLine($"Titular: {Titular} | Saldo: {Saldo:F2}€");\n}\n\nclass Program {\n    static void Main() {\n        var c = new CuentaBancaria("Ana", 100);\n        c.Depositar(50);\n        c.VerEstado();\n        try { c.Retirar(200); }\n        catch (Exception e) { Console.WriteLine(e.Message); }\n    }\n}`,
    'oop-3': `using System;\n\nabstract class Figura {\n    public abstract double Area();\n}\n\nclass Rectangulo : Figura {\n    // implementa\n    public override double Area() => 0;\n}\n\nclass Circulo : Figura {\n    // implementa\n    public override double Area() => 0;\n}\n\nclass Program {\n    static void Main() {\n        Figura[] figs = { new Rectangulo(/*5,3*/), new Circulo(/*4*/) };\n        foreach (var f in figs)\n            Console.WriteLine($"Área: {f.Area():F2}");\n    }\n}`,
    'oop-4': `using System;\n\nclass Vehiculo {\n    public string Marca { get; }\n    public string Modelo { get; }\n    public int Anio { get; }\n    public Vehiculo(string m, string mo, int a) { Marca=m; Modelo=mo; Anio=a; }\n    public virtual string Descripcion() => $"{Marca} {Modelo} ({Anio})";\n}\n\nclass Coche : Vehiculo {\n    public int NumPuertas { get; }\n    public Coche(string m, string mo, int a, int p) : base(m,mo,a) { NumPuertas=p; }\n    public override string Descripcion() => base.Descripcion() + $" - {NumPuertas} puertas";\n}\n\nclass Moto : Vehiculo {\n    public string Tipo { get; }\n    public Moto(string m, string mo, int a, string t) : base(m,mo,a) { Tipo=t; }\n}\n\nclass Program {\n    static void Main() {\n        Vehiculo[] v = {new Coche("Toyota","Corolla",2022,4), new Moto("Honda","CBR",2023,"deportiva")};\n        foreach (var x in v) Console.WriteLine(x.Descripcion());\n    }\n}`,
    'oop-5': `using System;\n\nclass Empleado {\n    protected string nombre;\n    protected double salarioBase;\n    public Empleado(string n, double s) { nombre=n; salarioBase=s; }\n    public virtual double CalcularSalario() => salarioBase;\n}\n\nclass EmpleadoFijo : Empleado {\n    double bonus;\n    public EmpleadoFijo(string n, double s, double b) : base(n,s) { bonus=b; }\n    public override double CalcularSalario() => 0; // implementa\n}\n\nclass EmpleadoPorHoras : Empleado {\n    double precioHora, horas;\n    public EmpleadoPorHoras(string n, double p, double h) : base(n,0) { precioHora=p; horas=h; }\n    public override double CalcularSalario() => 0; // implementa\n}\n\nclass Program {\n    static void Main() {\n        Empleado[] emp = {new EmpleadoFijo("Ana",1500,300), new EmpleadoPorHoras("Luis",15,160)};\n        double nomina = 0;\n        foreach (var e in emp) nomina += e.CalcularSalario();\n        Console.WriteLine($"Nómina: {nomina:F2}€");\n    }\n}`,
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

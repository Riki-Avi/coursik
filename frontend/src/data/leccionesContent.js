// Contenido detallado de cada lección/clase
// Estructura: conceptoId -> claseIndex -> contenido

export const leccionesContent = {
  // ==========================================
  // CONCEPTO 1: COMPONENTES FUNCIONALES
  // ==========================================
  1: {
    0: { // "Qué es un componente"
      titulo: "¿Qué es un Componente?",
      duracion: "5 min",
      contenido: `
# ¿Qué es un Componente en React?

Un **componente** es una pieza de código reutilizable que representa una parte de la interfaz de usuario.

## Analogía Simple

Pensá en los componentes como **bloques de LEGO**:
- Cada bloque es independiente
- Podés combinarlos para crear algo más grande
- Podés reutilizarlos en diferentes partes

## En la práctica

En lugar de escribir todo el HTML en un solo archivo, dividimos la UI en piezas pequeñas:

\`\`\`jsx
// Antes (sin componentes)
<div>
  <header>...</header>
  <nav>...</nav>
  <main>...</main>
  <footer>...</footer>
</div>

// Después (con componentes)
<App>
  <Header />
  <Navbar />
  <Main />
  <Footer />
</App>
\`\`\`

## ¿Por qué usar componentes?

| Beneficio | Descripción |
|-----------|-------------|
| **Reutilizable** | Escribís una vez, usás muchas veces |
| **Mantenible** | Cambios en un lugar afectan a todos los usos |
| **Testeable** | Podés probar cada pieza por separado |
| **Legible** | Código más organizado y fácil de entender |

## Punto clave 💡

> Todo en React es un componente. Tu aplicación entera es un árbol de componentes.
      `,
      tips: [
        "Un componente = una responsabilidad",
        "Nombres de componentes siempre en PascalCase",
        "Empezá con componentes grandes y dividí cuando sea necesario"
      ]
    },
    1: { // "Cómo se define"
      titulo: "¿Cómo se Define un Componente?",
      duracion: "7 min",
      contenido: `
# Definiendo Componentes Funcionales

En React moderno, definimos componentes como **funciones de JavaScript**.

## Sintaxis Básica

\`\`\`jsx
// Forma 1: Declaración de función
function MiComponente() {
  return <h1>Hola Mundo</h1>;
}

// Forma 2: Arrow function
const MiComponente = () => {
  return <h1>Hola Mundo</h1>;
};

// Forma 3: Arrow function con return implícito
const MiComponente = () => <h1>Hola Mundo</h1>;
\`\`\`

## Reglas Importantes

### 1. Nombre en PascalCase
\`\`\`jsx
// ✅ Correcto
function UserProfile() { }
function NavBar() { }

// ❌ Incorrecto
function userProfile() { }  // React no lo reconoce como componente
function navbar() { }
\`\`\`

### 2. Debe retornar JSX (o null)
\`\`\`jsx
// ✅ Correcto
function Saludo() {
  return <p>Hola</p>;
}

// ✅ También válido (no renderiza nada)
function Invisible() {
  return null;
}

// ❌ Incorrecto - no retorna nada
function Roto() {
  <p>Esto no funciona</p>;  // Falta el return!
}
\`\`\`

### 3. Un solo elemento raíz
\`\`\`jsx
// ❌ Error: múltiples elementos raíz
function Doble() {
  return (
    <h1>Título</h1>
    <p>Párrafo</p>
  );
}

// ✅ Solución 1: Envolver en un div
function Doble() {
  return (
    <div>
      <h1>Título</h1>
      <p>Párrafo</p>
    </div>
  );
}

// ✅ Solución 2: Fragment (<> </>)
function Doble() {
  return (
    <>
      <h1>Título</h1>
      <p>Párrafo</p>
    </>
  );
}
\`\`\`

## ¿Cuándo usar cada forma?

| Forma | Usar cuando... |
|-------|----------------|
| \`function\` | Necesitás hoisting o es el componente principal |
| \`const = () =>\` | Componentes más cortos o dentro de otros archivos |
      `,
      tips: [
        "Usá Fragment (<>) para evitar divs innecesarios",
        "El return con paréntesis permite JSX multilínea",
        "Cada archivo puede tener un componente principal + helpers"
      ]
    },
    2: { // "Qué retorna (JSX)"
      titulo: "¿Qué Retorna un Componente? (JSX)",
      duracion: "6 min",
      contenido: `
# JSX: Lo que Retorna un Componente

Un componente retorna **JSX** (JavaScript XML), que es una extensión de JavaScript que permite escribir HTML dentro de JS.

## JSX NO es HTML

Aunque se parece, tiene diferencias importantes:

\`\`\`jsx
// HTML
<div class="container">
  <label for="email">Email</label>
  <input type="text" onclick="handleClick()">
</div>

// JSX
<div className="container">
  <label htmlFor="email">Email</label>
  <input type="text" onClick={handleClick} />
</div>
\`\`\`

## Diferencias Clave

| HTML | JSX | Por qué |
|------|-----|---------|
| \`class\` | \`className\` | \`class\` es palabra reservada en JS |
| \`for\` | \`htmlFor\` | \`for\` es palabra reservada en JS |
| \`onclick\` | \`onClick\` | Eventos en camelCase |
| \`<input>\` | \`<input />\` | Tags deben cerrarse |

## Expresiones JavaScript en JSX

Usamos \`{ }\` para insertar JavaScript:

\`\`\`jsx
function Saludo() {
  const nombre = "Juan";
  const edad = 25;
  
  return (
    <div>
      {/* Variables */}
      <h1>Hola {nombre}</h1>
      
      {/* Expresiones */}
      <p>El año que viene tendrás {edad + 1} años</p>
      
      {/* Funciones */}
      <p>Tu nombre en mayúsculas: {nombre.toUpperCase()}</p>
      
      {/* Ternarios */}
      <p>{edad >= 18 ? "Sos mayor" : "Sos menor"}</p>
    </div>
  );
}
\`\`\`

## Lo que NO podés hacer en { }

\`\`\`jsx
// ❌ if/else directo
{if (condicion) { return <p>Hola</p> }}

// ✅ Ternario
{condicion ? <p>Hola</p> : null}

// ❌ for loops
{for (let i = 0; i < 5; i++) { ... }}

// ✅ .map()
{[1,2,3,4,5].map(n => <p key={n}>{n}</p>)}
\`\`\`

## Estilos en JSX

\`\`\`jsx
// Estilos inline (objeto JavaScript)
<div style={{ 
  backgroundColor: "blue",  // camelCase!
  fontSize: "20px",
  padding: "10px"
}}>
  Contenido
</div>
\`\`\`
      `,
      tips: [
        "Pensá en JSX como 'JavaScript disfrazado de HTML'",
        "Los { } son tu puerta al mundo JavaScript",
        "Siempre usá className en lugar de class"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 2: JSX
  // ==========================================
  2: {
    0: { // "Expresiones { }"
      titulo: "Expresiones en JSX con { }",
      duracion: "5 min",
      contenido: `
# ¿Qué es JSX?

**JSX** significa **JavaScript XML**. Es una extensión de sintaxis para JavaScript que permite escribir código similar a HTML dentro de JavaScript.

> JSX = JavaScript + XML (sintaxis tipo HTML)

Babel (una herramienta) transforma JSX a llamadas \`React.createElement()\`.

---

# Expresiones JavaScript en JSX

Las llaves \`{ }\` son la forma de insertar JavaScript dentro de JSX.

## ¿Qué podés poner dentro de { }?

### ✅ Variables
\`\`\`jsx
const nombre = "María";
return <h1>Hola {nombre}</h1>;
// Resultado: <h1>Hola María</h1>
\`\`\`

### ✅ Operaciones matemáticas
\`\`\`jsx
const precio = 100;
const descuento = 0.2;
return <p>Total: \${precio * (1 - descuento)}</p>;
// Resultado: <p>Total: $80</p>
\`\`\`

### ✅ Llamadas a funciones
\`\`\`jsx
const formatearFecha = (fecha) => fecha.toLocaleDateString();
return <p>Hoy es {formatearFecha(new Date())}</p>;
\`\`\`

### ✅ Ternarios (condicionales inline)
\`\`\`jsx
const logueado = true;
return <p>{logueado ? "Bienvenido" : "Iniciá sesión"}</p>;
\`\`\`

### ✅ Métodos de arrays
\`\`\`jsx
const frutas = ["🍎", "🍌", "🍇"];
return <p>{frutas.join(" - ")}</p>;
// Resultado: <p>🍎 - 🍌 - 🍇</p>
\`\`\`

## ❌ Lo que NO podés poner

\`\`\`jsx
// ❌ Objetos directamente
const user = { nombre: "Juan" };
return <p>{user}</p>; // ERROR!

// ✅ Accedé a propiedades del objeto
return <p>{user.nombre}</p>; // OK!

// ❌ Statements (if, for, while)
return <p>{if (true) "hola"}</p>; // ERROR!

// ✅ Usá ternarios o && 
return <p>{true && "hola"}</p>; // OK!
\`\`\`
      `,
      tips: [
        "{ } = aquí va JavaScript",
        "Solo expresiones, no statements",
        "Para objetos, accedé a sus propiedades"
      ]
    },
    1: { // "Atributos (className, htmlFor)"
      titulo: "Atributos en JSX",
      duracion: "4 min",
      contenido: `
# Atributos en JSX

Los atributos en JSX son similares a HTML pero con algunas diferencias importantes.

## Atributos Renombrados

| HTML | JSX | Razón |
|------|-----|-------|
| \`class\` | \`className\` | \`class\` es palabra reservada |
| \`for\` | \`htmlFor\` | \`for\` es palabra reservada |
| \`tabindex\` | \`tabIndex\` | camelCase |
| \`readonly\` | \`readOnly\` | camelCase |

\`\`\`jsx
// ❌ HTML (no funciona en JSX)
<div class="container">
  <label for="email">Email</label>
</div>

// ✅ JSX correcto
<div className="container">
  <label htmlFor="email">Email</label>
</div>
\`\`\`

## Atributos Dinámicos

\`\`\`jsx
const esActivo = true;
const color = "blue";

return (
  <button 
    className={esActivo ? "btn-activo" : "btn-inactivo"}
    style={{ backgroundColor: color }}
    disabled={!esActivo}
  >
    Click
  </button>
);
\`\`\`

## Eventos en camelCase

\`\`\`jsx
// HTML: onclick, onchange, onsubmit
// JSX:  onClick, onChange, onSubmit

<button onClick={handleClick}>Click</button>
<input onChange={handleChange} />
<form onSubmit={handleSubmit}>...</form>
\`\`\`

## Spread de atributos

\`\`\`jsx
const inputProps = {
  type: "text",
  placeholder: "Escribí algo",
  className: "input-field"
};

// En lugar de escribir cada uno...
<input {...inputProps} />

// Es igual a:
<input type="text" placeholder="Escribí algo" className="input-field" />
\`\`\`
      `,
      tips: [
        "Todos los eventos van en camelCase",
        "Usá className, nunca class",
        "El spread {...props} es muy útil para pasar muchos atributos"
      ]
    },
    2: { // "Diferencia con HTML"
      titulo: "JSX NO es HTML",
      duracion: "4 min",
      contenido: `
# JSX vs HTML: Las Diferencias

Aunque JSX se parece a HTML, en realidad es **JavaScript**.

## JSX se compila a JavaScript

\`\`\`jsx
// Lo que escribís (JSX)
const elemento = <h1 className="titulo">Hola</h1>;

// Lo que el navegador recibe (JavaScript)
const elemento = React.createElement(
  'h1',
  { className: 'titulo' },
  'Hola'
);
\`\`\`

## Diferencias Principales

### 1. Tags vacíos deben cerrarse
\`\`\`jsx
// HTML (válido)
<input>
<img src="foto.jpg">
<br>

// JSX (obligatorio cerrar)
<input />
<img src="foto.jpg" />
<br />
\`\`\`

### 2. Un solo elemento raíz
\`\`\`jsx
// ❌ Error en JSX
return (
  <h1>Título</h1>
  <p>Párrafo</p>
);

// ✅ Correcto - usar Fragment
return (
  <>
    <h1>Título</h1>
    <p>Párrafo</p>
  </>
);
\`\`\`

### 3. JavaScript vive dentro
\`\`\`jsx
// HTML: texto estático
<p>Hola mundo</p>

// JSX: podemos insertar lógica
<p>Hola {usuario.nombre}</p>
<p>{2 + 2}</p>
<p>{condicion ? "Sí" : "No"}</p>
\`\`\`

### 4. Estilos como objetos
\`\`\`jsx
// HTML
<div style="background-color: red; font-size: 20px;">

// JSX (objeto JavaScript)
<div style={{ backgroundColor: 'red', fontSize: '20px' }}>
\`\`\`

### 5. Comentarios en JSX
\`\`\`jsx
// ❌ Comentarios HTML no funcionan
<!-- Esto no funciona en JSX -->

// ❌ Comentarios JS normales no funcionan dentro del JSX
return (
  <div>
    // Esto aparece como texto!
  </div>
);

// ✅ Comentarios correctos en JSX
return (
  <div>
    {/* Esto es un comentario válido */}
    <p>Contenido</p>
  </div>
);
\`\`\`

## ¿Por qué JSX?

- **Familiar**: Se ve como HTML
- **Poderoso**: Es JavaScript por debajo
- **Seguro**: Escapa automáticamente para prevenir XSS
      `,
      tips: [
        "JSX = JavaScript con sintaxis de HTML",
        "Babel transforma JSX a React.createElement()",
        "Los Fragments (<>) evitan divs innecesarios"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 3: PROPS
  // ==========================================
  3: {
    0: { // "Pasar datos"
      titulo: "Pasando Datos con Props",
      duracion: "6 min",
      contenido: `
# Props: Comunicación Padre → Hijo

Las **props** (propiedades) son la forma de pasar datos de un componente padre a un hijo.

## Sintaxis Básica

\`\`\`jsx
// Componente padre
function App() {
  return <Saludo nombre="Juan" edad={25} />;
}

// Componente hijo (recibe props)
function Saludo(props) {
  return <h1>Hola {props.nombre}, tenés {props.edad} años</h1>;
}
\`\`\`

## Destructuring de Props (recomendado)

\`\`\`jsx
// En lugar de usar props.algo
function Saludo({ nombre, edad }) {
  return <h1>Hola {nombre}, tenés {edad} años</h1>;
}
\`\`\`

## Tipos de Props

\`\`\`jsx
<Componente
  // String
  nombre="Juan"
  
  // Número (con llaves)
  edad={25}
  
  // Boolean
  activo={true}
  activo  // shorthand para true
  
  // Array
  hobbies={["fútbol", "música"]}
  
  // Objeto
  usuario={{ nombre: "Ana", rol: "admin" }}
  
  // Función
  onClick={() => alert("click")}
/>
\`\`\`

## Props por defecto

\`\`\`jsx
function Boton({ texto = "Click aquí", color = "blue" }) {
  return (
    <button style={{ backgroundColor: color }}>
      {texto}
    </button>
  );
}

// Uso
<Boton />                    // usa valores por defecto
<Boton texto="Enviar" />     // texto personalizado
<Boton color="red" />        // color personalizado
\`\`\`

## Children (prop especial)

\`\`\`jsx
// El contenido entre tags se pasa como children
<Card>
  <h1>Título</h1>
  <p>Contenido</p>
</Card>

function Card({ children }) {
  return <div className="card">{children}</div>;
}
\`\`\`
      `,
      tips: [
        "Props = argumentos de un componente",
        "Siempre usá destructuring para mayor claridad",
        "children es para contenido entre tags"
      ]
    },
    1: { // "Props inmutables"
      titulo: "Props son Inmutables",
      duracion: "4 min",
      contenido: `
# Props: Solo Lectura

Una regla fundamental de React: **las props son de solo lectura**.

## ❌ NUNCA modifiques props

\`\`\`jsx
function Contador({ valor }) {
  // ❌ INCORRECTO - modificar props
  valor = valor + 1;  // ERROR!
  
  return <p>{valor}</p>;
}
\`\`\`

## ¿Por qué son inmutables?

1. **Predecibilidad**: Si las props no cambian, el componente es predecible
2. **Performance**: React optimiza basándose en que las props no mutan
3. **Debugging**: Es más fácil rastrear de dónde vienen los datos

## ✅ Si necesitás cambiar algo, usá estado

\`\`\`jsx
function Contador({ valorInicial }) {
  // ✅ CORRECTO - usar estado local
  const [valor, setValor] = useState(valorInicial);
  
  return (
    <div>
      <p>{valor}</p>
      <button onClick={() => setValor(valor + 1)}>
        Incrementar
      </button>
    </div>
  );
}
\`\`\`

## Flujo de datos unidireccional

\`\`\`
    PADRE
      │
      │ props (↓ solo bajan)
      ▼
    HIJO
\`\`\`

- Los datos **bajan** via props
- Las acciones **suben** via callbacks

\`\`\`jsx
// El hijo avisa al padre con un callback
function Hijo({ onCambio }) {
  return <input onChange={(e) => onCambio(e.target.value)} />;
}

function Padre() {
  const [texto, setTexto] = useState("");
  return <Hijo onCambio={setTexto} />;
}
\`\`\`
      `,
      tips: [
        "Props bajan, eventos suben",
        "Nunca hagas props.algo = valor",
        "Para cambiar datos, usá useState"
      ]
    },
    2: { // "Destructuring"
      titulo: "Destructuring de Props",
      duracion: "4 min",
      contenido: `
# Destructuring: Código más Limpio

El destructuring es una característica de JavaScript que hace el código más legible.

## Sin destructuring vs Con destructuring

\`\`\`jsx
// ❌ Sin destructuring (verboso)
function UserCard(props) {
  return (
    <div>
      <h1>{props.nombre}</h1>
      <p>{props.email}</p>
      <p>Edad: {props.edad}</p>
    </div>
  );
}

// ✅ Con destructuring (limpio)
function UserCard({ nombre, email, edad }) {
  return (
    <div>
      <h1>{nombre}</h1>
      <p>{email}</p>
      <p>Edad: {edad}</p>
    </div>
  );
}
\`\`\`

## Valores por defecto

\`\`\`jsx
function Avatar({ 
  imagen = "/default-avatar.png",
  tamaño = 50,
  redondo = true 
}) {
  return (
    <img 
      src={imagen} 
      width={tamaño}
      style={{ borderRadius: redondo ? "50%" : 0 }}
    />
  );
}

// Todos estos usos son válidos:
<Avatar />
<Avatar imagen="/mi-foto.jpg" />
<Avatar tamaño={100} redondo={false} />
\`\`\`

## Rest operator (...rest)

\`\`\`jsx
function Boton({ texto, onClick, ...otrasProps }) {
  // texto y onClick se usan directamente
  // el resto de props se pasa al button
  return (
    <button onClick={onClick} {...otrasProps}>
      {texto}
    </button>
  );
}

// Uso
<Boton 
  texto="Enviar" 
  onClick={handleClick}
  className="btn-primary"  // pasa al button
  disabled={true}          // pasa al button
/>
\`\`\`
      `,
      tips: [
        "Destructuring en los parámetros es lo más común",
        "Usá valores por defecto para props opcionales",
        "...rest es útil para componentes wrapper"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 4: useState
  // ==========================================
  4: {
    0: { // "Crear estado"
      titulo: "Creando Estado con useState",
      duracion: "6 min",
      contenido: `
# useState: El Hook más Importante

\`useState\` te permite agregar **estado** (datos que cambian) a tus componentes.

## Sintaxis

\`\`\`jsx
import { useState } from 'react';

function Contador() {
  // Declarar estado: [valor, setterFunction] = useState(valorInicial)
  const [contador, setContador] = useState(0);
  
  return <p>Contador: {contador}</p>;
}
\`\`\`

## Anatomía de useState

\`\`\`jsx
const [estado, setEstado] = useState(valorInicial);
//      │        │                    │
//      │        │                    └── Valor inicial
//      │        └── Función para actualizar
//      └── Valor actual del estado
\`\`\`

## Tipos de estado

\`\`\`jsx
// Número
const [edad, setEdad] = useState(25);

// String
const [nombre, setNombre] = useState("");

// Boolean
const [activo, setActivo] = useState(false);

// Array
const [items, setItems] = useState([]);

// Objeto
const [usuario, setUsuario] = useState({ nombre: "", email: "" });

// Null (para datos que vendrán después)
const [data, setData] = useState(null);
\`\`\`

## Inicialización lazy (para cálculos costosos)

\`\`\`jsx
// ❌ Se ejecuta en cada render
const [items, setItems] = useState(calcularItemsIniciales());

// ✅ Solo se ejecuta una vez
const [items, setItems] = useState(() => calcularItemsIniciales());
\`\`\`

## Múltiples estados

\`\`\`jsx
function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [edad, setEdad] = useState(0);
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  
  // ... resto del componente
}
\`\`\`

## ⚠️ Regla de Hooks

Los hooks (como useState) **DEBEN** llamarse en el nivel superior del componente:

\`\`\`jsx
// ❌ INCORRECTO - dentro de un if
function Ejemplo() {
  if (condicion) {
    const [estado, setEstado] = useState(0);  // ERROR!
  }
}

// ❌ INCORRECTO - dentro de un loop
function Ejemplo() {
  for (let i = 0; i < 3; i++) {
    const [estado, setEstado] = useState(0);  // ERROR!
  }
}

// ✅ CORRECTO - nivel superior
function Ejemplo() {
  const [estado, setEstado] = useState(0);  // OK!
  
  if (condicion) {
    // Acá usás el estado, no lo declarás
  }
}
\`\`\`
      `,
      tips: [
        "Siempre importá useState de 'react'",
        "El nombre del setter es 'set' + NombreDelEstado",
        "Podés tener tantos useState como necesites"
      ]
    },
    1: { // "Actualizarlo"
      titulo: "Actualizando el Estado",
      duracion: "7 min",
      contenido: `
# Actualizando Estado Correctamente

Hay formas correctas e incorrectas de actualizar el estado.

## Actualización básica

\`\`\`jsx
const [contador, setContador] = useState(0);

// Actualizar con nuevo valor
setContador(5);        // contador = 5
setContador(10);       // contador = 10
\`\`\`

## ❌ NUNCA mutes el estado directamente

\`\`\`jsx
const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 25 });

// ❌ INCORRECTO
usuario.nombre = "Pedro";  // NO hacer esto!

// ✅ CORRECTO - crear nuevo objeto
setUsuario({ ...usuario, nombre: "Pedro" });
\`\`\`

## Actualización funcional (cuando dependés del valor anterior)

\`\`\`jsx
const [contador, setContador] = useState(0);

// ❌ Puede causar bugs si hay múltiples actualizaciones
setContador(contador + 1);

// ✅ CORRECTO - usar función para acceder al valor previo
setContador(prev => prev + 1);
\`\`\`

## Actualizando arrays

\`\`\`jsx
const [items, setItems] = useState(["a", "b", "c"]);

// Agregar item
setItems([...items, "d"]);                    // ["a", "b", "c", "d"]
setItems(prev => [...prev, "d"]);             // Mejor!

// Eliminar item
setItems(items.filter(item => item !== "b")); // ["a", "c"]

// Actualizar item
setItems(items.map(item => 
  item === "a" ? "A" : item
));                                            // ["A", "b", "c"]
\`\`\`

## Actualizando objetos

\`\`\`jsx
const [form, setForm] = useState({ nombre: "", email: "" });

// Actualizar una propiedad
setForm({ ...form, nombre: "Juan" });

// Actualizar propiedad anidada
const [user, setUser] = useState({
  datos: { nombre: "", edad: 0 }
});

setUser({
  ...user,
  datos: { ...user.datos, nombre: "Juan" }
});
\`\`\`
      `,
      tips: [
        "Siempre creá nuevos objetos/arrays, nunca mutes",
        "Usá la forma funcional cuando dependés del valor anterior",
        "El spread operator (...) es tu mejor amigo"
      ]
    },
    2: { // "Render automático"
      titulo: "Re-render Automático",
      duracion: "5 min",
      contenido: `
# El Estado Dispara Re-renders

Cuando el estado cambia, React **automáticamente** vuelve a renderizar el componente.

## El ciclo de render

\`\`\`
1. Usuario hace click
         │
         ▼
2. setContador(contador + 1)
         │
         ▼
3. React detecta cambio de estado
         │
         ▼
4. React re-renderiza el componente
         │
         ▼
5. El nuevo valor se muestra en pantalla
\`\`\`

## Ejemplo práctico

\`\`\`jsx
function Contador() {
  console.log("Componente renderizado!");  // Se ejecuta en cada render
  
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
// Al hacer click, verás "Componente renderizado!" en consola
\`\`\`

## ¿Qué dispara un re-render?

| Causa | Dispara render? |
|-------|-----------------|
| Cambio de estado | ✅ Sí |
| Cambio de props | ✅ Sí |
| Re-render del padre | ✅ Sí |
| Cambiar una variable normal | ❌ No |
| Mutar un objeto/array | ❌ No |

## Variables normales vs Estado

\`\`\`jsx
function Ejemplo() {
  // ❌ Esto NO funciona
  let contador = 0;
  
  return (
    <button onClick={() => {
      contador++;  // Cambia, pero React no lo sabe!
      console.log(contador); // 1, 2, 3... pero no se ve
    }}>
      {contador} {/* Siempre muestra 0 */}
    </button>
  );
}

// ✅ Esto SÍ funciona
function Ejemplo() {
  const [contador, setContador] = useState(0);
  
  return (
    <button onClick={() => setContador(c => c + 1)}>
      {contador} {/* 0, 1, 2, 3... */}
    </button>
  );
}
\`\`\`
      `,
      tips: [
        "Sin useState, los cambios no se reflejan en pantalla",
        "Cada render es como una 'foto' del estado en ese momento",
        "El estado es privado de cada instancia del componente"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 8: useEffect
  // ==========================================
  8: {
    0: { // "Cuándo se ejecuta"
      titulo: "¿Cuándo se Ejecuta useEffect?",
      duracion: "7 min",
      contenido: `
# useEffect: Efectos Secundarios en React

\`useEffect\` es el hook para ejecutar código **después** del render.

## ¿Qué son "efectos secundarios"?

Son cosas que pasan **fuera** del flujo normal de render:

- 🌐 Fetch de datos (APIs)
- 💾 Guardar en localStorage
- ⏰ Timers (setTimeout, setInterval)
- 📡 Suscripciones (WebSockets)
- 📝 Cambiar el título del documento

## Sintaxis Básica

\`\`\`jsx
import { useEffect } from 'react';

function MiComponente() {
  useEffect(() => {
    // Este código se ejecuta DESPUÉS del render
    console.log("El componente se renderizó");
  });

  return <h1>Hola</h1>;
}
\`\`\`

## ¿Cuándo se ejecuta?

Sin array de dependencias, se ejecuta **después de CADA render**:

\`\`\`jsx
function Contador() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Se ejecuta:
    // 1. Después del primer render
    // 2. Después de CADA actualización de estado
    console.log("Renderizado! Count es:", count);
  });

  return (
    <button onClick={() => setCount(count + 1)}>
      {count}
    </button>
  );
}
// Click, click, click...
// Console: "Renderizado! Count es: 0"
// Console: "Renderizado! Count es: 1"
// Console: "Renderizado! Count es: 2"
\`\`\`

## El ciclo de vida

\`\`\`
1. React renderiza el componente
2. El navegador pinta la pantalla
3. useEffect se ejecuta ← AQUÍ
\`\`\`

> useEffect es como decir: "Después de que termines de pintar, hacé esto también"

## Ejemplo real: Cambiar título del documento

\`\`\`jsx
function Pagina({ titulo }) {
  useEffect(() => {
    document.title = titulo;
  });

  return <h1>{titulo}</h1>;
}
\`\`\`
      `,
      tips: [
        "useEffect corre DESPUÉS del render, no antes",
        "Sin dependencias, corre en CADA render",
        "Pensalo como: 'después de pintar, hacé esto'"
      ]
    },
    1: { // "Array de dependencias"
      titulo: "Array de Dependencias",
      duracion: "8 min",
      contenido: `
# Controlando Cuándo se Ejecuta useEffect

El **array de dependencias** es el segundo argumento de useEffect y controla cuándo se ejecuta.

## Las 3 formas

### 1. Sin array - Se ejecuta en CADA render

\`\`\`jsx
useEffect(() => {
  console.log("Cada render");
});
// ⚠️ Cuidado: puede causar loops infinitos
\`\`\`

### 2. Array vacío [] - Solo al montar

\`\`\`jsx
useEffect(() => {
  console.log("Solo una vez, al montar");
}, []);  // ← Array vacío
// ✅ Ideal para fetch inicial de datos
\`\`\`

### 3. Con dependencias - Cuando cambian

\`\`\`jsx
useEffect(() => {
  console.log("userId cambió:", userId);
}, [userId]);  // ← Se ejecuta cuando userId cambia
\`\`\`

## Ejemplo práctico: Fetch de datos

\`\`\`jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Ejecuta cuando userId cambia
    setLoading(true);
    
    fetch(\\\`/api/users/\\\${userId}\\\`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });
  }, [userId]);  // ← Dependencia

  if (loading) return <p>Cargando...</p>;
  return <h1>{user.name}</h1>;
}
\`\`\`

## ¿Qué poner en las dependencias?

**Todo lo que uses dentro del effect y pueda cambiar:**

\`\`\`jsx
function Ejemplo({ propA, propB }) {
  const [stateC, setStateC] = useState(0);

  useEffect(() => {
    // Usamos propA y stateC adentro
    console.log(propA, stateC);
  }, [propA, stateC]);  // ← Ambos deben estar
  
  // propB no se usa, no va en dependencias
}
\`\`\`

## ⚠️ Error común: Olvidar dependencias

\`\`\`jsx
// ❌ MALO - falta userId en dependencias
useEffect(() => {
  fetch(\\\`/api/users/\\\${userId}\\\`);
}, []);  // userId no está! No se actualiza

// ✅ BUENO
useEffect(() => {
  fetch(\\\`/api/users/\\\${userId}\\\`);
}, [userId]);  // Se ejecuta cuando userId cambia
\`\`\`

## Tabla resumen

| Dependencias | Se ejecuta... |
|--------------|---------------|
| Sin array | Cada render |
| \`[]\` | Solo al montar |
| \`[a, b]\` | Cuando a o b cambian |
      `,
      tips: [
        "[] vacío = solo al montar (componentDidMount)",
        "Incluí TODO lo que uses dentro del effect",
        "ESLint te avisa si olvidás dependencias"
      ]
    },
    2: { // "Cleanup function"
      titulo: "Cleanup: Limpiando Efectos",
      duracion: "6 min",
      contenido: `
# Cleanup Function: Limpieza de Efectos

A veces necesitás **limpiar** un efecto antes de que el componente se desmonte o antes del próximo efecto.

## ¿Cuándo necesitás cleanup?

- ⏰ Cancelar timers (setTimeout, setInterval)
- 📡 Desuscribirte de eventos
- 🔌 Cerrar conexiones (WebSockets)
- 🚫 Cancelar peticiones fetch

## Sintaxis

\`\`\`jsx
useEffect(() => {
  // Setup: código del efecto
  
  return () => {
    // Cleanup: se ejecuta al desmontar
    // o antes del próximo efecto
  };
}, [dependencias]);
\`\`\`

## Ejemplo 1: Timer

\`\`\`jsx
function Reloj() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    // Setup: crear interval
    const intervalo = setInterval(() => {
      setSegundos(s => s + 1);
    }, 1000);

    // Cleanup: limpiar interval al desmontar
    return () => {
      clearInterval(intervalo);
    };
  }, []);  // Solo al montar

  return <p>Segundos: {segundos}</p>;
}
\`\`\`

## Ejemplo 2: Event listeners

\`\`\`jsx
function MouseTracker() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosicion({ x: e.clientX, y: e.clientY });
    };

    // Setup: agregar listener
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup: remover listener
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <p>Mouse: {posicion.x}, {posicion.y}</p>;
}
\`\`\`

## Ejemplo 3: Cancelar fetch (con AbortController)

\`\`\`jsx
function UserData({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(\\\`/api/users/\\\${userId}\\\`, { 
      signal: controller.signal 
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });

    // Cleanup: cancelar fetch si cambia userId
    return () => {
      controller.abort();
    };
  }, [userId]);

  return user ? <h1>{user.name}</h1> : <p>Cargando...</p>;
}
\`\`\`

## ¿Cuándo se ejecuta el cleanup?

1. **Antes de cada re-ejecución** del efecto (si las dependencias cambian)
2. **Cuando el componente se desmonta**

\`\`\`
Render 1 → Effect 1
Render 2 → Cleanup 1 → Effect 2
Render 3 → Cleanup 2 → Effect 3
Desmontar → Cleanup 3
\`\`\`
      `,
      tips: [
        "Si creás algo (timer, listener), limpialo",
        "Return una función para limpiar",
        "Cleanup evita memory leaks y bugs"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 5: RENDERIZADO CONDICIONAL
  // ==========================================
  5: {
    0: { // "Operador &&"
      titulo: "Operador && (AND lógico)",
      duracion: "5 min",
      contenido: `
# Operador && en Renderizado Condicional

El operador **&&** (AND lógico) es la forma más simple de mostrar u ocultar elementos en React.

## Sintaxis Básica

\`\`\`jsx
{condicion && <Componente />}
\`\`\`

Si la condición es **true**, se renderiza el componente. Si es **false**, no se renderiza nada.

## Ejemplo Práctico

\`\`\`jsx
function Notificaciones({ cantidad }) {
  return (
    <div>
      <h1>Dashboard</h1>
      {cantidad > 0 && (
        <span className="badge">{cantidad} nuevas</span>
      )}
    </div>
  );
}
\`\`\`

## ¿Cómo funciona?

JavaScript evalúa expresiones de izquierda a derecha:
- Si el lado izquierdo es **falsy** (false, 0, null, undefined, ""), devuelve ese valor
- Si es **truthy**, devuelve el lado derecho (el JSX)

## Casos de Uso

| Caso | Ejemplo |
|------|---------|
| Mostrar si hay datos | \`{items.length > 0 && <Lista />}\` |
| Mostrar si está logueado | \`{usuario && <Perfil />}\` |
| Mostrar mensaje de error | \`{error && <Error mensaje={error} />}\` |

## ⚠️ Cuidado con el 0

\`\`\`jsx
// ❌ Si count es 0, mostrará "0" en pantalla
{count && <Badge count={count} />}

// ✅ Convertir a boolean explícitamente
{count > 0 && <Badge count={count} />}
\`\`\`
      `,
      tips: [
        "&& es perfecto para 'mostrar si existe'",
        "Siempre usá comparaciones explícitas con números",
        "Si la condición es falsa, no renderiza nada"
      ]
    },
    1: { // "Ternario ? :"
      titulo: "Operador Ternario (? :)",
      duracion: "6 min",
      contenido: `
# Operador Ternario en React

El operador ternario es la forma de elegir entre **dos opciones** basándose en una condición.

## Sintaxis

\`\`\`jsx
{condicion ? <ComponenteA /> : <ComponenteB />}
\`\`\`

- Si condición es **true**: renderiza ComponenteA
- Si condición es **false**: renderiza ComponenteB

## Diferencia con &&

| Operador | Uso |
|----------|-----|
| \`&&\` | Mostrar u ocultar (una opción) |
| \`? :\` | Elegir entre dos opciones |

## Ejemplo: Estado de Login

\`\`\`jsx
function App({ usuario }) {
  return (
    <header>
      {usuario ? (
        <div>
          <span>Hola, {usuario.nombre}</span>
          <button>Cerrar Sesión</button>
        </div>
      ) : (
        <div>
          <button>Iniciar Sesión</button>
          <button>Registrarse</button>
        </div>
      )}
    </header>
  );
}
\`\`\`

## Ternarios en Atributos

\`\`\`jsx
<button 
  className={activo ? "btn-activo" : "btn-inactivo"}
  disabled={cargando ? true : false}
>
  {cargando ? "Procesando..." : "Enviar"}
</button>
\`\`\`
      `,
      tips: [
        "Ternario = elegir entre A o B",
        "Evitá anidar más de un nivel",
        "Podés usar ternarios en className, style, texto, etc."
      ]
    },
    2: { // "Early return"
      titulo: "Early Return",
      duracion: "5 min",
      contenido: `
# Early Return Pattern

El **early return** es retornar temprano del componente si se cumple cierta condición.

## El Problema

\`\`\`jsx
// ❌ Muchos niveles de anidamiento
function Perfil({ usuario, cargando, error }) {
  return (
    <div>
      {cargando ? (
        <Spinner />
      ) : error ? (
        <Error />
      ) : usuario ? (
        <Contenido />
      ) : (
        <NoData />
      )}
    </div>
  );
}
\`\`\`

## La Solución: Early Return

\`\`\`jsx
// ✅ Código plano y legible
function Perfil({ usuario, cargando, error }) {
  if (cargando) {
    return <Spinner />;
  }
  
  if (error) {
    return <Error mensaje={error} />;
  }
  
  if (!usuario) {
    return <p>No hay usuario</p>;
  }
  
  // Happy path al final
  return (
    <div>
      <h1>{usuario.nombre}</h1>
      <p>{usuario.email}</p>
    </div>
  );
}
\`\`\`

## Beneficios

| Aspecto | Con Early Return |
|---------|------------------|
| Legibilidad | Código plano, fácil de seguir |
| Testing | Fácil testear cada rama |

## Cuándo Usarlo

- Estados de carga
- Manejo de errores
- Validaciones y permisos
      `,
      tips: [
        "Early return = manejar casos edge primero",
        "El 'happy path' va al final",
        "Evita pirámides de ternarios anidados"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 6: LISTAS Y .map()
  // ==========================================
  6: {
    0: { // "Método map()"
      titulo: "El Método .map()",
      duracion: "6 min",
      contenido: `
# Renderizando Listas con .map()

El método **.map()** transforma cada elemento de un array en JSX.

## Sintaxis Básica

\`\`\`jsx
{array.map(item => <Componente key={item.id} />)}
\`\`\`

## Ejemplo Simple

\`\`\`jsx
function ListaFrutas() {
  const frutas = ["🍎 Manzana", "🍌 Banana", "🍇 Uva"];
  
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
}
\`\`\`

## Con Objetos

\`\`\`jsx
function ListaUsuarios({ usuarios }) {
  return (
    <div>
      {usuarios.map(usuario => (
        <div key={usuario.id} className="card">
          <img src={usuario.avatar} />
          <h3>{usuario.nombre}</h3>
          <p>{usuario.email}</p>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## ¿Por qué .map()?

- **Declarativo**: Describís QUÉ querés, no CÓMO hacerlo
- **Inmutable**: No modifica el array original
- **Expresivo**: Una línea = una transformación
      `,
      tips: [
        ".map() es el método más usado en React",
        "Siempre retorna un nuevo array",
        "Nunca uses .forEach() para renderizar - no retorna nada"
      ]
    },
    1: { // "Prop key"
      titulo: "La Prop Key",
      duracion: "5 min",
      contenido: `
# La Prop Key: Por Qué es Obligatoria

La **key** ayuda a React a identificar qué elementos cambiaron, se agregaron o eliminaron.

## ¿Qué pasa sin key?

\`\`\`jsx
// ⚠️ Warning: Each child should have a unique "key" prop
{usuarios.map(u => <Usuario nombre={u.nombre} />)}
\`\`\`

React no sabe qué elemento es cuál. Cuando la lista cambia, re-renderiza TODO.

## Con key correcta

\`\`\`jsx
// ✅ React sabe exactamente qué cambió
{usuarios.map(u => (
  <Usuario key={u.id} nombre={u.nombre} />
))}
\`\`\`

## Reglas de la Key

| Regla | Ejemplo |
|-------|---------|
| Única entre hermanos | Dos listas pueden tener mismas keys |
| Estable | No cambia entre renders |
| No usar index si reordenas | El orden puede cambiar |

## ❌ Nunca uses index con listas dinámicas

\`\`\`jsx
// ❌ Malo si la lista puede reordenarse
{items.map((item, index) => <Item key={index} />)}

// ✅ Correcto
{items.map(item => <Item key={item.id} />)}
\`\`\`
      `,
      tips: [
        "Key debe ser única Y estable",
        "Usá IDs de tu base de datos",
        "Index solo está OK para listas estáticas"
      ]
    },
    2: { // "Índices vs IDs"
      titulo: "Índices vs IDs",
      duracion: "4 min",
      contenido: `
# ¿Cuándo Usar Índice vs ID?

## Usá INDEX cuando:

- La lista es **estática** (no cambia)
- No se reordena ni filtra
- Los items no tienen ID único

\`\`\`jsx
const diasSemana = ["Lunes", "Martes", "Miércoles"];

{diasSemana.map((dia, index) => (
  <li key={index}>{dia}</li>
))}
\`\`\`

## Usá ID cuando:

- La lista es **dinámica** (se agregan/eliminan items)
- Se puede reordenar o filtrar
- Cada item tiene un identificador único

\`\`\`jsx
{tareas.map(tarea => (
  <Tarea 
    key={tarea.id}  // ✅ ID de la base de datos
    titulo={tarea.titulo}
    completada={tarea.completada}
  />
))}
\`\`\`

## ¿Por qué importa?

Con INDEX y lista dinámica:
1. Borrás el item 2
2. React piensa que el 3 es ahora el 2
3. El estado del componente queda desincronizado

Con ID único, React sabe exactamente cuál borrar.
      `,
      tips: [
        "Cuando dudes, usá ID",
        "Los IDs vienen normalmente del backend",
        "Si no hay ID, podés generar uno con uuid o nanoid"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 7: EVENTOS
  // ==========================================
  7: {
    0: { // "Event handlers"
      titulo: "Event Handlers en React",
      duracion: "5 min",
      contenido: `
# Manejando Eventos en React

Los eventos en React son similares a HTML pero con algunas diferencias.

## Diferencias con HTML

| HTML | React |
|------|-------|
| onclick | onClick |
| onchange | onChange |
| onsubmit | onSubmit |
| Strings | Funciones |

## Sintaxis Básica

\`\`\`jsx
function Boton() {
  const handleClick = () => {
    alert("¡Clickeaste!");
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

## Inline vs Función separada

\`\`\`jsx
// ✅ Función separada (recomendado)
const handleClick = () => { ... };
<button onClick={handleClick}>

// ✅ Inline para casos simples
<button onClick={() => setCount(count + 1)}>

// ❌ No llamar la función directamente
<button onClick={handleClick()}>  // Se ejecuta al renderizar!
\`\`\`

## Convención de nombres

Usamos **handle** + nombre del evento:
- handleClick
- handleSubmit
- handleChange
- handleMouseOver
      `,
      tips: [
        "Eventos en camelCase: onClick, onChange",
        "Pasá la función, no la llamada",
        "Usá handle + evento para nombrar handlers"
      ]
    },
    1: { // "Objeto event"
      titulo: "El Objeto Event",
      duracion: "5 min",
      contenido: `
# El Objeto Event

React pasa automáticamente el **evento** como primer argumento del handler.

## Accediendo al evento

\`\`\`jsx
function Input() {
  const handleChange = (event) => {
    console.log(event.target.value);  // El valor del input
  };
  
  return <input onChange={handleChange} />;
}
\`\`\`

## Propiedades comunes

| Propiedad | Descripción |
|-----------|-------------|
| event.target | El elemento que disparó el evento |
| event.target.value | Valor del input |
| event.target.checked | Estado del checkbox |
| event.target.name | Atributo name del elemento |

## Ejemplo: Formulario

\`\`\`jsx
function Formulario() {
  const [datos, setDatos] = useState({ nombre: "", email: "" });
  
  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form>
      <input name="nombre" value={datos.nombre} onChange={handleChange} />
      <input name="email" value={datos.email} onChange={handleChange} />
    </form>
  );
}
\`\`\`
      `,
      tips: [
        "event.target = el elemento que disparó el evento",
        "event.target.value = para inputs de texto",
        "Usá e.target.name para manejar múltiples inputs"
      ]
    },
    2: { // "preventDefault"
      titulo: "preventDefault y stopPropagation",
      duracion: "4 min",
      contenido: `
# Controlando el Comportamiento por Defecto

## preventDefault()

Evita el comportamiento por defecto del navegador.

\`\`\`jsx
function FormularioLogin() {
  const handleSubmit = (e) => {
    e.preventDefault();  // ⚡ Evita que recargue la página
    // Ahora manejamos el submit con JavaScript
    console.log("Enviando formulario...");
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" />
      <button type="submit">Enviar</button>
    </form>
  );
}
\`\`\`

## Casos comunes de preventDefault

| Elemento | Comportamiento por defecto |
|----------|---------------------------|
| form onSubmit | Recarga la página |
| a onClick | Navega al href |
| input type=submit | Envía el form |

## stopPropagation()

Evita que el evento suba a elementos padres.

\`\`\`jsx
function Card({ onCardClick }) {
  const handleButtonClick = (e) => {
    e.stopPropagation();  // No dispara onCardClick
    console.log("Solo el botón");
  };
  
  return (
    <div onClick={onCardClick}>
      <h1>Card</h1>
      <button onClick={handleButtonClick}>
        Click solo aquí
      </button>
    </div>
  );
}
\`\`\`
      `,
      tips: [
        "preventDefault() para forms = evitar recarga",
        "stopPropagation() = el evento no sube al padre",
        "Usá ambos según lo que necesites"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 9: FETCH / AXIOS
  // ==========================================
  9: {
    0: { // "GET / POST"
      titulo: "Peticiones GET y POST",
      duracion: "7 min",
      contenido: `
# Consumiendo APIs con Fetch

## GET: Obtener datos

\`\`\`jsx
function ListaUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:8080/api/usuarios')
      .then(response => response.json())
      .then(data => setUsuarios(data));
  }, []);
  
  return (
    <ul>
      {usuarios.map(u => <li key={u.id}>{u.nombre}</li>)}
    </ul>
  );
}
\`\`\`

## POST: Enviar datos

\`\`\`jsx
function CrearUsuario() {
  const guardarUsuario = async (datos) => {
    const response = await fetch('http://localhost:8080/api/usuarios', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(datos)
    });
    
    const nuevoUsuario = await response.json();
    console.log("Creado:", nuevoUsuario);
  };
  
  return <button onClick={() => guardarUsuario({nombre: "Ana"})}>Crear</button>;
}
\`\`\`

## Métodos HTTP

| Método | Uso |
|--------|-----|
| GET | Obtener datos |
| POST | Crear datos |
| PUT | Actualizar todo |
| PATCH | Actualizar parcial |
| DELETE | Eliminar |
      `,
      tips: [
        "GET no necesita body, POST sí",
        "Siempre setear Content-Type para POST",
        "response.json() parsea la respuesta"
      ]
    },
    1: { // "JSON"
      titulo: "Trabajando con JSON",
      duracion: "5 min",
      contenido: `
# JSON: El Formato de Intercambio

JSON (JavaScript Object Notation) es el formato estándar para enviar datos entre frontend y backend.

## Parseando JSON

\`\`\`jsx
// La respuesta viene como texto, hay que parsearla
fetch('/api/datos')
  .then(response => response.json())  // Convierte texto a objeto
  .then(data => {
    console.log(data);  // Ya es un objeto JS
  });
\`\`\`

## Enviando JSON

\`\`\`jsx
const usuario = { nombre: "Juan", edad: 25 };

fetch('/api/usuarios', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'  // Importante!
  },
  body: JSON.stringify(usuario)  // Objeto → String JSON
});
\`\`\`

## JSON.stringify vs JSON.parse

| Método | Convierte |
|--------|-----------|
| JSON.stringify(obj) | Objeto → String JSON |
| JSON.parse(string) | String JSON → Objeto |

\`\`\`jsx
const obj = { nombre: "Ana" };
const json = JSON.stringify(obj);  // '{"nombre":"Ana"}'
const obj2 = JSON.parse(json);     // { nombre: "Ana" }
\`\`\`
      `,
      tips: [
        "response.json() ya hace el parse por vos",
        "JSON.stringify() para enviar datos",
        "Content-Type: application/json es obligatorio para POST"
      ]
    },
    2: { // "async/await"
      titulo: "Async/Await",
      duracion: "6 min",
      contenido: `
# Async/Await: Código Asíncrono Legible

## El problema con .then()

\`\`\`jsx
// Encadenamiento que se vuelve difícil de leer
fetch('/api/usuario')
  .then(res => res.json())
  .then(usuario => fetch('/api/posts/' + usuario.id))
  .then(res => res.json())
  .then(posts => console.log(posts));
\`\`\`

## La solución: async/await

\`\`\`jsx
async function cargarDatos() {
  const resUsuario = await fetch('/api/usuario');
  const usuario = await resUsuario.json();
  
  const resPosts = await fetch('/api/posts/' + usuario.id);
  const posts = await resPosts.json();
  
  console.log(posts);
}
\`\`\`

## En un useEffect

\`\`\`jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      const res = await fetch('/api/datos');
      const data = await res.json();
      setDatos(data);
    } catch (error) {
      setError(error.message);
    }
  };
  
  fetchData();
}, []);
\`\`\`

## Manejo de errores

\`\`\`jsx
try {
  const res = await fetch('/api/datos');
  if (!res.ok) throw new Error('Error ' + res.status);
  const data = await res.json();
} catch (error) {
  console.error("Falló:", error);
}
\`\`\`
      `,
      tips: [
        "await solo funciona dentro de funciones async",
        "useEffect no puede ser async directamente",
        "Siempre usá try/catch para manejar errores"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 10: CONTROLLED COMPONENTS
  // ==========================================
  10: {
    0: { // "value + onChange"
      titulo: "value + onChange",
      duracion: "6 min",
      contenido: `
# Controlled Components

Un **controlled component** es un input cuyo valor está controlado por el estado de React.

## El patrón básico

\`\`\`jsx
function InputControlado() {
  const [nombre, setNombre] = useState('');
  
  return (
    <input 
      value={nombre}                    // React controla el valor
      onChange={e => setNombre(e.target.value)}  // Actualizamos el estado
    />
  );
}
\`\`\`

## ¿Por qué controlarlo?

1. **Una sola fuente de verdad**: El estado es el "dueño" del valor
2. **Validación en tiempo real**: Podés validar mientras escribe
3. **Transformación**: Podés modificar lo que se ingresa

## Ejemplo con varios inputs

\`\`\`jsx
function Formulario() {
  const [form, setForm] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <form>
      <input name="nombre" value={form.nombre} onChange={handleChange} />
      <input name="email" value={form.email} onChange={handleChange} />
      <textarea name="mensaje" value={form.mensaje} onChange={handleChange} />
    </form>
  );
}
\`\`\`
      `,
      tips: [
        "value + onChange = controlled component",
        "El estado es la única fuente de verdad",
        "Usá [e.target.name] para manejar múltiples inputs"
      ]
    },
    1: { // "Validación"
      titulo: "Validación de Formularios",
      duracion: "6 min",
      contenido: `
# Validando Inputs en React

## Validación en tiempo real

\`\`\`jsx
function EmailInput() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  
  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Validar mientras escribe
    if (!value.includes('@')) {
      setError('Email debe contener @');
    } else {
      setError('');
    }
  };
  
  return (
    <div>
      <input value={email} onChange={handleChange} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}
\`\`\`

## Validación al enviar

\`\`\`jsx
function FormularioRegistro() {
  const [datos, setDatos] = useState({ email: '', password: '' });
  const [errores, setErrores] = useState({});
  
  const validar = () => {
    const nuevosErrores = {};
    
    if (!datos.email) nuevosErrores.email = 'Email requerido';
    if (datos.password.length < 6) {
      nuevosErrores.password = 'Mínimo 6 caracteres';
    }
    
    return nuevosErrores;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    
    if (Object.keys(erroresValidacion).length === 0) {
      // Sin errores, enviar
      console.log('Enviando...', datos);
    } else {
      setErrores(erroresValidacion);
    }
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
\`\`\`
      `,
      tips: [
        "Validá en onChange para feedback inmediato",
        "Validá en onSubmit para chequeo final",
        "Mostrá errores solo cuando hay y después de interactuar"
      ]
    },
    2: { // "Submit"
      titulo: "Enviando Formularios",
      duracion: "5 min",
      contenido: `
# onSubmit: El Punto Final

## El patrón completo

\`\`\`jsx
function FormularioContacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [exito, setExito] = useState(false);
  
  const handleSubmit = async (e) => {
    e.preventDefault();  // ⚡ Muy importante
    setEnviando(true);
    
    try {
      await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      
      setExito(true);
      setForm({ nombre: '', email: '', mensaje: '' });  // Limpiar
    } catch (error) {
      alert('Error al enviar');
    } finally {
      setEnviando(false);
    }
  };
  
  if (exito) return <p>¡Gracias por tu mensaje!</p>;
  
  return (
    <form onSubmit={handleSubmit}>
      {/* inputs... */}
      <button type="submit" disabled={enviando}>
        {enviando ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
}
\`\`\`

## Estados típicos de un form

1. **Inicial**: Vacío, esperando input
2. **Editando**: Usuario escribiendo
3. **Validando**: Mostrando errores si hay
4. **Enviando**: disabled, mostrando spinner
5. **Éxito/Error**: Feedback al usuario
      `,
      tips: [
        "Siempre e.preventDefault() en onSubmit",
        "Deshabilitar botón mientras envía",
        "Limpiar form después de éxito"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 11: LIFTING STATE UP
  // ==========================================
  11: {
    0: { // "Estado en el padre"
      titulo: "Estado en el Padre",
      duracion: "6 min",
      contenido: `
# Lifting State Up

Cuando dos componentes hermanos necesitan compartir datos, el estado sube al padre común.

## El problema

\`\`\`jsx
// ❌ Cada input tiene su propio estado, no se comunican
function ConversorTemperatura() {
  return (
    <div>
      <InputCelsius />    {/* tiene su state */}
      <InputFahrenheit /> {/* tiene su state diferente */}
    </div>
  );
}
\`\`\`

## La solución: Levantar el estado

\`\`\`jsx
// ✅ El padre maneja el estado, los hijos lo usan
function ConversorTemperatura() {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (celsius * 9/5) + 32;
  
  return (
    <div>
      <InputCelsius 
        valor={celsius} 
        onChange={setCelsius} 
      />
      <InputFahrenheit 
        valor={fahrenheit}
        onChange={(f) => setCelsius((f - 32) * 5/9)} 
      />
    </div>
  );
}
\`\`\`

## El flujo

1. **Padre** tiene el estado
2. **Padre** pasa el valor como prop
3. **Padre** pasa un callback para actualizarlo
4. **Hijo** usa el valor y llama al callback
      `,
      tips: [
        "Si dos hermanos necesitan el mismo dato, levantalo al padre",
        "El padre es la 'única fuente de verdad'",
        "Los hijos reciben datos via props"
      ]
    },
    1: { // "Callbacks como props"
      titulo: "Callbacks como Props",
      duracion: "5 min",
      contenido: `
# Comunicación Hijo → Padre

Los hijos no pueden modificar el estado del padre directamente. Usan **callbacks**.

## El patrón

\`\`\`jsx
// PADRE
function Lista() {
  const [items, setItems] = useState(['A', 'B', 'C']);
  
  const agregarItem = (nuevoItem) => {
    setItems([...items, nuevoItem]);
  };
  
  return (
    <div>
      {items.map(item => <p key={item}>{item}</p>)}
      <FormAgregar onAgregar={agregarItem} />
    </div>
  );
}

// HIJO
function FormAgregar({ onAgregar }) {
  const [texto, setTexto] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregar(texto);  // Llama al padre
    setTexto('');
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input value={texto} onChange={e => setTexto(e.target.value)} />
      <button>Agregar</button>
    </form>
  );
}
\`\`\`

## Convención de nombres

- **onAlgo**: para props que son callbacks (onSubmit, onClick, onChange)
- **handleAlgo**: para funciones que manejan eventos internos
      `,
      tips: [
        "Padre define la función, hijo la ejecuta",
        "Props 'on' = callbacks del padre",
        "Funciones 'handle' = handlers internos"
      ]
    },
    2: { // "Flujo de datos"
      titulo: "Flujo de Datos Unidireccional",
      duracion: "5 min",
      contenido: `
# Flujo Unidireccional en React

Los datos en React fluyen en una sola dirección: de arriba hacia abajo.

## El flujo

\`\`\`
     [App]  ← estado vive aquí
       │
       ▼ props (datos bajan)
    [Lista]
       │
       ▼ props (datos bajan)
     [Item] ─── callback ───► [Lista] ───► [App]
                   (acciones suben)
\`\`\`

## En código

\`\`\`jsx
function App() {
  const [tareas, setTareas] = useState([]);
  
  const completarTarea = (id) => {
    setTareas(tareas.map(t => 
      t.id === id ? {...t, completada: true} : t
    ));
  };
  
  return <ListaTareas tareas={tareas} onCompletar={completarTarea} />;
}

function ListaTareas({ tareas, onCompletar }) {
  return tareas.map(tarea => (
    <Tarea key={tarea.id} tarea={tarea} onCompletar={onCompletar} />
  ));
}

function Tarea({ tarea, onCompletar }) {
  return (
    <div>
      <span>{tarea.texto}</span>
      <button onClick={() => onCompletar(tarea.id)}>✓</button>
    </div>
  );
}
\`\`\`
      `,
      tips: [
        "Datos bajan via props",
        "Acciones suben via callbacks",
        "Esto hace la app predecible y debugeable"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 12: COMPONENTIZACIÓN
  // ==========================================
  12: {
    0: { // "Single Responsibility"
      titulo: "Un Componente, Una Responsabilidad",
      duracion: "5 min",
      contenido: `
# Principio de Responsabilidad Única

Cada componente debería hacer **una sola cosa**.

## ❌ Componente que hace mucho

\`\`\`jsx
function Dashboard() {
  // Lógica de usuario
  // Lógica de notificaciones
  // Lógica de estadísticas
  // Renderizado de header
  // Renderizado de sidebar
  // Renderizado de contenido
  // 500 líneas...
}
\`\`\`

## ✅ Componentes separados

\`\`\`jsx
function Dashboard() {
  return (
    <div>
      <Header />
      <div className="layout">
        <Sidebar />
        <main>
          <Estadisticas />
          <Notificaciones />
        </main>
      </div>
    </div>
  );
}
\`\`\`

## ¿Cuándo separar?

Creá un nuevo componente cuando:
- Es muy largo (más de 100-150 líneas)
- Tiene lógica propia y distinta
- Se repite en varios lugares
- Tiene un propósito claro y específico
      `,
      tips: [
        "Si dudás, separalo",
        "Componente largo = probablemente divisible",
        "Nombre claro = responsabilidad clara"
      ]
    },
    1: { // "Reutilización"
      titulo: "Componentes Reutilizables",
      duracion: "6 min",
      contenido: `
# Diseñando para Reutilizar

## Componente específico vs genérico

\`\`\`jsx
// ❌ Muy específico, no reutilizable
function BotonGuardarUsuario() {
  return <button className="btn-azul">Guardar Usuario</button>;
}

// ✅ Genérico, reutilizable
function Boton({ children, variante = "primary", onClick }) {
  return (
    <button className={\`btn btn-\${variante}\`} onClick={onClick}>
      {children}
    </button>
  );
}

// Uso
<Boton variante="primary" onClick={guardar}>Guardar</Boton>
<Boton variante="danger" onClick={eliminar}>Eliminar</Boton>
\`\`\`

## Props para personalización

\`\`\`jsx
function Card({ titulo, children, footer, className = '' }) {
  return (
    <div className={\`card \${className}\`}>
      {titulo && <h3 className="card-title">{titulo}</h3>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
}

// Múltiples usos
<Card titulo="Usuario">...</Card>
<Card footer={<button>Acción</button>}>...</Card>
<Card className="destacada">...</Card>
\`\`\`
      `,
      tips: [
        "Usá props para lo que cambia",
        "children para contenido flexible",
        "Valores por defecto para props opcionales"
      ]
    },
    2: { // "Composición"
      titulo: "Composición vs Herencia",
      duracion: "5 min",
      contenido: `
# Composición en React

React favorece la **composición** sobre la herencia.

## ¿Qué es composición?

Combinar componentes pequeños para crear uno más grande.

\`\`\`jsx
// Componentes pequeños y enfocados
function Avatar({ src, alt }) {
  return <img className="avatar" src={src} alt={alt} />;
}

function Nombre({ children }) {
  return <span className="nombre">{children}</span>;
}

function Badge({ tipo }) {
  return <span className={\`badge badge-\${tipo}\`}>{tipo}</span>;
}

// Compuesto de los anteriores
function UsuarioCard({ usuario }) {
  return (
    <div className="usuario-card">
      <Avatar src={usuario.foto} alt={usuario.nombre} />
      <div>
        <Nombre>{usuario.nombre}</Nombre>
        <Badge tipo={usuario.rol} />
      </div>
    </div>
  );
}
\`\`\`

## Especialización con props

\`\`\`jsx
function Dialog({ children, tipo = "info" }) {
  return <div className={\`dialog dialog-\${tipo}\`}>{children}</div>;
}

// Especializado
function DialogConfirmacion({ mensaje, onConfirmar, onCancelar }) {
  return (
    <Dialog tipo="warning">
      <p>{mensaje}</p>
      <button onClick={onConfirmar}>Sí</button>
      <button onClick={onCancelar}>No</button>
    </Dialog>
  );
}
\`\`\`
      `,
      tips: [
        "Componer > Heredar en React",
        "Componentes pequeños = más flexibles",
        "children es la clave de la composición"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 13: REACT ROUTER
  // ==========================================
  13: {
    0: { // "Routes / Route"
      titulo: "Configurando Routes",
      duracion: "7 min",
      contenido: `
# React Router: Navegación en SPAs

React Router permite tener múltiples "páginas" sin recargar el navegador.

## Instalación

\`\`\`bash
npm install react-router-dom
\`\`\`

## Configuración básica

\`\`\`jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
\`\`\`

## Estructura típica

\`\`\`jsx
function App() {
  return (
    <BrowserRouter>
      <Navbar />  {/* Visible en todas las páginas */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productos/:id" element={<DetalleProducto />} />
      </Routes>
      <Footer />  {/* Visible en todas las páginas */}
    </BrowserRouter>
  );
}
\`\`\`
      `,
      tips: [
        "BrowserRouter envuelve toda la app",
        "Routes contiene todos los Route",
        "path='*' = ruta por defecto (404)"
      ]
    },
    1: { // "Link / useNavigate"
      titulo: "Navegación con Link y useNavigate",
      duracion: "5 min",
      contenido: `
# Navegando entre Páginas

## Link (para navegación declarativa)

\`\`\`jsx
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/productos">Productos</Link>
      <Link to="/contacto">Contacto</Link>
    </nav>
  );
}
\`\`\`

## useNavigate (para navegación programática)

\`\`\`jsx
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const exito = await login(datos);
    
    if (exito) {
      navigate('/dashboard');  // Redirige después del login
    }
  };
  
  return <form onSubmit={handleSubmit}>...</form>;
}
\`\`\`

## Diferencia

| Link | useNavigate |
|------|-------------|
| Declarativo (en JSX) | Programático (en código) |
| Siempre visible | Después de un evento |
| Como <a> mejorado | Como redirect |
      `,
      tips: [
        "Link para menús y botones de navegación",
        "useNavigate para redirecciones después de acciones",
        "Nunca uses <a> para navegación interna"
      ]
    },
    2: { // "Params dinámicos"
      titulo: "Parámetros Dinámicos",
      duracion: "5 min",
      contenido: `
# Rutas con Parámetros

## Definiendo rutas dinámicas

\`\`\`jsx
<Routes>
  <Route path="/productos/:id" element={<DetalleProducto />} />
  <Route path="/usuarios/:userId/posts/:postId" element={<Post />} />
</Routes>
\`\`\`

## Accediendo a los parámetros

\`\`\`jsx
import { useParams } from 'react-router-dom';

function DetalleProducto() {
  const { id } = useParams();  // Extrae :id de la URL
  const [producto, setProducto] = useState(null);
  
  useEffect(() => {
    fetch(\`/api/productos/\${id}\`)
      .then(res => res.json())
      .then(data => setProducto(data));
  }, [id]);
  
  if (!producto) return <p>Cargando...</p>;
  
  return (
    <div>
      <h1>{producto.nombre}</h1>
      <p>{producto.descripcion}</p>
    </div>
  );
}
\`\`\`

## Query Parameters

\`\`\`jsx
import { useSearchParams } from 'react-router-dom';

function Busqueda() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');  // /buscar?q=react
  
  return <p>Buscando: {query}</p>;
}
\`\`\`
      `,
      tips: [
        ":param en el path define un parámetro",
        "useParams() para obtenerlos",
        "useSearchParams() para query strings"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 14: CONTEXT API
  // ==========================================
  14: {
    0: { // "createContext"
      titulo: "Creando un Context",
      duracion: "6 min",
      contenido: `
# Context API: Estado Global

Context permite compartir datos sin pasar props por cada nivel.

## El problema: Prop Drilling

\`\`\`jsx
// ❌ Pasando usuario por 5 niveles
<App usuario={usuario}>
  <Layout usuario={usuario}>
    <Sidebar usuario={usuario}>
      <Menu usuario={usuario}>
        <UserInfo usuario={usuario} />
\`\`\`

## La solución: Context

\`\`\`jsx
import { createContext, useState } from 'react';

// 1. Crear el contexto
export const UserContext = createContext(null);

// 2. Crear el provider
export function UserProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  
  const login = (datos) => setUsuario(datos);
  const logout = () => setUsuario(null);
  
  return (
    <UserContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}
\`\`\`

## Estructura de archivos

\`\`\`
src/
  context/
    UserContext.jsx
    ThemeContext.jsx
\`\`\`
      `,
      tips: [
        "Un archivo por contexto",
        "El Provider envuelve los componentes que lo necesitan",
        "value contiene lo que querés compartir"
      ]
    },
    1: { // "Provider"
      titulo: "Usando el Provider",
      duracion: "5 min",
      contenido: `
# Configurando el Provider

## Envolviendo la App

\`\`\`jsx
// App.jsx
import { UserProvider } from './context/UserContext';

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
\`\`\`

## Múltiples Providers

\`\`\`jsx
function App() {
  return (
    <UserProvider>
      <ThemeProvider>
        <NotificationProvider>
          {/* Tu app */}
        </NotificationProvider>
      </ThemeProvider>
    </UserProvider>
  );
}
\`\`\`

## ¿Dónde poner el Provider?

- **Nivel más alto necesario**: No más arriba de lo necesario
- **Antes de los Routes**: Si necesitás auth en rutas
- **Después de BrowserRouter**: Si el context usa navegación
      `,
      tips: [
        "Provider lo más arriba que necesites",
        "Varios providers se anidan",
        "Cada context tiene su propio provider"
      ]
    },
    2: { // "useContext"
      titulo: "Consumiendo con useContext",
      duracion: "5 min",
      contenido: `
# useContext: Accediendo al Valor

## Uso básico

\`\`\`jsx
import { useContext } from 'react';
import { UserContext } from '../context/UserContext';

function Navbar() {
  const { usuario, logout } = useContext(UserContext);
  
  return (
    <nav>
      {usuario ? (
        <>
          <span>Hola, {usuario.nombre}</span>
          <button onClick={logout}>Salir</button>
        </>
      ) : (
        <Link to="/login">Iniciar sesión</Link>
      )}
    </nav>
  );
}
\`\`\`

## Hook personalizado (recomendado)

\`\`\`jsx
// En UserContext.jsx
export function useUser() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe usarse dentro de UserProvider');
  }
  return context;
}

// Uso más limpio
import { useUser } from '../context/UserContext';

function Perfil() {
  const { usuario } = useUser();  // Más claro
  return <h1>{usuario.nombre}</h1>;
}
\`\`\`
      `,
      tips: [
        "useContext extrae el value del Provider",
        "Creá hooks personalizados para cada context",
        "El hook puede validar que esté dentro del Provider"
      ]
    }
  },

  // ==========================================
  // CONCEPTO 15: BUENAS PRÁCTICAS
  // ==========================================
  15: {
    0: { // "No mutar estado"
      titulo: "Nunca Mutar Estado",
      duracion: "5 min",
      contenido: `
# Inmutabilidad del Estado

React detecta cambios comparando referencias. Si mutás el objeto, no detecta el cambio.

## ❌ NUNCA hagas esto

\`\`\`jsx
// Mutando array
const handleAgregar = () => {
  items.push(nuevoItem);  // ❌ Muta el array original
  setItems(items);        // React no detecta cambio
};

// Mutando objeto
const handleCambio = () => {
  usuario.nombre = "Nuevo";  // ❌ Muta el objeto
  setUsuario(usuario);       // React no detecta cambio
};
\`\`\`

## ✅ Hacé esto (crear copias)

\`\`\`jsx
// Arrays
setItems([...items, nuevoItem]);  // Agregar
setItems(items.filter(i => i.id !== id));  // Eliminar
setItems(items.map(i => i.id === id ? {...i, done: true} : i));  // Actualizar

// Objetos
setUsuario({ ...usuario, nombre: "Nuevo" });

// Objetos anidados
setUsuario({
  ...usuario,
  direccion: { ...usuario.direccion, ciudad: "Buenos Aires" }
});
\`\`\`

## ¿Por qué importa?

- React compara \`oldState === newState\`
- Si es el mismo objeto (mutado), son iguales
- Spread crea objeto nuevo = detecta cambio = re-render
      `,
      tips: [
        "Spread (...) es tu mejor amigo",
        "Arrays: map, filter, slice (no push, splice)",
        "Objetos: spread para copiar y modificar"
      ]
    },
    1: { // "Componentes chicos"
      titulo: "Componentes Pequeños y Enfocados",
      duracion: "5 min",
      contenido: `
# Keep It Small

## Señales de que un componente es muy grande

- Más de 150-200 líneas
- Muchos estados diferentes
- Demasiados props
- Difícil de entender qué hace
- Difícil de testear

## Estrategias para dividir

### 1. Extraer sub-componentes

\`\`\`jsx
// Antes
function Dashboard() {
  return (
    <div>
      {/* 50 líneas de header */}
      {/* 100 líneas de sidebar */}
      {/* 200 líneas de contenido */}
    </div>
  );
}

// Después
function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <DashboardSidebar />
      <DashboardContent />
    </div>
  );
}
\`\`\`

### 2. Custom Hooks para lógica

\`\`\`jsx
// Antes: lógica mezclada con UI
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => { /* fetch logic */ }, []);
  
  // más lógica...
}

// Después: lógica en hook
function UserList() {
  const { users, loading, error } = useUsers();
  // Solo UI
}
\`\`\`
      `,
      tips: [
        "Si necesitás scroll para ver todo, es muy largo",
        "Extraé cuando hay lógica compleja",
        "Custom hooks para lógica reutilizable"
      ]
    },
    2: { // "Nombres claros"
      titulo: "Nombres Claros y Consistentes",
      duracion: "4 min",
      contenido: `
# El Poder de los Buenos Nombres

## Componentes: PascalCase y descriptivos

\`\`\`jsx
// ❌ Malo
function Btn() {}
function Usr() {}
function Item() {}  // ¿Item de qué?

// ✅ Bueno
function SubmitButton() {}
function UserProfile() {}
function ProductCard() {}
\`\`\`

## Props y Estado: claros y específicos

\`\`\`jsx
// ❌ Malo
const [data, setData] = useState();
const [flag, setFlag] = useState();

// ✅ Bueno
const [usuarios, setUsuarios] = useState([]);
const [modalAbierto, setModalAbierto] = useState(false);
\`\`\`

## Funciones: verbos que describen la acción

\`\`\`jsx
// ❌ Malo
function click() {}
function process() {}

// ✅ Bueno
function handleSubmit() {}
function filtrarPorCategoria() {}
function calcularTotal() {}
\`\`\`

## Convenciones

| Tipo | Convención | Ejemplo |
|------|-----------|---------|
| Componentes | PascalCase | UserCard |
| Props/variables | camelCase | userName |
| Constantes | SCREAMING_SNAKE | API_URL |
| Handlers | handleEvento | handleClick |
| Booleanos | is/has/should | isLoading |
      `,
      tips: [
        "Si necesitás comentario para explicar, el nombre es malo",
        "Booleanos: is/has/should + adjetivo",
        "Funciones: verbo + sustantivo"
      ]
    }
  }
};

// Helper para obtener el contenido de una lección
export function getLeccion(conceptoId, claseIndex) {
  return leccionesContent[conceptoId]?.[claseIndex] || null;
}

// Helper para obtener todas las lecciones de un concepto
export function getLeccionesDeConcepto(conceptoId) {
  return leccionesContent[conceptoId] || {};
}

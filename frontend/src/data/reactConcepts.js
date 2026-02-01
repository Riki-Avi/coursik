// Datos de los 15 conceptos de React para el dashboard
export const reactConcepts = [
    // 🟣 FUNDAMENTOS BÁSICOS
    {
        id: 1,
        titulo: "Componentes Funcionales",
        categoria: "fundamentos",
        importancia: 10,
        icono: "📦",
        descripcion: "Qué son y por qué todo en React es un componente.",
        incapie: "Sin esto, React no existe.",
        clases: [
            "Qué es un componente",
            "Cómo se define",
            "Qué retorna (JSX)"
        ],
        ejemplo: `function MiComponente() {
  return <h1>Hola</h1>;
}`
    },
    {
        id: 2,
        titulo: "JSX",
        categoria: "fundamentos",
        importancia: 9,
        icono: "✨",
        descripcion: "HTML + JavaScript juntos.",
        incapie: "JSX no es HTML, es JavaScript.",
        clases: [
            "Expresiones { }",
            "Atributos (className, htmlFor)",
            "Diferencia con HTML"
        ],
        ejemplo: `<h1>{nombre}</h1>`
    },
    {
        id: 3,
        titulo: "Props",
        categoria: "fundamentos",
        importancia: 9,
        icono: "📨",
        descripcion: "Comunicación padre → hijo.",
        incapie: "Props son inmutables.",
        clases: [
            "Pasar datos",
            "Props inmutables",
            "Destructuring"
        ],
        ejemplo: `<Saludo nombre="Juan" />`
    },
    {
        id: 4,
        titulo: "useState",
        categoria: "fundamentos",
        importancia: 10,
        icono: "🔄",
        descripcion: "Estado = datos que cambian.",
        incapie: "El 80% de React usa useState.",
        clases: [
            "Crear estado",
            "Actualizarlo",
            "Render automático"
        ],
        ejemplo: `const [contador, setContador] = useState(0);`
    },

    // 🔵 RENDERIZADO Y LÓGICA
    {
        id: 5,
        titulo: "Renderizado Condicional",
        categoria: "renderizado",
        importancia: 8,
        icono: "🔀",
        descripcion: "Mostrar u ocultar elementos según condiciones.",
        incapie: "Control total del UI.",
        clases: [
            "Operador &&",
            "Ternario ? :",
            "Early return"
        ],
        ejemplo: `{logueado && <Dashboard />}`
    },
    {
        id: 6,
        titulo: "Listas y .map()",
        categoria: "renderizado",
        importancia: 9,
        icono: "📋",
        descripcion: "Renderizar arrays de datos.",
        incapie: "Siempre usar key única.",
        clases: [
            "Método map()",
            "Prop key",
            "Índices vs IDs"
        ],
        ejemplo: `usuarios.map(u => <Usuario key={u.id} />)`
    },
    {
        id: 7,
        titulo: "Eventos",
        categoria: "renderizado",
        importancia: 8,
        icono: "👆",
        descripcion: "Interacción del usuario con la app.",
        incapie: "onClick, onChange, onSubmit...",
        clases: [
            "Event handlers",
            "Objeto event",
            "preventDefault"
        ],
        ejemplo: `<button onClick={handleClick}>Click</button>`
    },

    // 🟢 CICLO DE VIDA (HOOKS CLAVE)
    {
        id: 8,
        titulo: "useEffect",
        categoria: "cicloVida",
        importancia: 9,
        icono: "⚡",
        descripcion: "Efectos secundarios y ciclo de vida.",
        incapie: "Clave para consumir APIs.",
        clases: [
            "Cuándo se ejecuta",
            "Array de dependencias",
            "Cleanup function"
        ],
        ejemplo: `useEffect(() => {
  fetchData();
}, []);`
    },
    {
        id: 9,
        titulo: "Fetch / Axios (APIs)",
        categoria: "cicloVida",
        importancia: 9,
        icono: "🌐",
        descripcion: "Consumir backend (Spring Boot en tu caso).",
        incapie: "Conectar frontend con backend.",
        clases: [
            "GET / POST",
            "JSON",
            "async/await"
        ],
        ejemplo: `const data = await fetch('/api/usuarios');`
    },

    // 🟡 ARQUITECTURA BÁSICA
    {
        id: 10,
        titulo: "Controlled Components",
        categoria: "arquitectura",
        importancia: 8,
        icono: "📝",
        descripcion: "Inputs controlados por estado.",
        incapie: "Formularios en React.",
        clases: [
            "value + onChange",
            "Validación",
            "Submit"
        ],
        ejemplo: `<input value={email} onChange={e => setEmail(e.target.value)} />`
    },
    {
        id: 11,
        titulo: "Lifting State Up",
        categoria: "arquitectura",
        importancia: 7,
        icono: "⬆️",
        descripcion: "Compartir estado entre componentes hermanos.",
        incapie: "El padre maneja el estado.",
        clases: [
            "Estado en el padre",
            "Callbacks como props",
            "Flujo de datos"
        ],
        ejemplo: `// Padre maneja estado, hijos lo usan`
    },
    {
        id: 12,
        titulo: "Componentización",
        categoria: "arquitectura",
        importancia: 7,
        icono: "🧩",
        descripcion: "Saber cuándo y cómo separar componentes.",
        incapie: "Componentes pequeños y reutilizables.",
        clases: [
            "Single Responsibility",
            "Reutilización",
            "Composición"
        ],
        ejemplo: `// Un componente = una responsabilidad`
    },

    // 🔴 NAVEGACIÓN Y ESCALA
    {
        id: 13,
        titulo: "React Router",
        categoria: "escala",
        importancia: 9,
        icono: "🧭",
        descripcion: "SPA real con múltiples páginas.",
        incapie: "Navegación sin recargar.",
        clases: [
            "Routes / Route",
            "Link / useNavigate",
            "Params dinámicos"
        ],
        ejemplo: `<Route path="/login" element={<Login />} />`
    },
    {
        id: 14,
        titulo: "Context API",
        categoria: "escala",
        importancia: 7,
        icono: "🌍",
        descripcion: "Estado global sin Redux.",
        incapie: "Ideal para auth, tema, usuario.",
        clases: [
            "createContext",
            "Provider",
            "useContext"
        ],
        ejemplo: `const user = useContext(UserContext);`
    },

    // ⚪ CALIDAD
    {
        id: 15,
        titulo: "Buenas Prácticas",
        categoria: "calidad",
        importancia: 8,
        icono: "✅",
        descripcion: "Código limpio y mantenible.",
        incapie: "Lo que diferencia a un junior de un mid.",
        clases: [
            "No mutar estado",
            "Componentes chicos",
            "Nombres claros"
        ],
        ejemplo: `// Código limpio = menos bugs`
    }
];

// Categorías con colores
export const categorias = {
    fundamentos: { nombre: "Fundamentos Básicos", color: "#8b5cf6", emoji: "🟣" },
    renderizado: { nombre: "Renderizado y Lógica", color: "#3b82f6", emoji: "🔵" },
    cicloVida: { nombre: "Ciclo de Vida", color: "#22c55e", emoji: "🟢" },
    arquitectura: { nombre: "Arquitectura Básica", color: "#eab308", emoji: "🟡" },
    escala: { nombre: "Navegación y Escala", color: "#ef4444", emoji: "🔴" },
    calidad: { nombre: "Calidad", color: "#6b7280", emoji: "⚪" }
};

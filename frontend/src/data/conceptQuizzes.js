// Exámenes por concepto - mínimo 10 preguntas cada uno
// Cada pregunta tiene opción "No entendí esto" (índice -1)

export const conceptQuizzes = {
    // ==========================================
    // CONCEPTO 1: COMPONENTES FUNCIONALES
    // ==========================================
    1: {
        titulo: "Examen: Componentes Funcionales",
        descripcion: "Verificá si dominás los fundamentos de los componentes en React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué es un componente en React?",
                opciones: [
                    "Una función que retorna HTML puro",
                    "Una pieza de código reutilizable que representa parte de la UI",
                    "Un archivo CSS con estilos",
                    "Una base de datos para guardar información"
                ],
                correcta: 1,
                explicacion: "Un componente es una pieza de código reutilizable que representa una parte de la interfaz de usuario. Pensalo como bloques de LEGO."
            },
            {
                id: 2,
                pregunta: "¿Cuál es la forma correcta de nombrar un componente en React?",
                opciones: [
                    "miComponente (camelCase)",
                    "mi-componente (kebab-case)",
                    "MiComponente (PascalCase)",
                    "mi_componente (snake_case)"
                ],
                correcta: 2,
                explicacion: "Los componentes SIEMPRE deben usar PascalCase (primera letra mayúscula). React usa esto para diferenciar componentes de elementos HTML."
            },
            {
                id: 3,
                pregunta: "¿Qué retorna un componente funcional?",
                opciones: [
                    "Un string con HTML",
                    "Un objeto JavaScript",
                    "JSX (o null)",
                    "Un array de elementos"
                ],
                correcta: 2,
                explicacion: "Los componentes retornan JSX, que es una extensión de JavaScript que permite escribir sintaxis similar a HTML."
            },
            {
                id: 4,
                pregunta: "¿Cuál de estas definiciones de componente es INCORRECTA?",
                opciones: [
                    "function Saludo() { return <h1>Hola</h1>; }",
                    "const Saludo = () => <h1>Hola</h1>;",
                    "function saludo() { return <h1>Hola</h1>; }",
                    "const Saludo = () => { return <h1>Hola</h1>; };"
                ],
                correcta: 2,
                explicacion: "La opción C es incorrecta porque 'saludo' está en minúscula. React no lo reconocería como componente."
            },
            {
                id: 5,
                pregunta: "¿Por qué usamos componentes en React?",
                opciones: [
                    "Porque es obligatorio",
                    "Para hacer el código más largo",
                    "Para reutilizar código y mantenerlo organizado",
                    "Para que la app sea más lenta"
                ],
                correcta: 2,
                explicacion: "Los componentes nos permiten reutilizar código, mantenerlo organizado, y hacer que sea más fácil de testear y mantener."
            },
            {
                id: 6,
                pregunta: "¿Qué pasa si un componente no tiene un return?",
                opciones: [
                    "Retorna undefined y puede causar errores",
                    "React lo ignora",
                    "Se renderiza vacío automáticamente",
                    "Muestra un mensaje de bienvenida"
                ],
                correcta: 0,
                explicacion: "Sin return, la función retorna undefined, lo cual puede causar errores. Siempre debés retornar JSX o null."
            },
            {
                id: 7,
                pregunta: "¿Cuál es la diferencia entre JSX y HTML?",
                opciones: [
                    "No hay diferencia, son lo mismo",
                    "JSX usa className en lugar de class, y es JavaScript",
                    "HTML es más moderno que JSX",
                    "JSX solo funciona en el servidor"
                ],
                correcta: 1,
                explicacion: "JSX parece HTML pero es JavaScript. Usa className en lugar de class, htmlFor en lugar de for, y permite insertar expresiones JS con { }."
            },
            {
                id: 8,
                pregunta: "¿Qué es un Fragment en React (<> </>)?",
                opciones: [
                    "Un componente que muestra errores",
                    "Una forma de agrupar elementos sin agregar un div extra",
                    "Un tipo de comentario",
                    "Una función para fragmentar el código"
                ],
                correcta: 1,
                explicacion: "Los Fragments permiten retornar múltiples elementos sin agregar un div contenedor al DOM, manteniendo el HTML limpio."
            },
            {
                id: 9,
                pregunta: "¿Cuántos elementos raíz puede retornar un componente?",
                opciones: [
                    "Los que quieras",
                    "Exactamente uno (o un Fragment)",
                    "Mínimo dos",
                    "Depende del navegador"
                ],
                correcta: 1,
                explicacion: "Un componente debe retornar UN solo elemento raíz. Si necesitás varios, envolvelos en un div o un Fragment (<>)."
            },
            {
                id: 10,
                pregunta: "¿Cómo insertás una variable JavaScript dentro de JSX?",
                opciones: [
                    "Con comillas: \"variable\"",
                    "Con llaves: {variable}",
                    "Con paréntesis: (variable)",
                    "Con corchetes: [variable]"
                ],
                correcta: 1,
                explicacion: "Las llaves { } son la puerta al mundo JavaScript dentro de JSX. Todo lo que esté entre llaves se evalúa como JavaScript."
            },
            {
                id: 11,
                pregunta: "¿Qué opción muestra correctamente estilos inline en JSX?",
                opciones: [
                    "style=\"color: red\"",
                    "style={color: 'red'}",
                    "style={{ color: 'red' }}",
                    "style=[color, red]"
                ],
                correcta: 2,
                explicacion: "Los estilos inline en JSX usan doble llave: la externa para JavaScript y la interna para el objeto de estilos. Las propiedades van en camelCase."
            },
            {
                id: 12,
                pregunta: "¿Cuál es la ventaja de usar arrow functions para definir componentes?",
                opciones: [
                    "Son más rápidas",
                    "Ocupan menos memoria",
                    "Sintaxis más corta y return implícito",
                    "Funcionan en más navegadores"
                ],
                correcta: 2,
                explicacion: "Las arrow functions permiten una sintaxis más corta y return implícito cuando el componente es simple: const Comp = () => <div/>;"
            }
        ]
    },

    // ==========================================
    // CONCEPTO 2: JSX
    // ==========================================
    2: {
        titulo: "Examen: JSX",
        descripcion: "Poné a prueba tu conocimiento de JSX",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué significa JSX?",
                opciones: [
                    "JavaScript XML",
                    "Java Syntax Extension",
                    "JSON XML",
                    "JavaScript Extra"
                ],
                correcta: 0,
                explicacion: "JSX significa JavaScript XML. Es una extensión de sintaxis que permite escribir markup similar a HTML dentro de JavaScript."
            },
            {
                id: 2,
                pregunta: "¿Cuál es la forma correcta de escribir una clase CSS en JSX?",
                opciones: [
                    "class=\"container\"",
                    "className=\"container\"",
                    "cssClass=\"container\"",
                    "Class=\"container\""
                ],
                correcta: 1,
                explicacion: "En JSX usamos className porque 'class' es una palabra reservada en JavaScript."
            },
            {
                id: 3,
                pregunta: "¿Cómo mostrás el valor de una variable en JSX?",
                opciones: [
                    "<p>{{nombre}}</p>",
                    "<p>${nombre}</p>",
                    "<p>{nombre}</p>",
                    "<p>%nombre%</p>"
                ],
                correcta: 2,
                explicacion: "Usamos llaves simples { } para insertar expresiones JavaScript en JSX."
            },
            {
                id: 4,
                pregunta: "¿Qué podés poner dentro de { } en JSX?",
                opciones: [
                    "Solo variables",
                    "Solo funciones",
                    "Cualquier expresión JavaScript válida",
                    "Solo números"
                ],
                correcta: 2,
                explicacion: "Dentro de las llaves podés poner cualquier expresión JavaScript: variables, operaciones, llamadas a funciones, ternarios, etc."
            },
            {
                id: 5,
                pregunta: "¿Cuál de estas NO es una expresión válida dentro de { }?",
                opciones: [
                    "{2 + 2}",
                    "{nombre.toUpperCase()}",
                    "{if (true) 'hola'}",
                    "{condicion ? 'sí' : 'no'}"
                ],
                correcta: 2,
                explicacion: "No podés usar statements (if, for, while) dentro de { }. Solo expresiones. Usá ternarios o && para condicionales."
            },
            {
                id: 6,
                pregunta: "¿Cómo se escribe un evento de click en JSX?",
                opciones: [
                    "onclick={handleClick}",
                    "onClick={handleClick}",
                    "on-click={handleClick}",
                    "ONCLICK={handleClick}"
                ],
                correcta: 1,
                explicacion: "En JSX, todos los eventos se escriben en camelCase: onClick, onChange, onSubmit, etc."
            },
            {
                id: 7,
                pregunta: "¿Qué atributo se usa en JSX para el 'for' de un label?",
                opciones: [
                    "for",
                    "htmlFor",
                    "labelFor",
                    "forId"
                ],
                correcta: 1,
                explicacion: "Usamos htmlFor en lugar de for porque 'for' es una palabra reservada en JavaScript (for loops)."
            },
            {
                id: 8,
                pregunta: "¿Cómo cierro un tag que no tiene contenido en JSX?",
                opciones: [
                    "<input>",
                    "<input></input>",
                    "<input />",
                    "Las tres son válidas"
                ],
                correcta: 2,
                explicacion: "En JSX, todos los tags deben cerrarse. Para tags sin contenido, usamos la forma auto-cerrada: <input />"
            },
            {
                id: 9,
                pregunta: "¿Qué retorna Babel cuando compila JSX?",
                opciones: [
                    "HTML puro",
                    "React.createElement()",
                    "document.createElement()",
                    "Un string"
                ],
                correcta: 1,
                explicacion: "Babel transforma JSX a llamadas React.createElement(). Por ejemplo: <h1>Hola</h1> se convierte en React.createElement('h1', null, 'Hola')"
            },
            {
                id: 10,
                pregunta: "¿Cómo escribís un comentario dentro de JSX?",
                opciones: [
                    "// comentario",
                    "<!-- comentario -->",
                    "{/* comentario */}",
                    "/* comentario */"
                ],
                correcta: 2,
                explicacion: "Los comentarios en JSX van dentro de llaves y usan la sintaxis de comentario multilínea: {/* comentario */}"
            }
        ]
    },

    // ==========================================
    // CONCEPTO 3: PROPS
    // ==========================================
    3: {
        titulo: "Examen: Props",
        descripcion: "Evaluá tu comprensión de las props en React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué son las props en React?",
                opciones: [
                    "Variables globales",
                    "Datos que pasan del padre al hijo",
                    "Estilos del componente",
                    "Eventos del usuario"
                ],
                correcta: 1,
                explicacion: "Props (propiedades) son datos que un componente padre pasa a sus hijos. Es la forma principal de comunicación padre → hijo."
            },
            {
                id: 2,
                pregunta: "¿Cómo pasás una prop llamada 'nombre' con valor 'Juan'?",
                opciones: [
                    "<Componente nombre:'Juan' />",
                    "<Componente nombre='Juan' />",
                    "<Componente {nombre: 'Juan'} />",
                    "<Componente props.nombre='Juan' />"
                ],
                correcta: 1,
                explicacion: "Las props se pasan como atributos: <Componente nombre='Juan' /> o <Componente nombre={'Juan'} />"
            },
            {
                id: 3,
                pregunta: "¿Podés modificar una prop dentro del componente hijo?",
                opciones: [
                    "Sí, siempre",
                    "Sí, pero solo números",
                    "No, las props son inmutables",
                    "Solo si usás 'use strict'"
                ],
                correcta: 2,
                explicacion: "Las props son de solo lectura (inmutables). Nunca debés modificarlas. Si necesitás cambiar un valor, usá useState."
            },
            {
                id: 4,
                pregunta: "¿Qué es destructuring de props?",
                opciones: [
                    "Eliminar props no usadas",
                    "Extraer propiedades individuales del objeto props",
                    "Comprimir las props",
                    "Validar las props"
                ],
                correcta: 1,
                explicacion: "Destructuring permite extraer propiedades: function Comp({ nombre, edad }) en lugar de function Comp(props) y luego props.nombre."
            },
            {
                id: 5,
                pregunta: "¿Cómo definís un valor por defecto para una prop?",
                opciones: [
                    "function Comp({ nombre = 'Anónimo' })",
                    "function Comp(nombre || 'Anónimo')",
                    "function Comp({ default: nombre })",
                    "function Comp({ nombre: 'Anónimo' })"
                ],
                correcta: 0,
                explicacion: "Los valores por defecto se definen en el destructuring: { nombre = 'Anónimo' } usa 'Anónimo' si no se pasa la prop."
            },
            {
                id: 6,
                pregunta: "¿Qué es la prop especial 'children'?",
                opciones: [
                    "Una lista de componentes hijos",
                    "El contenido que va entre las tags del componente",
                    "Los hijos del DOM",
                    "Un array de IDs"
                ],
                correcta: 1,
                explicacion: "children es el contenido entre las tags: <Card><h1>Título</h1></Card> - el h1 es children de Card."
            },
            {
                id: 7,
                pregunta: "¿Cómo pasás un número como prop?",
                opciones: [
                    "edad='25'",
                    "edad={25}",
                    "edad=25",
                    "edad=(25)"
                ],
                correcta: 1,
                explicacion: "Los números (y cualquier valor que no sea string) se pasan con llaves: edad={25}. Con comillas sería un string."
            },
            {
                id: 8,
                pregunta: "¿Cuál es el flujo de datos en React?",
                opciones: [
                    "Bidireccional (arriba y abajo)",
                    "Unidireccional (solo de padre a hijo)",
                    "Circular",
                    "No hay flujo definido"
                ],
                correcta: 1,
                explicacion: "React tiene flujo unidireccional: los datos bajan via props, las acciones suben via callbacks (funciones pasadas como props)."
            },
            {
                id: 9,
                pregunta: "¿Para qué sirve el spread operator en props?",
                opciones: [
                    "Para eliminar props",
                    "Para pasar todas las propiedades de un objeto como props",
                    "Para contar props",
                    "Para ordenar props"
                ],
                correcta: 1,
                explicacion: "{...props} pasa todas las propiedades de un objeto como props individuales al componente."
            },
            {
                id: 10,
                pregunta: "¿Cómo un hijo puede comunicarse con el padre?",
                opciones: [
                    "Modificando props directamente",
                    "Usando variables globales",
                    "Llamando funciones (callbacks) pasadas como props",
                    "No puede, es imposible"
                ],
                correcta: 2,
                explicacion: "El hijo llama funciones que el padre le pasó como props. Por ejemplo: <Hijo onCambio={handleCambio} />"
            }
        ]
    },

    // ==========================================
    // CONCEPTO 4: useState
    // ==========================================
    4: {
        titulo: "Examen: useState",
        descripcion: "Demostrá que dominás el hook más importante de React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué es el estado (state) en React?",
                opciones: [
                    "Variables globales",
                    "Datos que pueden cambiar y disparan re-renders",
                    "Props del componente",
                    "El CSS del componente"
                ],
                correcta: 1,
                explicacion: "El estado son datos que pertenecen al componente, pueden cambiar, y cuando cambian, React re-renderiza el componente."
            },
            {
                id: 2,
                pregunta: "¿Cuál es la sintaxis correcta de useState?",
                opciones: [
                    "const contador = useState(0)",
                    "const [contador, setContador] = useState(0)",
                    "const {contador, setContador} = useState(0)",
                    "useState(contador, 0)"
                ],
                correcta: 1,
                explicacion: "useState retorna un array con [valorActual, funcionParaActualizar]. Usamos destructuring para extraerlos."
            },
            {
                id: 3,
                pregunta: "¿Qué pasa cuando llamás a setContador(5)?",
                opciones: [
                    "Nada",
                    "Solo cambia la variable contador",
                    "Cambia el estado y React re-renderiza el componente",
                    "Lanza un error"
                ],
                correcta: 2,
                explicacion: "Llamar al setter actualiza el estado y dispara un re-render. React vuelve a ejecutar el componente con el nuevo valor."
            },
            {
                id: 4,
                pregunta: "¿Por qué NO funciona esto: contador = contador + 1?",
                opciones: [
                    "Porque contador es constante",
                    "Porque React no detecta cambios en variables normales",
                    "Porque falta un punto y coma",
                    "Sí funciona correctamente"
                ],
                correcta: 1,
                explicacion: "React no rastrea variables normales. Solo detecta cambios cuando usás el setter de useState."
            },
            {
                id: 5,
                pregunta: "¿Cuál es la forma correcta de actualizar estado basado en el valor anterior?",
                opciones: [
                    "setContador(contador + 1)",
                    "setContador(prev => prev + 1)",
                    "setContador(+1)",
                    "contador++"
                ],
                correcta: 1,
                explicacion: "La forma funcional setContador(prev => prev + 1) garantiza que siempre uses el valor más reciente del estado."
            },
            {
                id: 6,
                pregunta: "¿Cómo actualizás un objeto en el estado correctamente?",
                opciones: [
                    "usuario.nombre = 'Juan'",
                    "setUsuario({ nombre: 'Juan' })",
                    "setUsuario({ ...usuario, nombre: 'Juan' })",
                    "setUsuario.nombre('Juan')"
                ],
                correcta: 2,
                explicacion: "Nunca mutes el objeto directamente. Creá uno nuevo con spread: { ...usuario, nombre: 'Juan' }"
            },
            {
                id: 7,
                pregunta: "¿Cómo agregás un item a un array en el estado?",
                opciones: [
                    "items.push(nuevoItem)",
                    "setItems(items.push(nuevoItem))",
                    "setItems([...items, nuevoItem])",
                    "setItems.add(nuevoItem)"
                ],
                correcta: 2,
                explicacion: "Nunca uses push (muta el array). Creá un nuevo array: [...items, nuevoItem]"
            },
            {
                id: 8,
                pregunta: "¿Dónde debés llamar a useState?",
                opciones: [
                    "Dentro de un if",
                    "Dentro de un loop",
                    "En el nivel superior del componente",
                    "Dentro de una función anidada"
                ],
                correcta: 2,
                explicacion: "Los hooks (como useState) deben llamarse en el nivel superior del componente, no dentro de condicionales o loops."
            },
            {
                id: 9,
                pregunta: "¿Cuántos useState podés tener en un componente?",
                opciones: [
                    "Solo uno",
                    "Máximo tres",
                    "Los que necesites",
                    "Depende del tamaño del componente"
                ],
                correcta: 2,
                explicacion: "Podés tener tantos useState como necesites. Es común tener varios para diferentes piezas de estado."
            },
            {
                id: 10,
                pregunta: "¿Qué es la inicialización lazy de useState?",
                opciones: [
                    "No inicializar el estado",
                    "Pasar una función que se ejecuta solo una vez",
                    "Inicializar con null",
                    "Usar setTimeout"
                ],
                correcta: 1,
                explicacion: "useState(() => calcularValorInicial()) pasa una función que se ejecuta solo en el primer render, útil para cálculos costosos."
            },
            {
                id: 11,
                pregunta: "¿El estado se comparte entre instancias del mismo componente?",
                opciones: [
                    "Sí, siempre",
                    "No, cada instancia tiene su propio estado",
                    "Solo si usan el mismo nombre",
                    "Solo en producción"
                ],
                correcta: 1,
                explicacion: "Cada instancia de un componente tiene su propio estado independiente. <Contador /> y <Contador /> tienen estados separados."
            },
            {
                id: 12,
                pregunta: "¿Qué valor debe tener el estado inicial si los datos vienen después (de una API)?",
                opciones: [
                    "undefined",
                    "Un string vacío siempre",
                    "null o un valor vacío apropiado ([], {}, '')",
                    "No se puede hacer eso"
                ],
                correcta: 2,
                explicacion: "Usá null para datos que vendrán, o valores vacíos apropiados: [] para arrays, {} para objetos, '' para strings."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 8: useEffect
    // ==========================================
    8: {
        titulo: "Examen: useEffect",
        descripcion: "Demostrá que dominás los efectos secundarios en React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Para qué sirve useEffect?",
                opciones: [
                    "Para crear estado",
                    "Para ejecutar código después del render (efectos secundarios)",
                    "Para definir estilos",
                    "Para crear componentes"
                ],
                correcta: 1,
                explicacion: "useEffect ejecuta código después del render, ideal para efectos secundarios como fetch de datos, timers, o manipulación del DOM."
            },
            {
                id: 2,
                pregunta: "¿Cuándo se ejecuta useEffect sin array de dependencias?",
                opciones: [
                    "Solo una vez al montar",
                    "Nunca",
                    "Después de CADA render",
                    "Solo al desmontar"
                ],
                correcta: 2,
                explicacion: "Sin array de dependencias, useEffect se ejecuta después de cada render del componente."
            },
            {
                id: 3,
                pregunta: "¿Qué hace useEffect(() => { ... }, [])?",
                opciones: [
                    "Se ejecuta en cada render",
                    "Se ejecuta solo al montar (una vez)",
                    "Se ejecuta solo al desmontar",
                    "Nunca se ejecuta"
                ],
                correcta: 1,
                explicacion: "El array vacío [] significa que el efecto solo se ejecuta una vez, cuando el componente se monta."
            },
            {
                id: 4,
                pregunta: "¿Qué debe ir en el array de dependencias?",
                opciones: [
                    "Nada, siempre vacío",
                    "Solo props",
                    "Todo lo que uses dentro del effect y pueda cambiar",
                    "Solo funciones"
                ],
                correcta: 2,
                explicacion: "En el array van todas las variables (props, state, funciones) que uses dentro del effect y puedan cambiar."
            },
            {
                id: 5,
                pregunta: "¿Para qué sirve la función de cleanup (return)?",
                opciones: [
                    "Para retornar un valor",
                    "Para limpiar efectos (cancelar timers, remover listeners, etc.)",
                    "Para mostrar errores",
                    "Para hacer el código más corto"
                ],
                correcta: 1,
                explicacion: "La función de cleanup limpia el efecto anterior antes del próximo, o cuando el componente se desmonta."
            },
            {
                id: 6,
                pregunta: "¿Cuándo se ejecuta la función de cleanup?",
                opciones: [
                    "Solo al desmontar el componente",
                    "Antes de cada re-ejecución del efecto Y al desmontar",
                    "Nunca, es opcional",
                    "Solo cuando hay errores"
                ],
                correcta: 1,
                explicacion: "Cleanup se ejecuta antes de cada nueva ejecución del efecto (si las dependencias cambian) y cuando el componente se desmonta."
            },
            {
                id: 7,
                pregunta: "¿Cuál es la forma correcta de hacer fetch de datos en useEffect?",
                opciones: [
                    "fetch() fuera del useEffect",
                    "useEffect(async () => { await fetch() }, [])",
                    "useEffect(() => { fetch().then(...) }, [])",
                    "useState(() => fetch())"
                ],
                correcta: 2,
                explicacion: "No podés hacer el callback de useEffect async directamente. Usá fetch().then() o creá una función async adentro y llamala."
            },
            {
                id: 8,
                pregunta: "¿Qué ejemplo es un efecto secundario?",
                opciones: [
                    "Calcular el total de un carrito",
                    "Renderizar un botón",
                    "Hacer un fetch a una API",
                    "Definir una variable"
                ],
                correcta: 2,
                explicacion: "Los efectos secundarios son cosas externas al render: fetch, localStorage, timers, suscripciones, cambiar el título del documento."
            },
            {
                id: 9,
                pregunta: "Si olvidás una dependencia en el array, ¿qué pasa?",
                opciones: [
                    "Error de sintaxis",
                    "El efecto usa valores desactualizados (stale closures)",
                    "El navegador se congela",
                    "Nada, funciona igual"
                ],
                correcta: 1,
                explicacion: "Si olvidás una dependencia, el efecto 'recuerda' el valor viejo y no se actualiza cuando cambia. Esto causa bugs difíciles de detectar."
            },
            {
                id: 10,
                pregunta: "¿Por qué es importante limpiar un setInterval?",
                opciones: [
                    "No es importante, se limpia solo",
                    "Para que no siga ejecutándose después de desmontar (memory leak)",
                    "Para que sea más rápido",
                    "Por estética del código"
                ],
                correcta: 1,
                explicacion: "Sin cleanup, el interval sigue ejecutándose aunque el componente ya no exista, causando memory leaks y comportamientos inesperados."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 5: RENDERIZADO CONDICIONAL
    // ==========================================
    5: {
        titulo: "Examen: Renderizado Condicional",
        descripcion: "Probá tu manejo de && ternarios y early return",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué renderiza {false && <Componente />}?",
                opciones: [
                    "El componente",
                    "Nada (null)",
                    "El texto 'false'",
                    "Un error"
                ],
                correcta: 1,
                explicacion: "Cuando el lado izquierdo de && es false, JavaScript devuelve false, y React no renderiza nada."
            },
            {
                id: 2,
                pregunta: "¿Cuál es el problema con {count && <Badge />} si count = 0?",
                opciones: [
                    "Funciona perfectamente",
                    "Muestra el Badge vacío",
                    "Muestra el número 0 en pantalla",
                    "Da error de sintaxis"
                ],
                correcta: 2,
                explicacion: "0 es falsy en JS, pero React lo renderiza como texto. Usá count > 0 && ... para evitarlo."
            },
            {
                id: 3,
                pregunta: "¿Cuándo usar ternario vs &&?",
                opciones: [
                    "&& para elegir entre A y B, ternario para mostrar/ocultar",
                    "&& para mostrar/ocultar, ternario para elegir entre A y B",
                    "Son completamente intercambiables",
                    "Ternario nunca se usa en React"
                ],
                correcta: 1,
                explicacion: "&& es para mostrar u ocultar algo. Ternario (? :) es para elegir entre dos opciones diferentes."
            },
            {
                id: 4,
                pregunta: "¿Qué es el patrón 'early return'?",
                opciones: [
                    "Retornar un componente antes de que termine de renderizar",
                    "Retornar temprano del componente si se cumple una condición",
                    "Usar return sin ningún valor",
                    "Retornar múltiples elementos"
                ],
                correcta: 1,
                explicacion: "Early return es manejar casos especiales (carga, error, etc.) al inicio del componente, antes del render principal."
            },
            {
                id: 5,
                pregunta: "¿Cuál es la mejor forma de manejar cargando, error, y contenido?",
                opciones: [
                    "Un ternario anidado muy largo",
                    "Early returns para cargando y error, contenido al final",
                    "Todo en un solo if-else gigante",
                    "Ignorar los estados de carga y error"
                ],
                correcta: 1,
                explicacion: "Early return hace el código más plano y legible: if (cargando) return <Spinner />; etc."
            },
            {
                id: 6,
                pregunta: "{usuario ? <Dashboard /> : <Login />} muestra:",
                opciones: [
                    "Siempre Dashboard",
                    "Siempre Login",
                    "Dashboard si usuario existe, Login si no",
                    "Un error por sintaxis incorrecta"
                ],
                correcta: 2,
                explicacion: "El ternario evalúa usuario. Si es truthy, muestra Dashboard; si es falsy, muestra Login."
            },
            {
                id: 7,
                pregunta: "¿Cuál es un valor falsy en JavaScript?",
                opciones: [
                    "[ ] (array vacío)",
                    "{ } (objeto vacío)",
                    "'' (string vacío)",
                    "'false' (string)"
                ],
                correcta: 2,
                explicacion: "String vacío, 0, null, undefined, false y NaN son falsy. Arrays y objetos vacíos son truthy."
            },
            {
                id: 8,
                pregunta: "¿Qué está mal con esta estructura? {a ? {b ? <X/> : <Y/>} : <Z/>}",
                opciones: [
                    "Nada, está perfecto",
                    "Ternarios anidados son difíciles de leer",
                    "Error de sintaxis",
                    "No se pueden anidar ternarios"
                ],
                correcta: 1,
                explicacion: "Ternarios anidados funcionan pero son difíciles de leer. Mejor usar early return o componentes separados."
            },
            {
                id: 9,
                pregunta: "¿Dónde se puede usar un ternario?",
                opciones: [
                    "Solo dentro del return",
                    "Solo en el className",
                    "En cualquier expresión dentro de JSX",
                    "Solo fuera de JSX"
                ],
                correcta: 2,
                explicacion: "Ternarios funcionan en cualquier expresión JSX: contenido, className, props, style, etc."
            },
            {
                id: 10,
                pregunta: "¿Cuál es el 'happy path' en early return?",
                opciones: [
                    "El primer return del componente",
                    "El caso de error",
                    "El render principal cuando todo está bien",
                    "El estado de carga"
                ],
                correcta: 2,
                explicacion: "El happy path es el render principal que muestra el contenido cuando no hay errores ni estados de carga."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 6: LISTAS Y .map()
    // ==========================================
    6: {
        titulo: "Examen: Listas y .map()",
        descripcion: "Dominá el renderizado de listas en React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué método se usa para renderizar listas en React?",
                opciones: [
                    ".forEach()",
                    ".map()",
                    ".filter()",
                    ".reduce()"
                ],
                correcta: 1,
                explicacion: ".map() porque retorna un nuevo array. .forEach() no retorna nada y no sirve para renderizar."
            },
            {
                id: 2,
                pregunta: "¿Para qué sirve la prop 'key' en listas?",
                opciones: [
                    "Para darle estilo al elemento",
                    "Para identificar únicamente cada elemento y optimizar re-renders",
                    "Para mostrar un número al usuario",
                    "No sirve para nada, es opcional"
                ],
                correcta: 1,
                explicacion: "Key ayuda a React a saber qué elementos cambiaron, se agregaron o eliminaron, optimizando updates."
            },
            {
                id: 3,
                pregunta: "¿Cuándo está OK usar el índice como key?",
                opciones: [
                    "Siempre",
                    "Nunca",
                    "Solo cuando la lista es estática y no se reordena",
                    "Solo cuando los items tienen IDs"
                ],
                correcta: 2,
                explicacion: "Index está OK solo para listas estáticas. Si la lista cambia, puede causar bugs en el estado."
            },
            {
                id: 4,
                pregunta: "¿Qué pasa si no ponés key en una lista?",
                opciones: [
                    "Error que rompe la app",
                    "Warning en consola y posibles bugs de rendimiento",
                    "Nada, funciona igual",
                    "La lista no se muestra"
                ],
                correcta: 1,
                explicacion: "React muestra warning y puede tener problemas al actualizar la lista, causando bugs sutiles."
            },
            {
                id: 5,
                pregunta: "¿Por qué .forEach() no sirve para renderizar?",
                opciones: [
                    "Es más lento",
                    "No retorna nada (undefined)",
                    "No existe en JavaScript",
                    "Solo funciona con números"
                ],
                correcta: 1,
                explicacion: ".forEach() no retorna nada. .map() retorna un nuevo array, que es lo que JSX necesita."
            },
            {
                id: 6,
                pregunta: "¿Cuál es la forma correcta de renderizar una lista?",
                opciones: [
                    "{items.forEach(i => <Item key={i.id} />)}",
                    "{items.map(i => <Item key={i.id} />)}",
                    "{items.filter(i => <Item key={i.id} />)}",
                    "{for(let i of items) <Item />}"
                ],
                correcta: 1,
                explicacion: ".map() transforma cada elemento en JSX y retorna el array de elementos a renderizar."
            },
            {
                id: 7,
                pregunta: "¿La key debe ser única globalmente?",
                opciones: [
                    "Sí, en toda la app",
                    "No, solo entre hermanos del mismo array",
                    "Solo si usás React Router",
                    "No necesita ser única"
                ],
                correcta: 1,
                explicacion: "Key solo necesita ser única entre sus hermanos, no globalmente. Dos listas pueden tener keys iguales."
            },
            {
                id: 8,
                pregunta: "¿De dónde suelen venir los IDs para keys?",
                opciones: [
                    "Se generan aleatoriamente cada render",
                    "Del backend/base de datos",
                    "Del CSS",
                    "Del navegador"
                ],
                correcta: 1,
                explicacion: "Los IDs suelen venir del backend. Si no hay ID, podés usar librerías como uuid o nanoid."
            },
            {
                id: 9,
                pregunta: "¿Qué hace .filter() en relación a listas?",
                opciones: [
                    "Renderiza los elementos",
                    "Filtra elementos antes de mapearlos",
                    "Agrega keys automáticamente",
                    "Ordena la lista"
                ],
                correcta: 1,
                explicacion: ".filter() se usa para filtrar elementos. Ej: items.filter(i => i.activo).map(i => <Item />)"
            },
            {
                id: 10,
                pregunta: "¿Por qué es malo key={Math.random()}?",
                opciones: [
                    "Es muy lento",
                    "Cambia en cada render, perdiendo el beneficio de la key",
                    "Math.random() no existe",
                    "Está bien, no hay problema"
                ],
                correcta: 1,
                explicacion: "Si la key cambia cada render, React piensa que es un elemento nuevo y lo recrea desde cero."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 7: EVENTOS
    // ==========================================
    7: {
        titulo: "Examen: Eventos",
        descripcion: "Verificá tu conocimiento de manejo de eventos",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Cómo se escribe el evento click en React?",
                opciones: [
                    "onclick",
                    "onClick",
                    "on-click",
                    "ONCLICK"
                ],
                correcta: 1,
                explicacion: "En React los eventos usan camelCase: onClick, onChange, onSubmit, etc."
            },
            {
                id: 2,
                pregunta: "¿Qué está mal? <button onClick={handleClick()}>",
                opciones: [
                    "Falta el paréntesis",
                    "Se ejecuta al renderizar en vez de al clickear",
                    "handleClick debe ser arrow function",
                    "Nada, está bien"
                ],
                correcta: 1,
                explicacion: "handleClick() se ejecuta inmediatamente. Debés pasar handleClick sin paréntesis."
            },
            {
                id: 3,
                pregunta: "¿Qué contiene event.target?",
                opciones: [
                    "El componente padre",
                    "El elemento que disparó el evento",
                    "El valor del input",
                    "La función del handler"
                ],
                correcta: 1,
                explicacion: "event.target es el elemento DOM que disparó el evento (el input, button, etc.)."
            },
            {
                id: 4,
                pregunta: "¿Qué hace e.preventDefault()?",
                opciones: [
                    "Previene que el componente re-renderice",
                    "Previene el comportamiento por defecto (ej: form submit recarga)",
                    "Previene errores de JavaScript",
                    "Nada importante"
                ],
                correcta: 1,
                explicacion: "preventDefault() evita el comportamiento default del navegador, como que el form recargue la página."
            },
            {
                id: 5,
                pregunta: "¿Cuándo se usa e.stopPropagation()?",
                opciones: [
                    "Para parar el render",
                    "Para que el evento no suba al elemento padre",
                    "Para parar la ejecución del JavaScript",
                    "Nunca se usa"
                ],
                correcta: 1,
                explicacion: "stopPropagation() evita que el evento 'suba' (bubble) a elementos padres que también lo escuchan."
            },
            {
                id: 6,
                pregunta: "¿Cuál es la convención para nombrar handlers?",
                opciones: [
                    "clickHandler",
                    "handleClick",
                    "onClickHandler",
                    "click_handler"
                ],
                correcta: 1,
                explicacion: "La convención es handle + evento: handleClick, handleSubmit, handleChange, etc."
            },
            {
                id: 7,
                pregunta: "¿Cómo obtenés el valor de un input en onChange?",
                opciones: [
                    "e.value",
                    "e.target.value",
                    "e.input.value",
                    "this.value"
                ],
                correcta: 1,
                explicacion: "e.target es el input, y .value es su valor actual. Así: e.target.value."
            },
            {
                id: 8,
                pregunta: "¿Qué es event.target.name útil para?",
                opciones: [
                    "Nada",
                    "Manejar múltiples inputs con un solo handler",
                    "Validar el input",
                    "Cambiar el placeholder"
                ],
                correcta: 1,
                explicacion: "Con e.target.name podés identificar cuál input disparó el evento en un form con varios campos."
            },
            {
                id: 9,
                pregunta: "En un form, ¿cuál evento usás para el envío?",
                opciones: [
                    "onClick en el botón",
                    "onSubmit en el form",
                    "onChange en los inputs",
                    "onSend en el form"
                ],
                correcta: 1,
                explicacion: "onSubmit en el <form> captura tanto click al botón como Enter en los inputs."
            },
            {
                id: 10,
                pregunta: "¿Por qué usar arrow function inline a veces?",
                opciones: [
                    "Es más rápido",
                    "Para pasar argumentos al handler",
                    "Porque es obligatorio",
                    "No hay razón"
                ],
                correcta: 1,
                explicacion: "() => handleDelete(id) te permite pasar el id al handler. Sin arrow, no podrías pasar argumentos."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 9: FETCH / AXIOS
    // ==========================================
    9: {
        titulo: "Examen: Fetch / Axios",
        descripcion: "Probá tus conocimientos de consumo de APIs",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Cuál método HTTP se usa para obtener datos?",
                opciones: [
                    "POST",
                    "GET",
                    "PUT",
                    "DELETE"
                ],
                correcta: 1,
                explicacion: "GET es para obtener datos. POST para crear, PUT para actualizar, DELETE para eliminar."
            },
            {
                id: 2,
                pregunta: "¿Qué hace response.json()?",
                opciones: [
                    "Envía JSON al servidor",
                    "Parsea la respuesta de texto a objeto JavaScript",
                    "Valida que sea JSON válido",
                    "Stringify el objeto"
                ],
                correcta: 1,
                explicacion: "response.json() convierte el texto de la respuesta HTTP en un objeto JavaScript."
            },
            {
                id: 3,
                pregunta: "¿Por qué fetch va dentro de useEffect?",
                opciones: [
                    "Por convención",
                    "Porque es un efecto secundario, no parte del render",
                    "Porque así es más rápido",
                    "No es necesario"
                ],
                correcta: 1,
                explicacion: "Fetch es un side effect. useEffect es el lugar correcto para efectos que no son parte del render."
            },
            {
                id: 4,
                pregunta: "¿Cuál header es obligatorio en POST con JSON?",
                opciones: [
                    "Accept",
                    "Content-Type: application/json",
                    "Authorization",
                    "Content-Length"
                ],
                correcta: 1,
                explicacion: "Content-Type: application/json le dice al servidor que el body viene en formato JSON."
            },
            {
                id: 5,
                pregunta: "¿Qué hace JSON.stringify()?",
                opciones: [
                    "Parsea JSON a objeto",
                    "Convierte objeto JavaScript a string JSON",
                    "Valida JSON",
                    "Formatea JSON bonito"
                ],
                correcta: 1,
                explicacion: "JSON.stringify() convierte un objeto JS a texto JSON para enviarlo en el body del fetch."
            },
            {
                id: 6,
                pregunta: "¿Por qué useEffect no puede ser async directamente?",
                opciones: [
                    "Sí puede serlo",
                    "Porque async retorna Promise, y useEffect espera undefined o cleanup function",
                    "Por performance",
                    "Es un bug de React"
                ],
                correcta: 1,
                explicacion: "async retorna Promise, pero useEffect espera undefined o una función de cleanup."
            },
            {
                id: 7,
                pregunta: "¿Cuál es el patrón correcto para async en useEffect?",
                opciones: [
                    "useEffect(async () => {...}, [])",
                    "Definir función async adentro y llamarla",
                    "Usar .then() afuera del useEffect",
                    "No usar async nunca"
                ],
                correcta: 1,
                explicacion: "Definís una función async dentro y la llamás: const fetchData = async () => {...}; fetchData();"
            },
            {
                id: 8,
                pregunta: "¿Cómo manejas errores en fetch?",
                opciones: [
                    "fetch no tiene errores",
                    "try/catch con async/await o .catch() con promises",
                    "if (error) después del fetch",
                    "React los maneja automáticamente"
                ],
                correcta: 1,
                explicacion: "Con async/await usás try/catch. Con promises usás .catch(). Ambos son válidos."
            },
            {
                id: 9,
                pregunta: "¿Qué pasa si el servidor devuelve error 404?",
                opciones: [
                    "fetch lanza error automáticamente",
                    "fetch resuelve OK, hay que chequear response.ok",
                    "El navegador muestra error",
                    "React muestra un error"
                ],
                correcta: 1,
                explicacion: "fetch solo rechaza la Promise si hay error de red. Errores HTTP hay que chequearlos con response.ok."
            },
            {
                id: 10,
                pregunta: "¿Cuál es la ventaja de async/await sobre .then()?",
                opciones: [
                    "Es más rápido",
                    "El código se lee de forma más secuencial y clara",
                    "No hay diferencia",
                    "Usa menos memoria"
                ],
                correcta: 1,
                explicacion: "async/await hace que el código asíncrono se lea como si fuera síncrono, más fácil de seguir."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 10: CONTROLLED COMPONENTS
    // ==========================================
    10: {
        titulo: "Examen: Controlled Components",
        descripcion: "Dominá los formularios en React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué es un controlled component?",
                opciones: [
                    "Un componente que controla a otros",
                    "Un input cuyo valor está controlado por el estado de React",
                    "Un componente con muchos props",
                    "Un componente sin estado"
                ],
                correcta: 1,
                explicacion: "Controlled component = el estado de React es la 'fuente de verdad' del valor del input."
            },
            {
                id: 2,
                pregunta: "¿Cuál es el patrón de controlled input?",
                opciones: [
                    "Solo value",
                    "Solo onChange",
                    "value + onChange",
                    "ref + value"
                ],
                correcta: 2,
                explicacion: "value muestra el estado actual, onChange lo actualiza. Sin ambos no funciona."
            },
            {
                id: 3,
                pregunta: "¿Qué pasa si ponés value sin onChange?",
                opciones: [
                    "El input funciona normal",
                    "El input queda 'congelado', no podés escribir",
                    "Error de React",
                    "El value se ignora"
                ],
                correcta: 1,
                explicacion: "Sin onChange, el estado nunca cambia, entonces el value siempre es el mismo y no podés escribir."
            },
            {
                id: 4,
                pregunta: "¿Cómo manejar varios inputs con un solo handler?",
                opciones: [
                    "Un handler por cada input",
                    "Usando e.target.name para identificar cuál input es",
                    "No se puede",
                    "Usando ref"
                ],
                correcta: 1,
                explicacion: "Ponés name en cada input y usás [e.target.name]: e.target.value para actualizar el campo correcto."
            },
            {
                id: 5,
                pregunta: "¿Cuál es la 'fuente de verdad' en controlled components?",
                opciones: [
                    "El DOM",
                    "El estado de React",
                    "El servidor",
                    "LocalStorage"
                ],
                correcta: 1,
                explicacion: "El estado de React es la única fuente de verdad. El input solo refleja ese estado."
            },
            {
                id: 6,
                pregunta: "¿Cuál es la ventaja de controlled components?",
                opciones: [
                    "Son más rápidos",
                    "Podés validar, transformar y controlar el input en tiempo real",
                    "Usan menos código",
                    "No hay ventaja"
                ],
                correcta: 1,
                explicacion: "Podés validar mientras escribe, transformar el valor, y siempre sabés el estado actual."
            },
            {
                id: 7,
                pregunta: "¿Para qué sirve e.preventDefault() en onSubmit?",
                opciones: [
                    "Para validar",
                    "Para evitar que la página se recargue",
                    "Para limpiar el form",
                    "No sirve para nada"
                ],
                correcta: 1,
                explicacion: "Por defecto, el submit recarga la página. preventDefault() evita eso para manejar el envío con JS."
            },
            {
                id: 8,
                pregunta: "¿Cómo limpiar un form después de enviar?",
                opciones: [
                    "form.reset()",
                    "Setear el estado a sus valores iniciales vacíos",
                    "Recargar la página",
                    "No se puede"
                ],
                correcta: 1,
                explicacion: "En controlled, seteás el estado a los valores iniciales: setForm({ nombre: '', email: '' })"
            },
            {
                id: 9,
                pregunta: "¿Cómo validar en tiempo real?",
                opciones: [
                    "Solo en onSubmit",
                    "En el onChange, después de actualizar el estado",
                    "Con una librería externa únicamente",
                    "No se puede"
                ],
                correcta: 1,
                explicacion: "En onChange validás el valor y guardás el error en otro estado si hay problema."
            },
            {
                id: 10,
                pregunta: "¿Cuál es el flujo de un controlled input?",
                opciones: [
                    "Estado → Input → Usuario → Evento → Nada pasa",
                    "Usuario escribe → onChange → setState → re-render → value actualizado",
                    "Input → Estado → Render",
                    "onChange → value → estado"
                ],
                correcta: 1,
                explicacion: "El usuario escribe, onChange dispara setState, React re-renderiza con el nuevo value."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 11: LIFTING STATE UP
    // ==========================================
    11: {
        titulo: "Examen: Lifting State Up",
        descripcion: "Probá tu comprensión del flujo de datos en React",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Cuándo debés 'levantar' el estado?",
                opciones: [
                    "Siempre",
                    "Cuando dos componentes hermanos necesitan compartir datos",
                    "Nunca",
                    "Solo con formularios"
                ],
                correcta: 1,
                explicacion: "Lifting state up se usa cuando dos o más hermanos necesitan acceder o modificar el mismo estado."
            },
            {
                id: 2,
                pregunta: "¿A dónde 'sube' el estado?",
                opciones: [
                    "Al navegador",
                    "Al componente padre común más cercano",
                    "A un archivo separado",
                    "Al localStorage"
                ],
                correcta: 1,
                explicacion: "El estado sube al ancestro común más cercano de los componentes que lo necesitan."
            },
            {
                id: 3,
                pregunta: "¿Cómo comunica un hijo cambios al padre?",
                opciones: [
                    "Modificando directamente el estado del padre",
                    "Llamando una función callback que el padre le pasó como prop",
                    "Usando eventos del DOM",
                    "No puede"
                ],
                correcta: 1,
                explicacion: "El padre pasa una función (onCambio, onUpdate, etc.) y el hijo la llama con el nuevo valor."
            },
            {
                id: 4,
                pregunta: "¿Cuál es el flujo de datos en React?",
                opciones: [
                    "Bidireccional",
                    "Unidireccional: datos bajan por props, acciones suben por callbacks",
                    "Los datos pueden fluir en cualquier dirección",
                    "No hay flujo definido"
                ],
                correcta: 1,
                explicacion: "React usa one-way data flow: los datos bajan via props, las acciones suben via callbacks."
            },
            {
                id: 5,
                pregunta: "¿Qué convención se usa para props que son callbacks?",
                opciones: [
                    "callback_algo",
                    "onAlgo (onChange, onSubmit, onClick)",
                    "algoHandler",
                    "doAlgo"
                ],
                correcta: 1,
                explicacion: "Props callback empiezan con 'on': onChange, onSubmit, onDelete, onUpdate, etc."
            },
            {
                id: 6,
                pregunta: "¿Qué significa 'única fuente de verdad'?",
                opciones: [
                    "Solo usar un archivo de datos",
                    "El estado vive en un solo lugar, no duplicado",
                    "Usar solo localStorage",
                    "Tener solo un componente"
                ],
                correcta: 1,
                explicacion: "Single source of truth = el dato vive en un lugar, otros componentes lo reciben via props."
            },
            {
                id: 7,
                pregunta: "¿Cuál es el problema con estado duplicado?",
                opciones: [
                    "Usa más memoria",
                    "Pueden quedar desincronizados causando bugs",
                    "Es más lento",
                    "No hay problema"
                ],
                correcta: 1,
                explicacion: "Si el mismo dato está en dos estados, pueden divergir y causar inconsistencias."
            },
            {
                id: 8,
                pregunta: "Si el padre tiene estado, ¿qué reciben los hijos?",
                opciones: [
                    "Una copia del estado",
                    "El valor actual como prop y un callback para cambiarlo",
                    "Acceso directo al useState del padre",
                    "Nada"
                ],
                correcta: 1,
                explicacion: "Los hijos reciben el valor como prop (para mostrar) y un callback (para modificar)."
            },
            {
                id: 9,
                pregunta: "¿Lifting state up hace el código más...?",
                opciones: [
                    "Impredecible",
                    "Predecible y debuggeable",
                    "Complejo sin razón",
                    "Lento"
                ],
                correcta: 1,
                explicacion: "Con estado centralizado, es más fácil saber qué está pasando y dónde está el bug."
            },
            {
                id: 10,
                pregunta: "¿Cuál es la alternativa a lifting state cuando hay muchos niveles?",
                opciones: [
                    "No hay alternativa",
                    "Context API",
                    "Solo localStorage",
                    "Redux únicamente"
                ],
                correcta: 1,
                explicacion: "Context API evita 'prop drilling' cuando el estado necesita pasar por muchos niveles."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 12: COMPONENTIZACIÓN
    // ==========================================
    12: {
        titulo: "Examen: Componentización",
        descripcion: "Probá tu capacidad de diseñar componentes",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Cuándo crear un nuevo componente?",
                opciones: [
                    "Cuando el código supera 10 líneas",
                    "Cuando hay lógica repetida o responsabilidad separada",
                    "Nunca",
                    "Solo para estilos"
                ],
                correcta: 1,
                explicacion: "Creás componentes cuando hay código repetido, lógica distinta, o una responsabilidad clara y específica."
            },
            {
                id: 2,
                pregunta: "¿Qué es el principio de responsabilidad única?",
                opciones: [
                    "Un componente puede hacer todo",
                    "Cada componente debe hacer una sola cosa",
                    "Solo un dev puede tocar un componente",
                    "Solo un useState por componente"
                ],
                correcta: 1,
                explicacion: "Single Responsibility: un componente debería tener un propósito claro y específico."
            },
            {
                id: 3,
                pregunta: "¿Qué es la 'composición' en React?",
                opciones: [
                    "Escribir código ordenado",
                    "Combinar componentes pequeños para crear otros más grandes",
                    "Usar muchos props",
                    "Anidar muchos divs"
                ],
                correcta: 1,
                explicacion: "Composición = construir componentes grandes a partir de componentes pequeños y enfocados."
            },
            {
                id: 4,
                pregunta: "¿Qué hace la prop 'children'?",
                opciones: [
                    "Lista los componentes hijos",
                    "Permite pasar contenido JSX entre las tags del componente",
                    "Cuenta cuántos hijos tiene",
                    "Nada especial"
                ],
                correcta: 1,
                explicacion: "children es el contenido entre <Comp>...esto...</Comp>. Permite componentes container flexibles."
            },
            {
                id: 5,
                pregunta: "¿Cómo hacer un componente reutilizable?",
                opciones: [
                    "Hardcodear todo",
                    "Usar props para personalizar y children para contenido",
                    "No usar props",
                    "Hacer muy largo el código"
                ],
                correcta: 1,
                explicacion: "Props para variaciones (color, tamaño) y children para contenido hacen componentes flexibles."
            },
            {
                id: 6,
                pregunta: "¿Qué señal indica que un componente es muy grande?",
                opciones: [
                    "Tiene más de 10 props",
                    "Es difícil de entender, testear, y tiene muchas responsabilidades",
                    "Usa useState",
                    "Tiene estilos"
                ],
                correcta: 1,
                explicacion: "Si es difícil de entender de un vistazo o hace muchas cosas, probablemente es muy grande."
            },
            {
                id: 7,
                pregunta: "¿Composición o herencia en React?",
                opciones: [
                    "Herencia siempre",
                    "Composición (React favorece composición sobre herencia)",
                    "Ambas por igual",
                    "Ninguna"
                ],
                correcta: 1,
                explicacion: "React prefiere composición. Los patrones de herencia de POO no se usan mucho en React."
            },
            {
                id: 8,
                pregunta: "¿Cómo especializar un componente genérico?",
                opciones: [
                    "Heredando",
                    "Pasándole props específicos o wrapeándolo",
                    "Copiando el código",
                    "No se puede"
                ],
                correcta: 1,
                explicacion: "Creás un componente que usa el genérico con props específicos. Ej: <Button variant='danger' />"
            },
            {
                id: 9,
                pregunta: "¿Qué son los 'props por defecto'?",
                opciones: [
                    "Props que siempre son iguales",
                    "Valores que se usan cuando no se pasa el prop",
                    "Props obligatorios",
                    "No existen"
                ],
                correcta: 1,
                explicacion: "function Comp({ size = 'medium' }) usa 'medium' si no se pasa size."
            },
            {
                id: 10,
                pregunta: "¿Cuál es una buena señal de que tu componentización está bien?",
                opciones: [
                    "Cada componente tiene 500 líneas",
                    "Podés reutilizar componentes en diferentes partes de la app",
                    "Solo hay un componente",
                    "Todos los componentes son iguales"
                ],
                correcta: 1,
                explicacion: "Si podés reutilizar componentes en diferentes contextos, es señal de buena componentización."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 13: REACT ROUTER
    // ==========================================
    13: {
        titulo: "Examen: React Router",
        descripcion: "Probá tu conocimiento de navegación en SPAs",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué es una SPA?",
                opciones: [
                    "Single Page Animation",
                    "Single Page Application - app que no recarga al navegar",
                    "Server Page App",
                    "Simple Page App"
                ],
                correcta: 1,
                explicacion: "SPA = Single Page Application. La página no recarga, React cambia el contenido dinámicamente."
            },
            {
                id: 2,
                pregunta: "¿Qué componente envuelve toda la app para routing?",
                opciones: [
                    "<Router>",
                    "<BrowserRouter>",
                    "<AppRouter>",
                    "<MainRoute>"
                ],
                correcta: 1,
                explicacion: "BrowserRouter envuelve la app y habilita el sistema de rutas de React Router."
            },
            {
                id: 3,
                pregunta: "¿Cuál es la diferencia entre <Link> y <a>?",
                opciones: [
                    "Son iguales",
                    "Link navega sin recargar, <a> recarga toda la página",
                    "Link es más lento",
                    "<a> es de React"
                ],
                correcta: 1,
                explicacion: "Link usa el router para cambiar la URL sin recargar. <a> hace navegación tradicional con recarga."
            },
            {
                id: 4,
                pregunta: "¿Para qué sirve useNavigate()?",
                opciones: [
                    "Para mostrar links",
                    "Para navegar programáticamente (ej: después de login)",
                    "Para obtener la URL actual",
                    "Para crear rutas"
                ],
                correcta: 1,
                explicacion: "useNavigate() te da una función para redirigir desde código, no desde JSX."
            },
            {
                id: 5,
                pregunta: "¿Qué hace path='*' en una Route?",
                opciones: [
                    "Matchea todas las rutas",
                    "Es la ruta 404 (catchall para rutas no encontradas)",
                    "Es la ruta principal",
                    "Error de sintaxis"
                ],
                correcta: 1,
                explicacion: "path='*' matchea cualquier ruta no definida. Útil para mostrar página de 'No encontrado'."
            },
            {
                id: 6,
                pregunta: "¿Qué es un parámetro dinámico en rutas?",
                opciones: [
                    "Una ruta que cambia sola",
                    "Parte de la URL que cambia (ej: /usuario/:id)",
                    "Un query string",
                    "No existen"
                ],
                correcta: 1,
                explicacion: ":id en el path define un parámetro. /usuario/123 tendría id='123'."
            },
            {
                id: 7,
                pregunta: "¿Cómo accedés a los parámetros de la URL?",
                opciones: [
                    "window.location",
                    "useParams()",
                    "props.params",
                    "URL.get()"
                ],
                correcta: 1,
                explicacion: "const { id } = useParams() extrae los parámetros definidos en el path."
            },
            {
                id: 8,
                pregunta: "¿Qué hook se usa para query strings (?q=algo)?",
                opciones: [
                    "useParams()",
                    "useSearchParams()",
                    "useQuery()",
                    "useURL()"
                ],
                correcta: 1,
                explicacion: "useSearchParams() permite acceder y modificar query strings como ?search=react."
            },
            {
                id: 9,
                pregunta: "¿Dónde van componentes que aparecen en todas las páginas?",
                opciones: [
                    "Dentro de cada Route",
                    "Fuera de Routes pero dentro de BrowserRouter",
                    "En un archivo separado",
                    "No se puede"
                ],
                correcta: 1,
                explicacion: "Navbar y Footer van fuera de <Routes> para que aparezcan siempre."
            },
            {
                id: 10,
                pregunta: "¿Qué pasa si usás <a href='/pagina'> en una SPA?",
                opciones: [
                    "Funciona perfecto",
                    "La página recarga completamente (mal)",
                    "Error de React",
                    "No navega"
                ],
                correcta: 1,
                explicacion: "<a> causa full reload, perdiendo el estado de la app. Usá <Link> para navegación interna."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 14: CONTEXT API
    // ==========================================
    14: {
        titulo: "Examen: Context API",
        descripcion: "Probá tu conocimiento de estado global",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Qué problema resuelve Context API?",
                opciones: [
                    "Performance",
                    "Prop drilling (pasar props por muchos niveles)",
                    "Estilos",
                    "Navegación"
                ],
                correcta: 1,
                explicacion: "Context evita pasar props nivel por nivel cuando muchos componentes necesitan el mismo dato."
            },
            {
                id: 2,
                pregunta: "¿Qué función se usa para crear un context?",
                opciones: [
                    "useContext()",
                    "createContext()",
                    "newContext()",
                    "makeContext()"
                ],
                correcta: 1,
                explicacion: "createContext() crea el contexto. Luego useContext() lo consume."
            },
            {
                id: 3,
                pregunta: "¿Qué es el Provider?",
                opciones: [
                    "Un hook",
                    "El componente que provee el valor del context a sus hijos",
                    "Una función",
                    "Un tipo de dato"
                ],
                correcta: 1,
                explicacion: "Provider envuelve los componentes que necesitan acceso al context y les da el value."
            },
            {
                id: 4,
                pregunta: "¿Cómo consumís el valor de un context?",
                opciones: [
                    "getContext()",
                    "useContext(MiContext)",
                    "context.value",
                    "props.context"
                ],
                correcta: 1,
                explicacion: "useContext(MiContext) retorna el value que está en el Provider más cercano."
            },
            {
                id: 5,
                pregunta: "¿Qué pasa si usás useContext sin un Provider arriba?",
                opciones: [
                    "Funciona con valores vacíos",
                    "Retorna el valor default del createContext o undefined",
                    "Error que rompe la app",
                    "Se crea un Provider automático"
                ],
                correcta: 1,
                explicacion: "Sin Provider, useContext retorna el valor que pasaste a createContext (o undefined)."
            },
            {
                id: 6,
                pregunta: "¿Cuándo usar Context vs props normales?",
                opciones: [
                    "Context siempre",
                    "Context para datos globales (user, theme), props para datos locales",
                    "Props siempre",
                    "Da igual"
                ],
                correcta: 1,
                explicacion: "Context es para datos que muchos componentes necesitan. Props para comunicación directa padre-hijo."
            },
            {
                id: 7,
                pregunta: "¿Cuáles son casos de uso típicos de Context?",
                opciones: [
                    "Datos de un form",
                    "Usuario logueado, tema (dark/light), idioma",
                    "Estado de un botón",
                    "Validación local"
                ],
                correcta: 1,
                explicacion: "Usuario autenticado, preferencias de tema, configuración de idioma son casos ideales."
            },
            {
                id: 8,
                pregunta: "¿Por qué crear un custom hook para el context?",
                opciones: [
                    "No hay razón",
                    "Para validar que esté dentro del Provider y simplificar el uso",
                    "Es obligatorio",
                    "Por performance"
                ],
                correcta: 1,
                explicacion: "Un hook como useUser() valida el Provider, maneja errores, y simplifica el consumo."
            },
            {
                id: 9,
                pregunta: "¿Se pueden anidar varios Providers?",
                opciones: [
                    "No",
                    "Sí, cada uno provee un context diferente",
                    "Solo dos",
                    "Causa error"
                ],
                correcta: 1,
                explicacion: "Podés tener UserProvider, ThemeProvider, etc. anidados, cada uno con su context."
            },
            {
                id: 10,
                pregunta: "¿Context reemplaza a Redux?",
                opciones: [
                    "Sí, completamente",
                    "Para casos simples sí, para apps muy complejas Redux tiene más features",
                    "No, nunca",
                    "Context no existe"
                ],
                correcta: 1,
                explicacion: "Context es suficiente para muchas apps. Redux agrega features para apps con estado muy complejo."
            }
        ]
    },

    // ==========================================
    // CONCEPTO 15: BUENAS PRÁCTICAS
    // ==========================================
    15: {
        titulo: "Examen: Buenas Prácticas",
        descripcion: "Verificá si escribís código React profesional",
        preguntas: [
            {
                id: 1,
                pregunta: "¿Por qué nunca mutar estado directamente?",
                opciones: [
                    "Es más lento",
                    "React no detecta el cambio y no re-renderiza",
                    "Por estilo",
                    "No hay razón"
                ],
                correcta: 1,
                explicacion: "React compara referencias. Si mutás el mismo objeto, React piensa que nada cambió."
            },
            {
                id: 2,
                pregunta: "¿Cuál es la forma correcta de agregar a un array en estado?",
                opciones: [
                    "items.push(nuevo); setItems(items)",
                    "setItems([...items, nuevo])",
                    "setItems(items + nuevo)",
                    "items.add(nuevo)"
                ],
                correcta: 1,
                explicacion: "Spread crea un nuevo array, lo cual React detecta como cambio y actualiza."
            },
            {
                id: 3,
                pregunta: "¿Qué convención siguen los nombres de componentes?",
                opciones: [
                    "camelCase",
                    "PascalCase",
                    "snake_case",
                    "kebab-case"
                ],
                correcta: 1,
                explicacion: "Componentes usan PascalCase (MiComponente). React lo usa para distinguirlos de HTML."
            },
            {
                id: 4,
                pregunta: "¿Cuál es una señal de que un componente es muy grande?",
                opciones: [
                    "Tiene más de 5 líneas",
                    "Es difícil de entender de un vistazo o tiene muchas responsabilidades",
                    "Usa useState",
                    "Tiene props"
                ],
                correcta: 1,
                explicacion: "Si necesitás scroll para entenderlo o hace muchas cosas, probablemente hay que dividirlo."
            },
            {
                id: 5,
                pregunta: "¿Cómo nombrar un estado booleano?",
                opciones: [
                    "data, flag",
                    "isAlgo, hasAlgo, shouldAlgo",
                    "boolean1, boolean2",
                    "true_false"
                ],
                correcta: 1,
                explicacion: "is/has/should + adjetivo: isLoading, hasError, shouldShow. Comunica que es booleano."
            },
            {
                id: 6,
                pregunta: "¿Cuál método de array muta el original?",
                opciones: [
                    ".map()",
                    ".push()",
                    ".filter()",
                    ".slice()"
                ],
                correcta: 1,
                explicacion: "push(), pop(), splice() MUTAN. map(), filter(), slice() RETORNAN nuevo array."
            },
            {
                id: 7,
                pregunta: "¿Qué son los Custom Hooks?",
                opciones: [
                    "Hooks que vienen con React",
                    "Funciones que empiezan con 'use' y encapsulan lógica reutilizable",
                    "Componentes especiales",
                    "No existen"
                ],
                correcta: 1,
                explicacion: "Custom hooks extraen lógica (ej: useFetch, useUser) para reutilizar entre componentes."
            },
            {
                id: 8,
                pregunta: "¿Por qué usar nombres descriptivos?",
                opciones: [
                    "Por estética",
                    "El código se auto-documenta y es más fácil de mantener",
                    "Porque React lo requiere",
                    "No importa"
                ],
                correcta: 1,
                explicacion: "Buenos nombres reducen la necesidad de comentarios y hacen el código más legible."
            },
            {
                id: 9,
                pregunta: "¿Cuál es el beneficio de componentes pequeños?",
                opciones: [
                    "Son más rápidos",
                    "Más fáciles de entender, testear, y reutilizar",
                    "Usan menos memoria",
                    "No hay beneficio"
                ],
                correcta: 1,
                explicacion: "Componentes pequeños y enfocados son más mantenibles, testeables y reutilizables."
            },
            {
                id: 10,
                pregunta: "¿Qué diferencia a un junior de un mid/senior en React?",
                opciones: [
                    "Cantidad de código",
                    "Calidad del código: estructura, nombres, buenas prácticas",
                    "Velocidad de escritura",
                    "Nada"
                ],
                correcta: 1,
                explicacion: "La calidad y mantenibilidad del código es lo que distingue niveles de experiencia."
            }
        ]
    }
};

// Función para obtener el quiz de un concepto
export function getQuiz(conceptoId) {
    return conceptQuizzes[conceptoId] || null;
}

// Función para verificar si un concepto tiene quiz
export function tieneQuiz(conceptoId) {
    return conceptoId in conceptQuizzes;
}

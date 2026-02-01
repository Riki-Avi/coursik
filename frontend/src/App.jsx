import { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'

// Datos del examen
const preguntas = [
  {
    id: 1,
    categoria: "Fundamentos",
    pregunta: "¿Cuál es la forma correcta de definir un componente funcional en React moderno?",
    opciones: [
      "class MiComponente extends React.Component { render() { return <div/> } }",
      "function MiComponente() { return <div/> }",
      "const MiComponente = new Component(<div/>)",
      "React.createComponent('MiComponente', <div/>)"
    ],
    correcta: 1
  }
]

function App() {
  // Estado para navegación
  const [vista, setVista] = useState('dashboard') // 'dashboard' o 'quiz'

  // Estados del quiz
  const [preguntaActual, setPreguntaActual] = useState(0)
  const [respuestas, setRespuestas] = useState([])
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null)

  // Estados para IA
  const [explicaciones, setExplicaciones] = useState({})
  const [cargandoIA, setCargandoIA] = useState(false)
  const [preguntaExpandida, setPreguntaExpandida] = useState(null)

  // Si está en dashboard, mostrar Dashboard
  if (vista === 'dashboard') {
    return (
      <>
        <nav className="nav-bar">
          <button
            className={`nav-btn ${vista === 'dashboard' ? 'active' : ''}`}
            onClick={() => setVista('dashboard')}
          >
            📚 Roadmap
          </button>
          <button
            className={`nav-btn ${vista === 'quiz' ? 'active' : ''}`}
            onClick={() => setVista('quiz')}
          >
            🎯 Quiz
          </button>
        </nav>
        <Dashboard />
      </>
    )
  }

  const seleccionarRespuesta = (indice) => {
    setRespuestaSeleccionada(indice)
  }

  const siguientePregunta = () => {
    const nuevasRespuestas = [...respuestas, respuestaSeleccionada]
    setRespuestas(nuevasRespuestas)

    if (preguntaActual + 1 < preguntas.length) {
      setPreguntaActual(preguntaActual + 1)
      setRespuestaSeleccionada(null)
    } else {
      setMostrarResultado(true)
    }
  }

  const reiniciar = () => {
    setPreguntaActual(0)
    setRespuestas([])
    setMostrarResultado(false)
    setRespuestaSeleccionada(null)
    setExplicaciones({})
    setPreguntaExpandida(null)
  }

  const calcularPuntaje = () => {
    return respuestas.reduce((total, respuesta, index) => {
      return total + (respuesta === preguntas[index].correcta ? 1 : 0)
    }, 0)
  }

  // Función para pedir explicación a la IA
  const pedirExplicacion = async (index) => {
    // Si ya tenemos la explicación, solo expandir/colapsar
    if (explicaciones[index]) {
      setPreguntaExpandida(preguntaExpandida === index ? null : index)
      return
    }

    setCargandoIA(true)
    setPreguntaExpandida(index)

    try {
      const pregunta = preguntas[index]
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';
      const response = await fetch(`${API_URL}/api/explicar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          pregunta: pregunta.pregunta,
          respuestaUsuario: pregunta.opciones[respuestas[index]],
          respuestaCorrecta: pregunta.opciones[pregunta.correcta]
        })
      })

      const explicacion = await response.text()
      setExplicaciones(prev => ({ ...prev, [index]: explicacion }))
    } catch (error) {
      setExplicaciones(prev => ({ ...prev, [index]: 'Error al conectar con la IA' }))
    }

    setCargandoIA(false)
  }

  // Pantalla de resultados
  if (mostrarResultado) {
    const puntaje = calcularPuntaje()
    const porcentaje = Math.round((puntaje / preguntas.length) * 100)

    return (
      <>
        <nav className="nav-bar">
          <button
            className="nav-btn"
            onClick={() => setVista('dashboard')}
          >
            📚 Roadmap
          </button>
          <button
            className="nav-btn active"
            onClick={() => setVista('quiz')}
          >
            🎯 Quiz
          </button>
        </nav>
        <div className="quiz-container resultados">
          <h1>📊 Resultados</h1>
          <div className="resultado">
            <p className="puntaje">{puntaje} / {preguntas.length}</p>
            <p className="porcentaje">{porcentaje}%</p>
            <p className="nivel">
              {porcentaje >= 80 ? '🏆 ¡Excelente!' :
                porcentaje >= 60 ? '⭐ ¡Bien hecho!' :
                  porcentaje >= 40 ? '📚 A seguir practicando' :
                    '🔄 Necesitás repasar'}
            </p>
          </div>

          <h2 className="revision-titulo">📝 Revisión de errores</h2>
          <div className="lista-errores">
            {preguntas.map((pregunta, index) => {
              const esCorrecta = respuestas[index] === pregunta.correcta

              return (
                <div
                  key={index}
                  className={`error-item ${esCorrecta ? 'correcta' : 'incorrecta'}`}
                >
                  <div
                    className="error-header"
                    onClick={() => !esCorrecta && pedirExplicacion(index)}
                  >
                    <span className="error-icono">{esCorrecta ? '✅' : '❌'}</span>
                    <span className="error-pregunta">{pregunta.pregunta.slice(0, 50)}...</span>
                    {!esCorrecta && (
                      <span className="error-boton">
                        {cargandoIA && preguntaExpandida === index ? '⏳' : '🤖 Explicar'}
                      </span>
                    )}
                  </div>

                  {!esCorrecta && preguntaExpandida === index && explicaciones[index] && (
                    <div className="explicacion-ia">
                      <p><strong>Tu respuesta:</strong> {pregunta.opciones[respuestas[index]]}</p>
                      <p><strong>Correcta:</strong> {pregunta.opciones[pregunta.correcta]}</p>
                      <p className="explicacion-texto">💡 {explicaciones[index]}</p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          <button className="btn-reiniciar" onClick={reiniciar}>
            Reiniciar Quiz
          </button>
        </div>
      </>
    )
  }

  // Pregunta actual
  const pregunta = preguntas[preguntaActual]

  return (
    <>
      <nav className="nav-bar">
        <button
          className="nav-btn"
          onClick={() => setVista('dashboard')}
        >
          📚 Roadmap
        </button>
        <button
          className="nav-btn active"
          onClick={() => setVista('quiz')}
        >
          🎯 Quiz
        </button>
      </nav>
      <div className="quiz-container">
        <div className="header">
          <span className="categoria">{pregunta.categoria}</span>
          <span className="progreso">
            {preguntaActual + 1} / {preguntas.length}
          </span>
        </div>

        <h2 className="pregunta">{pregunta.pregunta}</h2>

        <div className="opciones">
          {pregunta.opciones.map((opcion, index) => (
            <button
              key={index}
              className={`opcion ${respuestaSeleccionada === index ? 'seleccionada' : ''}`}
              onClick={() => seleccionarRespuesta(index)}
            >
              <span className="letra">{String.fromCharCode(65 + index)}</span>
              <span className="texto">{opcion}</span>
            </button>
          ))}
        </div>

        <button
          className="btn-siguiente"
          onClick={siguientePregunta}
          disabled={respuestaSeleccionada === null}
        >
          {preguntaActual + 1 === preguntas.length ? 'Ver Resultados' : 'Siguiente'}
        </button>
      </div>
    </>
  )
}

export default App

import { useState } from 'react';
import { getQuiz } from '../data/conceptQuizzes';
import { reactConcepts } from '../data/reactConcepts';
import './ConceptQuiz.css';

function ConceptQuiz({ conceptoId, onClose, onNoEntendi }) {
    const quiz = getQuiz(conceptoId);
    const concepto = reactConcepts.find(c => c.id === conceptoId);

    const [preguntaActual, setPreguntaActual] = useState(0);
    const [respuestas, setRespuestas] = useState([]);
    const [seleccionada, setSeleccionada] = useState(null);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [mostrarExplicacion, setMostrarExplicacion] = useState(false);
    const [noEntendiItems, setNoEntendiItems] = useState([]);

    if (!quiz) {
        return (
            <div className="quiz-overlay">
                <div className="quiz-modal">
                    <p>Quiz no disponible para este concepto todavía.</p>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        );
    }

    const pregunta = quiz.preguntas[preguntaActual];
    const totalPreguntas = quiz.preguntas.length;

    const seleccionarRespuesta = (index) => {
        if (!mostrarExplicacion) {
            setSeleccionada(index);
        }
    };

    const confirmarRespuesta = () => {
        if (seleccionada === null) return;
        setMostrarExplicacion(true);
    };

    const siguientePregunta = () => {
        const nuevasRespuestas = [...respuestas, seleccionada];
        setRespuestas(nuevasRespuestas);
        setMostrarExplicacion(false);
        setSeleccionada(null);

        if (preguntaActual + 1 < totalPreguntas) {
            setPreguntaActual(preguntaActual + 1);
        } else {
            setMostrarResultado(true);
        }
    };

    const marcarNoEntendi = () => {
        setNoEntendiItems([...noEntendiItems, preguntaActual]);
        const nuevasRespuestas = [...respuestas, -1]; // -1 = no entendí
        setRespuestas(nuevasRespuestas);
        setMostrarExplicacion(false);
        setSeleccionada(null);

        if (preguntaActual + 1 < totalPreguntas) {
            setPreguntaActual(preguntaActual + 1);
        } else {
            setMostrarResultado(true);
        }
    };

    const calcularResultados = () => {
        let correctas = 0;
        let incorrectas = 0;
        let noEntendi = 0;

        respuestas.forEach((resp, index) => {
            if (resp === -1) {
                noEntendi++;
            } else if (resp === quiz.preguntas[index].correcta) {
                correctas++;
            } else {
                incorrectas++;
            }
        });

        return { correctas, incorrectas, noEntendi, total: totalPreguntas };
    };

    // Pantalla de resultados
    if (mostrarResultado) {
        const resultados = calcularResultados();
        const porcentaje = Math.round((resultados.correctas / resultados.total) * 100);
        const aprobado = porcentaje >= 70;

        return (
            <div className="quiz-overlay">
                <div className="quiz-modal resultados">
                    <header className="quiz-header">
                        <h1>{concepto.icono} {quiz.titulo}</h1>
                    </header>

                    <div className="resultado-container">
                        <div className={`resultado-badge ${aprobado ? 'aprobado' : 'desaprobado'}`}>
                            {aprobado ? '🎉' : '📚'}
                        </div>

                        <h2 className="resultado-titulo">
                            {aprobado ? '¡Felicitaciones!' : 'Seguí practicando'}
                        </h2>

                        <p className="resultado-mensaje">
                            {aprobado
                                ? 'Dominás este concepto. ¡Pasá al siguiente!'
                                : 'Repasá las lecciones y volvé a intentar.'
                            }
                        </p>

                        <div className="resultado-stats">
                            <div className="stat correctas">
                                <span className="stat-numero">{resultados.correctas}</span>
                                <span className="stat-label">Correctas</span>
                            </div>
                            <div className="stat incorrectas">
                                <span className="stat-numero">{resultados.incorrectas}</span>
                                <span className="stat-label">Incorrectas</span>
                            </div>
                            <div className="stat no-entendi">
                                <span className="stat-numero">{resultados.noEntendi}</span>
                                <span className="stat-label">No entendí</span>
                            </div>
                        </div>

                        <div className="resultado-porcentaje">
                            <div className="porcentaje-barra">
                                <div
                                    className="porcentaje-fill"
                                    style={{ width: `${porcentaje}%` }}
                                />
                            </div>
                            <span className="porcentaje-texto">{porcentaje}%</span>
                        </div>

                        {resultados.noEntendi > 0 && (
                            <div className="no-entendi-alerta">
                                <p>💡 Marcaste {resultados.noEntendi} pregunta(s) como "No entendí".</p>
                                <button
                                    className="btn-repasar"
                                    onClick={() => onNoEntendi(noEntendiItems)}
                                >
                                    Repasar esas lecciones
                                </button>
                            </div>
                        )}
                    </div>

                    <footer className="quiz-footer">
                        <button className="btn-cerrar" onClick={onClose}>
                            Volver al Dashboard
                        </button>
                    </footer>
                </div>
            </div>
        );
    }

    const esCorrecta = seleccionada === pregunta.correcta;

    return (
        <div className="quiz-overlay">
            <div className="quiz-modal">
                <header className="quiz-header">
                    <div className="quiz-info">
                        <span className="quiz-concepto">{concepto.icono} {concepto.titulo}</span>
                        <span className="quiz-progreso">
                            Pregunta {preguntaActual + 1} de {totalPreguntas}
                        </span>
                    </div>
                    <button className="btn-close-quiz" onClick={onClose}>✕</button>
                </header>

                <div className="quiz-progress-bar">
                    <div
                        className="quiz-progress-fill"
                        style={{ width: `${((preguntaActual + 1) / totalPreguntas) * 100}%` }}
                    />
                </div>

                <div className="quiz-content">
                    <h2 className="quiz-pregunta">{pregunta.pregunta}</h2>

                    <div className="quiz-opciones">
                        {pregunta.opciones.map((opcion, index) => {
                            let claseOpcion = 'quiz-opcion';
                            if (seleccionada === index) claseOpcion += ' seleccionada';
                            if (mostrarExplicacion) {
                                if (index === pregunta.correcta) claseOpcion += ' correcta';
                                else if (seleccionada === index) claseOpcion += ' incorrecta';
                            }

                            return (
                                <button
                                    key={index}
                                    className={claseOpcion}
                                    onClick={() => seleccionarRespuesta(index)}
                                    disabled={mostrarExplicacion}
                                >
                                    <span className="opcion-letra">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="opcion-texto">{opcion}</span>
                                    {mostrarExplicacion && index === pregunta.correcta && (
                                        <span className="opcion-check">✓</span>
                                    )}
                                </button>
                            );
                        })}

                        {/* Opción "No entendí esto" */}
                        <button
                            className="quiz-opcion no-entendi-opcion"
                            onClick={marcarNoEntendi}
                            disabled={mostrarExplicacion}
                        >
                            <span className="opcion-icono">❓</span>
                            <span className="opcion-texto">No entendí esto</span>
                        </button>
                    </div>

                    {mostrarExplicacion && (
                        <div className={`explicacion-box ${esCorrecta ? 'correcta' : 'incorrecta'}`}>
                            <p className="explicacion-header">
                                {esCorrecta ? '✅ ¡Correcto!' : '❌ Incorrecto'}
                            </p>
                            <p className="explicacion-texto">{pregunta.explicacion}</p>
                        </div>
                    )}
                </div>

                <footer className="quiz-footer">
                    {!mostrarExplicacion ? (
                        <button
                            className="btn-confirmar"
                            onClick={confirmarRespuesta}
                            disabled={seleccionada === null}
                        >
                            Confirmar respuesta
                        </button>
                    ) : (
                        <button
                            className="btn-siguiente"
                            onClick={siguientePregunta}
                        >
                            {preguntaActual + 1 === totalPreguntas ? 'Ver resultados' : 'Siguiente pregunta'}
                        </button>
                    )}
                </footer>
            </div>
        </div>
    );
}

export default ConceptQuiz;

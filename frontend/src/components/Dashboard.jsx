import { useState, useEffect } from 'react';
import { reactConcepts, categorias } from '../data/reactConcepts';
import { tieneQuiz } from '../data/conceptQuizzes';
import LessonView from './LessonView';
import ConceptQuiz from './ConceptQuiz';
import './Dashboard.css';

function Dashboard() {
    // Estado para la lección activa
    const [leccionActiva, setLeccionActiva] = useState(null); // { conceptoId, claseIndex }

    // Estado para quiz activo
    const [quizActivo, setQuizActivo] = useState(null); // conceptoId

    // Estado para clases completadas (persistido en localStorage)
    const [completadas, setCompletadas] = useState(() => {
        const saved = localStorage.getItem('cursosriki-progreso');
        return saved ? JSON.parse(saved) : [];
    });

    // Guardar progreso en localStorage
    useEffect(() => {
        localStorage.setItem('cursosriki-progreso', JSON.stringify(completadas));
    }, [completadas]);

    // Agrupar conceptos por categoría
    const conceptosPorCategoria = reactConcepts.reduce((acc, concepto) => {
        if (!acc[concepto.categoria]) {
            acc[concepto.categoria] = [];
        }
        acc[concepto.categoria].push(concepto);
        return acc;
    }, {});

    // Abrir lección
    const abrirLeccion = (conceptoId, claseIndex) => {
        setLeccionActiva({ conceptoId, claseIndex });
    };

    // Cerrar lección
    const cerrarLeccion = () => {
        setLeccionActiva(null);
    };

    // Marcar lección como completada
    const completarLeccion = (conceptoId, claseIndex) => {
        const key = `${conceptoId}-${claseIndex}`;
        if (!completadas.includes(key)) {
            setCompletadas([...completadas, key]);
        }
    };

    // Ir a la siguiente lección
    const siguienteLeccion = (conceptoId, claseIndex) => {
        setLeccionActiva({ conceptoId, claseIndex });
    };

    // Abrir quiz
    const abrirQuiz = (conceptoId) => {
        setQuizActivo(conceptoId);
    };

    // Cerrar quiz
    const cerrarQuiz = () => {
        setQuizActivo(null);
    };

    // Handler cuando el usuario marca "No entendí" en el quiz
    const handleNoEntendi = (preguntasNoEntendidas) => {
        // Cerrar quiz y abrir la primera lección del concepto
        setQuizActivo(null);
        if (preguntasNoEntendidas.length > 0) {
            setLeccionActiva({ conceptoId: quizActivo, claseIndex: 0 });
        }
    };

    // Calcular progreso de un concepto
    const calcularProgresoConcepto = (concepto) => {
        const completadasDelConcepto = concepto.clases.filter((_, index) =>
            completadas.includes(`${concepto.id}-${index}`)
        ).length;
        return {
            completadas: completadasDelConcepto,
            total: concepto.clases.length,
            porcentaje: Math.round((completadasDelConcepto / concepto.clases.length) * 100),
            todasCompletadas: completadasDelConcepto === concepto.clases.length
        };
    };

    // Calcular progreso total
    const calcularProgresoTotal = () => {
        const totalClases = reactConcepts.reduce((sum, c) => sum + c.clases.length, 0);
        return {
            completadas: completadas.length,
            total: totalClases,
            porcentaje: Math.round((completadas.length / totalClases) * 100)
        };
    };

    const progresoTotal = calcularProgresoTotal();

    return (
        <>
            <div className="dashboard">
                <header className="dashboard-header">
                    <h1>🚀 Roadmap React</h1>
                    <p className="dashboard-subtitle">Dominá React paso a paso</p>

                    {/* Barra de progreso global */}
                    <div className="progreso-global">
                        <div className="progreso-texto">
                            <span>Progreso total</span>
                            <span className="progreso-numeros">
                                {progresoTotal.completadas}/{progresoTotal.total} clases
                            </span>
                        </div>
                        <div className="progreso-barra">
                            <div
                                className="progreso-fill"
                                style={{ width: `${progresoTotal.porcentaje}%` }}
                            />
                        </div>
                        <span className="progreso-porcentaje">{progresoTotal.porcentaje}%</span>
                    </div>
                </header>

                <div className="dashboard-content">
                    {Object.entries(conceptosPorCategoria).map(([catKey, conceptos]) => (
                        <section key={catKey} className="categoria-section">
                            <div
                                className="categoria-header"
                                style={{ '--cat-color': categorias[catKey].color }}
                            >
                                <span className="categoria-emoji">{categorias[catKey].emoji}</span>
                                <h2>{categorias[catKey].nombre}</h2>
                            </div>

                            <div className="conceptos-grid">
                                {conceptos.map((concepto) => (
                                    <ConceptCard
                                        key={concepto.id}
                                        concepto={concepto}
                                        completadas={completadas}
                                        progreso={calcularProgresoConcepto(concepto)}
                                        onClaseClick={abrirLeccion}
                                        onQuizClick={abrirQuiz}
                                    />
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>

            {/* Modal de lección */}
            {leccionActiva && (
                <LessonView
                    conceptoId={leccionActiva.conceptoId}
                    claseIndex={leccionActiva.claseIndex}
                    onClose={cerrarLeccion}
                    onComplete={completarLeccion}
                    onNext={siguienteLeccion}
                    completadas={completadas}
                />
            )}

            {/* Modal de quiz */}
            {quizActivo && (
                <ConceptQuiz
                    conceptoId={quizActivo}
                    onClose={cerrarQuiz}
                    onNoEntendi={handleNoEntendi}
                />
            )}
        </>
    );
}

function ConceptCard({ concepto, completadas, progreso, onClaseClick, onQuizClick }) {
    const catColor = categorias[concepto.categoria].color;
    const hayQuiz = tieneQuiz(concepto.id);

    return (
        <article
            className="concept-card"
            style={{ '--card-color': catColor }}
        >
            <div className="card-header">
                <span className="card-icon">{concepto.icono}</span>
                <div className="card-title-group">
                    <h3>{concepto.id}. {concepto.titulo}</h3>
                    <div className="card-rating">
                        <span className="stars">{'⭐'.repeat(Math.min(concepto.importancia, 5))}</span>
                        <span className="rating-number">{concepto.importancia}/10</span>
                    </div>
                </div>
            </div>

            <p className="card-description">{concepto.descripcion}</p>

            <p className="card-incapie">💡 {concepto.incapie}</p>

            {/* Barra de progreso del concepto */}
            {progreso.completadas > 0 && (
                <div className="card-progress">
                    <div className="card-progress-bar">
                        <div
                            className="card-progress-fill"
                            style={{ width: `${progreso.porcentaje}%` }}
                        />
                    </div>
                    <span className="card-progress-text">
                        {progreso.completadas}/{progreso.total}
                    </span>
                </div>
            )}

            <div className="clases-container">
                <span className="clases-label">Clases a dominar:</span>
                <div className="clases-grid">
                    {concepto.clases.map((clase, index) => {
                        const estaCompletada = completadas.includes(`${concepto.id}-${index}`);
                        return (
                            <button
                                key={index}
                                className={`clase-box ${estaCompletada ? 'completada' : ''}`}
                                onClick={() => onClaseClick(concepto.id, index)}
                            >
                                {estaCompletada && <span className="check-icon">✓</span>}
                                {clase}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Botón de examen - aparece cuando todas las clases están completadas */}
            {progreso.todasCompletadas && hayQuiz && (
                <button
                    className="btn-examen"
                    onClick={() => onQuizClick(concepto.id)}
                >
                    📝 Hacer Examen
                </button>
            )}

            {/* Mensaje cuando aún no se completaron todas */}
            {!progreso.todasCompletadas && hayQuiz && progreso.completadas > 0 && (
                <div className="examen-bloqueado">
                    🔒 Completá las {progreso.total - progreso.completadas} clases restantes para desbloquear el examen
                </div>
            )}

            <div className="code-example">
                <pre><code>{concepto.ejemplo}</code></pre>
            </div>
        </article>
    );
}

export default Dashboard;

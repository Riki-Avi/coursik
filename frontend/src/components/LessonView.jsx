import { useState, useEffect } from 'react';
import { getLeccion } from '../data/leccionesContent';
import { reactConcepts } from '../data/reactConcepts';
import './LessonView.css';

// Configuración de modos de explicación
const MODOS_CONFIG = [
    { id: 'formal', label: '📚 Formal', color: '#8b5cf6' },
    { id: 'facebook', label: '📱 Facebook', color: '#1877f2' },
    { id: 'vidaReal', label: '🏠 Vida Real', color: '#22c55e' },
    { id: 'lol', label: '🎮 LoL', color: '#c4a04a' }
];

function LessonView({ conceptoId, claseIndex, onClose, onComplete, onNext, completadas }) {
    const [contenidoVisible, setContenidoVisible] = useState(false);
    const [modoActual, setModoActual] = useState('formal');

    const leccion = getLeccion(conceptoId, claseIndex);
    const concepto = reactConcepts.find(c => c.id === conceptoId);
    const totalClases = concepto?.clases.length || 0;
    const esUltima = claseIndex >= totalClases - 1;
    const yaCompletada = completadas.includes(`${conceptoId}-${claseIndex}`);

    // Detectar si la lección tiene modos (nuevo formato) o es formato antiguo
    const tieneModos = leccion?.modos !== undefined;

    // Obtener contenido y tips según el formato
    const contenidoActual = tieneModos
        ? leccion.modos[modoActual]?.contenido
        : leccion?.contenido;
    const tipsActuales = tieneModos
        ? leccion.modos[modoActual]?.tips
        : leccion?.tips;

    useEffect(() => {
        // Animación de entrada
        setTimeout(() => setContenidoVisible(true), 100);
    }, []);

    if (!leccion || !concepto) {
        return (
            <div className="lesson-overlay">
                <div className="lesson-container">
                    <p>Lección no encontrada. Próximamente agregaremos más contenido.</p>
                    <button className="btn-cerrar" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        );
    }

    const handleComplete = () => {
        onComplete(conceptoId, claseIndex);
    };

    const handleNext = () => {
        if (!esUltima) {
            onNext(conceptoId, claseIndex + 1);
        } else {
            onClose();
        }
    };

    // Renderizar markdown simple
    const renderContent = (content) => {
        return content
            .split('\n')
            .map((line, i) => {
                // Headers
                if (line.startsWith('# ')) {
                    return <h1 key={i} className="md-h1">{line.slice(2)}</h1>;
                }
                if (line.startsWith('## ')) {
                    return <h2 key={i} className="md-h2">{line.slice(3)}</h2>;
                }
                if (line.startsWith('### ')) {
                    return <h3 key={i} className="md-h3">{line.slice(4)}</h3>;
                }

                // Code blocks (simple detection)
                if (line.startsWith('```')) {
                    return null; // Los code blocks se manejan diferente
                }

                // Blockquotes
                if (line.startsWith('> ')) {
                    return <blockquote key={i} className="md-quote">{line.slice(2)}</blockquote>;
                }

                // Empty lines
                if (line.trim() === '') {
                    return <br key={i} />;
                }

                // Regular paragraphs (with inline formatting)
                let formattedLine = line
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/`([^`]+)`/g, '<code>$1</code>')
                    .replace(/\*(.*?)\*/g, '<em>$1</em>');

                return <p key={i} className="md-p" dangerouslySetInnerHTML={{ __html: formattedLine }} />;
            });
    };

    // Extraer bloques de código
    const extractCodeBlocks = (content) => {
        const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
        const blocks = [];
        let match;

        while ((match = codeBlockRegex.exec(content)) !== null) {
            blocks.push({
                language: match[1] || 'javascript',
                code: match[2].trim()
            });
        }

        return blocks;
    };

    const codeBlocks = extractCodeBlocks(contenidoActual || '');

    // Dividir contenido en secciones (antes y después de cada code block)
    const renderContentWithCode = (content) => {
        const parts = content.split(/```\w*\n[\s\S]*?```/g);
        const result = [];

        parts.forEach((part, index) => {
            result.push(
                <div key={`text-${index}`} className="content-section">
                    {renderContent(part)}
                </div>
            );

            if (codeBlocks[index]) {
                result.push(
                    <div key={`code-${index}`} className="code-block">
                        <div className="code-header">
                            <span className="code-lang">{codeBlocks[index].language}</span>
                        </div>
                        <pre>
                            <code>{codeBlocks[index].code}</code>
                        </pre>
                    </div>
                );
            }
        });

        return result;
    };

    return (
        <div className="lesson-overlay" onClick={onClose}>
            <div
                className={`lesson-container ${contenidoVisible ? 'visible' : ''}`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <header className="lesson-header">
                    <div className="lesson-breadcrumb">
                        <span className="breadcrumb-concepto">{concepto.icono} {concepto.titulo}</span>
                        <span className="breadcrumb-separator">›</span>
                        <span className="breadcrumb-clase">
                            Clase {claseIndex + 1} de {totalClases}
                        </span>
                    </div>
                    <button className="btn-close" onClick={onClose}>✕</button>
                </header>

                {/* Título de la lección */}
                <div className="lesson-title-section">
                    <h1 className="lesson-title">{leccion.titulo}</h1>
                    <span className="lesson-duration">⏱️ {leccion.duracion}</span>
                </div>

                {/* Selector de modos - solo si la lección tiene modos */}
                {tieneModos && (
                    <div className="mode-selector">
                        <span className="mode-label">Explicar como:</span>
                        <div className="mode-buttons">
                            {MODOS_CONFIG.map(modo => (
                                <button
                                    key={modo.id}
                                    className={`mode-btn ${modoActual === modo.id ? 'active' : ''}`}
                                    style={{
                                        '--mode-color': modo.color,
                                        borderColor: modoActual === modo.id ? modo.color : 'transparent',
                                        backgroundColor: modoActual === modo.id ? `${modo.color}20` : 'transparent'
                                    }}
                                    onClick={() => setModoActual(modo.id)}
                                >
                                    {modo.label}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Contenido */}
                <div className="lesson-content">
                    {contenidoActual && renderContentWithCode(contenidoActual)}
                </div>

                {/* Tips */}
                {tipsActuales && tipsActuales.length > 0 && (
                    <div className="lesson-tips">
                        <h3>💡 Tips para recordar</h3>
                        <ul>
                            {tipsActuales.map((tip, i) => (
                                <li key={i}>{tip}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Footer con acciones */}
                <footer className="lesson-footer">
                    <div className="progress-indicator">
                        {concepto.clases.map((_, i) => (
                            <span
                                key={i}
                                className={`progress-dot ${i === claseIndex ? 'active' : ''} ${completadas.includes(`${conceptoId}-${i}`) ? 'completed' : ''}`}
                            />
                        ))}
                    </div>

                    <div className="lesson-actions">
                        {!yaCompletada ? (
                            <button
                                className="btn-complete"
                                onClick={handleComplete}
                            >
                                ✓ Marcar como completada
                            </button>
                        ) : (
                            <span className="completed-badge">✅ Completada</span>
                        )}

                        <button
                            className="btn-next"
                            onClick={handleNext}
                        >
                            {esUltima ? 'Volver al Dashboard' : 'Siguiente clase →'}
                        </button>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default LessonView;

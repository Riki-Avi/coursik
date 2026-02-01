# 🚀 Guía de Despliegue en Railway (Simplificado)

Esta guía te ayudará a desplegar tu aplicación "CursosRiki" (Backend Java + Frontend React) en Railway.

## 1. Preparación del Proyecto (¡Ya hecho!)
He configurado tu proyecto para que funcione como un **único servicio** en la nube, igual que "Trins":
- **Sin Base de Datos**: He eliminado la dependencia de MySQL ya que no la usabas.
- **Backend & Frontend Juntos**: Configurados para construirse en un solo contenedor Docker.
- **Seguridad**: La API Key de Gemini está protegida.
- **CORS**: El backend permite peticiones desde tu dominio.

## 2. Crear Proyecto en Railway
1. Entrá a [Railway](https://railway.app/).
2. Creá un **"New Project"** > **"Deploy from GitHub repo"**.
3. Seleccioná tu repositorio `CursosRiki`.
4. Railway detectará automáticamente el `Dockerfile` y empezará a construir.

---

## 3. Configurar Variables
Una vez creado el servicio, ve a la pestaña **Variables** y agrega estas (si no están):

1. `PORT`: `8080` (Opcional, pero recomendado).
2. `GEMINI_API_KEY`: Tu clave de API de Google (para que funcione el botón "Explicar con IA").

---

## 4. ¡Listo!
Railway te dará una URL (Dominio) en la pestaña **Settings** > **Networking**.
¡Tu aplicación ya estará funcionando en la web!

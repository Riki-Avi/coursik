# 🚀 Guía de Despliegue en Railway

Esta guía te ayudará a desplegar tu aplicación "CursosRiki" (Backend Java + Frontend React) en Railway.

## 1. Preparación del Proyecto (¡Ya hecho!)
He configurado tu proyecto para que funcione tanto en local como en la nube:
- **Backend**: Ahora lee la URL de la base de datos y el puerto desde variables de entorno.
- **Frontend**: Ahora sabe a qué URL del backend llamar (configurable).
- **Seguridad**: La API Key de Gemini está protegida.
- **CORS**: El backend permite peticiones desde tu dominio de Railway.

## 2. Crear Proyecto en Railway
1. Entrá a [Railway](https://railway.app/).
2. Creá un **"New Project"** > **"Deploy from GitHub repo"**.
3. Seleccioná tu repositorio `CursosRiki`.
4. Railway detectará el repositorio. Como es un "monorepo" (tiene backend y frontend juntos), necesitamos configurarlo como dos servicios separados.

---

## 3. Servicio 1: Base de Datos (MySQL)
1. En tu proyecto de Railway, dale click a **"New"** > **"Database"** > **"MySQL"**.
2. Esperá a que se cree.
3. Entrá al servicio MySQL > pestaña **"Variables"**.
4. Copiá la `MYSQL_URL` (o `DATABASE_URL`).

---

## 4. Servicio 2: Backend (Java)
1. En tu proyecto, dale click a **"New"** > **"GitHub Repo"** > Elejí el mismo repo.
2. Entrá a este nuevo servicio > **Settings**.
3. En **Root Directory**, poné: `/backend`.
4. En **Build Command**, poné: `mvn clean package -DskipTests`.
5. Ve a la pestaña **Variables** y agregá las siguientes:
   - `PORT`: `8080`.
   - `SPRING_DATASOURCE_URL`: `jdbc:mysql://${{MySQL.MYSQLHOST}}:${{MySQL.MYSQLPORT}}/railway` (o usá la referencia visual en Variables).
   - `SPRING_DATASOURCE_USERNAME`: `${{MySQL.MYSQLUSER}}`
   - `SPRING_DATASOURCE_PASSWORD`: `${{MySQL.MYSQLPASSWORD}}`
   - `GEMINI_API_KEY`: Tu nueva API Key.
   - `FRONTEND_URL`: `https://<TU-DOMINIO-FRONTEND>.up.railway.app` (Llenar DESPUÉS).

---

## 5. Servicio 3: Frontend (React)
1. En tu proyecto, dale click a **"New"** > **"GitHub Repo"** > Elejí el mismo repo OTRA VEZ.
2. Entrá al servicio > **Settings**.
3. En **Root Directory**, poné: `/frontend`.
4. En **Build Command**, poné: `npm run build`.
5. En **Start Command**, poné: `npm run preview -- --port $PORT --host`.
6. Ve a la pestaña **Variables**:
   - `VITE_API_URL`: `https://<TU-URL-DEL-BACKEND>.up.railway.app` (Sin la barra al final).
   - `PORT`: `5173`.

---

## 6. Finalizar
1. Generá dominios en Networking para ambos.
2. Actualizá `FRONTEND_URL` en el backend.
3. ¡A disfrutar!

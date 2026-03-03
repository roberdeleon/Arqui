import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="badge">ASSIGNMENT 04</div>
        <h1>Docker Hub + GitHub Actions</h1>
        <p className="subtitle">
          Aplicación web estática creada con Vite + React + TypeScript, dockerizada y publicada
          automáticamente en Docker Hub usando un pipeline de GitHub Actions.
        </p>
      </header>

      <main className="grid">
        <section className="card">
          <h2>Objetivo</h2>
          <p>
            Construir una aplicación web sencilla con una interfaz agradable, crear una imagen Docker y
            configurar un pipeline CI/CD que haga <b>build</b> y <b>push</b> a Docker Hub con tags:
            <b> latest</b> y el <b>SHA del commit</b>.
          </p>
        </section>

        <section className="card">
          <h2>Checklist de la tarea</h2>
          <ul>
            <li> Proyecto inicializado con Vite (React + TS).</li>
            <li> Dockerfile para crear imagen de la app.</li>
            <li> Pipeline en <code>.github/workflows</code> para build y push a Docker Hub.</li>
            <li> Tags por commit: <b>latest</b> + <b>SHA</b>.</li>
            <li> Mínimo 3 commits → mínimo 3 imágenes (SHA diferentes) en Docker Hub.</li>
            <li> Secretos gestionados con Doppler (si aplica para credenciales).</li>
          </ul>
        </section>

        <section className="card">
          <h2>Cómo funciona el tagging</h2>
          <p>
            Cada vez que haces un commit y lo subes a GitHub, el pipeline se ejecuta y publica una imagen con:
          </p>
          <ol>
            <li><b>latest</b> → siempre apunta a la imagen más reciente.</li>
            <li><b>&lt;SHA&gt;</b> → identifica exactamente la versión creada por ese commit.</li>
          </ol>
        </section>

        <section className="card">
          <h2>Entregables</h2>
          <ul>
            <li>📸 Captura de la aplicación (esta pantalla).</li>
            <li>🔗 URL de la imagen publicada en Docker Hub.</li>
            <li>📸 Captura de Docker Hub mostrando tags (latest + SHA).</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <p>
          <b>Nota:</b> Esta app es estática. El despliegue se valida verificando que la imagen exista en Docker
          Hub y que los tags se generen automáticamente con cada commit.
        </p>
      </footer>
    </div>
  );
}
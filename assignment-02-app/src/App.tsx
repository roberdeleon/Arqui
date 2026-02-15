import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">Arqui CDN</div>
        <div className="pill">Assignment-02</div>
      </header>

      <main className="container">
        <section className="hero">
          <h1>Aplicación estática desplegada con CDN (AWS CloudFront)</h1>
          <p>
            Esta app fue construida con Vite + React y se despliega automáticamente a S3.
            CloudFront sirve el contenido globalmente para mejor rendimiento.
          </p>
          <div className="ctaRow">
            <a className="btn" href="#features">Ver características</a>
            <a className="btn ghost" href="#about">Acerca del proyecto</a>
          </div>
        </section>

        <section id="features" className="grid">
          <article className="card">
            <h3>Build con Vite</h3>
            <p>Genera la carpeta <code>dist/</code> lista para subir al CDN.</p>
          </article>
          <article className="card">
            <h3>Pipeline CI/CD</h3>
            <p>GitHub Actions construye y sube automáticamente al bucket de S3.</p>
          </article>
          <article className="card">
            <h3>CloudFront</h3>
            <p>Se invalida la caché para reflejar cambios al instante.</p>
          </article>
        </section>

        <section id="about" className="card wide">
          <h2>¿Qué estoy demostrando?</h2>
          <ul>
            <li>Proyecto configurado con Vite (React + TS).</li>
            <li>Despliegue automatizado a AWS S3.</li>
            <li>Distribución pública a través de CloudFront (CDN).</li>
            <li>Gestión de secretos con Doppler y sincronización con GitHub.</li>
          </ul>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Arqui</span>
          <span className="muted">Hecho para Assignment-02</span>
        </footer>
      </main>
    </div>
  );
}

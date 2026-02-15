import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">
          <span className="dot" />
          <span>Arqui CDN</span>
        </div>

        <div className="navRight">
          <span className="pill">Assignment-02</span>
        </div>
      </header>

      <main className="container">
        <section className="hero">
          <div className="heroInner">
            <h1>Aplicación estática en AWS con CloudFront (CDN)</h1>
            <p>
              Construida con <b>Vite + React + TypeScript</b>. Se despliega a <b>S3</b> y se
              sirve públicamente por <b>CloudFront</b>. El pipeline invalida la caché para
              mostrar cambios al instante.
            </p>

            <div className="ctaRow">
              <a className="btn" href="#features">Ver características</a>
              <a className="btn ghost" href="#about">Acerca del proyecto</a>
            </div>

            <div className="stats">
              <div className="stat">
                <div className="statNum">Vite</div>
                <div className="statLabel">Build → dist/</div>
              </div>
              <div className="stat">
                <div className="statNum">S3</div>
                <div className="statLabel">Hosting de archivos</div>
              </div>
              <div className="stat">
                <div className="statNum">CDN</div>
                <div className="statLabel">CloudFront global</div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid">
          <article className="card">
            <h3>Build con Vite</h3>
            <p>
              Genera la carpeta <code>dist/</code> lista para subir al bucket de S3.
            </p>
          </article>

          <article className="card">
            <h3>CI/CD con GitHub</h3>
            <p>
              GitHub Actions compila, sincroniza a S3 e invalida CloudFront automáticamente.
            </p>
          </article>

          <article className="card">
            <h3>Secretos con Doppler</h3>
            <p>
              Variables de AWS centralizadas en Doppler y sincronizadas hacia GitHub Secrets.
            </p>
          </article>
        </section>

        <section id="about" className="card wide">
          <h2>¿Qué demuestra esta práctica?</h2>
          <ul>
            <li>Proyecto creado con Vite (React + TS).</li>
            <li>Despliegue a AWS S3 desde un pipeline.</li>
            <li>Entrega por CDN (CloudFront) con invalidación de caché.</li>
            <li>Gestión de secretos con Doppler + sincronización con GitHub.</li>
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

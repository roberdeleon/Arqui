import "./App.css";

function App() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(1200px 600px at 20% 10%, rgba(34,197,94,0.35), transparent 60%), #06130c",
        color: "#eafff4",
        fontFamily:
          "system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, sans-serif",
        padding: "60px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* HEADER */}
        <h1
          style={{
            fontSize: "60px",
            margin: 0,
            color: "#22c55e",
            letterSpacing: "-1px",
          }}
        >
          Assignment 03
        </h1>

        <p
          style={{
            fontSize: "18px",
            marginTop: "15px",
            opacity: 0.9,
            lineHeight: 1.7,
          }}
        >
          Implementación de una aplicación web moderna utilizando Vite +
          React, Docker y despliegue automatizado en AWS Elastic Beanstalk
          mediante un pipeline CI/CD con GitHub Actions.
        </p>

        {/* OBJETIVO */}
        <Section
          title="Objetivo del Proyecto"
          content="Construir una aplicación web estática utilizando Vite y React,
          implementando un flujo completo de desarrollo moderno que incluya
          control de versiones, contenedorización, gestión de secretos,
          integración continua y despliegue automático en la nube."
        />

        {/* TECNOLOGÍAS */}
        <Section
          title="Tecnologías Utilizadas"
          content="• Vite para el entorno de desarrollo rápido y optimización del build.
• React como biblioteca principal para la interfaz de usuario.
• Docker para la contenedorización de la aplicación.
• Amazon ECR para almacenar la imagen Docker.
• AWS Elastic Beanstalk para el despliegue automático.
• GitHub Actions para CI/CD.
• Doppler para la gestión segura de variables de entorno.
• Husky para validaciones antes de hacer commits."
        />

        {/* FLUJO */}
        <Section
          title="Flujo de CI/CD"
          content="1. El desarrollador realiza cambios en el código.
2. Se ejecutan validaciones con Husky antes del commit.
3. Se hace push al repositorio en GitHub.
4. GitHub Actions construye la imagen Docker.
5. La imagen se sube a Amazon ECR.
6. Elastic Beanstalk obtiene la nueva versión y actualiza el entorno automáticamente."
        />

        {/* DOCKER */}
        <Section
          title="Dockerización"
          content="La aplicación fue empaquetada en una imagen Docker utilizando un
          proceso multi-stage build. Primero se construye el proyecto con Node,
          luego se sirve el contenido estático usando Nginx para producción."
        />

        {/* AWS */}
        <Section
          title="Despliegue en AWS"
          content="Se utilizó Elastic Beanstalk con plataforma Docker en Amazon Linux.
          El entorno obtiene la imagen desde Amazon ECR y la ejecuta en instancias EC2,
          permitiendo escalabilidad automática."
        />

        {/* BOTONES */}
        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <button
            style={{
              background: "linear-gradient(90deg, #16a34a, #22c55e)",
              border: "none",
              padding: "12px 20px",
              borderRadius: "10px",
              color: "#052e16",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Ver Repositorio
          </button>

          <button
            style={{
              background: "transparent",
              border: "1px solid #22c55e",
              padding: "12px 20px",
              borderRadius: "10px",
              color: "#bbf7d0",
              cursor: "pointer",
            }}
          >
            Documentación
          </button>
        </div>
      </div>
    </div>
  );
}

function Section({ title, content }: { title: string; content: string }) {
  return (
    <div
      style={{
        marginTop: "40px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(34,197,94,0.3)",
        borderRadius: "16px",
        padding: "25px",
        whiteSpace: "pre-line",
      }}
    >
      <h2 style={{ color: "#86efac", marginTop: 0 }}>{title}</h2>
      <p style={{ lineHeight: 1.8, opacity: 0.9 }}>{content}</p>
    </div>
  );
}

export default App;
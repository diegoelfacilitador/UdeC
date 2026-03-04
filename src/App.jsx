import { useState, useEffect } from "react";

// ─── DATOS DEL PROGRAMA ───
const PROGRAM_DATA = {
  title: "Diplomado en Inglés para Educadores de Párvulos y Profesores de Primer Ciclo Básico",
  subtitle: "Enseña inglés con seguridad, creatividad y respaldo universitario",
  category: "EDUCACIÓN | Formación Permanente",
  details: [
    { label: "Duración", value: "144 horas" },
    { label: "Modalidad", value: "100% Online" },
    { label: "Inicio", value: "Mayo 2026" },
    { label: "Arancel", value: "$1.365.000" }
  ]
};

// ─── COMPONENTE PRINCIPAL (ÚNICA EXPORTACIÓN) ───
export default function App() {
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#111827', margin: 0, background: '#fff' }}>
      {/* HERO SECTION */}
      <header style={{
        background: 'linear-gradient(135deg, #003da5 0%, #002b74 100%)',
        padding: '100px 20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '14px', opacity: 0.8 }}>{PROGRAM_DATA.category}</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', margin: '20px 0', lineHeight: '1.1' }}>{PROGRAM_DATA.title}</h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, maxWidth: '700px', margin: '0 auto 40px' }}>{PROGRAM_DATA.subtitle}</p>
          <button style={{
            background: '#f59e0b', border: 'none', padding: '18px 40px',
            color: 'white', fontWeight: 'bold', borderRadius: '6px', fontSize: '1.1rem', cursor: 'pointer'
          }}>POSTULAR AHORA</button>
        </div>
      </header>

      {/* INFO STRIP */}
      <div style={{ display: 'flex', flexWrap: 'wrap', background: '#f3f4f6', padding: '20px', justifyContent: 'center' }}>
        {PROGRAM_DATA.details.map((item, i) => (
          <div key={i} style={{ padding: '20px', textAlign: 'center', minWidth: '200px' }}>
            <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase', fontWeight: 'bold' }}>{item.label}</div>
            <div style={{ fontWeight: 'bold', fontSize: '20px', color: '#003da5' }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* FORMULARIO */}
      <section style={{ padding: '80px 20px', maxWidth: '600px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#003da5', marginBottom: '30px' }}>Solicita Información</h2>
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'grid', gap: '20px' }}>
            <input
              type="text" placeholder="Nombre Completo" required
              style={{ padding: '14px', borderRadius: '8px', border: '1px solid #d1d5db' }}
              onChange={e => setFormData({ ...formData, nombre: e.target.value })}
            />
            <input
              type="email" placeholder="Email" required
              style={{ padding: '14px', borderRadius: '8px', border: '1px solid #d1d5db' }}
            />
            <button type="submit" style={{
              background: '#003da5', color: 'white', padding: '16px', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer'
            }}>ENVIAR SOLICITUD</button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', background: '#f0fdf4', borderRadius: '12px', color: '#166534' }}>
            <h3>¡Gracias {formData.nombre}!</h3>
            <p>Te contactaremos en menos de 24 horas.</p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#111827', color: 'white', padding: '40px 20px', textAlign: 'center' }}>
        <p>© 2026 Universidad de Concepción · Formación Permanente</p>
      </footer>
    </div>
  );
}
import { useState } from "react";

const PROGRAM_DATA = {
  title: "Diplomado en Inglés para Educadores de Párvulos y Profesores de Primer Ciclo Básico",
  subtitle: "Enseña inglés con seguridad, creatividad y respaldo universitario",
  details: [
    { label: "Duración", value: "144 horas" },
    { label: "Modalidad", value: "100% Online" },
    { label: "Inicio", value: "Mayo 2026" },
    { label: "Arancel", value: "$1.365.000" }
  ]
};

export default function App() {
  const [formData, setFormData] = useState({ nombre: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#111827', margin: 0 }}>
      {/* HERO */}
      <header style={{ 
        background: '#003da5', 
        padding: '80px 20px', 
        color: 'white', 
        textAlign: 'center' 
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{PROGRAM_DATA.title}</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{PROGRAM_DATA.subtitle}</p>
        <button style={{ 
          background: '#f59e0b', border: 'none', padding: '15px 30px', 
          color: 'white', fontWeight: 'bold', borderRadius: '5px', marginTop: '20px', cursor: 'pointer'
        }}>POSTULAR AHORA</button>
      </header>

      {/* INFO */}
      <div style={{ display: 'flex', flexWrap: 'wrap', background: '#f3f4f6', padding: '20px', justifyContent: 'center' }}>
        {PROGRAM_DATA.details.map((item, i) => (
          <div key={i} style={{ padding: '20px', textAlign: 'center', minWidth: '150px' }}>
            <div style={{ fontSize: '12px', color: '#6b7280', textTransform: 'uppercase' }}>{item.label}</div>
            <div style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* FORMULARIO */}
      <section style={{ padding: '60px 20px', maxWidth: '500px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', color: '#003da5', marginBottom: '30px' }}>Solicita Información</h2>
        {!submitted ? (
          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} style={{ display: 'grid', gap: '15px' }}>
            <input 
              type="text" placeholder="Nombre completo" required 
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #d1d5db' }}
              onChange={e => setFormData({...formData, nombre: e.target.value})}
            />
            <input 
              type="email" placeholder="Correo electrónico" required 
              style={{ padding: '12px', borderRadius: '5px', border: '1px solid #d1d5db' }}
            />
            <button type="submit" style={{ 
              background: '#003da5', color: 'white', padding: '15px', border: 'none', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer'
            }}>ENVIAR CONSULTA</button>
          </form>
        ) : (
          <div style={{ textAlign: 'center', padding: '40px', background: '#ecfdf5', borderRadius: '10px', color: '#065f46' }}>
            <h3>¡Gracias {formData.nombre}!</h3>
            <p>Un asesor de la UdeC te contactará pronto.</p>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer style={{ background: '#1f2937', color: 'white', padding: '30px', textAlign: 'center', fontSize: '14px' }}>
        <p>© 2026 Universidad de Concepción · Formación Permanente</p>
      </footer>
    </div>
  );
}
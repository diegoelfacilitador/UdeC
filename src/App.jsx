import { useState, useEffect } from "react";

// ═══════════════════════════════════════════════════════════════════
// LANDING V2 — DIPLOMADO EN INGLÉS PARA EDUCADORES
// Universidad de Concepción · Formación Permanente
// ═══════════════════════════════════════════════════════════════════

const PROGRAM_DATA = {
  tag: "Diplomado",
  category: "EDUCACIÓN | Formación Permanente",
  title: "Diplomado en Inglés para Educadores de Párvulos y Profesores de Primer Ciclo Básico",
  subtitle: "Enseña inglés con seguridad, creatividad y respaldo universitario",
  startDate: "Mayo 2026",
  modality: "100% Online",
  duration: "144 horas",
  schedule: "Viernes 18:30–20:00 · Sábado 9:30–13:00",
  price: "$1.365.000",
  enrollment: "$226.000",
  level: "Nivel B1 (MCER)",
  spots: 30,
  campus: "Virtual / Concepción",
  degree: "Diplomado Universitario",
  faculty: "Facultad de Humanidades y Arte",
  coordinator: {
    name: "Héctor Bello Cumián",
    degree: "Magíster en Lingüística, U. de Concepción",
    title: "Profesor de Estado en Inglés",
    email: "hbelloc@udec.cl",
  },
  docentes: [
    { name: "Pamela Arévalo R.", specialty: "Magíster en Enseñanza del Inglés como Lengua Extranjera" },
    { name: "Juan Pablo Arias R.", specialty: "Magíster en Dirección y Gestión Escolar de Calidad" },
    { name: "Yenny Ayala P.", specialty: "Magíster en Enseñanza del Inglés como Lengua Extranjera" },
    { name: "Ma. Soledad Carriel H.", specialty: "Magíster en Enseñanza del Inglés como Lengua Extranjera" },
    { name: "Milena Leiva Ch.", specialty: "Profesora de Inglés, U. de Concepción" },
    { name: "Scarlette Leppe T.", specialty: "Magíster en Enseñanza del Inglés como Lengua Extranjera" },
    { name: "Juan Pablo Cruces", specialty: "Magíster en Lingüística Aplicada" },
  ],
  perfilEgreso: [
    "Reconocer los fenómenos lingüísticos básicos subyacentes en el contexto educativo, diagnosticando necesidades propias de la enseñanza de un segundo idioma.",
    "Utilizar el idioma inglés (en un nivel A2 según el MCER) en situaciones comunicativas auténticas.",
    "Asistir la enseñanza del idioma inglés integrando conocimientos metodológicos y didácticos con una mirada interdisciplinar.",
    "Trabajar con otros profesionales de la educación para la planificación e implementación de situaciones de enseñanza con uso del idioma inglés.",
  ],
  perfilImg: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1000", // Imagen de respaldo por si el base64 es muy pesado
  modules: [
    { name: "Introducción al idioma Inglés", detail: "Orienta al desarrollo de competencias comunicativas en el idioma inglés." },
    { name: "Los sonidos del Inglés", detail: "Busca desarrollar habilidades que permitan identificar y reproducir sonidos." },
    { name: "Estructuras básicas del Inglés", detail: "Comprender y utilizar estructuras gramaticales básicas." },
    { name: "Comprensión oral", detail: "Focaliza en el desarrollo de la habilidad de comprensión oral nivel A2." },
    { name: "Comprensión lectora", detail: "Entrenamiento en diferentes estrategias y técnicas de lectura." },
    { name: "Enfoque por tareas y proyectos", detail: "Aprendizaje basado en proyectos aplicables directamente al aula." },
    { name: "Introducción a la escritura", detail: "Desarrollar y aplicar técnicas de redacción de textos sencillos." },
    { name: "Habilidades integradas", detail: "Consolidación de las cuatro habilidades del idioma inglés." },
  ],
  testimonials: [
    { name: "Carolina M.", role: "Educadora de Párvulos", quote: "Entré con mucho miedo... hoy puedo cantar canciones y dar instrucciones en inglés.", metric: "De nivel A1 a B1" },
    { name: "Rodrigo V.", role: "Profesor de 1° Básico", quote: "Todo lo que aprendí lo pude aplicar al día siguiente en mi sala.", metric: "50+ actividades listas" },
  ],
  discounts: [
    { label: "Pago al contado", value: "10% dcto." },
    { label: "Grupos 5+ personas", value: "10% dcto." },
    { label: "Ex-alumnos/as UdeC", value: "10% dcto." },
  ],
  benefits: [
    "Correo institucional UdeC (@udec.cl)",
    "Licencias Microsoft Office 365",
    "Acceso a Biblioteca UdeC",
    "Certificación universitaria",
  ],
};

const HERO_IMG = `https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200`;

// Iconos simplificados para evitar errores de importación
const IconGrad = () => <span style={{fontSize: '20px'}}>🎓</span>;
const IconClock = () => <span style={{fontSize: '20px'}}>⏱️</span>;
const IconCal = () => <span style={{fontSize: '20px'}}>📅</span>;
const IconMonitor = () => <span style={{fontSize: '20px'}}>💻</span>;
const IconMap = () => <span style={{fontSize: '20px'}}>📍</span>;
const IconDollar = () => <span style={{fontSize: '20px'}}>💵</span>;

function App() {
  const [formData, setFormData] = useState({ nombre: "", email: "", telefono: "" });
  const [submitted, setSubmitted] = useState(false);
  const d = PROGRAM_DATA;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ fontFamily: 'sans-serif', color: '#111827' }}>
      {/* Hero Section */}
      <header style={{ 
        background: `linear-gradient(rgba(0,61,165,0.8), rgba(0,61,165,0.8)), url(${HERO_IMG})`,
        backgroundSize: 'cover',
        padding: '80px 20px',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ textTransform: 'uppercase', tracking: '0.1em', fontSize: '14px' }}>{d.category}</p>
          <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>{d.title}</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.9 }}>{d.subtitle}</p>
          <button style={{ 
            background: '#f59e0b', 
            border: 'none', 
            padding: '15px 30px', 
            color: 'white', 
            fontWeight: 'bold',
            borderRadius: '5px',
            marginTop: '30px',
            cursor: 'pointer'
          }}>POSTULAR AHORA</button>
        </div>
      </header>

      {/* Info Strip */}
      <div style={{ display: 'flex', flexWrap: 'wrap', background: '#f3f4f6', padding: '20px' }}>
        {[
          { icon: <IconGrad />, label: "Grado", value: d.degree },
          { icon: <IconClock />, label: "Horas", value: d.duration },
          { icon: <IconMonitor />, label: "Modalidad", value: d.modality },
          { icon: <IconDollar />, label: "Arancel", value: d.price },
        ].map((item, i) => (
          <div key={i} style={{ flex: '1 1 200px', textAlign: 'center', padding: '10px' }}>
            <div>{item.icon}</div>
            <div style={{ fontSize: '12px', color: '#6b7280' }}>{item.label}</div>
            <div style={{ fontWeight: 'bold' }}>{item.value}</div>
          </div>
        ))}
      </div>

      {/* Formulario de contacto */}
      <section style={{ padding: '60px 20px', maxWidth: '600px', margin: '0 auto' }}>
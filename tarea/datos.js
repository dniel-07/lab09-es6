export const curso = "Diseño de Interfaces";

export const estudiantes = [
  { nombre: "Ana", notas: [16, 18, 15] },
  { nombre: "Luis", notas: [12, 10, 14] },
  { nombre: "Rosa", notas: [19, 17, 20] }
];

// Spread para copiar el objeto y modificar el nombre
export const nuevo = {
  ...estudiantes[0],
  nombre: "Ana María"
};

// Spread para combinar los estudiantes
export const todos = [...estudiantes, nuevo];

// Exportación por defecto
export default curso;
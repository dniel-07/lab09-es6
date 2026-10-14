import cursoPorDefecto, { todos } from "./datos.js";
import reportePorDefecto, {
  promedio,
  estado
} from "./calculos.js";

const titulo = document.querySelector("#curso");
const lista = document.querySelector("#resultados");

// Mostrar el nombre del curso
titulo.textContent = `Curso: ${cursoPorDefecto}`;

// Crear y mostrar los reportes
todos.forEach((estudiante) => {
  const { nombre, notas } = estudiante;
  const prom = promedio(...notas);
  const resultado = estado(prom);

  const elemento = document.createElement("li");
  elemento.textContent = reportePorDefecto(estudiante);

  // Agregar información adicional mediante template literals
  elemento.title = `${nombre}: promedio ${prom.toFixed(1)}. ${resultado}`;

  lista.append(elemento);
});
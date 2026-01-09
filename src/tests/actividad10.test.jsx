import { render, screen, fireEvent } from "@testing-library/react";
import FormularioPeliculaNoControlado from "../components/FormularioPeliculaNoControlado";

test("los datos solo se capturan al enviar el formulario", () => {
  render(<FormularioPeliculaNoControlado />);

  const nombreInput = screen.getByLabelText(/nombre/i);
  const submitBtn = screen.getByRole("button", { name: /añadir película/i });

  // .change()
  fireEvent.change(nombreInput, { target: { value: "Matrix" } });

  // Aún no debería mostrar error, porque no se ha enviado
  expect(screen.queryByText(/el nombre es obligatorio/i)).not.toBeInTheDocument();

  // .click() en el botón submit
  fireEvent.click(submitBtn);

  // Ahora sí se capturan los datos y se validan
  expect(screen.getByDisplayValue("Matrix")).toBeInTheDocument();
});

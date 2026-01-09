import { render, screen, fireEvent } from "@testing-library/react";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado";

describe("Actividad 3 - Validación Nombre obligatorio", () => {
  test("muestra el error si el nombre está vacío al enviar el formulario", () => {
    render(<FormularioPeliculaControlado />);

    // Enviar el formulario sin rellenar el nombre
    const submitButton = screen.getByRole("button", {
      name: /añadir película/i,
    });

    fireEvent.click(submitButton);

    // Comprobar que aparece el mensaje de error
    expect(
      screen.getByText("El nombre es obligatorio.")
    ).toBeInTheDocument();
  });
});

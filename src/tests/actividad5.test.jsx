import { render, screen, fireEvent } from "@testing-library/react";
import FormularioPeliculaControlado from "../components/FormularioPeliculaControlado";

test("resetea el campo nombre tras enviar el formulario", () => {

    // ARRANGE: renderizar componente
    render(<FormularioPeliculaControlado />);

    const inputNombre = screen.getByLabelText(/nombre/i);
    const submitButton = screen.getByRole("button", { name: /añadir película/i });

    // ACT: escribir un nombre y enviar el formulario
    fireEvent.change(inputNombre, { target: { value: "Matrix" } });
    fireEvent.change(screen.getByLabelText(/director/i), { target: { value: "Wachowski" } });
    fireEvent.change(screen.getByLabelText(/clasificación/i), { target: { value: "Sci-Fi" } });
    fireEvent.change(screen.getByLabelText(/nota/i), { target: { value: "9" } });
    fireEvent.change(screen.getByLabelText(/url cartelera/i), { target: { value: "http://cartel.com/matrix.jpg" } });

    // Enviar el formulario
    fireEvent.click(submitButton);

    // ACT: obtener el valor del input después de enviar el formulario
    expect(screen.getByLabelText(/nombre/i).value).toBe("");


    // ASSERT: comprobar que el input se ha vaciado
    expect(inputNombre.value).toBe("");
});

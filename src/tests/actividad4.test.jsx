import { render, screen, fireEvent } from "@testing-library/react";
import FormularioInterprete from "../components/FormularioInterprete";

test("muestra error si la biografía tiene menos de 50 caracteres", () => {

  // ARRANGE
  render(<FormularioInterprete />);

  const submitButton = screen.getByRole("button", {
    name: /añadir intérprete/i,
  });

  // ACT
  fireEvent.click(submitButton);

  // ASSERT
  expect(
    screen.getByText("La biografía debe tener al menos 50 caracteres (mínimo 50).")
  ).toBeInTheDocument();
});

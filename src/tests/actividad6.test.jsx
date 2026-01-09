import { render, screen, fireEvent } from "@testing-library/react";
import Peliculas from "../pages/Peliculas";
import { MemoryRouter } from "react-router-dom";

test("el buscador encuentra la película aunque se escriba en minúsculas", () => {
  // ARRANGE: renderizamos el componente con MemoryRouter
  render(
    <MemoryRouter>
      <Peliculas />
    </MemoryRouter>
  );

  // Buscamos el input del buscador por placeholder
  const searchInput = screen.getByPlaceholderText(/buscar películas/i);

  // ACT: escribimos en minúsculas
  fireEvent.change(searchInput, { target: { value: "sexto" } });

  // ASSERT: comprobamos que aparece "El sexto sentido"
  const resultado = screen.getByText("El sexto sentido");
  expect(resultado).toBeInTheDocument();
});

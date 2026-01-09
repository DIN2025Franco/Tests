import { render, screen, fireEvent } from "@testing-library/react";
import Peliculas from "../pages/Peliculas";
import { MemoryRouter } from "react-router-dom";

test("el buscador no encuentra una película inexistente", () => {
  // ARRANGE: renderizamos el componente con MemoryRouter
  render(
    <MemoryRouter>
      <Peliculas />
    </MemoryRouter>
  );

  // Buscamos el input del buscador por placeholder
  const searchInput = screen.getByPlaceholderText(/buscar películas/i);

  // ACT: escribimos una pelicula inexistente
  fireEvent.change(searchInput, { target: { value: "Iron Man" } });

  // ASSERT: comprobamos que aparece "No se encontraron películas con el término Iron Man"
  const resultado = screen.getByText("No se encontraron películas con el término `Iron Man`.");
  expect(resultado).toBeInTheDocument();
});

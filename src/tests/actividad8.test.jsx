import { render, screen, fireEvent } from "@testing-library/react";
import Peliculas from "../pages/Peliculas";
import { MemoryRouter } from "react-router-dom";

test("al clicar en una película se intenta navegar al detalle", () => {
  // ARRANGE: renderizamos con MemoryRouter y ruta inicial
  render(
    <MemoryRouter initialEntries={["/"]}>
      <Peliculas />
    </MemoryRouter>
  );

  // Buscamos una película por nombre (ejemplo: "El sexto sentido")
  const pelicula = screen.getByText("El sexto sentido");

  // ACT: simulamos clic en la película
  fireEvent.click(pelicula.closest("a")); // el <Link> envuelve el <List>

  // ASSERT: comprobamos que el enlace apunta a la ruta correcta
  const enlace = pelicula.closest("a");
  expect(enlace).toHaveAttribute("href", "/detalle/pelicula/1"); // id = 1 según tu data
});

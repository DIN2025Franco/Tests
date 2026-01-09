import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import Detail from "../components/Detail";

test("muestra la película 'El silencio de los corderos' según el parámetro de ruta", () => {
  render(
    <MemoryRouter initialEntries={["/detalle/pelicula/4"]}>
      <Routes>
        <Route path="/detalle/pelicula/:idPeli" element={<Detail />} />
      </Routes>
    </MemoryRouter>
  );

  expect(
    screen.getByRole("heading", { level: 1, name: /el silencio de los corderos/i })
  ).toBeInTheDocument();
});
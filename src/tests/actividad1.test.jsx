import { render, screen } from "@testing-library/react";
import List from "../components/List.jsx";

describe("Componente List", () => {
  test("muestra el nombre pasado por props", () => {
    render(
      <List
        nombre="Leonardo DiCaprio"
        foto="foto.jpg"
        esNota10={false}
      >
        Contenido de prueba
      </List>
    );

    expect(screen.getByText("Leonardo DiCaprio")).toBeInTheDocument();
  });

  test("muestra el título en rojo cuando esNota10 es true", () => {
    render(
      <List
        nombre="Leonardo DiCaprio"
        foto="foto.jpg"
        esNota10={true}
      >
        Contenido de prueba
      </List>
    );

    const heading = screen.getByRole("heading", {
      name: /Leonardo DiCaprio/i,
    });

    expect(heading).toHaveClass("text-red-600");
  });
});

import { render, screen } from "@testing-library/react";
import List from "../components/List.jsx";

describe("Componente List", () => {
  test("renderiza el contenido visible de children y la imagen con alt correcto", () => {
    const nombre = "Leonardo DiCaprio";
    const childrenText = "Biografía o clasificación del intérprete";

    render(
      <List nombre={nombre} foto="foto.jpg" esNota10={false}>
        {childrenText}
      </List>
    );

    // Seleccionamos solo el párrafo <p> donde se muestra el children
    const paragraph = screen.getByText(childrenText, { selector: 'p' });
    expect(paragraph).toBeInTheDocument();

    // Verificamos la imagen
    const img = screen.getByAltText(`Foto de ${nombre}`);
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "foto.jpg");
  });
});

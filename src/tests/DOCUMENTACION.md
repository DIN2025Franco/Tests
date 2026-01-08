# Informe de Testing - Juan Sebastian Franco
## Actividad 1
* **Reto:** Breve descripción de lo que se testea.
Se testea si el nombre que se pasa por los props se muestra de forma correcta, a la vez que comprueba cuando un actor tiene una nota de 10 si el titulo se muestra en rojo (600). 

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?
Comprueba que el componente List muestra correctamente el nombre pasado por props y que, si la película tiene una nota de 10, el título aparece en color rojo (clase text-red-600).

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.
Primero se renderiza el componente, luego se comprueba si es correcto el render.
getByRole - Busca que el rol exista (heading).
getByText - Busca texto en la pantalla.
toHaveClass - Busca que tenga el estilo pasado (text-red-600)

> ![exito](image.png)


# Informe de Testing - Juan Sebastian Franco
## Actividad 2
* **Reto:** Breve descripción de lo que se testea.
Se testea si el renderizado del componente List es correcto, paso seguido comprobamos sis el contenido renderiza de forma correcta el children y la imagen con su correspondiente texto alternativo.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?
Verifica que el componente List renderiza correctamente el contenido que se le pasa a través de children (recuerda que se usa para la clasificación o biografía) y comprueba que la imagen tiene el atributo alt correcto basado en el nombre del intérprete o de la película.

(Daba error por lo que pregunte lo siguiente):
Se genera un error ya que dice que hay elementos con el mismo resultado, como los separo del <p>?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.
Se renderiza List, luego se verifica si su renderizacion es correcta.
getByText - Busca texto en la pantalla.
getByAltText - Busca la imagen con el atributo alt.
toBeInTheDocument - Confirma si existen los componentes 
toHaveAttribute -Confirma si las propiedades son correctas.
selector - filtra el elemento solicitado.

> ![exito](image-1.png)


# Informe de Testing - Juan Sebastian Franco
## Actividad 3
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 4
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 5
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 6
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 7
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 8
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 9
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]


# Informe de Testing - Juan Sebastian Franco
## Actividad 10
* **Reto:** Breve descripción de lo que se testea.

* **Prompt IA:** ¿Qué le has preguntado a la IA para obtener el código?

* **Explicación del Test:** Breve explicación de cómo se testea, la
anatomía del Test (AAA); dónde puedes explicar, por ejemplo, qué hace el
selector getByRole o within, etc.

> [INSERTAR CAPTURA DE PANTALLA DE VITEST EN VERDE AQUÍ]
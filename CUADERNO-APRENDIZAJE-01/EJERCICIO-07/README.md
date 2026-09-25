# Ejercicio 07 - Feed de noticias

## Qué he aprendido
- Usar ScrollView para desplazar contenido que supera la altura de la pantalla.
- Definir una sola vez el diseño de una tarjeta en el componente NewsCard.
- Pasar datos distintos a cada tarjeta mediante las props category y title.
- Aplicar espacio al contenido desplazable mediante contentContainerStyle.

## Respuesta a la pregunta de comprensión
¿Qué parte debe cambiar entre una noticia y otra y qué parte debería permanecer igual?

Respuesta:
Debe cambiar el contenido de cada noticia, como el título y la categoría, que se pasan mediante props. La estructura visual y los estilos deben mantenerse iguales: tarjeta, orden de los textos, tamaños, colores y espacios. Así, una modificación en NewsCard se aplica a todas las noticias. En este ejemplo la fecha es un texto fijo; también podría convertirse en una prop si necesitáramos fechas distintas.

## Qué he modificado
- He añadido una cuarta noticia de la categoría DISEÑO con el título «Interfaces accesibles para todas las personas».
- He reutilizado NewsCard una cuarta vez sin duplicar su definición.
- He aplicado el padding horizontal y un padding inferior al contenido del ScrollView para dejar espacio al final de la lista.
- He oscurecido el gris de la fecha para mejorar su legibilidad.

## Resultado
El feed muestra cuatro tarjetas con categorías y títulos diferentes, pero con un diseño común. El contenido puede desplazarse cuando supera la altura disponible. Si todas las noticias caben en una pantalla grande, no es necesario desplazarse; se puede comprobar el ScrollView reduciendo la altura de la vista. Los titulares y la fecha «Hace 2 horas» son contenido de práctica y no proceden de una fuente de noticias en directo.

## Preguntas de repaso
- Un avatar circular necesita el mismo width y height, y un borderRadius igual a la mitad de esa medida.
- Extraer NewsCard evita duplicar la estructura visual y permite reutilizarla cambiando sus props.

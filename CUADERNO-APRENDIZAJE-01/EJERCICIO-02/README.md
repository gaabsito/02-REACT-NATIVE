# Ejercicio 02 - Tarjeta de bienvenida

## Qué he aprendido
- Crear una tarjeta con un View dentro del contenedor principal.
- Usar padding para dejar espacio dentro de la tarjeta y margin para separar elementos.
- Redondear las esquinas con borderRadius y aplicar colores con backgroundColor.
- Combinar estilos en un array: los estilos posteriores sobrescriben las propiedades anteriores que coinciden.

## Respuesta a la pregunta de comprensión
¿Por qué usarías `padding` en una tarjeta en lugar de `margin` para separar el texto del borde?

Respuesta:
Usaría padding porque crea espacio interior entre el borde de la tarjeta y su contenido. El margin aplicado a la tarjeta crea espacio fuera de ella, separándola de otros elementos, pero no separa su texto del borde. En este ejercicio, padding: 28 deja espacio dentro de cada tarjeta y marginTop: 24 separa la segunda tarjeta de la primera.

## Qué he modificado
- He conservado la tarjeta blanca original con un botón visual azul sobre un fondo gris claro.
- He añadido una segunda variante con fondo verde claro, textos verdes y botón verde oscuro.
- He reutilizado los estilos originales y añadido estilos específicos para cambiar la paleta de la segunda tarjeta.
- He separado las tarjetas con un margen superior de 24.

## Resultado
La pantalla muestra dos tarjetas con esquinas redondeadas, título, descripción y un botón visual COMENZAR. La primera utiliza la paleta original y la segunda una paleta verde. Los botones no ejecutan acciones, tal como permite el enunciado.

## Preguntas de repaso
- La propiedad que hace que el contenedor principal ocupe el espacio disponible es flex: 1.
- La propiedad que genera espacio entre el contenido y el borde de la tarjeta es padding.

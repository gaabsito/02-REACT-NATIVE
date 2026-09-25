# Ejercicio 05 - Tarjeta de producto

## Qué he aprendido
- Combinar Image, Text, View y Pressable en una tarjeta de producto.
- Recortar el contenido con overflow: 'hidden' para respetar las esquinas redondeadas.
- Colocar el precio y el botón en una fila con flexDirection: 'row'.
- Separarlos hacia los extremos con justifyContent: 'space-between' y alinearlos verticalmente con alignItems: 'center'.
- Establecer una jerarquía visual con tamaños, colores y negrita.

## Respuesta a la pregunta de comprensión
¿Qué información debería tener mayor jerarquía visual: categoría, nombre del producto o precio? Justifica tu decisión.

Respuesta:
Daría protagonismo al nombre del producto y al precio: el nombre permite identificar qué se vende y el precio ayuda a decidir si interesa comprarlo. En esta tarjeta el precio tiene un tamaño de 25 y el nombre de 24, ambos en negrita. La categoría es secundaria, por lo que aparece en tamaño 12. Así se puede identificar rápidamente el producto y cuánto cuesta sin que la categoría compita con ellos.

## Qué he modificado
- He añadido la etiqueta OFERTA antes del nombre del producto, conservando la categoría TECNOLOGÍA.
- He creado el estilo offer con fondo amarillo claro, texto oscuro, espacio interior y esquinas redondeadas.
- He aplicado alignSelf: 'flex-start' a la etiqueta para que no ocupe todo el ancho de la tarjeta.
- He añadido una descripción accesible a la imagen y el rol de botón al Pressable.

## Resultado
La tarjeta tiene una imagen superior a todo el ancho y esquinas redondeadas. Debajo aparecen la categoría, la etiqueta OFERTA, el nombre y la valoración. En la fila inferior, el precio queda a la izquierda y el botón AÑADIR a la derecha. El botón es visual y no añade productos a un carrito.

Se conserva la URL de Picsum del ejemplo del cuaderno: muestra una foto de relleno aleatoria, no necesariamente unos auriculares, y requiere conexión a Internet. El producto, la valoración y el precio son datos de práctica.

## Preguntas de repaso
- flexDirection: 'row' distribuye los hijos de un View en horizontal.
- overflow: 'hidden' recorta el contenido que sobresale de los límites redondeados de la tarjeta.

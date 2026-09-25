# Ejercicio 06 - Dashboard de métricas

## Qué he aprendido
- Crear una cuadrícula de dos columnas con Flexbox.
- Usar flexDirection: 'row' para distribuir tarjetas horizontalmente y flexWrap: 'wrap' para permitir nuevas filas.
- Dar a cada tarjeta un ancho del 48%.
- Reutilizar el componente Metric y cambiar su título, valor y variación mediante props.
- Destacar los valores con tamaño y negrita, y las variaciones positivas con verde y el signo +.

## Respuesta a la pregunta de comprensión
¿Por qué un ancho del 48% puede ser más práctico que 50% cuando además existe separación entre tarjetas?

Respuesta:
Dos tarjetas del 50% ocupan el 100% del ancho. Si añadimos separación horizontal, el conjunto supera el espacio disponible y una tarjeta puede saltar de fila. Dos tarjetas del 48% ocupan el 96%, dejando un 4% libre para separarlas. Ese espacio debe ser suficiente para la separación elegida: un gap fijo de 12 no cabe si el contenedor mide menos de 300. En mi versión uso space-between para repartir el espacio sobrante entre columnas y rowGap: 12 para separar las filas.

## Qué he modificado
- He añadido una quinta tarjeta, Tickets, con valor 86 como en el preview y una variación de ejemplo de +5%.
- He sustituido gap: 12 por rowGap: 12 y justifyContent: 'space-between', conservando width: '48%', para mantener las dos columnas también en pantallas estrechas.
- He utilizado un verde más oscuro para mejorar la legibilidad de las variaciones positivas.

## Resultado
El panel muestra Ventas, Clientes, Pedidos y Conversión en dos filas de dos tarjetas. Tickets aparece a la izquierda de una tercera fila y conserva el mismo ancho. La quinta tarjeta pasa a otra fila porque las anteriores ya ocupan las dos primeras y flexWrap permite continuar en una línea nueva. Una única tarjeta en una fila con space-between se mantiene al principio del eje horizontal. Los valores son datos de práctica, no métricas de un negocio real.

## Preguntas de repaso
- space-between reparte el espacio disponible entre los elementos y sitúa los extremos en los bordes de la fila.
- flexWrap: 'wrap' permite que los elementos pasen a una línea nueva cuando no caben.

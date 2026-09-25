# Ejercicio 08 - Catálogo con FlatList

## Qué he aprendido
- Separar los datos de los productos y su presentación.
- Guardar los productos en un array fuera del componente App.
- Pasar la colección a FlatList mediante data.
- Definir una sola estructura de tarjeta con renderItem.
- Identificar los productos con keyExtractor y un id único y estable.
- Crear dos columnas con numColumns={2}.

## Respuesta a la pregunta de comprensión
¿Qué ventaja tiene cambiar un producto en el array en lugar de buscar su tarjeta manualmente dentro del JSX?

Respuesta:
Los datos están reunidos en un único lugar. Puedo cambiar el nombre, el icono o el precio de un producto sin modificar el diseño de la tarjeta. FlatList usa esos datos para dibujar cada elemento con el mismo renderItem. Así reduzco la duplicación y el riesgo de que unas tarjetas tengan una estructura distinta. También puedo añadir productos al array sin escribir una tarjeta nueva en JSX.

## Qué he modificado
- He añadido Cámara, con id 7 y precio de ejemplo de 249 €, y Mando, con id 8 y precio de ejemplo de 49 €.
- He mantenido un único renderItem: no he creado JSX adicional para los productos nuevos.
- He añadido padding inferior al contenido de la lista para dejar espacio después de la última fila.

## Resultado
El catálogo contiene ocho productos distribuidos en dos columnas y cuatro filas. Cada tarjeta muestra icono, nombre y precio. Los dos productos añadidos aparecen en la última fila. FlatList permite desplazarse cuando las filas superan la altura disponible. Los precios son datos de práctica.

## Preguntas de repaso
- Un componente reutilizable evita repetir el mismo diseño y permite cambiar su contenido mediante props.
- data contiene la colección que muestra FlatList.
- renderItem define cómo se representa cada elemento y keyExtractor obtiene su clave estable.

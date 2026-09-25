# Ejercicio 03 - Ficha de perfil

## Qué he aprendido
- Mostrar una imagen remota con Image y source={{ uri: '...' }}.
- Definir width y height para dar dimensiones a la imagen.
- Crear un avatar circular con dimensiones de 110 por 110 y borderRadius: 55.
- Colocar elementos en horizontal con flexDirection: 'row' y separarlos con gap.

## Respuesta a la pregunta de comprensión
Si quieres que dos estadísticas aparezcan una al lado de otra, ¿en qué View aplicarías `flexDirection: 'row'` y por qué?

Respuesta:
Lo aplicaría al View que contiene todos los bloques de estadísticas, en este caso styles.stats. Esta propiedad organiza los hijos directos de ese contenedor en una fila. Cada bloque conserva su disposición vertical para mostrar el número encima de la etiqueta. Si aplicara row a cada bloque individual, colocaría el número junto a su etiqueta, en lugar de colocar las estadísticas unas al lado de otras.

## Qué he modificado
- He añadido Contactos con el valor 86 como tercera estadística, siguiendo el preview del cuaderno.
- He mantenido Proyectos 24 y Seguidores 1280 del ejemplo original.
- He ajustado gap a 12 y aplicado flex: 1 a cada bloque para repartir el ancho disponible entre las tres estadísticas.
- He añadido una descripción accesible al avatar y centrado los textos que puedan ocupar varias líneas.

El reto escrito repite Seguidores 1280, que ya aparece en el código original. He seguido el preview para mostrar tres estadísticas diferentes.

## Resultado
La ficha muestra un avatar circular, el nombre Laura Martínez y la profesión Diseñadora UX/UI. Debajo aparecen las tres estadísticas en una fila. Se conserva la tarjeta blanca con esquinas redondeadas sobre un fondo claro. Son datos de ejemplo del cuaderno; la imagen procede de su servicio de avatares y necesita conexión a Internet.

## Preguntas de repaso
- padding crea espacio interior; margin crea espacio exterior.
- flexDirection: 'row' cambia la distribución de los hijos a horizontal.

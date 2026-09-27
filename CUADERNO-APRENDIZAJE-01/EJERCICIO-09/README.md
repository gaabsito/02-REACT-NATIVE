# Ejercicio 09 - Interfaz bancaria

## Qué he aprendido
- Construir una pantalla mediante composición de tarjetas, filas y componentes reutilizables.
- Reutilizar Movement pasando título, fecha e importe mediante props.
- Definir el tipo MovementProps para describir los datos del componente.
- Usar flex: 1 en la información del movimiento para dejar el importe a la derecha.
- Diferenciar los ingresos mediante el signo + y un color verde legible.

## Respuesta a la pregunta de comprensión
¿Qué partes de esta pantalla convertirías en componentes y cuáles dejarías directamente en App? Justifica.

Respuesta:
Convertiría los movimientos en Movement porque repiten el mismo diseño con distintos títulos, fechas e importes. También usaría QuickAction para las tres acciones rápidas, que comparten estructura y estilos. Dejaría el saludo, el encabezado y la tarjeta de saldo directamente en App porque solo aparecen una vez y son sencillos. Si la tarjeta de saldo se reutilizara en otras pantallas, también la extraería a un componente.

## Qué he modificado
- He añadido las tres acciones rápidas Enviar, Recibir y Tarjetas en una fila. El enunciado las pide, aunque no aparecen en el código de ejemplo.
- He creado QuickAction para compartir su diseño.
- He añadido el movimiento positivo Devolución, de +25,00 €, reutilizando Movement sin crear una estructura alternativa.
- He aplicado un estilo verde a los importes que empiezan por +, conservando el mismo JSX y las mismas props para todos los movimientos.
- He añadido separación entre información e importe y espacio al final del contenido desplazable.

## Resultado
La pantalla muestra el saludo, el nombre Laura, una tarjeta destacada de saldo, tres acciones rápidas y cinco movimientos. Los ingresos se distinguen por el color y el signo +. ScrollView permite acceder al contenido que no cabe en la pantalla. Todos los datos bancarios son ficticios y las acciones son solo visuales: no realizan operaciones ni están conectadas a un banco.

## Preguntas de repaso
- Las props pasan al componente datos como título, fecha, importe, icono o etiqueta.
- Un único Movement con distintas props es más mantenible que copiar el diseño completo para cada movimiento.

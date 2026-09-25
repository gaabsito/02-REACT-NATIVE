# Ejercicio 01 - Mi primera pantalla

## Qué he aprendido
- Usar View como contenedor y Text para mostrar texto.
- Organizar los estilos con StyleSheet.create y aplicarlos con la propiedad style.
- Hacer que el contenedor ocupe el espacio disponible con flex: 1.
- Centrar los elementos con justifyContent y alignItems.
- Diferenciar el título del subtítulo mediante el tamaño y la negrita.

## Respuesta a la pregunta de comprensión
Explica con tus palabras la diferencia entre el componente `View` y el componente `Text`.

Respuesta:
View es un contenedor que agrupa y organiza otros componentes. Text sirve para mostrar texto. En este ejercicio, el View contiene tres componentes Text: uno para el título, otro para el subtítulo y otro para el curso. Los estilos del View controlan la distribución del conjunto, mientras que los estilos de cada Text controlan su aspecto.

## Qué he modificado
- He añadido una tercera línea con el texto «Curso 2026/27», como pide el reto.
- He creado el estilo course con tamaño 14, color gris y un margen superior de 8.
- He mantenido las tres líneas dentro del mismo View para conservar el centrado.

## Resultado
La pantalla tiene un fondo claro y tres líneas centradas horizontal y verticalmente. «React Native» destaca con tamaño 30 y negrita. Debajo aparece «Mi primera pantalla» en gris y tamaño 16, seguido de «Curso 2026/27» en tamaño 14.

## Preguntas de repaso
**¿Qué dos propiedades centran los hijos del View en ambos ejes?**
justifyContent: 'center' y alignItems: 'center'. Como la dirección por defecto es vertical, justifyContent centra verticalmente y alignItems horizontalmente.

**¿Qué consigue flex: 1 en el contenedor principal?**
Hace que el contenedor ocupe el espacio disponible. El centrado se consigue con las otras dos propiedades.

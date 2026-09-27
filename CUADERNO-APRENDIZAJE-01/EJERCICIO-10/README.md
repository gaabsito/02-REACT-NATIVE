# Ejercicio 10 - Proyecto final: Fitness

## Qué he aprendido
- Dividir una pantalla en bloques: saludo, objetivo diario, métricas y actividades.
- Combinar ScrollView, Flexbox, StyleSheet y componentes reutilizables.
- Dibujar una barra de progreso con dos View y una anchura porcentual.
- Mantener una jerarquía visual con tamaños, colores y espacios coherentes.

## Respuesta a la pregunta de comprensión
¿Qué decisiones visuales has tomado por tu cuenta y qué conceptos de ejercicios anteriores has recuperado?

Respuesta:
He elegido una paleta violeta con un progreso amarillo, un fondo claro y tarjetas blancas. El número de pasos es el texto más grande para destacar el objetivo principal. He cambiado las actividades a una fila con icono a la izquierda, descripción en el centro y duración a la derecha. Recupero la jerarquía de textos del ejercicio 1, las tarjetas del 2, Flexbox y la distribución en filas, los componentes reutilizables y el grid del 6, y ScrollView del 7.

## Qué he modificado
- Saludo, nombre y títulos personalizados para Gabriel.
- Paleta violeta y amarillo en lugar del ejemplo gris y verde.
- Métricas: 610 kcal, 55 minutos, 69 lpm y 6,3 km, con unidades visibles.
- Nueva distribución horizontal de actividades y una tercera actividad.
- Progreso calculado a partir de 7.540 pasos sobre 10.000: redondeado al 75%, coherente con el checkpoint del cuaderno.
- Grid con dos tarjetas del 48%, space-between y separación vertical, evitando que una separación horizontal fija impida formar dos columnas en móviles estrechos.
- Espacio inferior para poder leer la última actividad al desplazar la pantalla.

## Resultado
Dashboard fitness con saludo, objetivo diario, barra visual del 75%, cuatro métricas en dos columnas y tres actividades recientes. StatCard y Activity se reutilizan mediante props. Todo utiliza componentes de React Native, sin librerías externas nuevas. Los datos son de demostración; no hay sensores ni seguimiento real.

## Preguntas de repaso
- ¿Qué tres herramientas organizan la interfaz? Flexbox, componentes reutilizables y ScrollView.
- ¿Qué enfoque muestra mejor lo aprendido? Dividir la interfaz en bloques, resolver cada uno y reutilizar componentes.
- ¿Cómo funciona la barra? La View exterior dibuja el fondo y la interior ocupa el porcentaje calculado.

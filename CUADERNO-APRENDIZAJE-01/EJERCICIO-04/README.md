# Ejercicio 04 - Pantalla de acceso

## Qué he aprendido
- Crear campos de entrada con TextInput y mostrar una ayuda inicial con placeholder.
- Ocultar visualmente los caracteres de una contraseña con secureTextEntry.
- Diseñar una zona pulsable con Pressable.
- Diferenciar el diseño de una interfaz de la lógica que procesa sus datos.

## Respuesta a la pregunta de comprensión
¿Por qué en este ejercicio no necesitamos todavía `useState`?

Respuesta:
Porque estamos trabajando el diseño del formulario. No necesitamos guardar sus valores en el estado de React, validarlos ni enviarlos. Los TextInput permiten escribir sin que controlemos su valor con useState. El botón solo representa la zona de acceso: todavía no tiene una acción onPress ni inicia sesión.

## Qué he modificado
- He incluido debajo del botón el texto centrado «¿No tienes cuenta? Regístrate», solicitado en el reto. El ejemplo completo de la web ya lo incluye, por lo que no es necesario duplicarlo.
- He configurado el campo de correo con teclado de correo y sin mayúsculas automáticas ni autocorrección.
- He añadido nombres accesibles a los campos y el rol de botón al Pressable.
- He conservado el mismo estilo en los dos campos, el fondo blanco y el botón azul.

## Resultado
La pantalla muestra un título, una introducción, un campo de correo y otro de contraseña. Debajo aparece el botón INICIAR SESIÓN y el texto de registro centrado. La contraseña se muestra oculta. No se utilizan useState, validaciones ni envío de datos; tampoco hay navegación de registro.

## Preguntas de repaso
- borderRadius permite redondear las esquinas.
- secureTextEntry oculta visualmente la contraseña; no implementa por sí solo un sistema de autenticación.

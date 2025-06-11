# INDIC BLUEPRINTS

Este proyecto está planteado como una herramienta auxiliar para la redacción de correos y documentación, incluyendo plantillas de texto que sirvan como base flexible para el contexto adecuado.

## Contexto del proyecto

El equipo de administración nos enfrentábamos a una dificultad común: sin un modelo estandarizado, ¿cómo mantener un sistema común para la redacción de correos o documentación?. Aunque hubo un intento de unificación de criterios, el sistema mediante blocs de notas quedó pronto obsoleto. Hacía falta una fuente común y estandarizada.

*Indic-blueprints* nació como una solución interna ligera para centralizar fragmentos reutilizables de texto que pudieran adaptarse rápidamente a distintos contextos, manteniendo la coherencia en la comunicación y agilizando el trabajo diario.

## Objetivos del proyecto

- Reutilización rápida de contenido textual.
- Estandarización de forma y tono.
- Interfaz limpia, Desktop-first, sin sobrecarga de funcionalidades.
- Filtrado de categorías intuitivo y accesible.

## Tecnologías

| Ámbito    | tech-stack                    |
| --------- | ----------------------------- |
| Cliente   | Next.js                       |
| Estilado  | Tailwind, Shadcn, react-icons |
| Almacenamiento de datos | Archivos .json  |

## Decisiones técnicas

**¿Por qué `Next.js`, `Tailwind` y `Shadcn`?**

`Next.js` fue elegido por su simplicidad en el enrutamiento de páginas, ideal para añadir más rutas o una API interna si se decide escalar la herramienta. En cuanto al estilado, opté por Tailwind y Shadcn para mantener consistencia visual sin invertir tiempo en un diseño desde cero.

**¿Por qué utilizar archivos `.json` en lugar de una base de datos?**

La cantidad de datos que se maneja no justifica la implementación de una base de datos ni una `API`. En cambio, se ha optado por archivos `.json`, que permiten gestionar el contenido sin depender de una arquitectura cliente-servidor completa, facilitando cambios rápidos en una fase temprana del desarrollo. No obstante, la estructura ha sido pensada para permitir una migración fluida a una base de datos en caso de ser necesario en el futuro.

**Responsividad en versiones móviles. ¿Por qué?**

*Indic-blueprints* está diseñado principalmente para entorno de escritorio, donde se da el mayor uso. La versión móvil no ha sido priorizada, aunque está prevista su implementación futura si el proyecto crece en alcance o funcionalidades.

## Posibles futuras features

- Filtrado dinámico por palabras clave: permitiría al usuario encontrar la plantilla adecuada buscando términos específicos sin depender únicamente de categorías predefinidas.
- Panel de admin para editar plantillas: pensado para facilitar la gestión del contenido sin modificar archivos directamente.

## Valor y aprendizaje

Este proyecto me ha permitido profundizar en conceptos como la priorización de objetivos y *features* ante una necesidad real. Aunque fue levantado en una noche como ejercicio de MVP funcional, se desarrolló desde un inicio con el objetivo de facilitar la escalabilidad, la separación de componentes y su reutilización. Gracias a ello, está preparado para la adición de nuevas rutas con diferente tipo de información, como por ejemplo la ruta `/comentaris`, que se añadió tras el MVP original durante la primera semana de desarrollo.

La experiencia ha supuesto un reto de síntesis técnica y organizativa, y ha servido como base para introducir mejoras en el flujo de trabajo con impacto directo en el día a día del equipo.

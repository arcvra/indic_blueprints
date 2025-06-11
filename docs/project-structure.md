# Estructura del proyecto

Este proyecto está organizado para separar claramente los componentes de UI, la lógica de negocio y los datos, manteniendo un flujo "en cascada" de la información. A continuación se describe la estructura principal, los componentes y sus relaciones.

## Estructura de carpetas

```text
client/
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── comentaris/
│   │   └── page.js
│   ├── data/
│   │   ├── comments.json
│   │   └── templates.json
│   ├── features/
│   │   └── RenderCards.jsx
│   ├── layout/
│   │   ├── Aside.jsx
│   │   ├── Footer.jsx
│   │   └── Header.jsx
│   └── styles/
│       └── article.module.css
│
├── components/
│   ├── CustomBadge.jsx
│   ├── CustomButton.jsx
│   ├── CustomInput.jsx
│   ├── CustomTabs.jsx
│   ├── CustomTooltip.jsx
│   └── ui/
│       ├── badge.jsx
│       ├── button.jsx
│       ├── input.jsx
│       ├── separator.jsx
│       ├── tabs.jsx
│       └── tooltip.jsx
│
├── lib/
│   └── utils.js
│
├── public/
│
└── utils/
    ├── filterByCategory.js
    └── getTabsByFile.js
```

## Directorios clave

- **app/**: Contiene la estructura principal de la aplicación, páginas, layouts y estilos globales.
- **components/**: Componentes reutilizables personalizados y genéricos de UI.
- **lib/**: Funciones utilitarias generales.
- **public/**: Archivos estáticos (imágenes, íconos).
- **utils/**: Funciones utilitarias específicas para filtrado y organización de datos.

> **styles/**: Contiene estilos CSS locales de una sección específica: `article.module.css` aplica un efecto de iluminación suave al fondo de cada tarjeta y una animación sutil al hacer *hover*, añadiendo dinamismo sin sobrecargar visualmente la interfaz.

## Relaciones entre componentes

- Los datos de `app/data/` se consumen en componentes como `RenderCards.jsx` y páginas como `app/page.js` y `comentaris/page.js`.
- Los componentes de `components/ui/` y los personalizados (`Custom*`) se utilizan en las páginas y features para construir la interfaz.
- Las utilidades de `utils/` y `lib/` ayudan a filtrar y organizar los datos antes de mostrarlos en la UI.
- El componente `CustomTabs.jsx` es clave para el montaje dinámico de secciones y categorías, ya que organiza y renderiza los datos en pestañas interactivas, permitiendo mostrar diferentes vistas o categorías de información de forma ordenada y accesible. Además, utiliza utilidades como `getTabsByFile` y `filterByCategory` para estructurar y filtrar el contenido mostrado en cada tab.
- El layout general (`app/layout/`) se aplica a todas las páginas para mantener una estructura consistente (header, footer).

> Si bien en un inicio el layout estaba pensado para incluir un aside (`app/layout/aside`), este nunca fue implementado.

## Flujo de datos

La lógica de negocio del proyecto se basa en la manipulación, organización y visualización dinámica de datos a través de componentes reutilizables y utilidades especializadas. El flujo general es el siguiente:

1. **Carga y estructuración de datos**: Los datos (por ejemplo, plantillas o comentarios) se almacenan en archivos JSON dentro de `app/data/` y se cargan en los componentes principales de la aplicación.

2. **Filtrado y categorización**: Utilidades como `filterByCategory.js` y `getTabsByFile.js` permiten filtrar los datos por categorías o etiquetas, y definir la estructura de pestañas (tabs) que se mostrarán en la interfaz.

3. **Montaje dinámico de la interfaz**: El componente `CustomTabs.jsx` es fundamental en este proceso, ya que recibe el tipo de datos y los organiza en pestañas interactivas. Cada pestaña muestra una vista filtrada de los datos, permitiendo al usuario navegar entre diferentes categorías o secciones de información de manera intuitiva.

4. **Renderizado de contenido**: Dentro de cada pestaña, el componente `RenderCards.jsx` (a través de `MapItems`) se encarga de renderizar tarjetas individuales para cada elemento de datos, mostrando su contenido y etiquetas asociadas. Esto permite una presentación clara y ordenada de la información.

5. **Interactividad y experiencia de usuario**: Componentes como `CustomTooltip` y `CustomBadge` añaden funcionalidades adicionales (por ejemplo, copiar contenido, mostrar categorías), mejorando la experiencia de usuario.

En resumen, la lógica de negocio sigue el flujo: cargar datos → filtrar y organizar según categorías → montar la interfaz dinámica con tabs → renderizar tarjetas de contenido → añadir interactividad.

### Visualización en cascada de la lógica de negocio

```text
app/data/*.json (datos)
   │
   ▼
utils/getTabsByFile.js ──┐
utils/filterByCategory.js│
   │                     │
   └─────────────┬───────┘
                 ▼
         components/CustomTabs.jsx
                 │
                 ▼
         features/RenderCards.jsx (MapItems)
                 │
                 ▼
         components/CustomBadge.jsx, CustomTooltip.jsx
```

**Explicación:**

- Los datos se cargan desde archivos JSON.
- Las utilidades filtran y estructuran la información según categorías o pestañas.
- `CustomTabs.jsx` organiza la visualización en tabs y delega el renderizado de cada sección a `RenderCards.jsx`.
- `RenderCards.jsx`, mediante su función interna `MapItems` muestra cada elemento como una tarjeta, usando componentes como `CustomBadge` y `CustomTooltip` para enriquecer la experiencia de usuario.

Esta arquitectura facilita la escalabilidad y el mantenimiento, permitiendo agregar nuevas categorías, tipos de datos o funcionalidades sin afectar el resto del sistema.

---

Esta estructura permite un desarrollo escalable, reutilizable y fácil de mantener.

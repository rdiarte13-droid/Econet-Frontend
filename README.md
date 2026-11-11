# EcoNet

EcoNet es una aplicación web hecha con React y Vite para presentar iniciativas ambientales y conectar comunidades.

## Requisitos

- Node.js y npm instalados.

## Instalación y ejecución

Abrí una terminal en la carpeta `EcoNet` y ejecutá:

```bash
npm install
npm run dev
```

Vite mostrará en la terminal la dirección local para abrir la aplicación en el navegador.

## Rutas

- `/`: página principal con las secciones de inicio, información, proyectos, comunidades y contacto.
- `/comunidades`: listado de comunidades con un formulario para agregar y eliminar tarjetas. Los cambios se guardan en el estado de la página y no persisten al recargar.
- `/foro`: página informativa del foro EcoNet.

## Tecnologías

- React
- Vite
- React Bootstrap y Bootstrap
- React Router DOM


## Comandos disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la versión de producción en dist/
npm run preview  # Previsualiza la versión de producción
```

## Estructura principal

```text
src/
├── Pages/        # Páginas asociadas a las rutas
├── components/   # Secciones y componentes reutilizables
├── app.jsx       # Rutas y composición de la aplicación
└── main.js       # Punto de entrada de React y React Router
```

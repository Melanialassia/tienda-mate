# Tienda de Mate

Sitio web de e-commerce para una tienda de mate argentina. Proyecto grupal (TPO) desarrollado con Next.js, React y TypeScript.

## Stack tecnológico

| Tecnología | Uso |
|---|---|
| Next.js 16 | Framework principal (App Router) |
| React 19 | UI |
| TypeScript | Tipado estático |
| Tailwind CSS v4 | Estilos |
| shadcn/ui | Componentes base |
| Zustand | Estado global (filtros) |
| Zod | Validación de formularios |

## Páginas

| Ruta | Descripción |
|---|---|
| `/` | Home con hero, beneficios y productos destacados |
| `/tienda` | Catálogo de productos con filtros por categoría |
| `/menu-tienda` | Menú de la tienda física |
| `/tutoriales` | Tutoriales sobre el mate |
| `/franquicias` | Información para abrir una franquicia |
| `/trabaja-con-nosotros` | Formulario de postulación laboral |
| `/contacto` | Formulario de contacto |

## Estructura del proyecto

```
src/
├── app/              # Rutas (App Router de Next.js)
├── components/
│   ├── atoms/        # Componentes mínimos (botón, título, etc.)
│   ├── molecules/    # Combinaciones de átomos (cards, etc.)
│   ├── organisms/    # Secciones completas (hero, navbar, etc.)
│   ├── templates/    # Layouts de página
│   ├── pages/        # Componentes de página completa
│   └── ui/           # Componentes de shadcn/ui
├── constants/        # Datos estáticos (productos, menú, etc.)
├── interfaces/       # Interfaces TypeScript
├── types/            # Tipos TypeScript
├── store/            # Estado global con Zustand
├── hooks/            # Custom hooks
└── lib/              # Utilidades
```

## Instalación y uso

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build de producción
npm run build

# Iniciar en producción
npm start

# Linter
npm run lint
```

El servidor de desarrollo corre en [http://localhost:3000](http://localhost:3000).

## Decisiones de arquitectura

- **Atomic Design**: los componentes siguen la jerarquía átomos → moléculas → organismos → templates → páginas.
- **Datos estáticos**: los productos, menú y tutoriales se definen en `/src/constants` (sin base de datos por ahora).
- **Estado global**: Zustand maneja los filtros de categoría en las páginas de tienda, menú y tutoriales.
- **Validación**: Zod se usa en los formularios de contacto, franquicias y trabajá con nosotros.

## Equipo de Desarrollo

| Desarrollador | Rol | GitHub |
|---|---|---|
| Alexis Lopez | Frontend Developer | [@alesl10](https://github.com/alesl10) |
| Melani Alassia | Frontend Developer | [@Melanialassia](https://github.com/Melanialassia) |

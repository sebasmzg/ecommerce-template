# 🛍️ PT Éxito - E-commerce Platform

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-15.4.1-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/SASS-1.89.2-pink?style=for-the-badge&logo=sass" alt="SASS" />
  <img src="https://img.shields.io/badge/Zustand-4.4.7-orange?style=for-the-badge" alt="Zustand" />
</div>

---

## 📋 Sobre el Proyecto

**PT Éxito** es una plataforma de e-commerce moderna y responsive desarrollada como parte de la **Prueba Técnica para Grupo Éxito**. El proyecto implementa las mejores prácticas de desarrollo frontend con un enfoque en la experiencia del usuario, performance y escalabilidad.

---

## ✨ Características Principales

### 🛒 **E-commerce Completo**
- Catálogo de productos dinámico
- Carrito de compras funcional
- Proceso de checkout completo
- Gestión de estado persistente

### 🎨 **Diseño Moderno**
- Interfaz responsive y adaptativa
- Componentes reutilizables (Atomic Design)
- Paleta de colores coherente
- Animaciones suaves y micro-interacciones

### 🔧 **Funcionalidades Avanzadas**
- Búsqueda de productos en tiempo real
- Filtros y categorización
- Formularios validados con Zod
- Estados de carga y error
- Navegación intuitiva con breadcrumbs

### 📱 **Experiencia Mobile-First**
- Diseño completamente responsive
- Optimizado para dispositivos móviles
- Navegación táctil mejorada
- Performance optimizada

---

## 🏗️ Arquitectura del Proyecto

### 📁 Estructura de Carpetas
```
src/
├── app/                          # App Router (Next.js 15)
│   ├── (main)/                   # Rutas principales
│   │   ├── products/             # Catálogo de productos
│   │   ├── cart/                 # Carrito de compras
│   │   └── checkout/             # Proceso de compra
│   ├── core/                     # Lógica de negocio
│   │   └── application/          # DTOs, modelos, enums
│   ├── infrastructure/           # Servicios y hooks
│   │   ├── hooks/                # Custom hooks
│   │   ├── services/             # APIs y servicios
│   │   └── utils/                # Utilidades
│   └── lib/                      # Configuraciones y validaciones
├── components/                   # Componentes UI (Atomic Design)
│   ├── atoms/                    # Componentes básicos
│   ├── molecules/                # Componentes compuestos
│   └── organisms/                # Componentes complejos
├── store/                        # Estado global (Zustand)
└── styles/                       # Estilos globales y variables
```

### 🧱 **Atomic Design Pattern**
- **Atoms**: Button, Input, Label, etc.
- **Molecules**: ProductCard, NavBar, FormField, etc.
- **Organisms**: Header, Footer, ProductDetail, etc.
- **Templates**: Layouts y páginas completas

---

## 🚀 Tecnologías Implementadas

### **Frontend Core**
- **Next.js 15.4.1** - Framework React con App Router
- **React 18.2.0** - Biblioteca para interfaces de usuario
- **TypeScript 5** - Tipado estático para JavaScript

### **Gestión de Estado**
- **Zustand 4.4.7** - Estado global ligero y simple
- **React Hook Form 7.49.3** - Manejo eficiente de formularios
- **Zod 3.22.4** - Validación de esquemas TypeScript-first

### **Estilos y UI**
- **SASS 1.89.2** - Preprocesador CSS con variables y mixins
- **CSS Modules** - Estilos encapsulados por componente
- **Responsive Design** - Mobile-first approach

### **Herramientas de Desarrollo**
- **@hookform/resolvers** - Integración Zod con React Hook Form
- **next-auth** - Autenticación (preparado para futura implementación)

---

## 🎨 Paleta de Colores

La aplicación utiliza una paleta de colores moderna y profesional:

```scss
// Colores principales
$primary: #4682A9    // Azul oscuro
$secondary: #749BC2  // Azul medio  
$accent: #91C8E4     // Azul claro
$background: #F4F6F8 // Fondo principal
$surface: #FFFFFF    // Superficies

// Estados
$success: #10B981    // Verde éxito
$error: #EF4444      // Rojo error
$warning: #F59E0B    // Amarillo advertencia
```

---

## 🚀 Instalación y Configuración

### **Prerrequisitos**
- Node.js 18 o superior
- npm, yarn o pnpm

### **Instalación**
```bash
# Clonar el repositorio
git clone [URL_DEL_REPOSITORIO]
cd pt-exito

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

### **Scripts Disponibles**
```bash
npm run dev    # Servidor de desarrollo
npm run build  # Build de producción
npm run start  # Servidor de producción
```

---

## 📱 Funcionalidades Implementadas

### 🏠 **Página Principal**
- Hero section con call-to-actions
- Productos destacados
- Banner de características
- Footer completo con newsletter

### 🛍️ **Catálogo de Productos**
- Grid responsive de productos
- Búsqueda en tiempo real
- Estados de carga y vacío
- Navegación con breadcrumbs

### 🛒 **Carrito de Compras**
- Gestión de cantidades
- Cálculo automático de totales
- Persistencia en localStorage
- Validaciones de stock

### 💳 **Proceso de Checkout**
- Formulario multi-paso
- Validaciones en tiempo real
- Resumen de pedido
- Estados de carga y error

### 📄 **Detalle de Producto**
- Información completa del producto
- Sistema de ratings y reseñas
- Botones de acción dinámicos
- Recomendaciones relacionadas

---

## 🎯 Decisiones Técnicas

### **¿Por qué estas tecnologías?**

1. **Next.js 15** - App Router para mejor performance y SEO
2. **Zustand** - Estado global simple sin boilerplate excesivo
3. **React Hook Form + Zod** - Formularios performantes con validación robusta
4. **SASS** - Mejor organización de estilos con variables y mixins
5. **Atomic Design** - Componentes reutilizables y mantenibles

### **Patrones Implementados**
- Custom Hooks para lógica reutilizable
- Error Boundaries para manejo de errores
- Loading States consistentes
- Type-safe APIs con TypeScript
- Responsive Design con Mobile-First

---

## 📊 Performance y Optimización

- ⚡ **Code Splitting** automático con Next.js
- 🖼️ **Optimización de imágenes** con Next.js Image
- 📦 **Bundle size optimizado** con tree-shaking
- 🎯 **SEO optimizado** con meta tags dinámicos
- 📱 **Performance móvil** optimizado

---

## 🧪 Testing y Calidad

### **Estándares de Código**
- TypeScript strict mode habilitado
- Componentes funcionales con hooks
- Props interfaces bien definidas
- Nomenclatura consistente

### **Estructura de Componentes**
- Props tipadas con interfaces
- Estados locales con useState/useReducer
- Efectos secundarios con useEffect
- Memoización cuando es necesario


---

## 👨‍💻 Desarrollado por

**Jorge Sebastian Muñoz**  
*Frontend Developer*

- Desarrollado para la prueba técnica de **Grupo Éxito**
- Implementación completa de e-commerce moderno
- Enfoque en mejores prácticas y performance

---

## 📝 Licencia

Este proyecto fue desarrollado como parte de una prueba técnica para Grupo Éxito.

---

<div align="center">
  <p><strong>Desarrollado con ❤️ para Grupo Éxito</strong></p>
  <p><em>Prueba Técnica - Frontend Developer</em></p>
</div>
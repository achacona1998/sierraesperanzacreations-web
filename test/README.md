# 🧪 Test Suite - Sierra Esperanza Creations

Este directorio contiene la suite completa de tests para el proyecto Sierra Esperanza Creations Web. Los tests están organizados por categorías y utilizan **Vitest** como framework de testing principal junto con **React Testing Library**.

## 📁 Estructura del Directorio

```
src/test/
├── README.md                    # Este archivo
├── setup.js                    # Configuración global de tests
├── App.test.jsx                # Tests del componente principal
├── constants/                  # Tests de constantes y datos
│   └── items.test.js           # Validación de arrays de datos
├── integration/                # Tests de integración
│   └── UserInteractions.test.jsx # Tests de interacciones de usuario
├── sections/                   # Tests de componentes de sección
│   ├── Contact.test.jsx        # Tests de ContactSection
│   ├── Hero.test.jsx           # Tests de HeroSection
│   └── ReactSection.test.jsx   # Tests de ReactSection
└── utils/                      # Tests de utilidades
    └── CodeComponents.test.jsx # Tests de componentes Three.js
```

## 🛠️ Tecnologías Utilizadas

- **Vitest** - Framework de testing rápido y moderno
- **React Testing Library** - Testing de componentes React
- **jsdom** - Simulación del DOM para tests
- **@testing-library/user-event** - Simulación de eventos de usuario
- **@testing-library/jest-dom** - Matchers adicionales para DOM

## 🚀 Comandos de Testing

### Ejecutar Tests

```bash
# Modo interactivo (recomendado para desarrollo)
npm test

# Ejecución única
npm run test:run

# Modo watch (re-ejecuta automáticamente)
npm run test:watch

# Con interfaz gráfica
npm run test:ui

# Con reporte de cobertura
npm run test:coverage
```

## 📊 Tipos de Tests

### 1. Tests Unitarios

**Ubicación:** `sections/`, `utils/`, `App.test.jsx`

Prueban componentes individuales de forma aislada:

- ✅ Renderizado correcto
- ✅ Props y estado
- ✅ Funcionalidad específica
- ✅ Manejo de errores

**Ejemplo:**
```javascript
// Hero.test.jsx
it('renders hero section with correct content', () => {
  render(<Hero />)
  expect(screen.getByText('Sierra-Esperanza Creations LLC')).toBeInTheDocument()
})
```

### 2. Tests de Integración

**Ubicación:** `integration/`

Prueban la interacción entre múltiples componentes:

- ✅ Flujos de usuario completos
- ✅ Comunicación entre componentes
- ✅ Estados compartidos
- ✅ Navegación y routing

**Ejemplo:**
```javascript
// UserInteractions.test.jsx
it('toggles GitHub links when button is clicked', async () => {
  render(<RedesCard />)
  const githubButton = screen.getByRole('button', { name: /github/i })
  
  await user.click(githubButton)
  
  await waitFor(() => {
    expect(screen.getByText('Sierra-Esperanza')).toBeInTheDocument()
  })
})
```

### 3. Tests de Constantes

**Ubicación:** `constants/`

Validan la estructura y contenido de datos estáticos:

- ✅ Estructura de objetos
- ✅ Propiedades requeridas
- ✅ Tipos de datos
- ✅ Unicidad de IDs

**Ejemplo:**
```javascript
// items.test.js
it('should have valid structure for React items', () => {
  ReactItems.forEach(item => {
    expect(item).toHaveProperty('id')
    expect(item).toHaveProperty('title')
    expect(item).toHaveProperty('content')
  })
})
```

## 🎭 Mocking y Configuración

### Mocks de Three.js

Los componentes que utilizan Three.js están mockeados para evitar problemas de renderizado:

```javascript
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas">{children}</div>,
  useFrame: vi.fn(),
  useThree: () => ({ viewport: { width: 10, height: 10 } })
}))
```

### Setup Global

El archivo `setup.js` configura:

- ✅ Matchers de jest-dom
- ✅ APIs del navegador (IntersectionObserver, etc.)
- ✅ Configuración de jsdom
- ✅ Limpieza automática entre tests

## 📈 Cobertura de Código

Para generar un reporte de cobertura:

```bash
npm run test:coverage
```

El reporte se genera en `coverage/` e incluye:

- **Líneas cubiertas** - Porcentaje de líneas ejecutadas
- **Funciones cubiertas** - Porcentaje de funciones probadas
- **Ramas cubiertas** - Porcentaje de condiciones probadas
- **Declaraciones cubiertas** - Porcentaje de declaraciones ejecutadas

## 🐛 Debugging Tests

### Modo Debug

```bash
# Ejecutar un test específico
npm test -- Hero.test.jsx

# Ejecutar tests que coincidan con un patrón
npm test -- --grep "renders"

# Modo verbose para más información
npm test -- --reporter=verbose
```

### Herramientas de Debug

```javascript
// En tus tests, puedes usar:
import { screen } from '@testing-library/react'

// Ver el DOM actual
screen.debug()

// Ver un elemento específico
screen.debug(screen.getByTestId('hero-section'))
```

## 📝 Convenciones de Testing

### Nomenclatura

- **Archivos:** `ComponentName.test.jsx` o `functionality.test.js`
- **Describe blocks:** Nombre del componente o funcionalidad
- **Test cases:** Descripción clara de lo que se prueba

### Estructura de Tests

```javascript
describe('ComponentName', () => {
  // Setup común
  beforeEach(() => {
    // Configuración antes de cada test
  })

  it('should render correctly', () => {
    // Arrange
    const props = { /* props de prueba */ }
    
    // Act
    render(<ComponentName {...props} />)
    
    // Assert
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

## 🔧 Configuración Avanzada

### Vitest Config

La configuración se encuentra en `vitest.config.js`:

```javascript
export default defineConfig({
  test: {
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.js'],
    globals: true
  }
})
```

### Extensiones Recomendadas

Para VS Code:

- **Vitest** - Integración con el editor
- **Test Explorer UI** - Interfaz gráfica para tests
- **Coverage Gutters** - Visualización de cobertura

## 🚨 Solución de Problemas

### Errores Comunes

1. **"Cannot find module"**
   - Verificar imports y paths relativos
   - Asegurar que los mocks estén correctamente configurados

2. **"Element not found"**
   - Usar `screen.debug()` para ver el DOM
   - Verificar selectores y timing de renderizado

3. **"Three.js errors"**
   - Los componentes Three.js están mockeados
   - Verificar que los mocks incluyan todos los hooks necesarios

### Performance

- Usar `vi.mock()` para componentes pesados
- Evitar renderizar componentes innecesarios
- Limpiar mocks entre tests con `vi.clearAllMocks()`

## 📚 Recursos Adicionales

- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Jest DOM Matchers](https://github.com/testing-library/jest-dom)
- [User Event API](https://testing-library.com/docs/user-event/intro/)

---

**Mantenido por:** Sierra Esperanza Creations LLC  
**Última actualización:** Enero 2025
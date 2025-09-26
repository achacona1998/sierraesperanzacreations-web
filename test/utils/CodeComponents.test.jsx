import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Canvas } from '@react-three/fiber'
import { Text } from '@react-three/drei'
import { CodeFragment } from '../../src/sections/ContactSection/utils/CodeFragment'
import { CodeAnimation } from '../../src/sections/ContactSection/utils/CodeAnimation'

// Mock Three.js components
vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children }) => <div data-testid="canvas">{children}</div>,
  useFrame: vi.fn(),
  useThree: () => ({
    viewport: { width: 10, height: 10 }
  })
}))

vi.mock('@react-three/drei', () => ({
  Text: ({ children, ...props }) => (
    <div data-testid="text" data-props={JSON.stringify(props)}>
      {children}
    </div>
  ),
}))

describe('CodeFragment Component', () => {
  const mockPosition = [0, 0, 0]

  it('renders without crashing', () => {
    render(
      <Canvas>
        <CodeFragment position={mockPosition} />
      </Canvas>
    )
    
    const textElement = screen.getByTestId('text')
    expect(textElement).toBeInTheDocument()
  })

  it('displays one of the predefined code snippets', () => {
    const { getByTestId } = render(
      <Canvas>
        <CodeFragment position={mockPosition} />
      </Canvas>
    )
    
    const textElement = getByTestId('text')
    const codeSnippets = [
      "Algorithm", "Backend", "Bug", "Code", "Compiler", "Debugging",
      "DevOps", "Frontend", "Framework", "Git", "Interface", "Library",
      "Repository", "Script", "Variable"
    ]
    
    expect(codeSnippets).toContain(textElement.textContent)
  })

  it('applies correct props to Text component', () => {
    render(
      <Canvas>
        <CodeFragment position={mockPosition} />
      </Canvas>
    )

    const textElement = screen.getByTestId('text')
    const props = JSON.parse(textElement.getAttribute('data-props'))
    
    expect(props.anchorX).toBe('center')
    expect(props.anchorY).toBe('middle')
    expect(props.fontSize).toBe(0.5)
    expect(props.opacity).toBe(0.2)
  })
})

describe('CodeAnimation Component', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <Canvas>
        <CodeAnimation />
      </Canvas>
    )
    expect(container).toBeInTheDocument()
  })

  it('generates multiple CodeFragment components', () => {
    const { container } = render(
      <Canvas>
        <CodeAnimation />
      </Canvas>
    )
    
    // Should render multiple fragments (the component creates 100 fragments)
    const textElements = container.querySelectorAll('[data-testid="text"]')
    expect(textElements.length).toBeGreaterThan(0)
  })
})

describe('Canvas Animation Integration', () => {
  it('renders canvas with animation components', () => {
    const { getByTestId } = render(
      <div className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <CodeAnimation />
        </Canvas>
      </div>
    )
    
    expect(getByTestId('canvas')).toBeInTheDocument()
  })
})
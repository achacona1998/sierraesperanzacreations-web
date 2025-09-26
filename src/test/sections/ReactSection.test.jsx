import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import React from '../../sections/ReactSection/React'

// Mock child components
vi.mock('../../sections/components/Mantel/Mantel', () => ({
  default: () => <div data-testid="mantel">Mantel Component</div>
}))

vi.mock('../../sections/ReactSection/components/texto', () => ({
  default: () => <div data-testid="texto">Texto Component</div>
}))

describe('React Section Component', () => {
  it('renders without crashing', () => {
    render(<React />)
    expect(screen.getByTestId('mantel')).toBeInTheDocument()
    expect(screen.getByTestId('texto')).toBeInTheDocument()
  })

  it('renders child components', () => {
    render(<React />)
    
    const mantelComponent = screen.getByTestId('mantel')
    const textoComponent = screen.getByTestId('texto')
    
    expect(mantelComponent).toBeInTheDocument()
    expect(textoComponent).toBeInTheDocument()
  })

  it('should have correct id attribute', () => {
    render(<React />)
    const section = document.querySelector('#Services')

    expect(section).toBeInTheDocument()
    expect(section).toHaveAttribute('id', 'Services')
  })

  it('has correct CSS classes', () => {
    render(<React />)
    const section = document.querySelector('#Services')
    
    expect(section).toHaveClass('relative', 'bg-gray-950')
  })
})
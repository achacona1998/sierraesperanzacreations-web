import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from '../../sections/ContactSection/Contact'

// Mock child components
vi.mock('../../sections/ContactSection/components/canvas', () => ({
  CanvasAnimation: () => <div data-testid="canvas-animation">Canvas Animation</div>
}))

vi.mock('../../sections/ContactSection/components/pieDePagina', () => ({
  PieDePagina: () => <div data-testid="pie-de-pagina">Footer</div>
}))

vi.mock('../../sections/ContactSection/components/servicios', () => ({
  ServiciosCard: () => <div data-testid="servicios-card">Services Card</div>
}))

vi.mock('../../sections/ContactSection/components/recursos', () => ({
  RecursosCard: () => <div data-testid="recursos-card">Resources Card</div>
}))

vi.mock('../../sections/ContactSection/components/contacto', () => ({
  ContactoCard: () => <div data-testid="contacto-card">Contact Card</div>
}))

vi.mock('../../sections/ContactSection/components/redes', () => ({
  RedesCard: () => <div data-testid="redes-card">Social Networks Card</div>
}))

describe('Contact Component', () => {
  it('renders without crashing', () => {
    render(<Contact />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders all child components', () => {
    render(<Contact />)
    
    expect(screen.getByTestId('canvas-animation')).toBeInTheDocument()
    expect(screen.getByTestId('pie-de-pagina')).toBeInTheDocument()
    expect(screen.getByTestId('servicios-card')).toBeInTheDocument()
    expect(screen.getByTestId('recursos-card')).toBeInTheDocument()
    expect(screen.getByTestId('contacto-card')).toBeInTheDocument()
    expect(screen.getByTestId('redes-card')).toBeInTheDocument()
  })

  it('has correct CSS classes for layout', () => {
    render(<Contact />)
    const footer = screen.getByRole('contentinfo')
    
    expect(footer).toHaveClass('relative')
    expect(footer).toHaveClass('overflow-hidden')
    expect(footer).toHaveClass('text-white')
    expect(footer).toHaveClass('bg-gray-950')
  })

  it('has correct id attribute', () => {
    render(<Contact />)
    const footer = screen.getByRole('contentinfo')
    
    expect(footer).toHaveAttribute('id', 'Contact')
  })

  it('contains overlay div with correct opacity', () => {
    const { container } = render(<Contact />)
    const overlay = container.querySelector('.absolute.inset-0.bg-black.opacity-60')
    
    expect(overlay).toBeInTheDocument()
  })

  it('has responsive grid layout', () => {
    const { container } = render(<Contact />)
    const gridContainer = container.querySelector('.grid.justify-center.gap-10')
    
    expect(gridContainer).toBeInTheDocument()
    expect(gridContainer).toHaveClass('grid-1')
    expect(gridContainer).toHaveClass('Tablet:grid-cols-2')
    expect(gridContainer).toHaveClass('Laptop:grid-cols-4')
  })

  it('renders cards in correct order', () => {
    render(<Contact />)
    
    const cards = [
      'redes-card',
      'servicios-card',
      'recursos-card',
      'contacto-card'
    ]
    
    cards.forEach(cardId => {
      expect(screen.getByTestId(cardId)).toBeInTheDocument()
    })
  })
})
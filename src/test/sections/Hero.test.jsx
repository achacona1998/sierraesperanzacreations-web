import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from '../../sections/HeroSection/Hero'

// Mock child components
vi.mock('../../sections/HeroSection/components/Beams', () => ({
  Beams: () => <div data-testid="beams">Beams</div>
}))

vi.mock('../../sections/HeroSection/components/boton', () => ({
  default: ({ name, section }) => (
    <button data-testid={`button-${section.toLowerCase()}`}>
      {name}
    </button>
  )
}))

vi.mock('../../sections/HeroSection/components/HeroLogoH', () => ({
  default: ({ className }) => (
    <div data-testid="hero-logo-h" className={className}>
      Hero Logo Horizontal
    </div>
  )
}))

vi.mock('../../sections/HeroSection/components/HeroLogoV', () => ({
  default: ({ className }) => (
    <div data-testid="hero-logo-v" className={className}>
      Hero Logo Vertical
    </div>
  )
}))

vi.mock('../../sections/HeroSection/components/texto', () => ({
  default: () => <div data-testid="hero-text">Hero Text</div>
}))

describe('Hero Component', () => {
  it('renders without crashing', () => {
    render(<Hero />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders all child components', () => {
    render(<Hero />)
    
    expect(screen.getByTestId('beams')).toBeInTheDocument()
    expect(screen.getByTestId('hero-logo-h')).toBeInTheDocument()
    expect(screen.getByTestId('hero-logo-v')).toBeInTheDocument()
    expect(screen.getByTestId('hero-text')).toBeInTheDocument()
  })

  it('renders navigation buttons with correct text', () => {
    render(<Hero />)
    
    expect(screen.getByTestId('button-services')).toBeInTheDocument()
    expect(screen.getByTestId('button-contact')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('has correct CSS classes for layout', () => {
    render(<Hero />)
    const header = screen.getByRole('banner')
    
    expect(header).toHaveClass('relative')
    expect(header).toHaveClass('flex')
    expect(header).toHaveClass('flex-col')
    expect(header).toHaveClass('items-center')
    expect(header).toHaveClass('h-screen')
    expect(header).toHaveClass('text-white')
  })

  it('contains overlay div with correct opacity', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.absolute.inset-0.bg-black.opacity-80')
    
    expect(overlay).toBeInTheDocument()
  })

  it('has responsive logo display classes', () => {
    render(<Hero />)
    
    const logoH = screen.getByTestId('hero-logo-h')
    const logoV = screen.getByTestId('hero-logo-v')
    
    expect(logoH).toHaveClass('hidden')
    expect(logoH).toHaveClass('Laptop:inline')
    expect(logoV).toHaveClass('inline')
    expect(logoV).toHaveClass('Laptop:hidden')
  })
})
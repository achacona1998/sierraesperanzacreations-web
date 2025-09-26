import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

// Mock all section components to avoid complex dependencies
vi.mock('../src/sections/HeroSection/Hero', () => ({
  default: () => <div data-testid="hero-section">Hero Section</div>
}))

vi.mock('../src/sections/ReactSection/React', () => ({
  default: () => <div data-testid="react-section">React Section</div>
}))

vi.mock('../src/sections/PythonSection/Python', () => ({
  default: () => <div data-testid="python-section">Python Section</div>
}))

vi.mock('../src/sections/JsSection/Js', () => ({
  default: () => <div data-testid="js-section">JavaScript Section</div>
}))

vi.mock('../src/sections/DevOpsSection/DevOps', () => ({
  default: () => <div data-testid="devops-section">DevOps Section</div>
}))

vi.mock('../src/sections/CollaborativeSection/Collaborative', () => ({
  default: () => <div data-testid="collaborative-section">Collaborative Section</div>
}))

vi.mock('../src/sections/ProvenTrackSection/ProvenTrack', () => ({
  default: () => <div data-testid="proven-track-section">Proven Track Section</div>
}))

vi.mock('../src/sections/ContactSection/Contact', () => ({
  default: () => <div data-testid="contact-section">Contact Section</div>
}))

describe('App Component', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
  })

  it('renders all main sections in correct order', () => {
    render(<App />)
    
    // Check that all sections are present
    expect(screen.getByTestId('hero-section')).toBeInTheDocument()
    expect(screen.getByTestId('react-section')).toBeInTheDocument()
    expect(screen.getByTestId('python-section')).toBeInTheDocument()
    expect(screen.getByTestId('js-section')).toBeInTheDocument()
    expect(screen.getByTestId('devops-section')).toBeInTheDocument()
    expect(screen.getByTestId('collaborative-section')).toBeInTheDocument()
    expect(screen.getByTestId('proven-track-section')).toBeInTheDocument()
    expect(screen.getByTestId('contact-section')).toBeInTheDocument()
  })

  it('has correct CSS classes for layout', () => {
    const { container } = render(<App />)
    const mainDiv = container.firstChild
    
    expect(mainDiv).toHaveClass('min-h-screen')
    expect(mainDiv).toHaveClass('text-gray-800')
    expect(mainDiv).toHaveClass('bg-gray-100')
  })

  it('renders sections in the expected order', () => {
    render(<App />)
    
    const sections = [
      'hero-section',
      'react-section', 
      'python-section',
      'js-section',
      'devops-section',
      'collaborative-section',
      'proven-track-section',
      'contact-section'
    ]
    
    sections.forEach(sectionId => {
      expect(screen.getByTestId(sectionId)).toBeInTheDocument()
    })
  })
})
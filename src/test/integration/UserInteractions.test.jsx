import { describe, it, expect, vi } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RedesCard } from '../../sections/ContactSection/components/redes'

// Mock the constants
vi.mock('../../sections/ContactSection/constants/items', () => ({
  GitHub: [
    { id: 1, name: 'GitHub Profile', link: 'https://github.com/test' },
    { id: 2, name: 'GitHub Projects', link: 'https://github.com/test/projects' }
  ],
  Linkedin: [
    { id: 1, name: 'LinkedIn Profile', link: 'https://linkedin.com/in/test' }
  ]
}))

describe('User Interactions', () => {
  describe('RedesCard Component', () => {
    it('renders initial state correctly', () => {
      render(<RedesCard />)
      
      expect(screen.getByText('Sierra-Esperanza Creations LLC')).toBeInTheDocument()
      expect(screen.getByText('Software Development.')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'GitHub' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'LinkedIn' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Whatsapp' })).toBeInTheDocument()
      
      // Links should not be visible initially
      expect(screen.queryByText('GitHub Profile')).not.toBeInTheDocument()
      expect(screen.queryByText('LinkedIn Profile')).not.toBeInTheDocument()
    })

    it('toggles GitHub links when GitHub button is clicked', async () => {
      const user = userEvent.setup()
      render(<RedesCard />)
      
      const githubButton = screen.getByRole('button', { name: 'GitHub' })
      
      // Click to show GitHub links
      await user.click(githubButton)
      
      await waitFor(() => {
        expect(screen.getByText('GitHub Profile')).toBeInTheDocument()
        expect(screen.getByText('GitHub Projects')).toBeInTheDocument()
      })
      
      // Click again to hide GitHub links
      await user.click(githubButton)
      
      await waitFor(() => {
        expect(screen.queryByText('GitHub Profile')).not.toBeInTheDocument()
        expect(screen.queryByText('GitHub Projects')).not.toBeInTheDocument()
      })
    })

    it('toggles LinkedIn links when LinkedIn button is clicked', async () => {
      const user = userEvent.setup()
      render(<RedesCard />)
      
      const linkedinButton = screen.getByRole('button', { name: 'LinkedIn' })
      
      // Click to show LinkedIn links
      await user.click(linkedinButton)
      
      await waitFor(() => {
        expect(screen.getByText('LinkedIn Profile')).toBeInTheDocument()
      })
      
      // Click again to hide LinkedIn links
      await user.click(linkedinButton)
      
      await waitFor(() => {
        expect(screen.queryByText('LinkedIn Profile')).not.toBeInTheDocument()
      })
    })

    it('applies correct CSS classes when buttons are active', async () => {
      const user = userEvent.setup()
      render(<RedesCard />)
      
      const githubButton = screen.getByRole('button', { name: 'GitHub' })
      const linkedinButton = screen.getByRole('button', { name: 'LinkedIn' })
      
      // Initially buttons should not have active class
      expect(githubButton).not.toHaveClass('text-cyan-400')
      expect(linkedinButton).not.toHaveClass('text-cyan-400')
      
      // Click GitHub button
      await user.click(githubButton)
      await waitFor(() => {
        expect(githubButton).toHaveClass('text-cyan-400')
      })
      
      // Click LinkedIn button
      await user.click(linkedinButton)
      await waitFor(() => {
        expect(linkedinButton).toHaveClass('text-cyan-400')
      })
    })

    it('renders GitHub links with correct attributes when active', async () => {
      const user = userEvent.setup()
      render(<RedesCard />)
      
      const githubButton = screen.getByRole('button', { name: 'GitHub' })
      await user.click(githubButton)
      
      await waitFor(() => {
        const githubProfileLink = screen.getByText('GitHub Profile')
        expect(githubProfileLink).toHaveAttribute('href', 'https://github.com/test')
        expect(githubProfileLink).toHaveAttribute('target', '_blank')
        expect(githubProfileLink).toHaveAttribute('rel', 'noopener')
        expect(githubProfileLink).toHaveClass('duration-300', 'transition-color', 'hover:text-cyan-400')
      })
    })

    it('renders LinkedIn links with correct attributes when active', async () => {
      const user = userEvent.setup()
      render(<RedesCard />)
      
      const linkedinButton = screen.getByRole('button', { name: 'LinkedIn' })
      await user.click(linkedinButton)
      
      await waitFor(() => {
        const linkedinProfileLink = screen.getByText('LinkedIn Profile')
        expect(linkedinProfileLink).toHaveAttribute('href', 'https://linkedin.com/in/test')
        expect(linkedinProfileLink).toHaveAttribute('target', '_blank')
        expect(linkedinProfileLink).toHaveAttribute('rel', 'noopener')
      })
    })

    it('renders WhatsApp link with correct attributes', () => {
      render(<RedesCard />)
      
      const whatsappLink = screen.getByRole('link', { name: 'Whatsapp' })
      expect(whatsappLink).toHaveAttribute('href', ' https://wa.me/+15616762439')
      expect(whatsappLink).toHaveAttribute('target', '_blank')
      expect(whatsappLink).toHaveClass('inline-block', 'duration-300', 'transition-color', 'hover:text-cyan-400')
    })

    it('allows independent toggling of GitHub and LinkedIn sections', async () => {
      const user = userEvent.setup()
      render(<RedesCard />)
      
      const githubButton = screen.getByRole('button', { name: 'GitHub' })
      const linkedinButton = screen.getByRole('button', { name: 'LinkedIn' })
      
      // Show GitHub links
      await user.click(githubButton)
      await waitFor(() => {
        expect(screen.getByText('GitHub Profile')).toBeInTheDocument()
        expect(githubButton).toHaveClass('text-cyan-400')
      })
      
      // Show LinkedIn links (GitHub should still be visible)
      await user.click(linkedinButton)
      await waitFor(() => {
        expect(screen.getByText('GitHub Profile')).toBeInTheDocument()
        expect(screen.getByText('LinkedIn Profile')).toBeInTheDocument()
        expect(linkedinButton).toHaveClass('text-cyan-400')
        expect(githubButton).toHaveClass('text-cyan-400')
      })
      
      // Hide GitHub links (LinkedIn should still be visible)
      await user.click(githubButton)
      await waitFor(() => {
        expect(screen.queryByText('GitHub Profile')).not.toBeInTheDocument()
        expect(screen.getByText('LinkedIn Profile')).toBeInTheDocument()
        expect(githubButton).not.toHaveClass('text-cyan-400')
        expect(linkedinButton).toHaveClass('text-cyan-400')
      })
    })
  })
})
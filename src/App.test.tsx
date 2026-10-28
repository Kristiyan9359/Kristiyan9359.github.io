import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { projects } from './data'

describe('App', () => {
  it('renders the main portfolio sections', () => {
    render(<App />)
    for (const name of ['Building the fundamentals', "Things I've built", 'Tools I use', 'Always learning', "Let's connect"]) {
      expect(screen.getByRole('heading', { level: 2, name })).toBeInTheDocument()
    }
  })

  it('links every project to its GitHub repository', () => {
    render(<App />)
    for (const project of projects) {
      expect(screen.getByRole('link', { name: `Code for ${project.name}` })).toHaveAttribute('href', project.repo)
    }
  })
})

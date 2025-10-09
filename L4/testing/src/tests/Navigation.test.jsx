import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect} from 'vitest';

import App from '../App';


describe('Navigation Component', ()=>{

    // Funzione helper per testare gli stati attivi
  const testActiveState = (linkText) => {
    render(<App />)
    
    // Naviga alla pagina cliccando il link
    fireEvent.click(screen.getByText(linkText))
    
    // Verifica che il link abbia la classe active
    const activeLink = screen.getByRole('link', { name: linkText })
    expect(activeLink).toHaveClass('active')
  }

    describe('Navigation Structure and Rendering', () => {

        it('renders navigation links', ()=>{

            render(<App/>)

            expect(screen.getByText('Home')).toBeInTheDocument()
            expect(screen.getByText('Pizze')).toBeInTheDocument()
            expect(screen.getByText('Tutti gli utenti')).toBeInTheDocument()
            expect(screen.getByText('Cerca utenti')).toBeInTheDocument()
            expect(screen.getByText('Tabella utenti')).toBeInTheDocument()

        })

        it('has correct navigation structure', ()=>{

            render(<App/>)

            const nav = screen.getByRole('navigation')
            expect(nav).toBeInTheDocument()

            const navLinks = screen.getAllByRole('link')
            expect(navLinks).toHaveLength(5)

        })

    })

    describe('Page Navigation',()=>{

        it('navigate to different pages when clicking links',()=>{

            render(<App/>)

            expect(screen.getByText('Benvenuto nel nostro sito')).toBeInTheDocument()

            //clicca su pizze
            fireEvent.click(screen.getByText('Pizze'))
            expect(screen.getByText('Le Nostre Pizze')).toBeInTheDocument()

        })

    })

    describe('Active State Management', () => {
        it('shows active state on current page', () => {
        testActiveState('Pizze')
        })

        it('shows active state when navigating to users page', () => {
        testActiveState('Tutti gli utenti')
        })

        it('shows active state when navigating to user search page', () => {
        testActiveState('Cerca utenti')
        })

        it('shows active state when navigating to user table page', () => {
        testActiveState('Tabella utenti')
        })
  })

})
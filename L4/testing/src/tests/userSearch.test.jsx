import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../App'

describe('Search Functionality', () => {

    it('searches for "Leanne" and finds exactly one user', async () => {

        render(<App/>)

        //navigo alla pagina Cerca utenti
        fireEvent.click(screen.getByText('Cerca utenti'))

        
        //aspetta che il componente carichi i dati
        const searchInput = await screen.findByTestId('search-input',{},{timeout:10000})

        //Digita "Leanne" nel campo di ricerca
        fireEvent.change(searchInput, {target: {value: 'Leanne'}})

        //aspetta che i risultati della ricerca vengano caricati
        const userCards = await screen.findAllByTestId('user-card');

        expect(userCards).toHaveLength(1)//mi aspetto di avere un solo risultato

        //Verifico che il risultato sia quello corretto
        expect(screen.getByText('Leanne Graham')).toBeInTheDocument()

    })

    it('searches for "ajeje brazorf" and finds no results', async () => {

        render(<App/>)

        //navigo alla pagina Cerca utenti
        fireEvent.click(screen.getByText('Cerca utenti'))

        
        //aspetta che il componente carichi i dati
        const searchInput = await screen.findByTestId('search-input',{},{timeout:10000})

        //Digita "Leanne" nel campo di ricerca
        fireEvent.change(searchInput, {target: {value: 'ajeje brazorf'}})

        //Verifico che non ci siano risultati 
        const userCards = screen.queryAllByTestId('user-card')
        expect(userCards).toHaveLength(0)

    })

})
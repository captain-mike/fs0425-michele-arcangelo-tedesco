import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect} from 'vitest';

import App from '../App';

describe('Pizza component', ()=>{

    describe('Navigation and content rendering', ()=>{

        it('navigates to pizza page and renders content', () => {

            render(<App/>)

            //Naviga alla pagina pizze. 
            fireEvent.click(screen.getByText('Pizze'))

            //trovo il titolo
            const title = screen.getByRole('heading',{level:1})
            //verifico il titolo
            expect(title).toHaveTextContent('Le Nostre Pizze')
        })

    })

});
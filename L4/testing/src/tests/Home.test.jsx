import {render, screen, fireEvent} from '@testing-library/react';
import {describe, it, expect} from 'vitest';

import App from '../App';


describe('Home component', ()=>{

    it('hides specific element when button clicked', ()=>{

        render(<App/>)

        const button = screen.getByTestId('toggle')
        fireEvent.click(button)

        const fade = screen.queryByTestId('fade')

        expect(fade).not.toBeInTheDocument()

    })


})

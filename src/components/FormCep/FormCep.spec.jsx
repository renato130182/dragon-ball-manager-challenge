import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import FormCep from './FormCep'
import {act} from 'react-dom/test-utils'

    global.fetch = jest.fn().mockImplementation(() => 
        Promise.resolve({
            json: () => ({
                cep:'12345678',
                logradouro:'Rua xyz',
                bairro: 'Tatu bola'
            })
        })
    )
    it('Should render FormCep Components', () => {
        const {getByPlaceholderText} = render(<FormCep />);
        const inputCEP = getByPlaceholderText('CEP').closest('input');
        const inputLogradouro = getByPlaceholderText('logradouro').closest('input');
        const inputBairro = getByPlaceholderText('bairro').closest('input');
        
        expect(inputCEP).toBeVisible();
        expect(inputLogradouro).toBeVisible();
        expect(inputBairro).toBeVisible();        
    })

    it('Should response global fetch', async () => {
        const {debug,getByPlaceholderText,container} = render(<FormCep />)
        const cepInput = getByPlaceholderText('CEP').closest('input')
        fireEvent.change(cepInput,{target:{value:'12345678'}})
    
        await act(() => global.fetch)
        expect(global.fetch).toHaveBeenCalledTimes(1)
        expect(container).toMatchSnapshot()

        debug()
    })

    


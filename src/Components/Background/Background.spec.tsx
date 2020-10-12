import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Background } from './index';

describe('Background', () => {
    const mockBackgroundUrl = 'test url'
    /* it('Should correctly set background image', () => {
        const { container } = render(<Background imageUrl={mockBackgroundUrl}/>)
        expect(container.style.backgroundImage).toBe(mockBackgroundUrl);
    }) */
    it('Should render the component with children', () => {
        const mockChildren = 'some random content';
        const { container } = render(
            <Background imageUrl={mockBackgroundUrl}>
                {mockChildren}
            </Background>)

        expect(container.innerHTML).toMatch(mockChildren)
    })


    describe('Hamburguer menu', () => {
        describe('when hamburger action is not provided', () => {
            it('Should not show menu', () => {
                const { queryByAltText } = render(<Background imageUrl={mockBackgroundUrl} />);

                expect(queryByAltText('hamburger menu')).toBeNull();
            })
        })
        
        describe('when hamburger action is provided', () => {
            const hamburgerAction = jest.fn()
            
            it('Should show hamburguer when hamburger action is provided', () => {
                const { queryByAltText } = render(
                <Background 
                    imageUrl={mockBackgroundUrl} 
                    hamburgerAction={hamburgerAction}
                />);

                expect(queryByAltText('hamburger menu')).not.toBeNull();
            })
            
            it('Should successfully trigger hamburger action on click', () => {
                const { queryByAltText } = render(
                <Background 
                    imageUrl={mockBackgroundUrl} 
                    hamburgerAction={hamburgerAction}
                />);
    
                const menu = queryByAltText('hamburger menu')
                
                fireEvent.click(menu);
                expect(hamburgerAction).toHaveBeenCalledTimes(1);
            })
        })
    })
})

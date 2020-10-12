import React from 'react'
import Wrapper, { MenuContainer } from './styles';

import menu from '../../assets/hamburger-menu.svg';

export interface BackgroundProps {
    imageUrl: string;
    hamburgerAction?: () => void;
}

export const Background = ({ imageUrl, children, hamburgerAction }: React.PropsWithChildren<BackgroundProps>) => (
    <Wrapper imageUrl={imageUrl}>
        {hamburgerAction && (
            <MenuContainer
                onClick={hamburgerAction}
                src={menu}
                alt="hamburger menu" />
        )}
        {children}
    </ Wrapper>
)

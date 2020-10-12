import { BackgroundProps } from './index';
import styled from 'styled-components';


const Wrapper = styled.div<BackgroundProps>`
height: 100vh;
width: 100%;
background-image: url(${(({ imageUrl }) => imageUrl)});
border-radius: 5px;
position: relative;
`

export const MenuContainer = styled.img`
    position: absolute;
    right: 40px;
    top: 40px;
    width: 50px;
    cursor: pointer;
`
export default Wrapper;
import styled, { css } from "styled-components";

export const StyledArrow = styled.svg`
    ${({ showMore }) => showMore && css`
        transform: rotate(180deg);  
    `}
`;
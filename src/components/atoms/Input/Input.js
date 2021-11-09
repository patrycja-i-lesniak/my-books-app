import styled, {css} from "styled-components";
import searchIcon from "assets/icons/search.svg";

const Input = styled.input`
    position: relative;
    margin: 0;
    width: 100%;
    color: ${({ theme }) => theme.colors.lipstick};
    font-size: ${({ theme }) => theme.font.xxs};
    border: none;
    transition: 0.1s all;
    border-bottom: 1px solid ${({ theme }) => theme.colors.silver};
    outline: none;

    ::placeholder {
        color: ${({ theme }) => theme.colors.grey};
    }

    ${({ search }) =>
        search &&
        css`
            padding: 10px 20px 10px 40px;
            font-size: ${({ theme }) => theme.font.xxs};
            background-image: url(${searchIcon});
            background-size: 15px;
            background-position: 15px 50%;
            background-repeat: no-repeat;
            border: 1px solid ${({ theme }) => theme.colors.desertStorm};
            width: 340px;
            height: 36px;
            border-radius: 5px;

            &:focus {
                border: 1px solid ${({ theme }) => theme.colors.lipstick};
            }
        `}
`;

export default Input;
import styled from "styled-components";

export const Button = styled.button`
        padding: 10px;
        min-width: 100px;
        border: none;
        outline: none;
        background-color: #E1E4EA;
        border-radius: 4px;
        font-size: 24px;
        transition: background-color 250ms;

            :not(:last-child) {
                margin-right: 20px;

            :hover, :focus {
                background-color: gray;
            }
        }`
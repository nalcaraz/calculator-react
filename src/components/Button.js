import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    height: 50px;
    width: 50px;
    background-color: white;
    border: solid 1px gray;
    font-size: 24px;
    color: gray;
`;

const Button = ({ ...props }) => {
    return <StyledButton {...props} />;
};

export default Button;

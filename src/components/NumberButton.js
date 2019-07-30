import React from "react";
import styled from "styled-components";
import Button from "./Button";

const NumberButton = ({ children, ...props }) => {
    return <Button {...props}>{children}</Button>;
};

export default NumberButton;

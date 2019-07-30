import React from "react";

import styled from "styled-components";
import Button from "./Button";

const CustomButton = styled(Button)`
    background-color: #7e57c2;
    color: #fff;
`;

const ActionButton = ({ children, ...props }) => {
    return <CustomButton {...props}>{children}</CustomButton>;
};

export default ActionButton;

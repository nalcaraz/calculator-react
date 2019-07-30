import React, { Fragment, useState, useEffect } from "react";
import NumberButton from "./NumberButton";
import ActionButton from "./ActionButton";
import styled from "styled-components";
const Display = styled.div`
    height: 50px;
    width: 200px;
    border: solid 1px gray;
`;

const ClearButton = styled(ActionButton)`
    width: 100px;
    background-color: red;
`;

const Calculator = () => {
    const [number1, setNumber1] = useState("");
    const [number2, setNumber2] = useState("");
    const [isNumber, setIsNumber] = useState(true);

    const [action, setAction] = useState(null);
    const [isAction, setIsAction] = useState(false);
    const [display, setDisplay] = useState(null);
    const [runningTotal, setRunningTotal] = useState(1);
    const [isFinalResult, setIsFinalResult] = useState(false);

    useEffect(() => {
        setIsAction(true);
        // eslint-disable-next-line default-case
        switch (action) {
            case "multiply":
                setDisplay("x");
                setRunningTotal(number1 * number2);
                break;
            case "divide":
                setRunningTotal(number1 / number2);
                break;
            case "add":
                setRunningTotal(number1 + number2);
                break;
            case "subtract":
                setRunningTotal(number1 - number2);
                break;
            case "equals":
                setIsFinalResult(true);
                //  setRunningTotal(number1 * number2);
                setNumber1("");
                setNumber2("");
                // setRunningTotal(null)

                break;
            default:
                break;
        }
    }, [action]);

    useEffect(() => {
        setIsNumber(true);
        setDisplay(number1);

        // setDisplay(runningTotal)
    }, [number1]);
    useEffect(() => {
        setIsNumber(true);
        setDisplay(number2);

        // setDisplay(runningTotal)
    }, [number2]);

    useEffect(() => {
        if (isFinalResult) setDisplay(runningTotal);
        setIsFinalResult(false);
        setRunningTotal(1);
    }, [isFinalResult]);

    function handleAction(e) {
        const type = e.target.value;
        setAction(type);
    }

    function handleNumber(e) {
        const number = e.target.value;
        console.log("number", number);
        if (runningTotal) {
            setNumber2(`${number2}${number}`);
            //setNumber1(runningTotal);
        } else {
            setNumber1(`${number1}${number}`);
        }
    }

    function handleClear() {
        setDisplay("");
        setIsAction(false);
        setIsNumber(true);
        setNumber1("");
        setNumber2("");
    }

    return (
        <Fragment>
            <Display>{display}</Display>
            <Display>{action}</Display>
            <div>
                <NumberButton onClick={handleNumber} value={1}>
                    1
                </NumberButton>
                <NumberButton onClick={handleNumber} value={2}>
                    2
                </NumberButton>
                <NumberButton onClick={handleNumber} value={3}>
                    3
                </NumberButton>
                <ActionButton value="divide" onClick={handleAction}>
                    /
                </ActionButton>
            </div>
            <div>
                <NumberButton onClick={handleNumber} value={4}>
                    4
                </NumberButton>
                <NumberButton onClick={handleNumber} value={5}>
                    5
                </NumberButton>
                <NumberButton onClick={handleNumber} value={6}>
                    6
                </NumberButton>
                <ActionButton value="multiply" onClick={handleAction}>
                    x
                </ActionButton>
            </div>
            <div>
                <NumberButton onClick={handleNumber} value={7}>
                    7
                </NumberButton>
                <NumberButton onClick={handleNumber} value={8}>
                    8
                </NumberButton>
                <NumberButton onClick={handleNumber} value={9}>
                    9
                </NumberButton>
                <ActionButton value="subtract" onClick={handleAction}>
                    -
                </ActionButton>
            </div>
            <div>
                <NumberButton>0</NumberButton>
                <ClearButton onClick={handleClear}>clear</ClearButton>
                <ActionButton value="add" onClick={handleAction}>
                    +
                </ActionButton>
            </div>
            <div>
                <ActionButton value="equals" onClick={handleAction}>
                    =
                </ActionButton>
            </div>
        </Fragment>
    );
};

export default Calculator;

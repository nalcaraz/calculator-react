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
    const [display, setDisplay] = useState("");
    const [result, setResult] = useState("");
    const [runningTotal, setRunningTotal] = useState(1);
    const [isFinalResult, setIsFinalResult] = useState(false);

    function performAction(actionType) {
        setIsAction(true);

        // eslint-disable-next-line default-case
        switch (actionType) {
            case "multiply":
                // setDisplay("x");
                setResult(number1 * number2);
                break;
            case "divide":
                setResult(number1 / number2);
                break;
            case "add":
                setResult(number1 + number2);
                break;
            case "subtract":
                setResult(number1 - number2);
                break;
            case "equals":
                setResult(result);
                //  setRunningTotal(number1 * number2);
                setNumber1("");
                setNumber2("");
                // setRunningTotal(null)

                break;
            default:
                break;
        }
        //setNumber1(result);
    }

    // useEffect(() => {
    //     setIsNumber(true);
    //     setDisplay(number1);

    //     // setDisplay(runningTotal)
    // }, [number1]);
    // useEffect(() => {
    //     setIsNumber(true);
    //     setDisplay(number2);

    //     // setDisplay(runningTotal)
    // }, [number2]);

    useEffect(() => {
        if (result !== "") setResult(result);
        setIsFinalResult(false);
        setRunningTotal(1);
    }, [result]);

    function handleAction(e) {
        const type = e.target.value;
        if (action) performAction(type);
        setAction(type);
        setNumber1(result);
        //  setResult("");
        console.log(action);

        switch (type) {
            case "multiply":
                console.log(type);
                if (type !== action) setDisplay(`${display} * `);

                break;
            case "divide":
                setDisplay(`${display} / `);
                break;
            case "add":
                setDisplay(`${display} + `);
                break;
            case "subtract":
                setDisplay(`${display} - `);
                break;
            case "equals":
                // setIsFinalResult(true);
                // //  setRunningTotal(number1 * number2);
                // setNumber1("");
                // setNumber2("");
                // setRunningTotal(null)

                break;
            default:
                break;
        }

        // setDisplay(type);
    }

    function handleNumber(e) {
        const value = e.target.value;

        setDisplay(`${display}${value}`);
        setResult(`${result}${value}`);
        // console.log("number", number);
        // if (runningTotal) {
        //     setNumber2(`${number2}${number}`);
        //     //setNumber1(runningTotal);
        // } else {
        //     setNumber1(`${number1}${number}`);
        // }
    }

    function handleClear() {
        setDisplay("");
        setResult("");
        setIsAction(false);
        setIsNumber(true);
        setNumber1("");
        setNumber2("");
    }

    return (
        <Fragment>
            <Display>{display}</Display>
            <Display>{result}</Display>
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

import React, { useState, useMemo, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("factorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = otherState ? "primary" : "secondary";
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);
    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Result factorial: {fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState + 100)}
                >
                    Increment
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevState) => prevState - 100)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevState) => !prevState)}
                >
                    Change Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;

// С помощью useMemo мы можем кэшировать определенные типы данных, на пример, сложные функции или
// если мы храним результат запроса к серверу не в состоянии, а в переменной(очень редко используется)
// В основном useMemo используется для хранения результата каких-либо сложно нагруженных
// функций, это могут быть как данные (массивы, объекты), так и компоненты.

// Мы используем мемоизацию в том случае, если необходимо сохранить данные, результат функции.
// Если необходимо сохранить обращение к функции, используем useCallback.

// useMemo стоит использовать в случае необходимости, т.к. может привести к замедлению проекта.

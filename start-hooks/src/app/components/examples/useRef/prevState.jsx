import React, { useRef, useState, useEffect } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "./../../common/divider";
const PrevStateExample = () => {
    const prevState = useRef("");
    const [otherState, setOtherState] = useState("false");
    const toggleOtherState = () => {
        setOtherState((prevState) =>
            prevState === "false" ? "true" : "false"
        );
    };
    useEffect(() => {
        prevState.current = otherState;
    }, [otherState]); // добавляем зависимость от otherState, т.к. prevState будет изменяться, если будет изменяться otherState

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            <Divider />
            <p>prev State: {prevState.current}</p>
            <p>current State: {otherState}</p>
            <button className="btn btn-primary" onClick={toggleOtherState}>
                Toggle Other State
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;

// Мы для нашего референса устанавливаем состояние state, но оно сохраняется как предыдущее состояние.
// Мы получим следующее значение, только если наш компонент перерендерится снова, и тогда ему
// будет присвоено значение, которое находится в state в текущий момент.

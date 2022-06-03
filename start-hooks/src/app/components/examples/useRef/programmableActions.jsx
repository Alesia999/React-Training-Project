import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
import Divider from "./../../common/divider";
const ProgrammableActionsExample = () => {
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.focus();
    };
    const handleClickWidth = () => {
        inputRef.current.style.width = "100px";
    };
    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email{" "}
            </label>
            <input
                ref={inputRef}
                type="email"
                className="form-control"
                id="email"
            ></input>
            <button className="btn btn-primary" onClick={handleClick}>
                Focus Input
            </button>
            <button className="btn btn-secondary" onClick={handleClickWidth}>
                Change Width
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;

// При помощи референса мы получаем нечто похожее как при ванилла-джаваСкрипт мы бы искали по id.
// C помощью референсов компонентов можно управлять этими компонентами, их стилями,
// функциями, которые можно к ним применить, выполнять искусственные действия (focus, click) и т.д.

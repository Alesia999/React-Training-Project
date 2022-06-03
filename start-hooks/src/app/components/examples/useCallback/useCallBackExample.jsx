import React, { useState, useRef, useEffect, useCallback } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);
    const withCallback = useRef(0);
    const handleChange = ({ target }) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }));
    };
    // Without callback
    const validateWithoutCallback = (data) => {
        console.log(data);
    };
    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    // With callback
    const validateWithCallback = useCallback((data) => {
        console.log(data);
    }, []);

    useEffect(() => {
        withCallback.current++;
    }, [validateWithCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
        validateWithCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <p>Render withoutCallback: {withoutCallback.current}</p>
            <p>Render withCallback: {withCallback.current}</p>
            <label htmlFor="email" className="form-label">
                Email{" "}
            </label>
            <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={data.email || ""}
                onChange={handleChange}
            ></input>
        </CardWrapper>
    );
};

export default UseCallBackExample;

// useCallback позволяет сравнивать предыдущие и следующие состояния и говорить о том, что они равные.
// В случае JS всё является ссылочным. И поэтому когда мы проверяем ссылки, они всегда разнятся.
// В случае useCallback, это будет одинаково. Получается, что при сравнении предыдущего и
// последующего состояний, мы получаем равенство.
// В некоторых случаях при добавлении функции в зависимости в useEffect, мы получаем бесконечный
// рендер. Именно в таких случаях или в случае архивации тяжелых функций для их сравнения,
// useCallback может нам помочь. Но так же как и с useMemo, нужно применять его с умом.

// useCallback хранит целую функцию внутри, а useMemo хранит результат функции.

import {useCallback, useEffect, useState} from "react";
import Key from "../key/Key";
import {NOTES, VALID_KEYS} from "../../constants/notes";
import {Wrapper, Content, Div, Title} from "./Piano.style";
import Error from "../error/Error";

const Piano = () => {
    const [pressedKey, setPressedKey] = useState(null);
    const [error, setError] = useState(false);

    const handleKeyUp = useCallback(() => {
        setPressedKey(null);
    }, []);

    const handleKeyDown = useCallback((event) => {
        if (event.repeat) return;
        const key = event.key;
        if (VALID_KEYS.includes(key)) {
            setError(false);
            setPressedKey(key);
        } else {
            setError(true);
        }
    }, []);

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("keyup", handleKeyUp);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("keyup", handleKeyUp);
        };
    }, [handleKeyDown, handleKeyUp]);

    const keys = NOTES.map(item => {
        let isPressed = pressedKey === item.key;
        return (
            <Key
                key={item.id}
                item={item}
                isPressed={isPressed}
            />
        )
    });

    return (
        <Div>
            <Title>PIANO</Title>
            <Wrapper>
                <Content>{keys}</Content>
            </Wrapper>
            {error && <Error />}
        </Div>
    );
};

export default Piano;

import {useContext, useEffect} from "react";
import {Wrapper, Text} from "./Key.style";
import {TonesContext} from "../../context/context";

const Key = ({item, isPressed}) => {
    const {audioContext, buffer, primaryGain} = useContext(TonesContext);
    const {note, sound} = item;
    const isFlat = note.length > 1;

    useEffect(() => {
        if (isPressed) {
            const kickOscillator = audioContext.createOscillator();
            kickOscillator.frequency.setValueAtTime(item.sound, 0);
            kickOscillator.connect(primaryGain);
            kickOscillator.start();
            kickOscillator.stop(audioContext.currentTime + 0.5);
        }
    }, [audioContext, buffer, isPressed, item.sound, primaryGain, sound]);

    return (
        <Wrapper isFlat={isFlat}
                 isPressed={isPressed}>
            <Text>
                {!isFlat && note.toUpperCase()}
            </Text>
        </Wrapper>
    );
};

export default Key;

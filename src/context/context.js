import {createContext} from 'react';

const audioContext = new AudioContext();

const primaryGain = audioContext.createGain();
primaryGain.gain.setValueAtTime(0.05, 0);
primaryGain.connect(audioContext.destination);

const buffer = audioContext.createBuffer(
    1,
    audioContext.sampleRate * 1,
    audioContext.sampleRate
);

export const TonesContext = createContext(null);

const AudioProvider = ({children}) => {
    return (
        <TonesContext.Provider value={{audioContext, primaryGain, buffer}}>
            {children}
        </TonesContext.Provider>
    );
};

export default AudioProvider;

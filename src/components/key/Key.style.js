import {styled} from "@mui/system";

export const Wrapper = styled("div", {
    shouldForwardProp: (prop) => prop !== 'isFlat' && prop !== 'isPressed',
})(({isFlat, isPressed}) => ({
    backgroundColor: isPressed ? '#00FFFF' : isFlat ? '#000' : '#fff',
    display: !isFlat && 'flex',
    flexDirection: !isFlat && 'column',
    justifyContent: !isFlat && 'flex-end',
    alignItems: !isFlat && 'center',
    position: isFlat && 'relative',
    margin: isFlat && '0 -2rem',
    height: isFlat ? '20rem' : '30rem',
    width: isFlat ? '4rem' : '7rem',
    zIndex: isFlat && 2,
    borderRight: !isFlat && '.1rem solid #000',
    cursor: 'pointer',
    transition: 'backgroundColor 1s ease'
}));

export const Text = styled("div")({
    fontSize: '3rem',
    color: '#000',
    position: 'relative'
});

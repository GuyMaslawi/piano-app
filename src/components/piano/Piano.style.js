import {styled} from '@mui/system';

export const Wrapper = styled("div")({
    backgroundColor: '#000',
    height: '33rem',
    width: '60rem',
    position: 'relative',
    zIndex: 0,
    borderRadius: '2rem'
});

export const Content = styled("div")({
    display: 'flex',
    position: 'absolute',
    zIndex: 1,
    bottom: '-4rem',
    left: '5.5rem',

    'div:first-of-type': {
        borderTopLeftRadius: '2rem',
        borderBottomLeftRadius: '2rem'
    },
    'div:last-of-type': {
        borderTopRightRadius: '2rem',
        borderBottomRightRadius: '2rem',
        borderRight: '0',
    }
});

export const Title = styled("h1")({
    fontSize: '5rem',
    color: '#fff',
    textAlign: 'center',
    marginBottom: '5rem',
    letterSpacing: '1rem'
});

export const Div = styled("div")({
    fontSize: '3rem',
    color: '#fff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
});


import {AlertStyle} from "./Error.style";

const Error = () => {
    return (
        <AlertStyle elevation={6}
                    severity="error"
                    variant="filled"
        >
            Key Is Not Allowed!
        </AlertStyle>
    );
};

export default Error;

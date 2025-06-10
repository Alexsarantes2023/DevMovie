import { ButtonRed, ButtonWite } from "./styles";


function Button({ children, red, ...rest }) {
    return (
        <>
            {red ? <ButtonRed {...rest}>{children}</ButtonRed> : <ButtonWite {...rest}>{children}</ButtonWite>}
        </>
    )
}
export default Button;
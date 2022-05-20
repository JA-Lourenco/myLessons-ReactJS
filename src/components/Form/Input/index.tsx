import { InputHTMLAttributes } from "react";
import { Container, Label } from "./styles";

export function Input({ id, ...rest }: InputHTMLAttributes<HTMLInputElement>) {

    return(
        <Label htmlFor={id}>{id}
            <Container id={id} {...rest}>

            </Container>
        </Label>
    )
}
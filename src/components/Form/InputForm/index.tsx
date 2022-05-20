import { Input } from "../Input";

import { InputHTMLAttributes } from "react";
import { Control, Controller } from "react-hook-form";

import { Container, Error } from "./styles";

interface InputFormProps extends InputHTMLAttributes<HTMLInputElement> {
    control: Control
    name: string
    error?: string
}

export function InputForm({ 
    control, 
    name,
    error,
    ...rest
}: InputFormProps) {
    
    return (
        <Container>
            <Controller
                control={control}
                render={({ field: { onChange, value }}) => (
                    <Input 
                        onChange={onChange}
                        value={value}
                        {...rest}
                    />
                )}
                name={name}
            />

            {error && <Error>{error}</Error>}
        </Container>
    )
}
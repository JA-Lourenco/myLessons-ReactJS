import { Container, Box } from "./styles";

interface CheckboxProps {
    id: string
    name: string
}

export function Checkbox({ id, name }: CheckboxProps) {
    return (
        <Container htmlFor={id} >
            <Box 
                id={id} 
                name={name}
                type='checkbox'
            >

            </Box>

            {name}
        </Container>
    )
}
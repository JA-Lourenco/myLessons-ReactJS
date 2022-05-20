import { Container } from "./styles"

interface ButtonProps {
    title: string
    color?: string
    onClick: () => void
}

export function Button({ 
    title, 
    color,
    onClick
}: ButtonProps) {

    return (
        <Container 
            color={color}
            onClick={onClick}
        >
            {title}
        </Container>
    )
}
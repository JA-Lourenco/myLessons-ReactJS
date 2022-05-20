import { FiEdit } from "react-icons/fi";
import { SelectedDaysProps } from "../../pages/Insert";
import { Container, Header, EditIconButton } from "./styles"

interface LessonCardProps {
    lesson: string
    obs: string
    days: Array<SelectedDaysProps>
    onClick: () => void
}

export function LessonCard({
    lesson,
    obs,
    days,
    onClick
}: LessonCardProps) {

    return (
        <Container>
            <Header>
                <h3>{lesson}</h3>

                <EditIconButton onClick={onClick}>
                    <abbr title="Editar">
                        <FiEdit
                            color='#ED547C'
                            size={18}
                        />
                    </abbr>
                </EditIconButton>
            </Header>

            
            {
                days.map((day) => day.checked && <span>{day.name}</span>)
            }


            <p>{obs}</p>
        </Container>
    )
}
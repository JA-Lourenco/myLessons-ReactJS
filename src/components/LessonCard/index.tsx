import { FiEdit } from "react-icons/fi";
import { SelectedDaysProps } from "../../pages/Insert";
import { 
    Container, 
    Header, 
    Name,
    EditIconButton,
    Days,
    Obs
} from "./styles"

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

    const daysSelected = days.filter((item) => item.checked)

    return (
        <Container>
            <Header>
                <Name>{lesson}</Name>

                <EditIconButton onClick={onClick}>
                    <abbr title="Editar">
                        <FiEdit
                            color='#ED547C'
                            size={18}
                        />
                    </abbr>
                </EditIconButton>
            </Header>

            <Days>            
                {
                    daysSelected.map((day) => day.name).join(', ')
                }
            </Days>

            <Obs value={obs} disabled />
        </Container>
    )
}
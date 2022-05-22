import { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
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
    id: string
    lesson: string
    obs: string
    days: Array<SelectedDaysProps>
}

export function LessonCard({
    id,
    lesson,
    obs,
    days
}: LessonCardProps) {
    const daysSelected = days.filter((item) => item.checked)

    const navigate = useNavigate()

    function handleLessonEdit() {
        navigate('/details',  { state: id } )
    }

    return (
        <Container>
            <Header>
                <Name>{lesson}</Name>

                <EditIconButton onClick={handleLessonEdit}>
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
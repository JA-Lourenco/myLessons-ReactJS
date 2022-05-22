import { useEffect, useState } from "react";

import api from "../../services/api";

import { Button } from "../../components/Button"
import { DeleteModal } from "../../components/DeleteModal";

import { LessonDTO } from "../../dtos/LessonDTO";

import { useLocation, useNavigate } from "react-router-dom";

import { 
    Container,
    Header,
    Content,
    Obs,
    LabelCheckbox,
    Checkbox,
    ButtonArea
} from "./styles"

const DAYS = [
    {
        id: 0,
        name: 'monday',
        checked: false,
        ptName: 'Segunda-feira'
    },
    {
        id: 1,
        name: 'tuesday',
        checked: false,
        ptName: 'Terça-feira'
    },
    {
        id: 2,
        name: 'wednesday',
        checked: false,
        ptName: 'Quarta-feira'
    },
    {
        id: 3,
        name: 'thursday',
        checked: false,
        ptName: 'Quinta-feira'
    },
    {
        id: 4,
        name: 'friday',
        checked: false,
        ptName: 'Sexta-feira'
    },
    {
        id: 5,
        name: 'saturday',
        checked: false,
        ptName: 'Sábado'
    },
    {
        id: 6,
        name: 'sunday',
        checked: false,
        ptName: 'Domingo'
    }
]

export function Details() {
    const [lesson, setLesson] = useState<LessonDTO>()
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

    const navigate = useNavigate()

    const {state} = useLocation();
    const id = state

    function handleIsDeleteModalOpen() {
        setIsDeleteModalOpen(true)
    } 
    function handleIsDeleteModalClose() {
        setIsDeleteModalOpen(false)
    }

    function handleBackToHome() {
        navigate('/')
    }
    
    async function handleDeleteLesson() {
        try {
            await api.delete(`/Lessons/${id}`)
            alert('Registro removido com sucesso!')
            navigate('/')
        } catch (error) {
            console.log('Screen: Details\nFunction: handleDeleteLesson\nerror:', error)
            alert('Não foi possível remover o registro!')
        }
    }

    useEffect(() => {
        async function handleGetLesson() {
            try {
                const response = await api.get(`/Lessons/${id}`)

                console.log(response)
                
                let temp = []
                temp.push({...DAYS[0], checked: response.data.monday === 'S' ? true : false})
                temp.push({...DAYS[1], checked: response.data.tuesday === 'S' ? true : false})
                temp.push({...DAYS[2], checked: response.data.wednesday === 'S' ? true : false})
                temp.push({...DAYS[3], checked: response.data.thursday === 'S' ? true : false})
                temp.push({...DAYS[4], checked: response.data.friday === 'S' ? true : false})
                temp.push({...DAYS[5], checked: response.data.saturday === 'S' ? true : false})
                temp.push({...DAYS[6], checked: response.data.sunday === 'S' ? true : false})
    
                setLesson({...response.data, days: temp})
    
            } catch (error) {
                console.log('Screen: Details\nFunction: handleGetLesson\nerror:', error)
                alert('Não foi possível carregar os dados da Matéria!')
            } 
        }

        handleGetLesson()
    },[id])
    
    return(
        <Container>
            <Header>
                <Button 
                    title='Home'
                    onClick={handleBackToHome}
                />

                <h1>{lesson?.lesson}</h1>
            </Header>

            <hr />

            <Content>
                <Obs>
                    {lesson?.obs}
                </Obs>
                
                {
                    lesson?.days.map((item) => 
                        <LabelCheckbox key={item.id}>
                            <Checkbox
                                type='checkbox'
                                key={item.id}
                                checked={item.checked}
                                readOnly
                            />

                            {item.ptName}
                        </LabelCheckbox>
                    )
                }
                
            </Content>

            <hr />

            <ButtonArea>
                    <Button 
                        title='Editar'
                        color=''
                        onClick={() => {}}
                    />

                    <Button 
                        title='Excluir'
                        color='#5429CC'
                        onClick={handleIsDeleteModalOpen}
                    />
            </ButtonArea>

            <DeleteModal 
                isOpen={isDeleteModalOpen}
                onRequestClose={handleIsDeleteModalClose}
                handleDelete={handleDeleteLesson}
            />
        </Container>
    )
}
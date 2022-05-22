import { useEffect, useState } from "react"

import api from "../../services/api"

import { Button } from "../../components/Button"
import { LessonCard } from "../../components/LessonCard"

import { LessonDTO } from "../../dtos/LessonDTO"

import { useNavigate } from "react-router-dom"

import { 
    Container,
    Header,
    Content,
    ButtonArea,
    TotalItems
} from "./styles"

const DAYS = [
    {
        id: 0,
        name: 'Segunda',
        checked: false
    },
    {
        id: 1,
        name: 'Terça',
        checked: false
    },
    {
        id: 2,
        name: 'Quarta',
        checked: false
    },
    {
        id: 3,
        name: 'Quinta',
        checked: false
    },
    {
        id: 4,
        name: 'Sexta',
        checked: false
    },
    {
        id: 5,
        name: 'Sábado',
        checked: false
    },
    {
        id: 6,
        name: 'Domingo',
        checked: false
    }
]

export function Home() {
    const [lesson, setLesson] = useState<LessonDTO[]>([])

    const navigate = useNavigate()

    async function handleGetLessons() {
        try {
            const response = await api.get('/Lessons')
            let tempArray = response.data.map((item: any) => {
                let temp = []
                temp.push({...DAYS[0], checked: item.monday === 'S' ? true : false})
                temp.push({...DAYS[1], checked: item.tuesday === 'S' ? true : false})
                temp.push({...DAYS[2], checked: item.wednesday === 'S' ? true : false})
                temp.push({...DAYS[3], checked: item.thursday === 'S' ? true : false})
                temp.push({...DAYS[4], checked: item.friday === 'S' ? true : false})
                temp.push({...DAYS[5], checked: item.saturday === 'S' ? true : false})
                temp.push({...DAYS[6], checked: item.sunday === 'S' ? true : false})

                return {...item, days: temp}
            })

            setLesson(tempArray)

        } catch (error) {
            console.log('Screen: Lessons\nFunction: handleGetLessons\nerror:', error)
        } 
    }
    
    useEffect(() => {
        handleGetLessons()
    },[])

    function handleAdding() {
        navigate('/insert')
    }

    function handleEdit() {
        navigate('/update')
    }

    return (
        <Container>
            <Header>
                <h1>Home</h1>

                <TotalItems>Você possui um total de {lesson.length} itens</TotalItems>

                <ButtonArea>
                    <Button 
                        title='+ Adicionar'
                        color='#ED547C'
                        onClick={handleAdding}
                    />
                </ButtonArea>
            </Header>

            <hr />

            <Content>
                {
                    lesson.map((item) =>
                        <LessonCard 
                            key={item.id}
                            lesson={item.lesson}
                            obs={item.obs}
                            days={item.days}
                            onClick={handleEdit}
                        />
                    )
                }
            </Content>

            <hr />
        </Container>
    )
}


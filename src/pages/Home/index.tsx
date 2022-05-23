import { useEffect, useState } from "react"

import api from "../../services/api"

import { Button } from "../../components/Button"
import { LessonCard } from "../../components/LessonCard"
import { Load } from "../../components/Load"

import { LessonDTO } from "../../dtos/LessonDTO"
import { DAYS } from "../../dtos/DAYSDTO"

import { useNavigate } from "react-router-dom"

import { 
    LoadContainer,
    Container,
    Header,
    Content,
    ButtonArea,
    TotalItems
} from "./styles"

export function Home() {
    const [lesson, setLesson] = useState<LessonDTO[]>([])
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleGetLessons() {
        setLoading(true)

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
            alert('Não foi possível carregar os registros!')
            console.log('Screen: Lessons\nFunction: handleGetLessons\nerror:', error)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        handleGetLessons()
    },[])

    function handleAdding() {
        navigate('/insert')
    }

    return (
        <>
            {
                loading 
                ? <LoadContainer> <Load title="Carregando..."/> </LoadContainer>
                :
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
                                    id={item.id}
                                    key={item.id}
                                    lesson={item.lesson}
                                    obs={item.obs}
                                    days={item.days}
                                />
                            )
                        }
                    </Content>

                    <hr />
                </Container>
            }
        </>
    )
}


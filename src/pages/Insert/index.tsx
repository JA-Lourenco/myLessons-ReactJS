import { useState } from "react"

import { Button } from "../../components/Button"
import { InputForm } from "../../components/Form/InputForm"

import api from "../../services/api"

import { v4 as uuidv4 } from 'uuid'
import { useForm } from 'react-hook-form'
import { useNavigate } from "react-router-dom"

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { LessonDTO } from "../../dtos/LessonDTO"

import { 
    Container,
    Header,
    Content,
    ButtonArea
} from "./styles"
import { Checkbox } from "../../components/Checkbox"

export interface SelectedDaysProps {
    id: number
    name: string
    checked: boolean
}

const schema = yup.object().shape({
    lesson: yup
        .string()
        .required('O campo Matéria deve ser preenchido!'),
    obs: yup
        .string()
        .required('O campo Obersvação deve ser preenchido!'),
})

const DAYS = [
    {
        id: 0,
        name: 'Segunda-feira',
        checked: false
    },
    {
        id: 1,
        name: 'Terça-feira',
        checked: false
    },
    {
        id: 2,
        name: 'Quarta-feira',
        checked: false
    },
    {
        id: 3,
        name: 'Quinta-feira',
        checked: false
    },
    {
        id: 4,
        name: 'Sexta-feira',
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

export function Insert() {
    const [days, setDays] = useState<SelectedDaysProps[]>(DAYS)

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    })

    const navigate = useNavigate()

    async function handleSave(form: Partial<LessonDTO>) {
        const data = {
            id: String(uuidv4()),
            lesson: form.lesson,
            obs: form.obs,
            monday: form.monday,
            tuesday: form.tuesday,
            wednesday: form.wednesday,
            thursday: form.thursday,
            friday: form.friday,
            saturday: form.saturday,
            sunday: form.sunday
        }

        try {
            await api.post('/lessons', data)
            navigate('/')
        } catch (error) {
            console.log(error)
            alert("Não foi possível realizar o cadastro!")
        }
    }

    function handleBackToHome() {
        navigate('/')
    }

    return(
        <Container>
            <Header>
                <Button 
                    title='Home'
                    onClick={handleBackToHome}
                />

                <h1>Adicionar Matéria</h1>
            </Header>

            <hr />

            <Content>
                <InputForm 
                    id='Matéria'
                    name='lesson'
                    control={control}
                    placeholder='Insira o Código'
                    error={errors.code && errors.code.message}
                />

                <InputForm 
                    id='Observação'
                    name='obs'
                    control={control}
                    placeholder='Insira o Título'
                    error={errors.title && errors.title.message}
                />
                
                {
                    days.map((item, index) => 
                        <Checkbox 
                            key={item.id}
                            name={item.name}
                            id={item.name}
                        />
                    )
                }
        
            </Content>

            <ButtonArea>
                    <Button 
                        title='Cadastrar'
                        color='#ED547C'
                        onClick={handleSubmit(handleSave)}
                    />
            </ButtonArea>

            <hr />
        </Container>
    )
}
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
    LabelCheckbox,
    Checkbox,
    ButtonArea
} from "./styles"


export interface SelectedDaysProps {
    id: number
    name: string
    checked: boolean
    ptName: string
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

export function Insert() {
    const {
        control,
        handleSubmit,
        register,
        reset,
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
            monday: form.monday ? 'S' : 'N',
            tuesday: form.tuesday ? 'S' : 'N',
            wednesday: form.wednesday ? 'S' : 'N',
            thursday: form.thursday ? 'S' : 'N',
            friday: form.friday ? 'S' : 'N',
            saturday: form.saturday ? 'S' : 'N',
            sunday: form.sunday ? 'S' : 'N'
        }

        try {
            await api.post('/lessons', data)
            alert('Matéria cadastrada com sucesso!')
            navigate('/')
            reset()
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
                    error={errors.code && errors.code.message}
                />

                <InputForm 
                    id='Observação'
                    name='obs'
                    control={control}
                    error={errors.title && errors.title.message}
                />
                
                {
                    DAYS.map((item) => 
                        <LabelCheckbox key={item.id}>
                            <Checkbox
                                type='checkbox'
                                key={item.id}
                                id={item.name}
                                {...register(`${item.name}`)}
                            />

                            {item.ptName}
                        </LabelCheckbox>
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
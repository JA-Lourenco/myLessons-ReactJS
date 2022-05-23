import { Button } from "../../components/Button"
import { InputForm } from "../../components/Form/InputForm"

import api from "../../services/api"

import { useForm } from 'react-hook-form'
import { useLocation, useNavigate } from "react-router-dom"

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

import { LessonDTO } from "../../dtos/LessonDTO"
import { DAYS } from "../../dtos/DAYSDTO"

import { 
    Container,
    Header,
    Content,
    LabelCheckbox,
    Checkbox,
    ButtonArea
} from "./styles"

const schema = yup.object().shape({
    lesson: yup
        .string()
        .required('O campo Matéria deve ser preenchido!'),
    obs: yup
        .string()
        .required('O campo Observação deve ser preenchido!'),
})

export function Edit() {
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

    const {state} = useLocation();
    const id = state

    async function handleSave(form: Partial<LessonDTO>) {
        try {
            await api.put(`/Lessons/${id}`, {
                lesson: form.lesson,
                obs: form.obs,
                monday: form.monday ? 'S' : 'N',
                tuesday: form.tuesday ? 'S' : 'N',
                wednesday: form.wednesday ? 'S' : 'N',
                thursday: form.thursday ? 'S' : 'N',
                friday: form.friday ? 'S' : 'N',
                saturday: form.saturday ? 'S' : 'N',
                sunday: form.sunday ? 'S' : 'N'
            })
            alert('Matéria alterada com sucesso!')
            navigate('/')
            reset()
        } catch (error) {
            console.log(error)
            alert("Não foi possível alterar o cadastro!")
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

                <h1>Editar Matéria</h1>
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
                        title='Editar'
                        color='#ED547C'
                        onClick={handleSubmit(handleSave)}
                    />
            </ButtonArea>

            <hr />
        </Container>
    )
}
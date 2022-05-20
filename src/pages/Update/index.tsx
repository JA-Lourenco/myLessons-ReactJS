import { Button } from "../../components/Button"
import { InputForm } from "../../components/Form/InputForm"

import { useForm } from 'react-hook-form'

import { 
    Container,
    Header,
    Content,
    ButtonArea
} from "./styles"

interface UpdateProps {
    onOpenDeleteModal: () => void
}

export function Update({ onOpenDeleteModal }: UpdateProps) {
    const {
        control,
        handleSubmit,
    } = useForm()

    function handleSave(form: any) {
        const data = {
            code: form.code,
            title: form.title,
            description: form.description
        }

        console.log(data)
    }

    return(
        <Container>
            <Header>
                <h1>Update</h1>

                <ButtonArea>
                    <Button 
                        title='Excluir'
                        color='#5429CC'
                        onClick={onOpenDeleteModal}

                    />
                    
                    <Button 
                        title='Salvar'
                        color=''
                        onClick={handleSubmit(handleSave)}
                    />
                </ButtonArea>
            </Header>

            <hr />

            <Content>
                <InputForm 
                    id='Código'
                    name='code'
                    control={control}
                    placeholder='Insira o Código'
                />

                <InputForm 
                    id='Título'
                    name='title'
                    control={control}
                    placeholder='Insira o Título'
                />

                <InputForm 
                    id='Descrição'
                    name='description'
                    control={control}
                    placeholder='Insira a Descrição'
                />
            </Content>
        </Container>
    )
}
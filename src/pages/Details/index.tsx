import { Button } from "../../components/Button"

import { 
    Container,
    Header,
    Content,
    Obs,
    ButtonArea
} from "./styles"

interface DetailsProps {
    onOpenDeleteModal: () => void
}

export function Details({ onOpenDeleteModal }: DetailsProps) {
    return(
        <Container>
            <Header>
                <h1>Português</h1>
            </Header>

            <hr />

            <Content>
                <Obs>
                    Observação:{'\n'}
                    Realizar estudo diário
                </Obs>
                
            </Content>

            <hr />

            <ButtonArea>
                    <Button 
                        title='Excluir'
                        color='#5429CC'
                        onClick={onOpenDeleteModal}

                    />
                    
                    <Button 
                        title='Salvar'
                        color=''
                        onClick={() => {}}
                    />
                </ButtonArea>
        </Container>
    )
}
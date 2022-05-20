import Modal from 'react-modal'

import { Button } from '../Button'

import { useNavigate } from 'react-router-dom'

import { Container, ButtonArea } from './styles'

interface DeleteModalProps {
    isOpen: boolean
    onRequestClose: () => void
}

export function DeleteModal({ isOpen, onRequestClose }: DeleteModalProps) {

    const navigate = useNavigate()

    function handleDelete() {
        navigate('/')
        onRequestClose()
    }

    return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
            >
                <Container>
                    <h2>Confirma a exclusão?</h2>

                    <p>Deseja remover o registro?</p>

                    <hr />
                    
                    <ButtonArea>
                        <Button 
                            title='Cancelar'
                            onClick={onRequestClose}
                        />

                        <Button 
                            title='Confirmar'
                            color='#5429CC'
                            onClick={handleDelete}
                        />
                    </ButtonArea>
                </Container>
            </Modal>
        
    )
}
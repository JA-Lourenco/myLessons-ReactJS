import Modal from 'react-modal'

import { Button } from '../Button'

import { useNavigate } from 'react-router-dom'

import { Container, ButtonArea } from './styles'

interface DeleteModalProps {
    isOpen: boolean
    onRequestClose: () => void
    handleDelete: () => void
}

export function DeleteModal({ isOpen, onRequestClose, handleDelete }: DeleteModalProps) {

    const navigate = useNavigate()

    return (
            <Modal
                isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName='react-modal-overlay'
                className='react-modal-content'
            >
                <Container>
                    <h2>Atenção</h2>

                    <p>Confirma a remoção da matéria?</p>

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
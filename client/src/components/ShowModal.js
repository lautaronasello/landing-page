import React from 'react'
import{Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

export default function ShowModal(openModal) {
    return (
        <div>
            <Modal isOpen={openModal}>
                <ModalHeader>
                    Producto
                </ModalHeader>
                <ModalBody>
                    <div className="col-3">imagen</div>
                    <div className="col-9">descripcion</div>
                </ModalBody>
                <ModalFooter>
                    Comprar
                </ModalFooter>
            </Modal>
        </div>
    )
}

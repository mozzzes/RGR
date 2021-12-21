import React, {useState} from 'react';
import { Button, Form, FormControl, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Modal from "react-bootstrap/Modal";
import {createType} from "../../http/deviceAPI";



const CreateType = ({show, onHide}) => {
        const [value, setValue] = useState('')
        const addType = () => {
            createType({name: value}).then(data => {
                setValue('')
                onHide()
            })
        }
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">New Type</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl value={value} onChange={e => setValue(e.target.value)} placeholder={"Name type..."}/>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={addType}>Save</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateType;
import React, {useState} from 'react';
import { Button, Form, FormControl, ModalBody, ModalFooter, ModalTitle} from 'react-bootstrap';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Modal from "react-bootstrap/Modal";
import {createBrand, createType} from "../../http/deviceAPI";

const CreateBrand = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addBrand = () => {
        createBrand({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter"> New Brand</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl value={value} onChange={e => setValue(e.target.value)} placeholder={"Name brand..."}/>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={addBrand}>Save</Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateBrand;
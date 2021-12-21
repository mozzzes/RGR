import React, { useContext, useEffect, useState } from 'react';
import { Button, Col, Dropdown, Form, FormControl, ModalBody, ModalFooter, ModalTitle, Row} from 'react-bootstrap';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import ModalHeader from 'react-bootstrap/esm/ModalHeader';
import Modal from "react-bootstrap/Modal";
import {createDevice, fetchBrands, fetchDevices, fetchTypes} from "../../http/deviceAPI";
import { Context } from '../..';
import { observer } from 'mobx-react-lite';

const CreateDevice = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createDevice(formData).then(data => onHide())
    }

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">New Device</ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <Dropdown className="mt-2">
                        <DropdownToggle>{device.selectedType.name || "Choose type"}</DropdownToggle>
                        <DropdownMenu>
                            {device.types.map(type =>
                                <DropdownItem onClick={() => device.setSelectedType(type)} key={type.id}>{type.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>

                    <Dropdown className="mt-2">
                        <DropdownToggle>{device.selectedBrand.name || "Choose brand"}</DropdownToggle>
                        <DropdownMenu>
                            {device.brands.map(brand =>
                                <DropdownItem onClick={() => device.setSelectedBrand(brand)} key={brand.id}>{brand.name}</DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>
                    <FormControl value={name} onChange={e => setName(e.target.value)} className="mt-3" placeholder={"Enter a name"}/>
                    <FormControl value={price} onChange={e => setPrice(Number(e.target.value))} type="number" className="mt-3" placeholder={"Enter a price"}/>
                    <FormControl onChange={selectFile} className="mt-3" type="file"/>
                    <Button className="mt-3" variant="outline-primary" onClick={addInfo}>Add propery</Button>

                    {info.map(i =>
                        <Row key={i.number} className="mt-3">
                            <Col md={4}>
                                <FormControl value={i.title} onChange={(e) => changeInfo('title', e.target.value, i.number)}  placeholder="Enter name propery"/>
                            </Col>
                            <Col md={4}>
                                <FormControl value={i.description} onChange={(e) => changeInfo('description', e.target.value, i.number)} placeholder="Enter description propery"/>
                            </Col>
                            <Col md={4}>
                                <Button onClick={() => removeInfo(i.number)} variant="danger">Delete</Button>
                            </Col>
                        </Row>
                    )}
                </Form>
                
            </ModalBody>
            <ModalFooter>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="primary" onClick={addDevice}>Save</Button>
            </ModalFooter>
        </Modal>
    );
});

export default CreateDevice;
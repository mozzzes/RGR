import React from 'react'
import { Card, Col, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { DEVICE_RT } from '../utils/consts';

const DeviceItem = ({device}) => {
    const history = useHistory()
    console.log(history)
    return (
        <Col md={3} className={"mt-3"} onClick={() => history.push(DEVICE_RT + '/' + device.id)}>
            <Card style={{width: '18rem', cursor: 'pointer'}} border={"light"}>
                <Image variant="top" width={150} height={150} src={'http://localhost:5000/' + device.img}/>
                
                <Card.Title className="mt-1"> {device.name} </Card.Title>
                <div className="d-flex">
                </div>
            </Card>

        </Col>
        
    );
};

export default DeviceItem;
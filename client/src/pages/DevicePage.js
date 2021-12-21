import React, {useEffect, useState} from 'react';
import { Button, Card, CardImg, Col, Container, Image, Row } from 'react-bootstrap';
import {useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";

function DevisePage() {
  const [device, setDevice] = useState ({info: []})
  const {id} = useParams()
  

  useEffect(() => {
      fetchOneDevice(id).then(data => setDevice(data))
  }, [])


    return (
    <Container className="mt-3">
        <Row>
          <Col md={4}>
          <CardImg width={300} height={300} src={'http://localhost:5000/' + device.img} />
          </Col>
          <Col md={4}>
          <Row className="d-flex mt-3">
            <h4 style={{color: 'blue'}}>Characteristic</h4>
              {device.info.map((info, index) =>
                  <Row key={info.id} style={{padding: 10}}><h5>{info.title}: {info.description}</h5></Row>
              )}
            </Row>
          </Col>
          <Col md={4}>
          <Row className="d-flex flex-column align-items-center">
              <Card className="d-flex flex-column align-items-center justify-content-around" style={{width: 300, height: 150}}>
              <h3>{device.name}</h3>
              <h4>{device.price}$</h4>
              <Button variant="primary">Buy</Button>
              </Card>
            </Row>
          </Col>
        </Row>
    </Container>
  );
}

export default DevisePage;

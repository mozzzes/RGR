import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '..';
import BrandBar from '../components/BrandBar';
import DeviceItem from '../components/DeviceItem';
import DeviceList from '../components/DeviceList';
import Pages from '../components/Pages';
import {fetchBrands, fetchDevices, fetchTypes} from "../http/deviceAPI";
import TypeBar from '../components/TypeBar';

const Shop = observer(() => {
  const {device} = useContext(Context)

  useEffect(() => {
    fetchTypes().then(data => device.setTypes(data))
    fetchBrands().then(data => device.setBrands(data))
    fetchDevices().then(data => device.setDevices(data.rows))
    fetchDevices(null, null, 1, 8).then(data => {
        device.setDevices(data.rows)
        device.setTotalCount(data.count)
    })
    }, [])

useEffect(() => {
        fetchDevices(device.selectedType.id, device.selectedBrand.id, device.page, 8).then(data => {
            device.setDevices(data.rows)
            device.setTotalCount(data.count)
        })
    }, [device.page, device.selectedType, device.selectedBrand,])

  return (
    <Container>
        <Row>
            <Col md={3}>
                <TypeBar />
                <BrandBar/>
                
            </Col>
            <Col md={9}>
                <DeviceList/>
                <Pages/>
                
            </Col>
        </Row>
    </Container>
  );
});

export default Shop;

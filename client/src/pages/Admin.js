import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CreateBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import CreateType from '../components/modals/CreateType';

const Admin = () => {
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)
  const [brandVisible, setBrandVisible] = useState(false)
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Card style={{width: 600}} className="p-3 mt-3">
        
          <h4>Admin panel</h4>
        
        <Button variant="outline-primary" className="p-1 mt-2" onClick={() => setTypeVisible(true)}>Add Type</Button>
        <Button variant="outline-primary" className="p-1 mt-2" onClick={() => setBrandVisible(true)}>Add Brand</Button>
        <Button variant="outline-primary" className="p-1 mt-2" onClick={() => setDeviceVisible(true)}>Add Device</Button>
        <CreateBrand show={brandVisible} onHide = {() => setBrandVisible(false)}/>
        <CreateDevice show={deviceVisible} onHide = {() => setDeviceVisible(false)}/>
        <CreateType show={typeVisible} onHide = {() => setTypeVisible(false)}/>
      </Card>
    </Container>
    
  );
};

export default Admin;

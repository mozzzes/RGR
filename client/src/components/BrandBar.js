import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import { fetchBrands } from '../http/deviceAPI';
import { Context } from '../index';

const BrandBar = observer(() => {
    const {device} = useContext(Context)
    return (
        
        <div className="mt-3">
            <h5>Brands</h5>
        <ListGroup>
            {device.brands.map(brand =>
                <ListGroupItem active={fetchBrands.id === device.selectedBrand.id} onClick={() => device.setSelectedBrand(brand)} key={brand.id} action variant="primary">{brand.name}</ListGroupItem>
            )}
        </ListGroup>
    </div>
    );
});

export default BrandBar;
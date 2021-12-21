import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Context } from '../index';

const TypeBar = observer(() => {
    const {device} = useContext(Context)
  return (
    <div className="mt-3">
        <h5>Types</h5>
        <ListGroup>
            {device.types.map(type =>
                <ListGroup.Item active={type.id === device.selectedType.id} onClick={() => device.setSelectedType(type)} key={type.id} action variant="primary">{type.name}</ListGroup.Item>
            )}
        </ListGroup>
    </div>
  );
});

export default TypeBar;

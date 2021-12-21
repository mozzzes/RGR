import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Context } from '../index';
import {observer} from 'mobx-react-lite'
import {useHistory} from 'react-router-dom'
import { ADMIN_RT, LOGIN_RT } from '../utils/consts';


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/shop">GAME ROZETKA</Navbar.Brand>
                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Button variant="primary" onClick={() => history.push(ADMIN_RT)}>Admin</Button>
                        <Button variant="primary" onClick={() => logOut()}>SingUP</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant="primary" onClick={() => history.push(LOGIN_RT)} >SingIN</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;
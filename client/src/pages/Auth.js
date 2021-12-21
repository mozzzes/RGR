import React, { useContext, useState } from 'react';
import {Button, Container, Form, FormControl, Row} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import { LOGIN_RT, REGISTRATION_RT, SHOP_RT } from '../utils/consts';
import {login, registration} from "../http/userAPI";
import { observer } from 'mobx-react-lite';
import { Context } from '..';



const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_RT
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_RT)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

  return (
    <Container className="d-flex justify-content-center">
        <Card style={{width: 800, padding: 15}} className="mt-3">
            <Form>
                <h4 style={{color: 'blue'}} id="titlAuth">{isLogin ? 'Avtorization' : 'Registration'}</h4>
                <Form className="d-flex flex-column">
                    <FormControl className="mt-3" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                </Form>
                <Form className="d-flex flex-column">
                    <FormControl className="mt-3" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                </Form>
        
                <Button variant="primary" className="mt-3 aling-self-end" onClick={click}>{isLogin ? 'SingIN' : 'Registration'}</Button>
                <Row className="d-flex justify-content-between">
                    {isLogin ?
                        <div className="mt-2">
                              <NavLink to={REGISTRATION_RT}>Create account?</NavLink>
                         </div>
                         :
                         <div className="mt-2">
                              <NavLink to={LOGIN_RT}>Do you have account?</NavLink>
                         </div>
                    }
                </Row>
            </Form>
        </Card>
        
    </Container>
  );
});

export default Auth;

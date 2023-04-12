import React from 'react'
import Helmet from '../../components/helmet/Helmet'
import './login.scss'
import { Link } from 'react-router-dom'
import {Container, Row, Col, Form, FormGroup} from 'reactstrap'
import { motion } from 'framer-motion'

const Login = () => {
  return (
    <Helmet title='Přihlášení'>
    <section className='login__section'>
      <Container className='login'>
        <Row >
            <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fmb-4'>Přihlášení</h3>
            <Form className="auth__form" >
              <FormGroup>
                <input type="email" placeholder='emailová adresa'  required />
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder='heslo' required/>
              </FormGroup>
              <motion.button type='submit' whileTap={{scale:1.2}} className="auth__btn"> přihlásit</motion.button>
              <p>Zapomenuté heslo? <Link to='/registrace'>Obnovení hesla</Link></p>
              <span>Nesprávná kombinace emailu nebo hesla!</span>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Login
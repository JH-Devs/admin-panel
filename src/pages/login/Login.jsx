import React, {useState, useContext} from 'react'
import Helmet from '../../components/helmet/Helmet'
import './login.scss'
import { Link, useNavigate } from 'react-router-dom'
import {Container, Row, Col, Form, FormGroup} from 'reactstrap'
import { motion } from 'framer-motion'
import {  signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../firebase'
import { AuthContext } from '../../context/AuthContext'

const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const {dispatch} = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch({type:'LOGIN', payload:user})
    navigate('/');
  })
  .catch((error) => {
    setError(true)
  });
  }

  return (
    <Helmet title='Přihlášení'>
    <section className='login__section'>
      <Container className='login'>
        <Row >
            <Col lg='6' className='m-auto text-center'>
            <h3 className='fw-bold fmb-4'>Přihlášení</h3>
            <Form className="auth__form" onSubmit={handleLogin} >
              <FormGroup>
                <input type="email" placeholder='emailová adresa'  required  onChange={(e)=>setEmail(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <input type="password" placeholder='heslo' required onChange={(e)=>setPassword(e.target.value)}/>
              </FormGroup>
              <motion.button type='submit' whileTap={{scale:1.2}} className="auth__btn"> přihlásit</motion.button>
              <p>Zapomenuté heslo? <Link to='/registrace'>Obnovení hesla</Link></p>
              {error && <span>Nesprávná kombinace emailu nebo hesla!</span>}
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
  )
}

export default Login
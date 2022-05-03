import React from 'react';
import styles from './login.module.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
	const navigate = useNavigate();

	const onLogin = (e) => {
		e.preventDefault();
		console.log('login btn clicked');
		setAuthenticate(true);
		navigate('/');
	};

	return (
		<Container>
			<Row className='justify-content-md-center'>
				<Col lg={6} md={8} sm={10}>
					<Form onSubmit={onLogin}>
						<Form.Group className='mb-3' controlId='formBasicEmail'>
							<Form.Label>Email address</Form.Label>
							<Form.Control type='email' placeholder='Enter email' />
							<Form.Text className='text-muted'>
								We'll never share your email with anyone else.
							</Form.Text>
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicPassword'>
							<Form.Label>Password</Form.Label>
							<Form.Control type='password' placeholder='Password' />
						</Form.Group>
						<Form.Group className='mb-3' controlId='formBasicCheckbox'>
							<Form.Check type='checkbox' label='Check me out' />
						</Form.Group>
						<Button variant='primary' type='submit' className={styles.btn}>
							Login
						</Button>
					</Form>
				</Col>
			</Row>
		</Container>
	);
};

export default Login;

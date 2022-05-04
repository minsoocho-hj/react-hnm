import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import styles from './detail.module.css';

const Detail = () => {
	let { id } = useParams();
	const [product, setProduct] = useState([]);

	const getDetail = async () => {
		let url = `http://localhost:3004/products/${id}`;
		let res = await fetch(url);
		let data = await res.json();
		setProduct(data);
	};

	useEffect(() => {
		getDetail();
	}, []);

	return (
		<Container className={styles.container}>
			<Row className='justify-content-md-center'>
				<Col lg={6} md={12} sm={12}>
					<img src={product.img} alt='' className={styles.img} />
				</Col>
				<Col lg={6} md={12} sm={12}>
					<div className={styles.desc}>
						<h2 className={styles.title}>{product?.title}</h2>
						<p className={styles.price}>{product?.price}</p>
						<p className={styles.choice}>
							{product?.choice ? 'Conscious choice' : ''}
						</p>
						{/* <DropdownButton
							id='dropdown-basic-button'
							title='Dropdown button'
							variant=''
						>
							<Dropdown.Item>
								{console.log(product?.size)}
								{product?.size[0]}
							</Dropdown.Item>
							<Dropdown.Item>{product?.size[1]}</Dropdown.Item>
							<Dropdown.Item>{product?.size[2]}</Dropdown.Item>
						</DropdownButton> */}
						<button className={styles.btn}>Add</button>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Detail;

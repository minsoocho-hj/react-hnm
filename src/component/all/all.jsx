import React from 'react';
import Card from '../card/card';
import styles from './all.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const All = () => {
	const [productsList, setProductsList] = useState([]);
	const getProducts = async () => {
		let url = `http://localhost:3004/products`;
		let response = await fetch(url);
		let data = await response.json();
		setProductsList(data);
	};

	useEffect(() => {
		getProducts();
	}, []);

	return (
		<div className={styles.all}>
			<Container>
				<Row>
					{productsList.map((product) => (
						<Col lg={3} md={6} sm={12} key={product.id}>
							<Card product={product} />
						</Col>
					))}
				</Row>
			</Container>
		</div>
	);
};

export default All;

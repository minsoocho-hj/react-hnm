import React from 'react';
import Card from '../card/card';
import styles from './all.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const All = () => {
	const [productsList, setProductsList] = useState([]);
	const [query, setQuery] = useSearchParams();
	const getProducts = async () => {
		let searchQuery = query.get('q') || '';
		console.log(setQuery);
		let url = `http://localhost:3004/products?q=${searchQuery}`;
		let response = await fetch(url);
		let data = await response.json();
		setProductsList(data);
	};

	useEffect(() => {
		getProducts();
	}, [query]);

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

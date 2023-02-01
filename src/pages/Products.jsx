import React, { useContext, useEffect, useState } from "react"

import ProductContext from "../context/ProductContext"
import Spinner from "../assets/spinner.gif"
import ProductCard from "../components/ProductCard"

function Product() {
	useEffect(() => {
		getProducts()
	}, [])

	const { products, loading, getProducts } = useContext(ProductContext)

	const [productData, setProductData] = useState([])

	useEffect(() => {
		setProductData(products.products)
	}, [products])

	if (!loading && productData) {
		return (
			<div id='products' className='my-container'>
				<div>
					<h1 className='text-center text-[48px]'>Products</h1>
				</div>
				<div className='products-w'>
					<div className='flex flex-wrap p-3 justify-center'>
						{productData.map((product, index) => {
							return <ProductCard key={index} productData={product} />
						})}
					</div>
				</div>
			</div>
		)
	} else {
		return (
			<div className='w-100 m-20'>
				<img
					width={120}
					className='text-center mx-auto'
					src={Spinner}
					alt='Loading'
				/>
			</div>
		)
	}
}

export default Product

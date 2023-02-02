import React, { useContext, useEffect, useState } from "react"

import ProductContext from "../context/ProductContext"
import Spinner from "../assets/spinner.gif"
import ProductCard from "../components/ProductCard"
import Divider from "../components/Divider"

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
			<div id='products'>
				<div>
					<h1 className=' font-bold text-center text-[48px]'>Products</h1>
				</div>
				<Divider />
				<div className='w-4/5'>
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
			<div className='my-container'>
				<div className='w-100 m-20'>
					<img
						width={120}
						className='text-center mx-auto'
						src={Spinner}
						alt='Loading'
					/>
				</div>
			</div>
		)
	}
}

export default Product

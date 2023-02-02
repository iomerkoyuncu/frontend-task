import React, { useContext, useEffect } from "react"

import { toast } from "react-toastify"
import { IconButton } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

import EastIcon from "@mui/icons-material/East"

function ProductCard(productData) {
	const addToCart = () => {
		const cart = JSON.parse(localStorage.getItem("cart")) || []
		cart.push(productData.productData)
		localStorage.setItem("cart", JSON.stringify(cart))
		toast.success(productData.productData.title + " added to cart")
	}

	const navigate = useNavigate()

	return (
		<>
			<div className='flex basis-1/4 justify-center p-5 justify-center '>
				<div className='flex justify-center w-64 h-64 flex-col product-bg p-5'>
					<div
						onClick={() => {
							navigate("/product/" + productData.productData.id)
						}}
						className='flex justify-center m-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer'>
						<img
							className='w-32 h-32'
							src={productData.productData.images[0]}
							alt={productData.productData.title}
						/>
					</div>
					<div>
						<div className='text-left m-2'>
							<h3 className='font-semibold'>{productData.productData.title}</h3>
						</div>
						<div className='flex text-center justify-between m-2'>
							<p>{productData.productData.price} $</p>
							<button onClick={addToCart}>
								<IconButton>
									<EastIcon />
								</IconButton>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard

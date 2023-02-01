import React, { useContext, useEffect } from "react"

import ProductContext from "../context/ProductContext"
import Spinner from "../assets/spinner.gif"

import EastIcon from "@mui/icons-material/East"

function ProductCard(productData) {
	return (
		<>
			<div className='flex justify-center p-5 justify-center '>
				<div className='flex flex-col bg-[#f5f5dc]'>
					<div className='w-64 h-64 flex justify-center m-2'>
						<img
							src={productData.productData.images[0]}
							alt={productData.productData.title}
						/>
					</div>
					<div className='text-left m-2'>
						<h3 className=''>{productData.productData.title}</h3>
					</div>
					<div className='flex w-64 text-center justify-between m-2'>
						<p>{productData.productData.price}$</p>
						<button>
							<EastIcon />
						</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductCard

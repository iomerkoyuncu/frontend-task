import React from "react"

import { toast } from "react-toastify"

function ShoppingCart() {
	const getCart = () => {
		const cart = localStorage.getItem("cart")
		if (cart) {
			return JSON.parse(cart)
		} else {
			return []
		}
	}

	const [cart, setCart] = React.useState(getCart())

	const removeFromCart = (product) => {
		const newCart = cart.filter((item) => item.id !== product.id)
		setCart(newCart)
		localStorage.setItem("cart", JSON.stringify(newCart))
	}

	const clearCart = () => {
		setCart([])
		localStorage.setItem("cart", JSON.stringify([]))
	}

	const calculateTotal = () => {
		let total = 0
		cart.forEach((item) => {
			total += item.price
		})
		return total
	}

	const exportUserData = () => {
		const userData = {
			cart: cart,
			total: calculateTotal(),
		}
		return userData
	}

	const downloadUserData = () => {
		const data = exportUserData()
		const dataStr =
			"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
		const downloadAnchorNode = document.createElement("a")
		downloadAnchorNode.setAttribute("href", dataStr)
		downloadAnchorNode.setAttribute("download", "user_data.json")
		document.body.appendChild(downloadAnchorNode) // required for firefox
		downloadAnchorNode.click()
		downloadAnchorNode.remove()
	}

	return (
		<div className='my-container'>
			<div className='w-1/2 '>
				<h1 className='text-[36px] m-2'>Cart</h1>

				<div className='flex justify-between'>
					<h2 className='text-[24px] m-2'>Products</h2>
					<h2 className='text-[24px] m-2'>Price</h2>
				</div>
				<hr className='border-2 border-black m-1' />

				{cart.length === 0 && (
					<div className='text-center'>
						<h2 className='text-[24px] m-2'>Cart is empty.</h2>
					</div>
				)}

				{cart.map((product, index) => {
					return (
						<div>
							<div key={index} className='flex justify-between p-3'>
								<p className='font-semibold'>{product.title}</p>
								<p className='font-semibold'>{product.price} $</p>
							</div>
							<div className='text-right '>
								<button
									className='bg-[#000] text-white font-bold py-2 px-4 rounded'
									onClick={() => {
										removeFromCart(product)
										toast.error(product.title + " removed from cart")
									}}>
									Remove
								</button>
							</div>
						</div>
					)
				})}
				<hr className='border-2 border-black m-1' />
				<div className='flex justify-between'>
					<h2 className='text-[24px] m-2'>Total</h2>
					<h2 className='text-[24px] m-2'>{calculateTotal()} $</h2>
				</div>
				<div className='flex justify-between'>
					<button
						className='bg-[#000] text-white font-bold py-2 px-4 rounded'
						onClick={clearCart}>
						Clear Cart
					</button>
					<button
						className='bg-[#000] text-white font-bold py-2 px-4 rounded'
						onClick={downloadUserData}>
						Download User Data
					</button>
				</div>
			</div>
		</div>
	)
}

export default ShoppingCart

import React from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

import { IconButton } from "@mui/material"

import Badge from "@mui/material/Badge"

export default function Navbar() {
	const navigate = useNavigate()
	const location = useLocation()

	const pathMatchRoute = (route) => {
		if (route === location.pathname) {
			return true
		}
	}

	return (
		<header className='navbar'>
			<nav className='navbarNav'>
				<ul className='navbarListItems'>
					<li className='navbarListItem'>
						<a href='/'>Zing.</a>
					</li>
				</ul>
				<ul className='navbarListItems'>
					<li className='navbarListItem'>
						<a href='/'>Home</a>
					</li>
					<li className='navbarListItem'>
						<a href={pathMatchRoute("/") ? "#about" : "/"}>About us</a>
					</li>
					<li className='navbarListItem'>
						<a href={pathMatchRoute("/") ? "#products" : "/"}>Products</a>
					</li>
					<li className='navbarListItem'>
						<p>Testimonial</p>
					</li>
				</ul>
				<ul className='navbarListItems'>
					<li className='navbarListItem'>
						<a href={pathMatchRoute("/") ? "#contact" : "/"}>Contact</a>
					</li>
					<li className='navbarListItem bg-orange-400 px-5 py-3 text-white'>
						<p>Buy Online</p>
					</li>
					<li>
						<button>
							<Link to='/shopping-cart'>
								<IconButton>
									<Badge
										badgeContent={
											JSON.parse(localStorage.getItem("cart"))?.length || 0
										}
										color='error'>
										<ShoppingCartIcon />
									</Badge>
								</IconButton>
							</Link>
						</button>
					</li>
				</ul>
			</nav>
		</header>
	)
}

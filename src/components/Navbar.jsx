import React from "react"
import { useNavigate, useLocation } from "react-router-dom"

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
						<a href='#about'>About us</a>
					</li>
					<li className='navbarListItem'>
						<a href='#products'>Products</a>
					</li>
					<li className='navbarListItem'>
						<p>Testimonial</p>
					</li>
				</ul>
				<ul className='navbarListItems'>
					<li className='navbarListItem'>
						<a href='#contact'>Contact</a>
					</li>
					<li className='navbarListItem bg-orange-400 px-5 py-3 text-white'>
						<p>Buy Online</p>
					</li>
				</ul>
			</nav>
		</header>
	)
}

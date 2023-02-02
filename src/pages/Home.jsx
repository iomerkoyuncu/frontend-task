import React from "react"

import Products from "./Products"
import About from "./About"
import Contact from "./Contact"
import Featured from "./Featured"
import Divider from "../components/Divider"

function Anasayfa() {
	return (
		<>
			<Divider />
			<Featured />
			<Divider />
			<Products />
			<Divider />
			<About />
			<Divider />
			<Contact />
		</>
	)
}

export default Anasayfa

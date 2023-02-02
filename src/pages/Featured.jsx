import React from "react"
import Furniture from "../assets/furniture.jpeg"

import { styled } from "@mui/material/styles"
import {
	Box,
	AppBar,
	Toolbar,
	Stack,
	InputBase,
	IconButton,
	Menu,
	MenuItem,
	Divider,
} from "@mui/material"

import SearchIcon from "@mui/icons-material/Search"

const Search = styled("div")(({ theme }) => ({
	position: "relative",
	marginLeft: 0,
	width: "100%",
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: "100%",
	position: "absolute",
	right: "0",
	pointerEvents: "none",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: "#000",
	width: "50vw",
	height: "70px",
	backgroundColor: "#f5f5f5",
	boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
	"&:hover": {
		backgroundColor: "#e0e0e0",
	},
	"& .MuiInputBase-input": {
		padding: "10px",
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		width: "40vw",
	},
}))

function Featured() {
	return (
		<div id='Featured' className='my-container'>
			<div>
				<h1 className='font-bold text-center text-[64px]'>
					Amazing Furniture for <br /> your home
				</h1>
			</div>
			<div>
				<Search
					sx={{
						display: {
							xs: "none",
							sm: "none",
							md: "flex",
						},
					}}>
					<StyledInputBase
						placeholder='Search your product.'
						inputProps={{ "aria-label": "search" }}
					/>
					<SearchIconWrapper>
						<SearchIcon
							sx={{
								zIndex: "1",
							}}
						/>
					</SearchIconWrapper>
				</Search>
			</div>
			<div className='featured-bg'></div>
		</div>
	)
}

export default Featured

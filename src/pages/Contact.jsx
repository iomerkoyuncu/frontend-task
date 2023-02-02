import React from "react"

import Divider from "../components/Divider"

import { styled } from "@mui/material/styles"
import { TextField, Button } from "@mui/material"

const StyledTextField = styled(TextField)({
	margin: "10px",
	width: "100%",
})

function Contact() {
	return (
		<div id='contact'>
			<div className='w-4/5'>
				<Divider />
				<div className='flex flex-wrap justify-evenly align-center'>
					<div className='flex justify-center w-[400px]'>
						<div className=' flex flex-col justify-evenly'>
							<img
								className='h-48 p-3 rounded'
								alt='phone'
								src='https://i.dummyjson.com/data/products/1/1.jpg'
							/>
							<img
								className=' p-3 rounded'
								src='https://i.dummyjson.com/data/products/5/2.jpg'
								alt='phone'
							/>
						</div>
						<div className=' flex flex-col justify-between'>
							<img
								className='h-48 p-3 rounded'
								src='https://i.dummyjson.com/data/products/11/3.jpg'
								alt='phone'
							/>
							<img
								className='h-48 p-3 rounded'
								src='https://i.dummyjson.com/data/products/4/4.jpg'
								alt='phone'
							/>
						</div>
					</div>
					<div className=' '>
						<div>
							<h2 className='p-2 font-semibold text-[48px]'>Contact us</h2>
							<p className='p-2'>Our Team would love to hear from you!</p>
						</div>

						<div className='flex justify-center'>
							<StyledTextField
								variant='outlined'
								label='First Name'
								required></StyledTextField>
							<StyledTextField
								variant='outlined'
								label='Last Name'
								required></StyledTextField>
						</div>
						<div className='flex justify-center '>
							<StyledTextField
								variant='outlined'
								label='Email'
								required></StyledTextField>
						</div>
						<div className='flex justify-center '>
							<StyledTextField
								variant='outlined'
								label='Message'
								required
								multiline
								rows={4}></StyledTextField>
						</div>
						<div className='flex justify-center p-2'>
							<Button
								variant='contained'
								color='primary'
								style={{
									backgroundColor: "orange",
									fontFamily: "Rubik",
									boxShadow: "0px 0px 0px 0px",
								}}
								className='w-1/2 m-3 w-[100%]'
								type='submit'>
								Send Message
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact

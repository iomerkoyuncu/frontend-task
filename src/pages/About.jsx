import React from "react"

import ThumbsUp from "../assets/thumbs-up.jpg"
import Divider from "../components/Divider"

function About() {
	return (
		<div id='about'>
			<div className='w-4/5'>
				<div>
					<h1 className='font-bold text-[72px]'>What do customer say..</h1>
				</div>
				<Divider />
				<div className='flex flex-wrap justify-evenly'>
					<div className='flex basis-1/2 justify-center'>
						<img
							className='w-64 h-96 rounded-[36px]'
							src={ThumbsUp}
							alt='Thumbs Up Meme'
						/>
					</div>
					<div className='basis-1/2 '>
						<h2 className='p-2 font-semibold text-[48px]'>Amazing Service</h2>
						<p className=' w-96 text-justify p-2'>
							Since the online marketplace can be a scary place, thepresence of
							customer reviews on an online store helps establish authenticity,
							confidence, and trust among shoppers
						</p>
						<div>
							<p className=' p-2 text-orange-400'>Wade Warren</p>
							<small>
								<i className='p-2'>Doctor</i>
							</small>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About

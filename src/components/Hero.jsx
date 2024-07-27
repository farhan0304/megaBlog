import React from 'react'
import business from '../assets/into.png'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <section className="bg-gray-200 text-gray-800">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-5xl font-bold leading-none sm:text-6xl">Welcome to
				<span className="text-blue-600"> yourBlog</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">A vibrant community where your voice matters.
				<br  className="hidden md:inline lg:hidden" /> Dive into our real-time editor and bring your ideas to life!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<Link to="/signup" className="px-8 py-3 text-lg font-semibold rounded text-gray-50 bg-blue-600">Get Started</Link>
				<Link to="/" className="px-8 py-3 text-lg font-semibold border rounded border-gray-800">Learn More</Link>
			</div>
		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={business} alt="Blog image" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
  )
}

export default Hero

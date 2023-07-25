import React, { ReactElement, useState } from 'react'
import { Head } from '@inertiajs/react'
import Layout from '../AuthLayout/layout'
import { FaEnvelope, FaKey } from "react-icons/fa"
import Input from '../Components/Auth/Input'

export default function Register(): ReactElement {
	const [ email, setEmail ] = useState<string>('')
	const [ password, setPassword ] = useState<string>('')

	return (
		<>
			<Head title="Ecommerce | Register"/>
			<Layout>
				<div className="flex justify-center items-center h-screen">
					<div className="rounded w-96 px-7 py-6 bg-slate-900 text-white shadow-2xl">
						<span className="text-2xl">Register Here!</span>
						{/*email input*/}
						<div className='mt-5'>
							<label htmlFor="email">Email</label>
							<div className="relative text-black">
								<Input onChange={ (e) => setEmail(e.target.value) } id="email" type="email" 
									icon={ <FaEnvelope size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2" />} />
							</div>
						</div>	
						{/*password input*/}
						<div className='mt-4'>
							<label htmlFor="password">Password</label>
							<div className="relative text-black">
								<Input onChange={ (e) => (e) => setPassword(e.target.value) } id="password" type="password" 
									icon={ <FaKey size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2"/> }
									/>
							</div>
						</div>
						<div className='mt-4'>
							<button className='bg-slate-700 px-4 py-2 rounded w-full hover:bg-slate-800 transition-all focus:border-sky-600 border'>REGISTER NOW!</button>	
						</div>
					</div>
				</div>
			</Layout>
		</>
	)
}
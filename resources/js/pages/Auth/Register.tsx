import React, { FC, FormEventHandler, ReactElement, useState } from 'react'
import { Head } from '@inertiajs/react'
import Layout from '../AuthLayout/layout'
import { FaEnvelope, FaKey, FaCartPlus } from "react-icons/fa"
import Input from '../Components/Auth/Input'
import { useForm } from '@inertiajs/react'
import InputError from '../Components/Auth/InputError'
import axios from 'axios'

export default function Register({ session }): ReactElement {
	const defaultRegisterData = { email: '', password: '' }
	const { data, setData, post, processing, errors, wasSuccessful } = useForm(defaultRegisterData)
	const onChange = ( event: { target: { name: any, value: any } } ): void => {
		setData(event.target.name, event.target.value)
	}
	// e: { preventDefault: () => void }
	const Register = ( e: React.FormEvent<HTMLFormElement> ): void => {
		e.preventDefault()
		post('/register')
	}
	return (
		<>
			<Head title="Ecommerce | Register"/>
			<Layout>
				<div className="rounded w-96 px-7 py-6 bg-slate-900 text-white shadow-2xl">
					<FaCartPlus className='inline-flex items-center' size={35}/>
					<span className="text-2xl pl-3">Register Here!</span>
					{ session.flash && (
						<p className='text-green-400 text-sm mt-2'>{session.flash}</p>
					)}{ session.error && (
						<p className='text-red-400 text-sm mt-2'>{session.error }</p>
					)}
					<form onSubmit={ Register }>
						{/*email input*/}
						<div className='mt-5'>
							<label htmlFor="email">Email</label>
							<div className="relative text-black">
								<Input value={data.email} onChange={onChange} id="email" type="email" name='email'
									icon={ <FaEnvelope size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2" />} />
								<InputError className='mt-2'>{errors.email}</InputError>
							</div>
						</div>	
						{/*password input*/}
						<div className='mt-4'>
							<label htmlFor="password">Password</label>
							<div className="relative text-black">
								<Input value={data.password} onChange={onChange} id="password" type="password" name='password' icon={ <FaKey size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2"/> } />
								<InputError className='mt-2'>{errors.password}</InputError>
							</div>
						</div>
						<div className='mt-4'>
							<button className='bg-sky-600 px-4 py-2 rounded w-full hover:bg-slate-800 transition-all focus:border-sky-600 border' disabled={processing}>REGISTER NOW!</button>	
						</div>
					</form>	
				</div>
			</Layout>
		</>
	)
}
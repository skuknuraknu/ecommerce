import React from 'react'
import { Head } from '@inertiajs/react';
import Layout from '../AuthLayout/layout'
import { FaEnvelope, FaKey, FaCartPlus } from "react-icons/fa"
import Input from '../Components/Auth/Input';
import InputError from '../Components/Auth/InputError';
import { useForm } from '@inertiajs/react';

export default function Login({ session }) {
	const defaultLoginData: { email: string, password: string} = { email: '', password: '' }
	const { data, setData, post, processing, errors } = useForm(defaultLoginData)
	const onChange = ( event: { target: { name: any, value: any} }): void => {
		setData(event.target.name, event.target.value)
	}
	const Login = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		post('/login')
	}
	return (
		<>
			<Head title="Ecommerce | Login"/>
			<Layout>
				<div className="rounded w-96 px-7 py-6 bg-slate-900 text-white shadow-2xl">
					<span className="text-2xl pl-3">Login Here!</span>
					{ session.flash && (
						<p className='text-green-400 text-sm mt-2'>{session.flash}</p>
					)}{ session.error && (
						<p className='text-red-400 text-sm mt-2'>{session.error }</p>
					)}
					<form onSubmit={ Login }>
						{/*email input*/}
						<div className='mt-5'>
							<label htmlFor="email">Email</label>
							<div className="relative text-black">
								<Input id='email' name='email' value={data.email} onChange={onChange} icon={ <FaEnvelope size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2" /> } type='email'/>
								<InputError className='mt-2'>{errors.email}</InputError>
							</div>
						</div>	
						{/*password input*/}
						<div className='mt-4'>
							<label htmlFor="password">Password</label>
							<div className="relative text-black">
								<Input id='password' name='password' value={data.password} onChange={onChange} icon={ <FaKey size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2"/> } type='password'/>
								<InputError className='mt-2'>{errors.password}</InputError>
							</div>
						</div>
						<div className='mt-4'>
							<button className='bg-sky-600 px-4 py-2 rounded w-full hover:bg-slate-800 transition-all focus:border-sky-600 border'>LOGIN NOW!</button>	
						</div>
					</form>	
				</div>
			</Layout>
		</>
	)
}
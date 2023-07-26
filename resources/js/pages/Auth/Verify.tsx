import React, { ReactElement } from "react";
import { Head } from '@inertiajs/react';
import Layout from '../AuthLayout/layout'
import { FaEnvelope, FaKey, FaCartPlus } from "react-icons/fa"
import Input from '../Components/Auth/Input';
import InputError from '../Components/Auth/InputError';
import { useForm } from '@inertiajs/react';

export default function Verify ({ session }): ReactElement {
	const defaultVerifyData: { token: string } = { token: '' }
	const { data, setData, post, errors, processing } = useForm(defaultVerifyData)
	const onChange = ( event: { target: { name: any, value: any } }): void => {
		setData(event.target.name, event.target.value)
	}
	const Verify = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		post('/verify')
	}
	return (
		<>
			<Head title="Ecommerce | Verify"/>
			<Layout>
				<div className="rounded w-96 px-7 py-6 bg-slate-900 text-white shadow-2xl">
					<span className="text-2xl pl-3">Verify Here!</span>
					{ session.flash && (
						<p className='text-green-400 text-sm mt-2'>{session.flash}</p>
					)}{ session.error && (
						<p className='text-red-400 text-sm mt-2'>{session.error }</p>
					)}
					<form onSubmit={ Verify }>
						{/* token input*/}
						<div className='mt-5'>
							<label htmlFor="token">Enter Token</label>
							<div className="relative text-black">
								<Input id='token' name='token' value={data.token} onChange={onChange} icon={ <FaEnvelope size={30} className="z-10 absolute pl-2 pr-2 text-black top-1/2 transform -translate-y-1/2" /> } type='token'/>
							</div>
						</div>
						<div className='mt-4'>
							<button className='bg-sky-600 px-4 py-2 rounded w-full hover:bg-slate-800 transition-all focus:border-sky-600 border'>VERIFY NOW!</button>	
						</div>
					</form>	
				</div>
			</Layout>
		</>
	)
}
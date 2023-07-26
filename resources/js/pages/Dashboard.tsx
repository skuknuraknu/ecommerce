import React, { ReactElement } from 'react'
import { useForm } from '@inertiajs/react';
export default function Dashboard(): ReactElement {
	const { post } = useForm()
	const Logout = (e: React.FormEvent<HTMLFormElement>):void => {
		e.preventDefault()
		post('/logout')
	}
	return(
		<div className=''>
			Halaman Dashboard
			<form onSubmit={Logout}>
				<button className='hover:bg-sky-600 rounded text-white submit bg-sky-500 px-5 shadow py-2 m-3'>Logout</button>
			</form>
		</div>
	)
}
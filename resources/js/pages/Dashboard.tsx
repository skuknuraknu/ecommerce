import React, { ReactElement } from 'react'
import { useForm } from '@inertiajs/react';
// extend layout
import Layout from './DashboardLayout/Layout';

export default function Dashboard(): ReactElement {
	const { post } = useForm()
	const Logout = (e: React.FormEvent<HTMLFormElement>):void => {
		e.preventDefault()
		post('/logout')
	}
	return(
		<Layout>
			Halaman Dashboard
			<form onSubmit={Logout}>
				<button className='hover:bg-sky-600 rounded text-white submit bg-sky-500 px-5 shadow py-2 m-3'>Logout</button>
			</form>
		</Layout>
	)
}
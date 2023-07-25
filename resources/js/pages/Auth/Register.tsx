import React from 'react'
import { Head } from '@inertiajs/react';
import Layout from '../AuthLayout/layout'

export default function Register() {
	return (
		<>
			<Head title="Ecommerce | Register"/>
			<Layout>
				<div className="w-20 h-20 bg-sky-500">REGISTER</div>
			</Layout>
		</>
	)
}
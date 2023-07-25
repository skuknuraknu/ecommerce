import React from 'react'
import { Head } from '@inertiajs/react';
import Layout from '../AuthLayout/layout'

export default function Login({ children }) {
	return (
		<>
			<Head title="Ecommerce | Login"/>
			<Layout>
				<div className="w-20 h-20 bg-sky-500">LOGIN</div>
			</Layout>
		</>
	)
}
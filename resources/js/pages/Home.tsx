import React from 'react'
import { Link } from '@inertiajs/react';
export default function Home(){
	return(
		<div className='text-red-500'>
			Halaman Home
				<ol>
					<li><Link href='/login'>Login ngab</Link></li>
					<li><Link href='/register'>Register ngab</Link></li>
				</ol>
		</div>
	)
}
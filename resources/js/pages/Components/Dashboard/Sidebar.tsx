import React, { ReactElement, useEffect, useState } from "react";
import { FaRegArrowAltCircleDown, FaBuffer } from 'react-icons/fa'
import { Link } from "@inertiajs/react"
import axios from "axios";

export default function Sidebar (): ReactElement {
	const [ menu, setMenu ] = useState<[]>()
	const [ isUserDropdown, setIsUserDropdown ] = useState<string>('hidden')
	const userMenuDropdown = (): void => {
		if ( isUserDropdown != '') {
			setIsUserDropdown('')
		} else {
			setIsUserDropdown('hidden')
		} 
	}
	useEffect ( () => {
		axios.get('/dashboard/menu/get')
			.then( res => {
				setMenu( res.data.data )
			})
			.catch( err => {
				console.log( err )
			})
	}, [ menu ])
	return (
		<>
			<div className="md:hidden w-screen h-12 bg-indigo-900 text-white">
				<div className="flex justify-between mx-4 pt-3">
					<span>Tokon</span>
					<FaBuffer size={20} className="hover:cursor-pointer"/>
				</div>
			</div>
			<div className="hidden md:block w-64 min-h-screen bg-slate-700 text-white">
				<div className="pl-5 pt-6">
					<Link href="/dashboard"><h1 className="text-2xl font-bold hover:cursor-pointer">Tokon</h1></Link>
				</div>
				<hr className="mx-3 mt-3 mb-5"/>
				{ menu?.map( ( item: any, index:number) => {
					return (
						<>
						{ item.is_nested == "NO" ? (
							<div className="select-none flex items-center px-2 justify-between transition duration-300 block pl-3 mx-4 py-2 rounded hover:cursor-pointer">
								<Link href={ item.route_name } ><span className="font-semibold">{ item.menu_name }</span></Link>
							</div>
						) : (
							<div onClick={userMenuDropdown} className="select-none mt-1 flex items-center px-2 justify-between transition duration-300 block pl-3 mx-4 py-2 rounded hover:cursor-pointer">
								<span className="font-semibold">{ item.menu_name }</span>
								<FaRegArrowAltCircleDown size={20} />
							</div>
						)}
						</>
					)
				}) }
				<div onClick={userMenuDropdown} className="select-none mt-1 flex items-center px-2 justify-between transition duration-300 block pl-3 mx-4 py-2 rounded hover:cursor-pointer">
					<span className="font-semibold">Settings</span>
					<FaRegArrowAltCircleDown size={20} />
				</div>
				<div className={ isUserDropdown + " transition duration-300 flex-col flex px-2 bg-white pl-3 mx-4 mb-1 rounded mt-1 text-black"}>
					<Link href="#" className="my-2">Roles</Link>
					<Link href="/dashboard/menu" className="my-2">Menu</Link>
				</div>
			</div>
		</>
	)
}
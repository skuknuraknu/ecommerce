import React, { ReactElement, useState } from "react"
import { FaRegArrowAltCircleDown, FaBuffer } from 'react-icons/fa'
import { Link } from "@inertiajs/react"

export default function Layout ({ children }): ReactElement {
	const [ isUserDropdown, setIsUserDropdown ] = useState<string>('hidden')
	const userMenuDropdown = (): void => {
		if ( isUserDropdown != '') {
			setIsUserDropdown('')
		} else {
			setIsUserDropdown('hidden')
		} 
	}
	return (
		<div>
			<div className="md:hidden w-screen h-12 bg-indigo-900 text-white">
				<div className="flex justify-between mx-4 pt-3">
					<span>Tokon</span>
					<FaBuffer size={20} className="hover:cursor-pointer"/>
				</div>
			</div>
			<div className="hidden md:block w-64 h-screen bg-indigo-900 text-white">
				<div className="pl-5 pt-6">
					<h1 className="text-2xl font-bold hover:cursor-pointer">Tokon</h1>
				</div>
				<hr className="mx-3 mt-3"/>
				<div onClick={userMenuDropdown} className="select-none mt-7 flex items-center px-2 justify-between transition duration-300 block pl-3 mx-4 py-2 rounded hover:cursor-pointer">
					<span className="font-semibold">Settings</span>
					<FaRegArrowAltCircleDown size={20} />
				</div>
				<div className={ isUserDropdown + " transition duration-300 flex-col flex px-2 bg-indigo-500 pl-3 mx-4 mb-1 rounded mt-1"}>
					<Link href="#" className="my-2">Roles</Link>
					<Link href="#" className="my-2">Menu</Link>
				</div>
			</div>
		</div>
	)
}
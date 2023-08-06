import React, { KeyboardEvent, MouseEvent, ReactElement, useRef, useState } from "react";
 import { Head } from "@inertiajs/react";
import Layout from "../../DashboardLayout/Layout";
import axios from "axios";
import Modal from "../../Components/Dashboard/Modal";
import AddData from "./AddData";

const Menu = ({ Menus, response }): ReactElement => {
	const [ error, setError ] = useState<string>('')
	const [ flash, setFlash ] = useState<string>('')
	const [ data, setData ] = useState<{}>(Menus)

	const SaveData = (event: MouseEvent<HTMLButtonElement>) => {
		const target = (event.target as HTMLElement).closest('tbody > tr')
		const menuId = ( (event.target as HTMLElement).closest('div')?.children[0] as HTMLInputElement).value
		const menuName = target?.children[1].textContent
		const routeName = target?.children[2].textContent
		const isNested = ((target?.children[3].children as HTMLCollection)[0] as HTMLInputElement).value
		const parentName = target?.children[4].textContent
		const data = { menuId, menuName, routeName, isNested, parentName }

		axios.post('/dashboard/menu', data)
				.then(res => {
					setFlash(res.data.flash)
					setError('')
					setTimeout( () => {
						setFlash('')
					}, 3000)
				})
				.catch(err => {
					if ( err.request.status === 422) {
						setError(JSON.parse(err.request.response).message)
					}
				})
	}
	return (
		<div>
			<Head title="E-Commerce | Menu"/>
			<Layout>
			<AddData response={ flash }/>
			<div className="mt-7 p-10 bg-slate-700 text-white shadow-lg rounded w-full">
				<h1 className="font-semibold text-2xl">Menus Data</h1>
				{ error && (
					<p className="transition duration-400 text-red-600 bg-white px-6 py-2 text-sm font-semibold rounded mt-2">{ error }</p>
				)}
				{ flash && (
					<p className="transition duration-400 text-green-600 bg-white px-6 py-2 text-sm font-semibold rounded mt-2">{ flash }</p>
				)}
				<table id="table" className="w-full text-sm text-left text-gray-500 mt-3">
		        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
					<tr>
		                <th className="px-6 py-3">No.</th>
		                <th className="px-6 py-3">Menu name</th>
		                <th className="px-6 py-3">Route name</th>
		                <th className="px-6 py-3">Is Nested</th>
		                <th className="px-6 py-3">Parent Menu</th>
		                <th className="px-6 py-3">Actions</th>
		            </tr>
		        </thead>
		        <tbody>
		        	{ Menus.map(( item: any, index: number) => {
		        		return (
		        			<tr className="bg-white border-b bg-slate-600" key={index}>
				                <td suppressContentEditableWarning={true} defaultValue={''} contentEditable="true" className="px-6 py-4 font-medium">{ index+1 }</td>
				                <td suppressContentEditableWarning={true} defaultValue={''} contentEditable="true" className="px-6 py-4 font-medium">{ item.menu_name}</td>
				                <td suppressContentEditableWarning={true} defaultValue={''} contentEditable="true" className="px-6 py-4 font-medium">{ item.route_name}</td>
				                <td className="px-6 py-4 font-medium text-white">
				                { item.is_nested == "YES" ? (
				                	<select className="bg-slate-700 px-3 py-1 rounded" required>
				                		<option value="">--STATUS--</option>
				                		<option value="YES" selected>YES</option>
				                		<option value="NO">NO</option>
				                	</select>
				                	) : (
				                		<select className="bg-slate-700 px-3 py-1 rounded" required>
					                		<option value="">--STATUS--</option>
					                		<option value="YES">YES</option>
					                		<option value="NO" selected>NO</option>
				                		</select>
				                	) }
				                </td>
				                <td suppressContentEditableWarning={true} defaultValue={''} contentEditable="true" className="px-6 py-4 font-medium">{ item.parent_name }</td>
				                <td className="px-6 py-4 font-medium">
				                	<div className="block text-white">
				                		<input type="text" value={item.id} hidden/>
				                		<button className="mr-1 bg-sky-500 px-6 py-2 rounded border border-white hover:bg-sky-700 transition duration-300" onClick={SaveData}>Save</button>
				                		<button className="bg-red-500 px-6 py-2 rounded border border-white hover:bg-red-700 transition duration-300">Delete</button>
				                	</div>
				                </td>
				        	</tr>
		        		)
		        	})}
		        </tbody>
		        </table>
		    </div>
		</Layout>
		</div>
	)
}
export default Menu
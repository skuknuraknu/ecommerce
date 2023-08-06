import { useForm } from "@inertiajs/react";
import axios from "axios";
import React, { ReactElement, useState } from "react";
// import input component 
export default function AddData ({ response }): ReactElement {
	const defaultData: { menu_name: string, route_name: string, is_nested: string, parent_name: string  } = { 
		menu_name: '', route_name: '', is_nested: '', parent_name: '' }
	const { data, setData, post, processing, errors } = useForm(defaultData)
	const [ msg, setMsg ] = useState('')
	const [ error, setError ] = useState('')
	const Save = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault()
		axios.post('/dashboard/menuForm', data).then( res => {
			setMsg(res.data.message)
			setTimeout( () => {
				setMsg('')
			}, 5000)
		}).catch( err => {
			setError(err.response.data.message)
			setTimeout( () => {
				setError('')
			}, 5000)
		})
	}
	return (
		<div className="px-4 py-3 rounded bg-slate-800 mt-2">
			<h2 className="font-bold text-center text-white text-2xl">Add Menu</h2>
			{ msg != '' && (
				<span className="text-white font-semibold py-2 font-xl "> { msg } </span>
			)}{ error != '' && (
				<span className="text-red-500 font-semibold py-2 font-xl "> { error } </span>
			)}
			<form className="text-white" onSubmit={ Save }>
				<div className="font-semibold">
					<label htmlFor="menu_name" className="block">Menu name</label>
					<input name="menu_name" className="w-full text-black text-md rounded pl-3 py-1" onChange={ (e) => setData(e.target.name, e.target.value )} type="text"/>
				</div>
				<div className="font-semibold mt-2">
					<label htmlFor="route_name" className="block">Route name</label>
					<input name="route_name" className="w-full text-black text-md rounded pl-3 py-1" onChange={ (e) => setData(e.target.name, e.target.value )} type="text"/>
				</div>
				<div className="font-semibold mt-2">
					<label htmlFor="is_nested" className="block">Is Nested</label>
					<select className="bg-slate-700 px-3 py-1 rounded w-full" id="is_nested" name="is_nested" onChange={ ( e ) => setData(e.target.name, e.target.value) } required>
						<option value="">--STATUS--</option>
						<option value="YES">YES</option>
						<option value="NO">NO</option>
		        	</select>
				</div>
				<div className="font-semibold mt-2">
					<label htmlFor="parent_name" className="block">Parent name</label>
					<input name="parent_name" className="w-full text-black text-md rounded pl-3 py-1" onChange={ (e) => setData(e.target.name, e.target.value )} type="text"/>
				</div>
				<button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 w-full rounded font-semibold mt-5">Save</button>
			</form>
		</div>
	)
}
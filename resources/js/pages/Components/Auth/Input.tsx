import { ReactElement } from "react"
import React from "react"

type InputProps = {
	id: string,
	type: string,
	placeholder?: string,
	icon?: JSX.Element,
	onChange?: (e: any) => void
}

const Input = ( { placeholder = "", type, id, icon, onChange }: InputProps ): ReactElement => {
	return (
		<div className="relative text-black mt-3">
			{icon}
			<input type={type} className="pl-8 w-full rounded h-10 focus:outline-none focus:ring focus:border-sky-500" placeholder={placeholder} id={id} onChange={onChange} />
		</div>
	)
}	
export default Input
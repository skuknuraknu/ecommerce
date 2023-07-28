import React, { ReactElement, useState } from "react"
import Sidebar from "../Components/Dashboard/Sidebar"

export default function Layout ({ children }): ReactElement {
	
	return (
		<div className="flex">
			<Sidebar/>
			<div className="p-10"> { children } </div>
		</div>
	)
}
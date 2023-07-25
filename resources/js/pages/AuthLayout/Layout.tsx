import React from 'react'

export default function Layout({ children }) {
	return (
		<div className="flex items-center justify-center h-screen">
			{ children }
		</div>
	)
}
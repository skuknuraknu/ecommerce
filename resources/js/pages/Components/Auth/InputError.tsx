import React, { ReactElement, ReactNode } from 'react'

type InputErrorProps = {
	className: string,
	children: ReactNode
}
export default function InputError ( { className, children }: InputErrorProps ): ReactElement {
	return (
		<>
			<p className={'text-red-500 text-sm ' + className}>{children}</p>
		</>
	)	
}
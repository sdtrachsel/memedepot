import React from 'react'
import './Header.css'

type GreetProps = {
	name: string
}

const Header = (props: GreetProps) => {
	return(
		<div>
			<h1>Wad up, wadup {props.name}</h1>
		</div>
	)
}

export default Header
import React from 'react'
import { render } from 'react-dom'
import { name, lastname } from './lib'

render(
	<div>
		{name}
		{lastname}
	</div>,
	document.getElementById('react-container')
)

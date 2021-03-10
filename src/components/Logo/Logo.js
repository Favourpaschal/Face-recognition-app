import React from 'react';
import Tilt from 'react-tilt';
import brain from './brain.png'
import './Logo.css'

const Logo = () => {
	return (
		<div className='na4 nt0'>
			<Tilt className="Tilt br3 ml5 shadow-2" options={{max : 60}} style={{ height: 120, width: 120 }}>
				<div className="Tilt-inner pa4">
					<img style={{paddingTop: '5px'}} src={brain} alt='logo'/>
				</div>
			</Tilt>
		</div>
	);
}

export default Logo;
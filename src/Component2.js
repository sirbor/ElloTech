// Second Component
import React from 'react';
// import './Component2.css'

export default function Component2(props) {
	console.log(props.data);
	return (
		<div className="main-cointainer">
			<h2>Second View</h2>
{/* <p>{props.data} </p> */}
<p>{props.data.w} </p>
{/* <p>{props.data.b} </p> pos */}
{/* c is token */}
{/* <p>{props.dat} </p> */}

		</div>
	)
}

  
// export default Component2;
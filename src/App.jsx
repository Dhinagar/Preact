import React, { useEffect, useRef,useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { signal } from '@preact/signals-react'

const firstSignal = signal(0)

const AnotherComponent = () => {
	//const [firstSignal,setFirstSignal]=useState(0)
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{firstSignal.value}
				</p>
                {firstSignal.value > 0.5 ? '0.5+' : '0.5-'}
				<span className="App-link"
				onClick={() => firstSignal.value = Math.random()}
				// onClick={()=>{setFirstSignal(Math.random())}}
				>Hello from codedamn :)</span>
			</header>
		</div>
	)
}

function App() {
    const count = useRef(0)
const [firstSignal,setFirstSignal]=useState(0)
    useEffect(() => {
        count.current++
    })
    return <>
    <AnotherComponent />
	{/* <div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					{firstSignal.value}
				</p>
                {firstSignal.value > 0.5 ? '0.5+' : '0.5-'}
				<span className="App-link"
				// onClick={() => firstSignal.value = Math.random()}
				onClick={()=>{setFirstSignal(Math.random())}}
				>Hello from codedamn :)</span>
			</header>
		</div> */}

    <h1>Total re-renders: {count.current}</h1>
    </>
}

export default App

import React, {useState, useEffect, useRef} from 'react'
import './timer.css'

const Timer = () => {

    const [time,setTime] = useState(60500 * 1.5)
    const [timerOn, setTimerOn] = useState(false)

    useEffect(()=> {
        
        let interval = null; 
        if (timerOn) {
            interval = setInterval(()=>{
                setTime(prevTime => prevTime - 10)
            },10)
        } else {
            clearInterval(interval)
        }
        
        return () => clearInterval(interval)

    },[timerOn])

    return (
        <div className='timer'>
            <div className='time'>
                <span className='sec'>{("0" + Math.floor((time / 60000) % 60)).toString().slice(-2)}</span>
                :
                <span className='sec'>{("0" + Math.floor((time / 1000) % 60)).toString().slice(-2)}</span>
            </div> 
            <div className='buttons'>
            <button className='btn' onClick={()=>setTimerOn(true)}>Start</button>
            <button className='btn' onClick={()=>setTime(60500 * 1.5)}>Reset</button>
            </div>
            <div className='custom'>
            <input></input>
            <input></input>
            </div>
            <button className='set'>Set</button>
        </div>
    )
}

export default Timer

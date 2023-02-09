import { useState,useEffect,useRef} from "react";

const Stopwatch =()=>{
    const [msec,setmsec]=useState(0)
    const [sec,setsec]=useState(0)
    const [mins,setmins]=useState(0)
    const [start ,setStart]= useState(false)

   

    let millisec = msec<10?"0"+msec:msec
    let minutes = mins==0?"":mins+"mins"
    const id = useRef(-1)
if(msec==99){
    setsec(sec+1)
    setmsec(0)
}
if(sec==59 && msec ==99){
    setmins(mins+1)
    setsec(0)
    setmsec(0)
}

    const handelStart =()=>{
        setStart(!start)
        id.current =  setInterval(()=>{
        setmsec(prev=>prev+1)
       
        
       
        },10)
  
    }

    const handelStop =()=>{
        setStart(!start)
        clearInterval(id.current)
    }
    
    const handelReset =()=>{
      setmins(0)
      setmsec(0)
      setsec(0)
      setStart(false)
      clearInterval(id.current)
    }

    return <div>
        <div style={{display:"flex",gap:"5px",alignItems:"center", }}>
            <h1>{minutes}</h1>
            <h2>{sec}s</h2>
            <h2>{millisec}ms</h2>
        </div>

        
        <button style={{padding:"5px",margin:"5px"}} onClick={start?handelStop:handelStart}>{start?"Stop":"Start"}</button>
        <button style={{padding:"5px",margin:"5px"}}  onClick={handelReset}>Reset</button>
    </div>
}
export default Stopwatch


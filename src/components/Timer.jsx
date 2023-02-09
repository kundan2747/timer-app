import { useState,useEffect,useRef} from "react";
import { Time } from "./time";



export function Timer(){
    const [hrs,sethrs]=useState(0)
    const [sec,setsec]=useState(0)
    const [mins,setmins]=useState(5)
    const [start ,setStart]= useState(false)
    const [showform ,setshowform]= useState(false)

    const id = useRef(-1)

    
    let seconds = sec<10?"0"+sec:sec
    let inpstyle = {width:"40px",padding:"20px" ,border:"none"}

    if(start){
    if(sec===0){
        if(mins!==0){
            setmins(mins-1)
            setsec(59)
        }
        else{
            if(hrs!==0){
                sethrs(hrs-1)
                setmins(59)
                setsec(59)
            }
            else{
                clearInterval(id.current)
            }
        }
    }
}


    const handelStart= ()=>{
        setshowform(false)
        setStart(true)
        id.current = setInterval(()=>{
            setsec(prev=>prev-1)
        },1000)

    }
    const handelReset =()=>{
        clearInterval(id.current)
        setStart(false)
        sethrs(0)
        setmins(5)
        setsec(0)

    }
    const handelStop =()=>{
        clearInterval(id.current)
        setStart(false)



    }
 
    
    return <div>
        <div  onClick={()=>{
            setshowform(true)
            handelStop()

        }}>
            {showform?<div style={{display:"flex",gap:"2px", padding:"5px",margin:"30px 5px"}}>
                <input type="text" placeholder={`${hrs} h`}   style={inpstyle} onChange={(e)=>{
                    sethrs(parseInt(e.target.value))
                   
                }}/>
                <input type="text" placeholder={`${mins} m`} style={inpstyle} onChange={(e)=>{
                    setmins(parseInt(e.target.value))
                   
                }} />
                <input type="text" placeholder={`${seconds} s`} style={inpstyle} onChange={(e)=>{
                    let x =parseInt(e.target.value)
                    setsec(x)
                    
                    
                   
                }}/>
            </div> :<Time seconds={seconds} hours={hrs} mins={mins} / >}
            </div>
            <button style={{padding:"5px",margin:"5px"}}  onClick={start?handelStop:handelStart}>{start?"Stop":"Start"}</button>
        <button style={{padding:"5px",margin:"5px"}}  onClick={handelReset}   >Reset</button>
       
       
         
    </div>

}
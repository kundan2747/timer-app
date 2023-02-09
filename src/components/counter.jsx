import "../counter.css"
import Stopwatch from "./Stopwatch"
import { Timer } from "./Timer"
const Counter = ({app,setApp})=>{
    return  <div className="container" style={{border:"1px solid gray",padding:"10px"}}>
    <div className="counter" >
        <div onClick={()=>{
            setApp("timer")
        }}   style={{color:app==="timer"?"blue":null}} >Timer</div>
        <div onClick={()=>{
            setApp("stopwatch")
        }} style={{color:app==="stopwatch"?"blue":null}}>Stopwatch</div>
    </div>
    {app==="timer"?<Timer />:<Stopwatch />}

    </div>
}
export default Counter
export function Time({hours,mins,seconds}){
    return <div style={{display:"flex",gap:"5px",alignItems:"center", }}>
         <h1>{hours!=0?hours+"h":""}</h1>
        <h2>{mins!=0?mins+"m":""}</h2>
        <h2>{seconds}s</h2>
    </div>
}
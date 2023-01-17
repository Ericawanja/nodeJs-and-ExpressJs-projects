import { useState } from "react"

function WithCounter(OriginalComponent) {
    return function WithCounterComponent() {
        let [count, setCount] = useState(0)
        const handleEvent = ()=>{
            setCount(prev=>prev+1)
        }
        return <OriginalComponent count={count} handleEvent={handleEvent} />
    }
} 

export default WithCounter
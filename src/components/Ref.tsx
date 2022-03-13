import {useEffect, useRef} from "react";


const Ref = () => {
    const ref = useRef<HTMLDivElement>(null)

    const value = useRef<number>(0)

    useEffect(() => {
        setInterval(() => {
            value.current += 1
        },1000)
    },[])

    return(
        <div ref={ref}>
            HTML
        </div>
    )
}

export default Ref
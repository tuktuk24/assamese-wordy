import {useRef, useState, useEffect} from 'react'

const CookieCanvas = ({startPos, pathPoints}) => {
    const [ctx, setCtx] = useState(null)
    const canvas = useRef()

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        console.log("CANVAS", canvas.current.getBoundingClientRect())
        setCtx(context)
    }, [])

    useEffect(() => {
        //Clear Old curve
        if(ctx)
        ctx.clearRect(0,0, canvas.current.width, canvas.current.height);
    }, [startPos])

    useEffect(() => {
        // console.log(startPos, pathPoints)
        if(startPos && ctx){
            const canvasX = canvas.current.getBoundingClientRect().left
            const canvasY = canvas.current.getBoundingClientRect().top

            const offsetX = 372 // 686 - canvas.current.getBoundingClientRect().left
            const offsetY = 220 //348 - canvas.current.getBoundingClientRect().top
            console.log("OFFSET", offsetX, offsetY)
            const x = startPos.x - canvasX - canvas.current.width
            const y = startPos.y - canvasY + canvas.current.height
            let startX, startY
            if(x <= offsetX){
                startX = x + (offsetX - x)/2
            } else {
                startX = x - (offsetX - x)/2
            }
            if(y <= offsetY){
                startY = y + (y - offsetY)
            } else {
                startY = y - (y - offsetY)
            }
            ctx.strokeStyle = "dodgerblue";
            ctx.lineWidth = 3
            ctx.beginPath();
            ctx.moveTo( startX,startY);
            // console.log("CANVAS POS", canvasX - canvas.current.width, canvasY)
            // console.log("START", startPos.x - canvasX - canvas.current.width/2,startPos.y -  canvasY)
            // console.log("PATH", pathPoints)
            // ctx.lineTo(startPos.x - canvasX + 5,startPos.y - canvasY + 5);
            // ctx.stroke();
            for(let i = 0; i < pathPoints.length; i++){
                ctx.lineTo(pathPoints[i].x - canvasX  - canvas.current.width/2, pathPoints[i].y - canvasY - canvas.current.height);
                ctx.moveTo(pathPoints[i].x - canvasX  - canvas.current.width/2, pathPoints[i].y - canvasY - canvas.current.height);
                ctx.stroke();
            }
        }
    }, [pathPoints])

    return (
        <canvas ref={canvas} id="canvas"></canvas>
    )
}

export default CookieCanvas
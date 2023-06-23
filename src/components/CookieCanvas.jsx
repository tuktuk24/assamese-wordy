import {useRef, useState, useEffect} from 'react'

const CookieCanvas = ({startPos, pathPoints}) => {
    const [ctx, setCtx] = useState(null)
    const [canvasPos, setCanvasPos] = useState(null)
    const canvas = useRef()

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        console.log("CANVAS", canvas.current.getBoundingClientRect())
        setCanvasPos({
            x: canvas.current.getBoundingClientRect().x,
            y: canvas.current.getBoundingClientRect().y
        })
        setCtx(context)
    }, [])

    useEffect(() => {
        //Clear Old curve
        if(ctx)
        ctx.clearRect(0,0, canvas.current.width, canvas.current.height);
    }, [startPos])

    useEffect(() => {
        // console.log(startPos, pathPoints)
        if(startPos){
            ctx.strokeStyle = "dodgerblue";
            ctx.lineWidth = 3
            ctx.beginPath();
            ctx.moveTo(startPos.x - canvasPos.x,startPos.y - canvasPos.y);

            ctx.lineTo(startPos.x - canvasPos.x + 5,startPos.y - canvasPos.y + 5);
            ctx.stroke();
            // for(let i = 0; i < pathPoints.length; i++){
            //     ctx.lineTo(pathPoints[i].deltaX, pathPoints[i].deltaY);
            //     ctx.moveTo(pathPoints[i].deltaX, pathPoints[i].deltaY);
            //     ctx.stroke();
            // }
        }
    }, [pathPoints])

    return (
        <canvas ref={canvas} id="canvas"></canvas>
    )
}

export default CookieCanvas
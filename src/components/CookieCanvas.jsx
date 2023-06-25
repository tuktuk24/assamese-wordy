import { useRef, useState, useEffect } from 'react'

const CookieCanvas = ({ startPos, pathPoints }) => {
    const [ctx, setCtx] = useState(null)
    const canvas = useRef()

    useEffect(() => {
        const context = canvas.current.getContext('2d');
        console.log("CANVAS", canvas.current.getBoundingClientRect())
        setCtx(context)
    }, [])

    useEffect(() => {
        //Clear Old curve
        if (ctx)
            ctx.clearRect(0, 0, canvas.current.width, canvas.current.height);
    }, [startPos])

    useEffect(() => {
        if (startPos && ctx) {
            ctx.strokeStyle = "dodgerblue";
            ctx.lineWidth = 3
            ctx.beginPath();
            ctx.moveTo(startPos.x - getXCorrection(startPos.x), startPos.y - getYCorrection(startPos.y));

            for (let i = 0; i < pathPoints.length; i++) {
                ctx.lineTo(pathPoints[i].x - getXCorrection(pathPoints[i].x), pathPoints[i].y - getYCorrection(pathPoints[i].y));
                ctx.moveTo(pathPoints[i].x - getXCorrection(pathPoints[i].x), pathPoints[i].y - getYCorrection(pathPoints[i].y));
                ctx.stroke();
            }
        }
    }, [pathPoints])

    function getXCorrection(x) {
        const canvasX = canvas.current.getBoundingClientRect().left
        const offset = (x - canvasX) / 2.5
        return canvasX + offset
    }

    function getYCorrection(y) {
        const canvasY = canvas.current.getBoundingClientRect().top
        const offset = (y - canvasY) / 1.45
        return canvasY + offset
    }

    return (
        <canvas ref={canvas} id="canvas"></canvas>
    )
}

export default CookieCanvas
import React, { useState, useEffect } from 'react';
import CookieLetter from './components/CookieLetter';
import CookieCanvas from './components/CookieCanvas';
import { finalSpaceCharacters, words, ban, bar, jar, nar, hot, batar, garaj, haran, jagar, bahan, ajgar, abagat, abanat, hazarat } from './utils/stage1';

const WordCookies = () => {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);
    const [match, setMatch] = useState([])
    const [isDragging, setIsDragging] = useState(false)
    const [startPos, setStartPos] = useState(null)
    const [pathPoints, setPathPoints] = useState([])
    const [message, setMessage] = useState(null)
    const [isFirstMatched, setIsFirstMatched] = useState(false)
    const [isSecondMatched, setIsSecondMatched] = useState(false)
    const [isThirdMatched, setIsThirdMatched] = useState(false)
    const [isFourthMatched, setIsFourthMatched] = useState(false)
    const [isFirst3Matched, setIsFirst3Matched] = useState(false)
    const [isSecond3Matched, setIsSecond3Matched] = useState(false)
    const [isThird3Matched, setIsThird3Matched] = useState(false)
    const [isFourth3Matched, setIsFourth3Matched] = useState(false)
    const [isFifth3Matched, setIsFifth3Matched] = useState(false)
    const [isFirst2Matched, setIsFirst2Matched] = useState(false)
    const [isSecond2Matched, setIsSecond2Matched] = useState(false)
    const [isThird2Matched, setIsThird2Matched] = useState(false)
    const [isFourth2Matched, setIsFourth2Matched] = useState(false)
    const [isFifth2Matched, setIsFifth2Matched] = useState(false)
    const [isWinner, setIsWinner] = useState(false)

    useEffect(() => {
        const messageInterval = setInterval(() => setMessage(null), 3000)
        
        return () => {
            clearInterval(messageInterval)
        }
    }, [])

    useEffect(() => {
        const longWord = characters.map(c => c.id).reduce((word, letter) => word + letter, "")
        if (!isFirst2Matched && longWord.match(words[9].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFirst2Matched(true)

        }
        if (!isSecond2Matched && longWord.match(words[10].join(""))) {
            setMessage("YAY! Word Matched")
            setIsSecond2Matched(true)

        }
        if (!isThird2Matched && longWord.match(words[11].join(""))) {
            setMessage("YAY! Word Matched")
            setIsThird2Matched(true)

        }
        if (!isFourth2Matched && longWord.match(words[12].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFourth2Matched(true)

        }
        if (!isFifth2Matched && longWord.match(words[13].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFifth2Matched(true)

        }
        if (!isFirst3Matched && longWord.match(words[4].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFirst3Matched(true)

        }
        if (!isSecond3Matched && longWord.match(words[5].join(""))) {
            setMessage("YAY! Word Matched")
            setIsSecond3Matched(true)

        }
        if (!isThird3Matched && longWord.match(words[6].join(""))) {
            setMessage("YAY! Word Matched")
            setIsThird3Matched(true)

        }
        if (!isFourth3Matched && longWord.match(words[7].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFourth3Matched(true)

        }
        if (!isFifth3Matched && longWord.match(words[8].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFifth3Matched(true)

        }
        if (!isFirstMatched && longWord.match(words[0].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFirstMatched(true)

        }
        if (!isSecondMatched && longWord.match(words[1].join(""))) {
            setMessage("YAY! Word Matched")
            setIsSecondMatched(true)

        }
        if (!isThirdMatched && longWord.match(words[2].join(""))) {
            setMessage("YAY! Word Matched")
            setIsThirdMatched(true)

        }
        if (!isFourthMatched && longWord.match(words[3].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFourthMatched(true)

        }
    }, [characters])

    useEffect(() => {
        if (isFirstMatched && isSecondMatched && isThirdMatched && isFourthMatched && isFirst3Matched && isSecond3Matched && isThird3Matched && isFourth3Matched && isFifth3Matched && isFirst2Matched && isSecond2Matched && isThird2Matched && isFourth2Matched && isFifth2Matched) {
            setMessage("WINNER!")
            setIsWinner(true)
        }
    }, [isFirstMatched, isSecondMatched, isThirdMatched, isFourthMatched, isFirst3Matched, isSecond3Matched, isThird3Matched, isFourth3Matched, isFifth3Matched, isFirst2Matched, isSecond2Matched, isThird2Matched, isFourth2Matched, isFifth2Matched])

    useEffect(() => console.log("START", startPos), [startPos])

    function handleDragStart(e) {
        //
        setPathPoints([])
        setIsDragging(true)
        setStartPos({
            x: e.clientX,
            y: e.clientY
        })
        // console.log("MOUSE DOWN", e, e.target.id)
    }

    function handleDrag(e){
        if(isDragging){
            // console.log("DRAWING", isDragging, e)
            if(e.target?.id){
                console.log("TARGET", e.target.id)
            }
            
                setPathPoints([
                    ...pathPoints,
                    {
                        x: e.clientX,
                        y: e.clientY,
                    }
                ])
            
        }
        
    }

    function handleDragEnd(e){
        // setStartPos(null)
        setIsDragging(false)
        // console.log("MOUSE UP",e, e.target.id)
    }

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>অসমীয়া শব্দৰ খেল</h1>
                <div className='small-words'>
                    <ul className={isFirst2Matched ? "characters" : "characters hidden"} >
                        {ban.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isSecond2Matched ? "characters" : "characters hidden"}  >
                        {bar.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isThird2Matched ? "characters" : "characters hidden"}  >
                        {jar.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isFourth2Matched ? "characters" : "characters hidden"}  >
                        {nar.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isFifth2Matched ? "characters" : "characters hidden"}  >
                        {hot.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
                <div className='small-words'>
                    <ul className={isFirst3Matched ? "characters" : "characters hidden"} >
                        {batar.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isSecond3Matched ? "characters" : "characters hidden"}  >
                        {garaj.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isThird3Matched ? "characters" : "characters hidden"}  >
                        {haran.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isFourth3Matched ? "characters" : "characters hidden"}  >
                        {jagar.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isFifth3Matched ? "characters" : "characters hidden"}  >
                        {bahan.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                </div>
                <div className='small-words'>
                    <ul className={isFirstMatched ? "characters" : "characters hidden"} >
                        {ajgar.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isSecondMatched ? "characters" : "characters hidden"}  >
                        {abagat.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isThirdMatched ? "characters" : "characters hidden"}  >
                        {abanat.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                    <ul className={isFourthMatched ? "characters" : "characters hidden"}  >
                        {hazarat.map(({ id, thumb }) => <li key={id} >
                            <div className="characters-thumb">
                                <img src={thumb} alt={`${id}`} />
                            </div>
                        </li>
                        )}
                    </ul>
                </div>

                {isWinner ? <h2>CONGRATULATIONS</h2>
                    :
                    <ul 
                        className="characters circular" 
                        onMouseDown={handleDragStart}
                        onMouseUp={handleDragEnd}
                        onMouseMove={handleDrag}
                        >
                        <CookieCanvas startPos={startPos} pathPoints={pathPoints}/>
                        {characters.map(({ id, thumb }, index) => <CookieLetter key={id} thumb={thumb} id={id} index={index} />)}
                    </ul>
                }
            </header>
            {message && <h2>{message}</h2>}
            <br/>
            <br/>
            <br/>
            <p>
                Made with Love by <a href="https://jinsoft.in/">Jinsoft</a>
            </p>
            <p>Get the code here: <a href="https://github.com/tuktuk24/assamese-wordy">Github</a></p>
        </div>
    );
}

export default WordCookies
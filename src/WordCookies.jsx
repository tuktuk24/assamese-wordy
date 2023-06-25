import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import CookieLetter from './components/CookieLetter';
import CookieCanvas from './components/CookieCanvas';
import { characters, words, ban, bar, jar, nar, hot, batar, garaj, haran, jagar, bahan, ajgar, abagat, abanat, hazarat } from './utils/stage1';

const WordCookies = () => {
    const [match, setMatch] = useState([])
    const [isDragging, setIsDragging] = useState(false)
    const [startPos, setStartPos] = useState(null)
    const [pathPoints, setPathPoints] = useState([])
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
        if (isFirstMatched && isSecondMatched && isThirdMatched && isFourthMatched && isFirst3Matched && isSecond3Matched && isThird3Matched && isFourth3Matched && isFifth3Matched && isFirst2Matched && isSecond2Matched && isThird2Matched && isFourth2Matched && isFifth2Matched) {
            toast("WINNER!")
            setIsWinner(true)
        }
    }, [isFirstMatched, isSecondMatched, isThirdMatched, isFourthMatched, isFirst3Matched, isSecond3Matched, isThird3Matched, isFourth3Matched, isFifth3Matched, isFirst2Matched, isSecond2Matched, isThird2Matched, isFourth2Matched, isFifth2Matched])

    function handleDragStart(e) {
        setPathPoints([])
        setIsDragging(true)
        setStartPos({
            x: e.clientX,
            y: e.clientY
        })
        setMatch(characters.filter(c => c.id === e.target.id))
    }

    function handleDrag(e) {
        if (isDragging) {
            if (e.target?.id) {
                //Check if already there
                const found = match.find(i => i.id === e.target.id)
                if (!found) {
                    setMatch([
                        ...match,
                        characters.filter(c => c.id === e.target.id)[0]
                    ])
                }
            }
            if (Math.random() > 0.5) {
                setPathPoints([
                    ...pathPoints,
                    {
                        x: e.clientX,
                        y: e.clientY,
                    }
                ])
            }
        }

    }

    function handleDragEnd(e) {
        setIsDragging(false)
        checkWord()
    }

    function checkWord() {

        const longWord = match.map(c => c.id).reduce((word, letter) => word + letter, "")
        if (!isFirstMatched && longWord.match(words[0].join(""))) {
            toast(`YAY! Word Matched অজগৰ`)
            setIsFirstMatched(true)
        } else if (!isSecondMatched && longWord.match(words[1].join(""))) {
            toast(`YAY! Word Matched অবগত`)
            setIsSecondMatched(true)
        } else if (!isThirdMatched && longWord.match(words[2].join(""))) {
            toast(`YAY! Word Matched অবনত `)
            setIsThirdMatched(true)
        } else if (!isFourthMatched && longWord.match(words[3].join(""))) {
            toast(`YAY! Word Matched হজৰত `)
            setIsFourthMatched(true)
        } else if (!isFirst3Matched && longWord.match(words[4].join(""))) {
            toast(`YAY! Word Matched বতৰ`)
            setIsFirst3Matched(true)
        } else if (!isSecond3Matched && longWord.match(words[5].join(""))) {
            toast(`YAY! Word Matched গৰজ`)
            setIsSecond3Matched(true)
        } else if (!isThird3Matched && longWord.match(words[6].join(""))) {
            toast(`YAY! Word Matched হৰন`)
            setIsThird3Matched(true)
        } else if (!isFourth3Matched && longWord.match(words[7].join(""))) {
            toast(`YAY! Word Matched জগৰ`)
            setIsFourth3Matched(true)
        } else if (!isFifth3Matched && longWord.match(words[8].join(""))) {
            toast(`YAY! Word Matched বহন`)
            setIsFifth3Matched(true)
        } else if (!isFirst2Matched && longWord.match(words[9].join(""))) {
            toast(`YAY! Word Matched বন`)
            setIsFirst2Matched(true)
        } else if (!isSecond2Matched && longWord.match(words[10].join(""))) {
            toast(`YAY! Word Matched বৰ`)
            setIsSecond2Matched(true)
        } else if (!isThird2Matched && longWord.match(words[11].join(""))) {
            toast(`YAY! Word Matched জৰ`)
            setIsThird2Matched(true)
        } else if (!isFourth2Matched && longWord.match(words[12].join(""))) {
            toast(`YAY! Word Matched নৰ `)
            setIsFourth2Matched(true)
        } else if (!isFifth2Matched && longWord.match(words[13].join(""))) {
            toast(`YAY! Word Matched হত `)
            setIsFifth2Matched(true)
        } else {
            toast.error("No match!!", {
                theme: "colored",
            })
        }
        setMatch([])
        setStartPos(null)
        setIsDragging(false)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h3>অসমীয়া শব্দৰ খেল</h3>
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
                        <CookieCanvas startPos={startPos} pathPoints={pathPoints} />
                        {characters.map(({ id, thumb }, index) => <CookieLetter key={id} thumb={thumb} id={id} index={index} selection={match} />)}
                        <ul className="characters matchedCookies" >
                            {match.map(({ id, thumb }) => <li key={id} >
                                <div className="characters-thumb">
                                    <img src={thumb} alt={`${id}`} />
                                </div>
                            </li>
                            )}
                        </ul>
                    </ul>
                }
            </header>
            <br />
            <br />
            <br />
            <p>
                Made with Love by <a href="https://jinsoft.in/">Jinsoft</a>. Get the code here: <a href="https://github.com/tuktuk24/assamese-wordy">Github</a></p>
        </div>
    );
}

export default WordCookies
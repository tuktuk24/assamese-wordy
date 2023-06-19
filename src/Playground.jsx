import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { finalSpaceCharacters, ajgar, abagat, abanat, hazarat } from './utils/words';

const words = [["ao", "ja-b", "ga", "ra"],
["ao", "ba", "ga", "ta-m"],
["ao", "ba", "no-m", "ta-m"],
["ho", "ja-b", "ra", "ta-m"]
]

const Playground = () => {
    const [characters, updateCharacters] = useState(finalSpaceCharacters);
    const [message, setMessage] = useState(null)
    const [isFirstMatched, setIsFirstMatched] = useState(false)
    const [isSecondMatched, setIsSecondMatched] = useState(false)
    const [isThirdMatched, setIsThirdMatched] = useState(false)
    const [isFourthMatched, setIsFourthMatched] = useState(false)
    const [isWinner, setIsWinner] = useState(false)

    useEffect(() => {
        const messageInterval = setInterval(() => setMessage(null), 3000)
        return () => clearInterval(messageInterval)
    }, [])

    useEffect(() => {
        const longWord = characters.map(c => c.id).reduce((word, letter) => word + letter, "")
        if (!isFirstMatched && longWord.match(words[0].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFirstMatched(true)
            return
        }
        if (!isSecondMatched && longWord.match(words[1].join(""))) {
            setMessage("YAY! Word Matched")
            setIsSecondMatched(true)
            return
        }
        if (!isThirdMatched && longWord.match(words[2].join(""))) {
            setMessage("YAY! Word Matched")
            setIsThirdMatched(true)
            return
        }
        if (!isFourthMatched && longWord.match(words[3].join(""))) {
            setMessage("YAY! Word Matched")
            setIsFourthMatched(true)
            return
        }
    }, [characters])

    useEffect(() => {
        if (isFirstMatched && isSecondMatched && isThirdMatched && isFourthMatched) {
            setMessage("WINNER!")
            setIsWinner(true)
        }
    }, [isFirstMatched, isSecondMatched, isThirdMatched, isFourthMatched])

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
                {message && <h4>{message}</h4>}
                {isWinner ? <h2>CONGRATULATIONS</h2>
                    : <DragDropContext onDragEnd={handleOnDragEnd}>
                        <Droppable droppableId="characters" direction="horizontal">
                            {(provided) => (
                                <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                    {characters.map(({ id, thumb }, index) => {
                                        return (
                                            <Draggable key={id} draggableId={id} index={index}>
                                                {(provided) => (
                                                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                        <div className="characters-thumb">
                                                            <img src={thumb} alt={`${id}`} />
                                                        </div>
                                                    </li>
                                                )}
                                            </Draggable>
                                        );
                                    })}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </DragDropContext>}
            </header>
            <p>
                Made with Love by <a href="https://jinsoft.in/">Jinsoft</a>
            </p>
        </div>
    );
}

export default Playground
import React, { useState, useContext, useEffect } from 'react'

import TypingContext from '../../../../contexts/typing'
import { createInitial } from '../../../../utils/randomVars'

interface IWordProps {
    word: string
    removeWord: (w: string) => void
}

const Word: React.FC<IWordProps> = (props) => {

    const { word, removeWord } = props

    const { letter, wave, setWave } = useContext(TypingContext)

    const initial = createInitial(word)
    const ratio = wave === 11 ? 1.35 : 1;

    const [left] = useState(initial.left)
    const [animDuration] = useState(initial.animDuration * ratio + "s")
    const [animDelay] = useState(initial.animDelay + "s")
    const [cursor, setCursor] = useState(0)
    const [killed, setKilled] = useState(false)

    const style = {
        left: left,
        animationDuration: animDuration,
        animationDelay: animDelay
    }

    useEffect(() => {

        const missed = setTimeout(() => {
            setWave(-2)
        }, (initial.animDuration * ratio + initial.animDelay) * 1000)

        if (killed)
            clearTimeout(missed)

        return () => clearTimeout(missed)

    }, [killed])

    useEffect(() => {

        if (letter === word.charAt(cursor))
            setCursor(c => c + 1)

    }, [letter])

    useEffect(() => {

        if (cursor === word.length) {
            removeWord(word)
            setKilled(true)
        }

    }, [cursor])

    return (
        <div className={killed ? "word word-killed" : "word"} style={style}>
            <span className="word-already">{word.substr(0, cursor)}</span>
            <span className="word-current">{word.charAt(cursor)}</span>
            <span className="word-ongoing">{word.substr(cursor + 1)}</span>
        </div>
    )
}

export default Word

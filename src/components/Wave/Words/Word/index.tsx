import React, { useState, useContext, useEffect } from 'react'

import TypingContext from '../../../../contexts/typing'

interface IWordProps {
    word: string
    difficulty: "easy" | "fair" | "hard" | "epic" | "boss"
}

function randomBetween(min: number, max: number) {
    return (Math.random() * max) + min
}

function createInitial(difficulty: "easy" | "fair" | "hard" | "epic" | "boss", word: string) {
    const leftN = randomBetween(11, 88)
    const opp = leftN < 50 ? "+" : `-`
    const left = `calc( ${leftN}% ${opp} ( ${word.length} * ${11.53}px ) )`

    switch (difficulty) {
        case "easy":
            return {
                left,
                animDuration: randomBetween(10, 13),
                animDelay: randomBetween(0, 1)
            }
        case "fair":
            return {
                left,
                animDuration: randomBetween(15, 22),
                animDelay: randomBetween(1, 2)
            }
        case "hard":
            return {
                left,
                animDuration: randomBetween(20, 25),
                animDelay: randomBetween(2, 3)
            }
        case "epic":
            return {
                left,
                animDuration: randomBetween(23, 30),
                animDelay: randomBetween(4, 5)
            }
        case "boss":
            return {
                left,
                animDuration: randomBetween(25, 35),
                animDelay: randomBetween(5, 6)
            }
    }
}

const Word: React.FC<IWordProps> = (props) => {

    const { word, difficulty } = props

    const initial = createInitial(difficulty, word)

    const { letter, words, setWave, setWords } = useContext(TypingContext)

    const [index, setIndex] = useState(0)
    const [kill, setKill] = useState(false)

    const [left] = useState(initial.left)
    const [animDuration] = useState(initial.animDuration + "s")
    const [animDelay] = useState(initial.animDelay + "s")

    const style = {
        left: left,
        animationDuration: animDuration,
        animationDelay: animDelay
    }

    const arrayWord = [
        word.substr(0, index),
        word.charAt(index),
        word.substr(index + 1)
    ]

    useEffect(() => {

        const missed = setTimeout(() => {
            setWave(-2)
        }, (initial.animDuration + initial.animDelay) * 1000)

        if (kill)
            clearTimeout(missed)

        return () => clearTimeout(missed)

    }, [kill])

    useEffect(() => {

        if (letter === word.charAt(index))
            setIndex(index + 1)

        // eslint-disable-next-line
    }, [letter])

    useEffect(() => {

        if (index === word.length) {

            setKill(true)
            setWords(words - 1)
        }

        // eslint-disable-next-line
    }, [index])

    return (
        <div className={kill ? "word word-killed" : "word"} style={style}>
            <span className="word-already">{arrayWord[0]}</span>
            <span className="word-current">{arrayWord[1]}</span>
            <span className="word-ongoing">{arrayWord[2]}</span>
        </div>
    )
}

export default Word

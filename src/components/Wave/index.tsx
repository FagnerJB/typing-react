import React, { useContext, useEffect } from 'react'

import TypingContext from '../../contexts/typing'

import Words from './Words'

function Wave() {

    const { wave, words, setLetter, setWave, setWords } = useContext(TypingContext)

    const difficulties = [{
        easy: 4, fair: 1
    }, {
        easy: 4, fair: 2, hard: 1
    }, {
        easy: 5, fair: 3, hard: 2
    }, {
        easy: 6, fair: 3, hard: 2, epic: 1
    }, {
        easy: 5, fair: 4, hard: 3, epic: 2
    }, {
        easy: 4, fair: 5, hard: 4, epic: 2, boss: 1,
    }, {
        easy: 3, fair: 5, hard: 5, epic: 3, boss: 1,
    }, {
        easy: 2, fair: 6, hard: 5, epic: 3, boss: 1,
    }, {
        easy: 2, fair: 6, hard: 5, epic: 4, boss: 2,
    }, {
        easy: 1, fair: 5, hard: 6, epic: 5, boss: 2,
    }, {
        easy: 1, fair: 5, hard: 6, epic: 5, boss: 3,
    }]

    document.addEventListener("keydown", (e) => {
        if ("Enter" === e.key && wave === -1) {
            e.preventDefault()
            setWave(0)
        }
        if (/^[a-zA-Z]$/.test(e.key) && wave >= 0) {
            e.preventDefault()
            const letter = e.key.toLowerCase()
            setLetter(letter)
        }
    })

    document.addEventListener("keyup", (e) => {
        if (/^[a-zA-Z]$/.test(e.key) && wave >= 0) {
            setLetter("")
        }
    })

    useEffect(() => {

        if (wave >= 0)
            setWords(Object.values(difficulties[wave]).reduce((p: number, c: number | undefined) => c ? p + c : p, 0))

        // eslint-disable-next-line
    }, [wave])

    useEffect(() => {

        if (words === 0 && wave <= 10)
            setWave(wave + 1)

        // eslint-disable-next-line
    }, [words])

    if (wave === -2)
        return (
            <div className="start lost">
                You lost - Press <span className="start__key">F5</span> to try again
            </div>
        )
    else if (wave === -1)
        return (
            <div className="start">
                Press
                <span className="start__key">Enter</span>
                to start
            </div>
        )
    else if (wave === 11)
        return (
            <div className="start won">
                You won - Press <span className="start__key">F5</span> to try again
            </div>
        )
    else
        return (
            <div className="monitor">
                <Words
                    easy={difficulties[wave].easy}
                    fair={difficulties[wave].fair}
                    hard={difficulties[wave].hard ?? 0}
                    epic={difficulties[wave].epic ?? 0}
                    boss={difficulties[wave].boss ?? 0}
                />
            </div>
        )
}

export default Wave

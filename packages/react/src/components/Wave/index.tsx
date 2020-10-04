import React, { useContext, useEffect } from 'react'

import TypingContext from '../../contexts/typing'

import Words from './Words'

function Wave() {

    const { wave, setLetter, setWave } = useContext(TypingContext)

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
        easy: 4, fair: 5, hard: 4, epic: 2, boss: 1
    }, {
        easy: 3, fair: 5, hard: 5, epic: 3, boss: 1
    }, {
        easy: 2, fair: 6, hard: 5, epic: 3, boss: 1
    }, {
        easy: 2, fair: 6, hard: 5, epic: 4, boss: 2
    }, {
        easy: 1, fair: 5, hard: 6, epic: 5, boss: 2
    }, {
        easy: 1, fair: 5, hard: 6, epic: 5, boss: 3
    }, {
        easy: 1, fair: 5, hard: 17, epic: 23
    }]

    useEffect(() => {

        function handleKeydown(e: KeyboardEvent) {
            if ("Enter" === e.key && wave === -1) {
                e.preventDefault()
                setWave(0)
            }
            if (/^[a-zA-Z]$/.test(e.key) && wave >= 0) {
                e.preventDefault()
                const letter = e.key.toLowerCase()
                setLetter(letter)
            }
        }

        function handleKeyup(e: KeyboardEvent) {
            if (/^[a-zA-Z]$/.test(e.key) && wave >= 0) {
                setLetter("")
            }
        }

        document.addEventListener("keydown", handleKeydown)
        document.addEventListener("keyup", handleKeyup)

        return () => {

            document.removeEventListener("keydown", handleKeydown)
            document.removeEventListener("keyup", handleKeyup)

        }

    }, [wave])

    if (wave === -2)
        return (
            <div className="start lost">
                You lost<br />Press <span className="start__key">F5</span> to try again
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
    else if (wave === 12)
        return (
            <div className="start won">
                You won<br />Press <span className="start__key">F5</span> to try again
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

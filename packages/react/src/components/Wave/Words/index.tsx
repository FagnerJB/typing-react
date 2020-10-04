import React, { useEffect, useState, useContext } from 'react'

import Word from './Word'

import TypingContext from '../../../contexts/typing'
import source from '../../../utils/words'

interface IWordsProps {
    easy: number
    fair: number
    hard: number
    epic: number
    boss: number
}

const Words: React.FC<IWordsProps> = (props) => {

    const { easy, fair, hard, epic, boss } = props

    const { wave, setWave } = useContext(TypingContext)

    const [words, setWords] = useState(["empty"] as string[])

    useEffect(() => {

        if (wave >= 0) {

            const easy_t = source.easy.splice(0, easy)
            const fair_t = source.fair.splice(0, fair)
            const hard_t = source.hard.splice(0, hard)
            const epic_t = source.epic.splice(0, epic)
            const boss_t = source.boss.splice(0, boss)
            const all_t = easy_t.concat(fair_t, hard_t, epic_t, boss_t)

            setWords(all_t)

        }

    }, [wave])

    useEffect(() => {

        if (words.length === 0)
            setWave(wave + 1)

    }, [words])

    const removeWord = (word: string) => {

        setTimeout(() => {
            setWords(words.filter((w: string) => w !== word))
        }, 112)

    }

    return <>
        {words.length > 0 && words.map(
            (w: string) => <Word key={`word-${w}`} word={w} removeWord={removeWord} />
        )}
    </>

}

export default Words

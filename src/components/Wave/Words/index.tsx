import React, { useEffect, useState, useContext } from 'react'

import TypingContext from '../../../contexts/typing'

import Word from './Word'

import source from '../../../utils/words'

interface IWordsProps {
    easy: number
    fair: number
    hard: number
    epic: number
    boss: number
}

const Words: React.FC<IWordsProps> = (props) => {

    const { wave } = useContext(TypingContext)

    const { easy, fair, hard, epic, boss } = props

    const [easy_l, setEasy] = useState([])
    const [fair_l, setFair] = useState([])
    const [hard_l, setHard] = useState([])
    const [epic_l, setEpic] = useState([])
    const [boss_l, setBoss] = useState([])

    useEffect(() => {

        if (wave >= 0) {
            setEasy(source.easy.splice(0, easy))
            setFair(source.fair.splice(0, fair))
            setHard(source.hard.splice(0, hard))
            setEpic(source.epic.splice(0, epic))
            setBoss(source.boss.splice(0, boss))
        }

        // eslint-disable-next-line
    }, [wave])

    return (
        <>
            {easy > 0 ? easy_l.map(
                (w: string) => <Word key={`easy-${w}`} word={w} difficulty="easy" />
            ) : ""}
            {fair > 0 ? fair_l.map(
                (w: string) => <Word key={`fair-${w}`} word={w} difficulty="fair" />
            ) : ""}
            {hard > 0 ? hard_l.map(
                (w: string) => <Word key={`hard-${w}`} word={w} difficulty="hard" />
            ) : ""}
            {epic > 0 ? epic_l.map(
                (w: string) => <Word key={`epic-${w}`} word={w} difficulty="epic" />
            ) : ""}
            {boss > 0 ? boss_l.map(
                (w: string) => <Word key={`boss-${w}`} word={w} difficulty="boss" />
            ) : ""}
        </>
    )

}

export default Words

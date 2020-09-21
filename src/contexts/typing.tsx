import React, { createContext, useState } from 'react'

interface ITypingContext {
    letter: string
    wave: number
    words: number
    setLetter: (letter: string) => void
    setWave: (wave: number) => void
    setWords: (words: number) => void
}

const TypingContext = createContext<ITypingContext>({} as ITypingContext)

export const TypingProvider: React.FC = ({ children }) => {

    const [letter, setLetter] = useState("")
    const [wave, setWave] = useState(-1)
    const [words, setWords] = useState(-1)

    return (
        <TypingContext.Provider value={{ letter, wave, words, setLetter, setWave, setWords }}>
            {children}
        </TypingContext.Provider>
    )

}

export default TypingContext

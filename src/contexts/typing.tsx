import React, { createContext, useState } from 'react'

interface ITypingContext {
    letter: string
    wave: number
    setLetter: (letter: string) => void
    setWave: (wave: number) => void
}

const TypingContext = createContext<ITypingContext>({} as ITypingContext)

export const TypingProvider: React.FC = ({ children }) => {

    const [wave, setWave] = useState(-1)
    const [letter, setLetter] = useState("")

    return (
        <TypingContext.Provider value={{ letter, wave, setLetter, setWave }}>
            {children}
        </TypingContext.Provider>
    )

}

export default TypingContext

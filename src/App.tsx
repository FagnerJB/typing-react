import React from 'react'

import { TypingProvider } from './contexts/typing'

import Wave from "./components/Wave"
import Score from "./components/Score"

import './assets/global.css'

function App() {
    return (
        <TypingProvider>
            <div className="container">
                <Wave />
                <Score />
            </div>
        </TypingProvider>
    )
}

export default App

import React, { useContext } from 'react'

import TypingContext from '../../contexts/typing'

function Score() {

    const { wave } = useContext(TypingContext)

    return (
        <div className="score">
            <ul className="score-list">
                {wave >= 0 &&
                    <li className="score-list__item">
                        <span className="score-list__item__head">Wave</span>
                        <span className="score-list__item__number">{wave}</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default Score

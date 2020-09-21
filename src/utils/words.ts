import { words } from './words.json'

const shuffle = require('shuffle-array')

const source = {
    easy: shuffle(words.filter((w) => w.length <= 4)),
    fair: shuffle(words.filter((w) => w.length >= 5 && w.length <= 6)),
    hard: shuffle(words.filter((w) => w.length >= 7 && w.length <= 8)),
    epic: shuffle(words.filter((w) => w.length >= 9 && w.length <= 11)),
    boss: shuffle(words.filter((w) => w.length >= 12))
}

export default source

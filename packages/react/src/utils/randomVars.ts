function randomBetween(min: number, max: number) {
    return (Math.random() * max) + min
}

export function createInitial(word: string) {
    const leftN = randomBetween(5, 95)
    const opp = leftN < 50 ? "+" : `-`
    const left = `calc( ${leftN}% ${opp} ( ${word.length} * ${11.53}px ) )`

    switch (true) {
        case word.length <= 4:
            return {
                left,
                animDuration: randomBetween(10, 13),
                animDelay: randomBetween(0, 1)
            }
        case word.length >= 5 && word.length <= 6:
            return {
                left,
                animDuration: randomBetween(15, 22),
                animDelay: randomBetween(1, 2)
            }
        case word.length >= 7 && word.length <= 8:
            return {
                left,
                animDuration: randomBetween(20, 25),
                animDelay: randomBetween(2, 3)
            }
        case word.length >= 9 && word.length <= 11:
            return {
                left,
                animDuration: randomBetween(24, 33),
                animDelay: randomBetween(4, 6)
            }
        case word.length >= 12:
            return {
                left,
                animDuration: randomBetween(26, 36),
                animDelay: randomBetween(6, 7)
            }
        default:
            return {
                left,
                animDuration: 20,
                animDelay: 1
            }
    }
}

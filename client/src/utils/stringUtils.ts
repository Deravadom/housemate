
export const capitalize = (word: string) =>
    `${word[1].toUpperCase()}${word.slice(2)}`

export const routeName = () => {
    return capitalize(window.location.pathname)
}

export default {}
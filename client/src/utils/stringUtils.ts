export const capitalize = (word: string) =>
    `${word[1].toUpperCase()}${word.slice(2)}`

export const routeName = () => {
    const actualPathname = window.location.pathname
    const pathname = actualPathname === "/" ? '/dashboard' : actualPathname
    return capitalize(pathname)
}

export default {}
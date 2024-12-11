export const objectWithoutKeys = <T extends {}>(object: T, ...keys: string[]) => {
    return Object.entries(object).reduce(
        (acc, [key, value]) => (
            !keys.includes(key) ?
                { ...acc, [key]: value } :
                acc
        ),
        {}
    )
}

export default {}
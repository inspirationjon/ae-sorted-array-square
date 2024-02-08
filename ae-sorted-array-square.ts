function sortedSquaredArray(array: number[]): number[] {
    return array.map(num => num * num).sort((a, b) => a - b)
}


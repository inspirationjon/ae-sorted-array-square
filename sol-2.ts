export function sortedSquaredArray(array: number[]) {
    let leftPointer: number = 0
    let rightPointer: number = array.length - 1

    let result: number[] = new Array(array.length)

    for (let idx: number = array.length - 1; idx >= 0; idx--) {

        const leftSquared: number = array[leftPointer] ** 2
        const rightSquared: number = array[rightPointer] ** 2

        if (leftSquared > rightSquared) {
            result[idx] = leftSquared
            leftPointer++
        }
        else {
            result[idx] = rightSquared
            rightPointer--
        }

    }

    return result

}

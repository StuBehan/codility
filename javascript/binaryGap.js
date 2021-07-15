function solution(N) {

    if (N < 1 && N > 2147483647) {
        return 0
    }

    let gaps = [0]
    let binaryArray = N.toString(2).split('')

    const ones = (array) => {
        return array.indexOf('1')
    } 

    const reduce = (array) => {
        return array.splice(ones(array) + 1)
    }

    const findGaps = (array) => {
        let totalOnes = array.find(bin => bin > 0)
        let newArray = array.splice(ones(array) + 1)

        for (let i = 0; i <= totalOnes; i++) {

            if (ones(newArray) !== -1) {
                gaps.push(ones(newArray))
            } else {
                gaps.push(0)
            }
            
            newArray = reduce(newArray)
        }
        
    }

    findGaps(binaryArray)

    return Math.max(...gaps)
}

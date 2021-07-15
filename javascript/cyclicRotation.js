function solution(A, K) {
    let result = A

    if (result.length === 0) {
        return []
    }

    for (let i = 0; i < K; i++) {
        result.splice(0, 0, result.pop())
    }

    return result 
}

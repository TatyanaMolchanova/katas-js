function strToHash(str){
    let hash = {}

    if (str.length) {
        let arr = str.split(', ')

        let newArr = arr.map((elem, index) => elem
        .split('='))
        .map(x => hash[x[0]] = +x[1])
    }

    return hash
}

console.log('strToHash("a=1, b=2, c=3, d=4")', strToHash("a=1, b=2, c=3, d=4"))
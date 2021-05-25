// Best decision
const lastSurvivor = (letters, coords) => {
    for (let i of coords) {
        letters = letters.slice(0, i) + letters.slice(i + 1)
    }
    return letters
}


// Better decision 
// const lastSurvivor = (letters, coords) => {
//     letters = letters.split('')
//     for (let i = 0; i < coords.length; i++) {
//         letters.splice(coords[i], 1)
//     }
//     return letters.join('')
// }


// My decision
// function lastSurvivor(letters, coords) {
//     if (letters.length === 1) return letters[0]

//    for (let i = 0; i < coords.length; i++) {
        
//         let arr = letters.split('')
//         arr.splice(coords[i], 1)
//         letters = arr.join('')
//     }

//     return letters
// }


console.log('lastSurvivor(abc, [1, 1])', lastSurvivor('abc', [1, 1]))
console.log('lastSurvivor(xnxbxa , [2,4,3,1,1])', lastSurvivor('xnxbxa', [2,4,3,1,1]))
console.log('lastSurvivor(c, [])', lastSurvivor('c', []))

































// function lastSurvivor(letters, coords) {

//     // if (letters.length === 1) return letters[0]

//     // for (let i = 0; i < letters.length; i++) {
//     for (let i = 0; i < coords.length; i++) {
        
//         let arr = letters.split('')
//         console.log('arr', arr)
//         arr.splice(coords[i], 1)
//         console.log('2 arr', arr)
//         // console.log('arr.splice(coords[i], 1)', arr.splice(coords[i], 1))
//         // console.log('coords[i]', coords[i])
//         let smth = arr.join('')

//         letters = smth
//         console.log('smth', smth)
//         // console.log('2 arr', arr)
//         // letters = arr.join('')
//         console.log('letters', letters)
//         // console.log('letters.length', letters.length)
//         console.log('i', i)

//     }

//     console.log('3 letters', letters)

//     // return letters
// }




// function lastSurvivor(letters, coords) {
//     if (letters.length === 1) return letters[0]

//     for (let i = 0; i < letters.length; i++) {
        
//         let arr = letters.split('')
//         arr.splice(coords[i], 1)
//         letters = arr.join('')
//     }

//     return letters
// }





// function lastSurvivor(letters, coords) {

//     if (letters.length === 1) return letters[0]

//     // const lettersArray =  letters.split('')
//     // console.log('lettersArray', lettersArray)

//     // for (let i = 0; i < letters.length -  1; i++) {
//     for (let i = 0; i < letters.length; i++) {
//         // const lettersArray = letters.split('').splice(coords[i], 1)
//         // letters = letters.split('').splice(coords[i], 1)

//         // let abc = letters.slice(coords[i], coords[i] + 1)

//         // console.log('letters.slice(coords[i])', letters.slice(coords[i], coords[i] + 1))

//         // console.log('abc', abc)


//         let arr = letters.split('')

//         arr.splice(coords[i], 1)

//         console.log('arr', arr)

//         console.log('letters.split()', letters.split('').splice(coords[i], 1).join(''))

//         console.log('coords[i]', coords[i])

        
//         letters = arr.join('')
//         console.log('2 letters', letters)

//         // coords.shift()
//         console.log('coords', coords)

//         // console.log('lettersArray', lettersArray)
//         // letters = lettersArray

//     }

//     console.log('3 letters', letters)
//     // console.log('3 lettersArray', lettersArray)

//     return letters

// }

// console.log('lastSurvivor(abc, [1, 1])', lastSurvivor('abc', [1, 1]))
// console.log('lastSurvivor(c, [])', lastSurvivor('c', []))
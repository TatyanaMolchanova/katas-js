// Best solution 1
// const smallEnough = (a, limit) => {
//     return Math.max(...a) <= limit
// }

// Best solution 2
const smallEnough = (a, limit) => {
    return a.every(x => x <= limit)
}


// My solution
// const smallEnough = (a, limit) => {
//    const res = a.map(el => {
//         return el <= limit ? true : false
//    })
//    return res.includes(false) ? false : true
// }

console.log('smallEnough([66, 101], 200)', smallEnough([66, 101], 200))

console.log('smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)', smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))

console.log('smallEnough([101, 45, 75, 105, 99, 107], 107)', smallEnough([101, 45, 75, 105, 99, 107], 107))

console.log('smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)', smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))



// const smallEnough = (a, limit) => {
//     //    const res = a.filter(el => el <= limit)
//        const res = a.map(el => {
//             let result = el <= limit ? true : false
//             // console.log('result', result)
    
//             return result
//        })
    
//     //    res.map(elem => elem === false ? false : true)
    
//        return res.includes(false) ? false : true
    
//     //    console.log('res', res)
    
//     }
    
//     console.log('smallEnough([66, 101], 200)', smallEnough([66, 101], 200))
    
//     console.log('smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100)', smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
    
//     console.log('smallEnough([101, 45, 75, 105, 99, 107], 107)', smallEnough([101, 45, 75, 105, 99, 107], 107))
    
//     console.log('smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120)', smallEnough([80, 117, 115, 104, 45, 85, 112, 115], 120))
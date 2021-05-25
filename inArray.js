const inArray = (array1, array2) => {

    let arr = []

    for (let i = 0; i < array2.length; i++) {

        for (let j = 0; j < array1.length; j++) {

            if (array2[i].includes(array1[j])) {

                if (array1[i] !== undefined) {
                    arr.push(array1[i])
                }
               
            }
        }
    }

    console.log('arr', arr)

    // let result = new Set(arr)

    // console.log('result', result)
    return arr


}

console.log('inArray', inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))




// const inArray = (array1, array2) => {

//     let arr = []

//     for (let i = 0; i < array2.length; i++) {

//         // console.log('array1[i]', array1[i])
        
//         // console.log('includes', array2[i].includes(array1[i]))

        


//         for (let j = 0; j < array1.length; j++) {

//             // console.log('fd', array2[i].includes(array1[j]))


//             if (array2[i].includes(array1[j])) {

//                 if (array1[i] !== undefined) {
//                     arr.push(array1[i])
//                 }
               
//             }
//         }

//         // console.log('array2[i]', array2[i])


        

//     }

//     console.log('arr', arr)


// }

// console.log('inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])', inArray(["arp", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))
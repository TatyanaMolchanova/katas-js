const lastSurvivors = (str) => {

    let arr = str.split('')
    console.log('str', str)

    let string



    // for (let i = 0; i < arr.length; i++) {

    //     console.log('test length', arr.filter(x => x == arr[i]).length)

    //     if (arr.filter(x => x == arr[i]).length > 1) {


    //         console.log('includes', arr[i])
    //         console.log('i', i)
    //     }

    // }

    // arr.map((letter, index, array) => console.log(letter, index, array))
    arr.map((letter, index, array) => {
        // array.filter(x => x == array[index])

        if (array.filter(x => x == array[index]).length > 1) {
            string = str.replace(str[index], 'XXX')
            console.log('2 string', string)

            array.splice(array[index])
        }

        // console.log('filter', array.filter(x => x == array[index]))

    })

    // arr.filter((letter, index, array) => {
    //     console.log('filter', letter == array[index])
    // })
}

console.log('lastSurvivors(abaa)', lastSurvivors('abaa'))


// https://www.codewars.com/kata/60a1aac7d5a5fc0046c89651/train/javascript
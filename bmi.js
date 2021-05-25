function bmi(weight, height) {
    let index = weight / Math.pow(height, 2)

    if (index <= 18.5) {
        return "Underweight"
    }

    if (index <= 25.0) {
        return "Normal"
    }

    if (index <= 30.0) {
        return "Overweight"
    }

    if (index > 30) {
        return "Obese"
    }
}

console.log('bmi(80, 1.80)', bmi(80, 1.80));
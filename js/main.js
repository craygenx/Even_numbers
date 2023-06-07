function checkNumber(number) {
    if (number % 2 === 0) {
        return `${number} is an even number`
    } else {
        return `${number} is an odd number`
    }
}

//using ternary

function numberCheck(number) {
    return number % 2 === 0 ? `${number} is an even number`:`${number} is an odd number`
}
console.log(checkNumber(2))
console.log(numberCheck(7))
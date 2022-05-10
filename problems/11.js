/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    let s = str.toLowerCase();
    let base = s.split('').filter(function(char) {
        if (char != ' ') {
            return true;
        } else {
            return false;
        }
    });
    let half;
    if (base.length % 2 == 0) {
        half = (base.length / 2) - 1;
    } else {
        half = (base.length / 2) - 0.5;
    }
    // console.log(base)
    // console.log(half)
    const a = base.slice(0, half + 1);
    const b = base.slice(half, base.length).reverse();
    // console.log(a, b)
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;

    // if (base.length % 2 == 0 && base.slice(0, half) === base.slice(half, base.length).reverse()) {
    //     console.log(base.slice(0, half))
    //     return true
    // } else if (base.length % 2 != 0 && (base.slice(0, half + 1) === base.slice(half, base.length).reverse())) {
    //     console.log(base.slice(0, half + 1))
    //     return true
    // } else {
    //     return false
    // }
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};
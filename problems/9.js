/**
 * Problem 9: Custom Sorting
 * 
 * Given a list students, return the names of students who have a grade above 90 in alphabetical order.
 * Use the .map, .filter, and .sort functions.
 * 
 * @example [{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}] -> ["Peter", "Raman"]
*/
function problem(students) {
    const aboveNinety = students.filter(function(student) {
        return student['grade'] >= 90;
    });
    const sortedNinety = aboveNinety.sort(function(a, b) {
        return a['name'].localeCompare(b['name']);
    });
    const names = sortedNinety.map(function(students) {
        return students['name'];
    });
    return names;
}

const tests = [
    [[{name: "Chase", grade: 89}, {name: "Raman", grade: 92}, {name: "Peter", grade: 100}], ["Peter", "Raman"]],
    [[{name: "Peter", grade: 92}, {name: "Gillman", grade: 70}, {name: "Pattis", grade: 100}], ["Pattis", "Peter"]],
    [[{name: "Chase", grade: 89}], []]
]

module.exports = {problem, tests};
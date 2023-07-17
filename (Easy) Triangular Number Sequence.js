/*
This Triangular Number Sequence is generated from a pattern of dots that form a triangle. The first 5 numbers of the sequence, or dots, are:

1, 3, 6, 10, 15

This means that the first triangle has just one dot, the second one has three dots, the third one has 6 dots and so on.

Write a function that returns the number of dots when given its corresponding triangle number of the sequence.

//-- FOR TESTING --//
triangle(1) ➞ 1

triangle(6) ➞ 21

triangle(215) ➞ 23220
*/

const triangle = (a) => {
    if(a === 0) return a;
    return a + triangle(a - 1);
}

console.log(triangle(1)) // 1
console.log(triangle(6)) // 21
console.log(triangle(215)) // 23220
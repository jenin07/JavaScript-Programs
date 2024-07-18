const num = [1,23,3,211,434,3454,532,]

const initial_value = 0

// reduce using function

// const mytotal = num.reduce( function (acc, curval) {
//     console.log(acc);
//     console.log(curval);
//     return acc + curval
// }, initial_value
// )


// using arrow function

// const mytotal = num.reduce( (acc, curr) => acc + curr, initial_value)


// operations on object

const arrobj = [
    {
        user: "jenin",
        age: 4555
    },
    {
        user: "aman",
        age: 2122
    },
    {
        user: "pragya",
        age: 2178
    }
]

const mytotal = arrobj.reduce((acc, curr) => acc + curr.age, 0 )
console.log(mytotal);


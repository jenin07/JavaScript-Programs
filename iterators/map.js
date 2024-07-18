
const num = [1,23,3,211,434,3454,532,]

// without parenthsis
// const news = num.map ( (num) => num+10)

// parenthsis
// const news = num.map ( (num) => (num+10))

// scope
// const news = num.map ( (num) => {
//     return num+10
// })
// console.log(news);

// chaining with the help of map and filter
const newnum = num
    .map ((num) => num*10 )
    .map((num) => num / 10)
    .filter( (num) => num >= 50)
console.log(newnum);
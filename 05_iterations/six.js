const coding =["js", "ruby", "java", "pythong", "cpp"];


// const values = coding.forEach((item)=>{
//     console.log(item);
//     return item;
// })

// console.log(values)


const myNums =[1, 2, 3, 4, 5, 6, 7, 8];

// const nuewNums = myNums.filter( (num)=> num > 5)

// console.log(nuewNums)


// const newNums = myNums.filter( (num) =>{
//     return num > 4
// })

// console.log(newNums)


// const newNums = []

// myNums.forEach( (num) =>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums)


const books =[
    {title: 'Book One', genre:'Fiction', publish:1981 , edition : 2004},
    {title: 'Book Two', genre:'Non-Fiction', publish:1999 , edition : 2009},
    {title: 'Book Three', genre:'History', publish:1987 , edition : 2010},
    {title: 'Book Four', genre:'Fiction', publish:1990 , edition : 2000},
    {title: 'Book Five', genre:'Science', publish:2000 , edition : 2015},
    {title: 'Book Six', genre:'History', publish:2004 , edition : 2017}
];


// let userBooks = books.filter( (bk)=> bk.publish == 1981)

const userBooks = books.filter( (bk) =>{
    return bk.genre == 'History'
})

// console.log(userBooks)
// console.log(userBooks)

const userBooks1 = books.filter( (bk) =>{
    return bk.genre == 'History' && bk.publish == 1987
})

console.log(userBooks1)
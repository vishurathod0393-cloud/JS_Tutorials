const coding = ['js', 'ruby', 'java', 'pythong', 'cpp']


// coding.forEach(function (item) {
//     console.log(item)
// })   // call back function


// coding.forEach((val) =>{

//     console.log(val)

// })


// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach( (item, index, arr)=>{
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName : 'javascript',
        languageFileName : 'java'
    },
     {
        languageName : 'python',
        languageFileName : 'py'
    },
     {
        languageName : 'react',
        languageFileName : 'js'
    },

]


myCoding.forEach( (item)=>{
    console.log(item.languageName)
    console.log(item.languageFileName)

})
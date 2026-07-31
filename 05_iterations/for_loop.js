// for


// for(let i= 0; i<10; i++){
//     console.log(i)
// }

// for (let i =0 ; i < 10; i++){
//     const element = i;
//     console.log(element);
// }


// for (let i = 1 ; i <= 10; i++){
//     console.log(`Outer Loop Value is ${i}`);
//     for (let j = 1; j<=10; j++){
//         // console.log(`Inner Loop value ${j} and outer loop ${i}`)
//         console.log(i + ' * ' + j + ' = ' + i*j)
//     }
// }

// let myArray = ['vishal', 'ajit', 'tushar']

// for (let i = 0; i < myArray.length; i++){
//     console.log(myArray[i])
// }


//  break and continue



// for(let index = 1 ; index <=20; index++){
//     if( index == 5){
//         console.log('Detected 5');
//         break;
//     }
//     console.log(`Value of i is ${index}`)
// }


for(let index = 1 ; index <=20; index++){
    if( index == 5){
        console.log('Detected 5');
        continue;
    }
    console.log(`Value of i is ${index}`)
}
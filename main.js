// Task 1 - Creating a Promise

// function createDelay(ms){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res('Delay Completed')
//         }, ms)
//     })
// }


// Task 2 - Using Promises

// createDelay(1000).then((message)=>{
//     console.log(message)
// })


// Task 3 - Chaining Promises

// function createDelay(message, ms){
//     return new Promise((res)=>{
//         setTimeout(()=>{
//             res(message)
//         }, ms)
//     })
// }


// createDelay('First Message', 500).then((message)=>{
//     console.log(message)
//     return createDelay('Second Message')
// }).then((message)=>{
//     console.log(message)
//     return createDelay('Third message')
// }).then((message)=>{
//     console.log(message)
// })



// Task 4 - Error Handling

// function createDelay(message, ms){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             if(Math.random()<2){
//                 rej(new Error('Error: Delay failed'))
//             }else{
//                 res(message)
//             }
//         }, ms)
//     })
// }

// createDelay('First Message', 500).then((message)=>{
//     console.log(message)
//     return createDelay('Second Message')
// }).then((message)=>{
//     console.log(message)
//     return createDelay('Third message')
// }).then((message)=>{
//     console.log(message)
// }).catch((err)=>{
//     console.log(err.message)
// })





// Task 5 - Bonus: Using Promise.all

// function createDelay(message, ms){
//     return new Promise((res, rej)=>{
//         setTimeout(()=>{
//             if(Math.random()>0.7){
//                 rej(new Error('Error: Delay failed'))
//             }else{
//                 res(message)
//             }
//         }, ms)
//     })
// }

// const delays = [
//     createDelay('First Message', 500),
//     createDelay('Second Message', 1000),
//     createDelay('Third Message', 1500)
// ]

// Promise.all(delays).then((messages)=>{
//     console.log('All messages', messages)
// }).catch((err)=>{
//     console.log(err.message)
// })



// Async Await

// function createDelay(message, ms) {
//     return new Promise((res, rej) => {
//         setTimeout(() => {
//             if (Math.random() > 0.7) {
//                 rej(new Error('Error: Delay failed'))
//             } else {
//                 res(message)
//             }
//         }, ms)
//     })
// }

// async function delays() {
//     const delays = [
//         createDelay('First Message', 500),
//         createDelay('Second Message', 1000),
//         createDelay('Third Message', 1500)
//     ]
//     try {
//         const messages = await Promise.all(delays)
//         console.log(messages)
//     } catch (error) {
//         console.log(error.message)
//     }
// }

// delays()
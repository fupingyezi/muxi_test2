/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let p1 = await promise1;
    let p2 = await promise2;
    return new Promise(resolve => {
        return resolve(p1 + p2);
    })
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
addTwoPromises(Promise.resolve(2), Promise.resolve(2))
    .then(console.log); // 4
   
promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))

addTwoPromises(promise1, promise2)
    .then(console.log); 




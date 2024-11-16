/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    let str = JSON.stringify(obj);
    if (str === '{}' || str === '[]') {
        return true;
    }
    else {
        return false;
    }
};

console.log(isEmpty({}));
console.log(isEmpty({ "x": 5, "y": 42 }));
console.log(isEmpty([null, false, 0]));
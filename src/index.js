module.exports = function reverse (n) {
     if(n < 0 ){ 
         n = n.toString().substr(1,n.length);
     }
    let solution = n.toString().split('').reverse().join('');
    return Number(solution);
}

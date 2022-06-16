// function Something(arr){
//     var result = 0;
//     for(var i = 0; i < arr.length; i++){
//         if(arr[i] > 10){
//             console.log("We got a big one!");
//         } else {
//             result+=arr[i]
//         }
//     }
//     if(result < 10){
//         console.log("You're killin' me, Smalls");
//     } else {
//         return "You're gonna need a bigger funcion!";
//     }
// }
// Something([1,8,21,-11,12,2,9,15,7]);


function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise

    if (Math.sqrt(sq) % 1 == 0) {
        return Math.pow(Math.sqrt(sq) + 1,2)
    }
    else {
        return -1;
    }
}

console.log(findNextSquare(121))
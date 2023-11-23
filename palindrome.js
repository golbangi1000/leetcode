var isPalindrome = function(x) {
    let num = x.toString();

    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    if(num.length % 2 == 0){
        if(num.substring(0, num.length/2) == reverseString(num).substring(0, num.length/2)){
            return true
        } else{
            return false
        }

    } else if( num.length % 2 == 1){  
        if(num.substring(0, num.length/2) == reverseString(num).substring(0, num.length/2)){
            return true
        } else{
            return false
        }
    }

};

console.log(isPalindrome('144441'));
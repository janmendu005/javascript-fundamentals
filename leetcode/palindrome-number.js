function isPalindrome(x) {

    const str = x.toString();

    const reversed =
        str.split('')
           .reverse()
           .join('');

    return str === reversed;
}
console.log(isPalindrome(121)); 
console.log(isPalindrome(123));
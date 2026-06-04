function isAnagram(s, t) {

    const str1 =
        s.split('')
         .sort()
         .join('');

    const str2 =
        t.split('')
         .sort()
         .join('');

    return str1 === str2;
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
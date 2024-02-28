function isUnique(str){
    // if the string is empty, just return true
    if(str.length < 1) return true;

    // hash or object to create key value pairs
    const hash = {};

    // looping the string
    for (let char of str) {
        if(hash[char]){
            /* if the key already exist in the hash
                return false because that means the string doesn't have unique characters */
            return false;
        } else {
            // if the key doesn't exist, create one
            hash[char] = 1;
        }
    }

    return true;
};

console.log(isUnique("abcdef")); // true
console.log(isUnique("poiuwerq")); // true
console.log(isUnique("hello")); // false
console.log(isUnique("")); // true
console.log(isUnique("askpgwerasdfa")); // false

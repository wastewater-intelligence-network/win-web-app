export  function randomString (length, chars) {
    let result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
      return result;
}


export  function randomStringGenerator(count, length){
    const charUsed = "123456789abcdefghijklmnpqrstuvwxyzABCDEFGHIJKLMNPQRSTUVWXYZ";
    const randomStrings = [];
    for(let i = 0; i<count; i++){
        randomStrings.push(randomString(length, charUsed))
    }
    return randomStrings;
}
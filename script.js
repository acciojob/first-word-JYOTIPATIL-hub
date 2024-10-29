function firstWord(str) {
    // Trim leading spaces and find the index of the first space
    const trimmedStr = str.trim();
    const spaceIndex = trimmedStr.indexOf(' ');
    
    // If there's no space, return the entire string
    if (spaceIndex === -1) {
        return trimmedStr;
    }
    
    // Otherwise, return the substring up to the first space
    return trimmedStr.substring(0, spaceIndex);
}

// Examples
console.log(firstWord('see and stop'));  // Output: 'see'
console.log(firstWord(' Hello World!')); // Output: 'Hello'
console.log(firstWord('12345'));         // Output: '12345'
console.log(firstWord(''));              // Output: ''

function isObjectEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  
  // Example usage:
  const emptyObject = {};
  const nonEmptyObject = { a: 1, b: 2 };
  
  console.log("Is emptyObject empty?", isObjectEmpty(emptyObject)); // true
  console.log("Is nonEmptyObject empty?", isObjectEmpty(nonEmptyObject)); // false
  
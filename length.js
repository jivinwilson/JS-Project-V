function getObjectLength(obj) {
    return Object.keys(obj).length;
  }
  
  // Example usage:
  const myObject = { a: 1, b: 2, c: 3 };
  const length = getObjectLength(myObject);
  console.log(`The object has ${length} keys.`);
  
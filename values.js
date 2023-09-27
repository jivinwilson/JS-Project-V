function getObjectValues(obj) {
    const valuesArray = [];
  
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        valuesArray.push(obj[key]);
      }
    }
  
    return valuesArray;
  }
  
  // Example usage:
  const myObject = { a: 1, b: 2, c: 3 };
  const values = getObjectValues(myObject);
  console.log("Object values as an array:", values);
  
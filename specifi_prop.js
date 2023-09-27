// Using hasOwnProperty
function hasProperty(obj, property) {
    return obj.hasOwnProperty(property);
  }
  
  // Using the in operator
  function hasPropertyUsingIn(obj, property) {
    return property in obj;
  }
  
  // Example usage:
  const myObject = { a: 1, b: 2, c: 3 };
  
  console.log("Using hasProperty:");
  console.log("Does 'myObject' have property 'a'?", hasProperty(myObject, "a")); // true
  console.log("Does 'myObject' have property 'x'?", hasProperty(myObject, "x")); // false
  
  console.log("\nUsing hasPropertyUsingIn:");
  console.log("Does 'myObject' have property 'b'?", hasPropertyUsingIn(myObject, "b")); // true
  console.log("Does 'myObject' have property 'y'?", hasPropertyUsingIn(myObject, "y")); // false
  
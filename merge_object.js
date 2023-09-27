function mergeObjects(obj1, obj2) {
    const result = {};
  
    // Copy properties from obj1 to result
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        result[key] = obj1[key];
      }
    }
  
    // Copy properties from obj2 to result (overwriting if there are conflicts)
    for (const key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        result[key] = obj2[key];
      }
    }
  
    return result;
  }
  
  // Example usage:
  const object1 = { a: 1, b: 2 };
  const object2 = { b: 3, c: 4 };
  const mergedObject = mergeObjects(object1, object2);
  
  console.log("Merged Object:", mergedObject);
  
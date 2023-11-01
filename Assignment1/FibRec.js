function fibsRec(n, result = []) {
    if (n <= 0) {
      return result;
    }
  
    if (result.length < 2) {
      result.push(result.length);
    } else {
      const nextFib = result[result.length - 1] + result[result.length - 2];
      result.push(nextFib);
    }
  
    return fibsRec(n - 1, result);
  }
  
  console.log("Recursive: " + fibsRec(8));
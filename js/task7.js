function calculateValue(number, pow) {
      let result = 1;
      for (i = 0; i < pow; i++) {
      result *= number;
      }
      return result;
  } 
  console.log(calculateValue(4, 2))
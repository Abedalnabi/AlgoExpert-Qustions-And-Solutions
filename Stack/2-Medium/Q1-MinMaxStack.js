// Note : ------------------------------
// just solution is correct
// add th Question and the hints

/* ------------------------ Question-1-Stack-medium



  ---- Sample input ----
  

  
  ---- Sample output ----
  
  ===> 3

*/
/* ------------------------ Hints ------------------------

  -- Hint 1 


  -- Hint 2 


  -- Hint 3 

  -- Optimal Space & Time Complexity


/* ------------------------ Solutions ------------------------*/

//  ---- First solution ---- :

class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    return this.stack[this.stack.length - 1];
  }

  pop() {
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    this.stack.push(number);
    let min = Math.min(...this.stack);
    let max = Math.max(...this.stack);
    this.minMaxStack.push({ min: min, max: max });
  }

  getMin() {
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

//  ---- Second solution ---- :

class MinMaxStack {
  constructor() {
    this.minMaxStack = [];
    this.stack = [];
  }
  peek() {
    // o(1)
    return this.stack[this.stack.length - 1];
  }

  pop() {
    // o(1)
    this.minMaxStack.pop();
    return this.stack.pop();
  }

  push(number) {
    // o(1)
    const newMinMax = { min: number, max: number };
    if (this.minMaxStack.length) {
      const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
      newMinMax.min = Math.min(lastMinMax.min, number);
      newMinMax.max = Math.max(lastMinMax.max, number);
    }
    this.minMaxStack.push(newMinMax);
    this.stack.push(number);
  }

  getMin() {
    // o(1)
    return this.minMaxStack[this.minMaxStack.length - 1].min;
  }

  // o(1)
  getMax() {
    return this.minMaxStack[this.minMaxStack.length - 1].max;
  }
}

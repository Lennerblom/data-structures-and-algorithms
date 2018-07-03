'use strict';

class List {
  constructor() {
    this.length = 0;
  }

  push(thing) {
    this[this.length++] = thing;
    return this.length;
  }

  pop() {
    let lastThing = this[this.length -1];
    if(this.length === 0) {
      return undefined;
    } else {
      delete (this[this.length -1]);
      this.length --;
      return lastThing;
    }
  }
  peek() {
    return this[this.length -1];
  }
}

let multiBracketValidation = (string) => {
  const stack = new List;
  const openers = ['(','{', '['];
  const closers = {
    '(' : ')',
    '{' : '}',
    '[' : ']',
  };

  for(let char of string){
    if(openers.includes(char)) {
      stack.push(char);
    } else if (Object.keys(closers).includes(char)) {
      if(stack.length === 0) {
        return false;
      } else if (stack.peek() !== closers.char) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  if(stack.length === 0) {
    return true;
  }
};

export default {multiBracketValidation, List};
"use strict";

function createCounter() {
  let count = 0;

  return {
    increment: function() {
      count++;
    },
    decrement: function() {
      count--;
    },
    getCount: function() {
      return count;
    }
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 1
counter.decrement();
console.log(counter.getCount()); // 0

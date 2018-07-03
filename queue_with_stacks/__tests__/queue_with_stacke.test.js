'use strict';

import Queue from '../lib/queue_with_stacks.js';

describe('queues', () => {
  const myQ = new Queue;
  let expected;
  let actual;

  it('enqueue should add to the queue', () => {  
    actual = myQ.enqueue(1).value;
    expected = 1;
    expect(actual).toBe(expected);
  });
});

// myQ.enqueue(1);
// myQ.enqueue(2);
// myQ.enqueue(3);
// myQ.enqueue(4);
// myQ.enqueue(5);
// myQ.dequeue();
// myQ.dequeue();
// myQ.dequeue();
// myQ.dequeue();
// myQ.dequeue();
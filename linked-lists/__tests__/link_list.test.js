// 'use strict';

// const LinkedList = require('../lib/link_list.js');

// describe('Linked List', () => {
//   let expected, actual;
//   let list = new LinkedList();
  
//   it('append() should add data if this.head is null', (done) => {
//     list.append(4);
//     expected = 4;
//     actual = list.head.value;

//     expect(actual).toBe(expected);
//     done();
//   });

//   it('append() should add data to the end of the list', (done) => {
//     list.append('taco');
//     list.append('tamale');
//     list.append('burrito');
//     expected = 'burrito';
//     actual = list.head.next.next.value;
   
//     expect(actual).toBe(expected);
//     done();
//   });

//   it('prepend() should add data to the beginning of the list', (done) => {
//     list.append('taco');
//     list.append('tamale');
//     list.prepend('burrito');
//     expected = 'burrito';
//     actual = list.head.value;
   
//     expect(actual).toBe(expected);
//     done();
//   });

//   it('prepend() should add data to the list when this.head is null', (done) => {
//     list.prepend('burrito');
//     expected = 'burrito';
//     actual = list.head.value;
   
//     expect(actual).toBe(expected);
//     done();
//   });

//   it('reverse() should reverse the linked list, the last shall be first', (done) => {
//     list.append('taco');
//     list.append('tamale');
//     list.append('burrito');
//     list.append('crunchWrap');
//     list.reverse();

//     expected = ('crunchWrap');
//     actual = list.head.value;

//     expect(actual).toBe(expected);
//     done();
//   });

//   it('reverse() should reverse the linked list, the first shall be last', (done) => {
//     list.append('taco');
//     list.append('tamale');
//     list.append('burrito');
//     list.append('crunchWrap');
//     list.reverse();

//     expected = ('taco');
//     actual = list.head.next.next.next.value;

//     expect(actual).toBe(expected);
//     done();
//   });

//   it('remove() should remove an item from the list without breaking the chain', (done) => {
//     list.append('taco');
//     list.append('tamale');
//     list.append('burrito');
//     list.append('crunchWrap');
//     list.remove('tamale');

//     expected = ('burrito');
//     actual = list.head.next.value;

//     expect(actual).toBe(expected);
//     done();
//   });

//   xit('remove() should return the new head if the old head is removed', (done) => {
//     list.append('taco');
//     list.append('tamale');
//     list.append('burrito');
//     list.append('crunchWrap');
//     list.remove('taco');

//     expected = ('tamale');
//     actual = list.head.value;

//     expect(actual).toBe(expected);
//     done();
//   });

//   xit('remove() should return the new head if the old head is removed', (done) => {
//     list.remove('taco');

//     expected = (null);
//     actual = list.head.value;

//     expect(actual).toBe(expected);
//     done();
//   });

//   it('remove() serialize the linked list', (done) => {
//     list.append(4);
//     list.append(6);
//     list.append(7);
//     list.serialize();

//     expected = ('[4] ->[6] ->[7] ->[X]');
//     actual = list.serialize();

//     expect(actual).toBe(expected);
//     done();
//   });
// });

import { strict as assert } from 'node:assert';
import capitalize from "../src/capitalize.js";

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'),'Hello');

// if (capitalize('hello') !== 'Hello') {
//     throw new Error('Функция работает неверно(с переданным аргументом)!');
//   }
  
//   if (capitalize('') !== '') {
//     throw new Error('Функция работает неверно!(связано с пустым значением');
//   }
  
//   console.log('Все тесты пройдены!');
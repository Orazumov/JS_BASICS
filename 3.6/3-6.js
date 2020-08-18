'use strict';

// Нарисовать горку с помощью console.log (используя цикл for), как показано на рисунке,
// только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 0; i < 20; i++) {
  for (let j = 0; j <= i; j++) {
    console.log('*');
  }
  console.log('\r');
}
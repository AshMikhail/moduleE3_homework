//Задание 5.
// Напишите функцию, которая принимает два натуральных числа x и n и
// возвращает x в степени n. Иначе говоря, умножает x на себя n раз и
// возвращает результат.

const exponentiation = (x, n) => {
    if (n < 1){
        let result = x
        return result;
    }else {
        let result = x ** n
        return result;
    }
}

const res = exponentiation(5, 3)
console.log('результат: ', res)
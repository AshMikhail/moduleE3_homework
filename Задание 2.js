//Задание 2.
// Написать функцию, которая принимает на входе любое число (но не больше 1 000),
// определяет, является ли оно простым, и выводит простое число или нет.
// Если введено больше 1 000, то выводится сообщение, что данные неверны.
// Обратите внимание на числа 0 и 1.

function SimpleOrNot(num){
    if (num > 1 && num <= 1000) {
        if (num === 2) {
            console.log(`Число ${num} является простым`);
        }else if (num % 2 === 0){
            console.log(`Число ${num} является составным`)
        }else (console.log(`Число ${num} является простым`));

    }else {console.log('Данные неверны')};
}
const res = SimpleOrNot(10)
console.log(res)


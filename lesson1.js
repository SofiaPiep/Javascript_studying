console.log('Hello');
//console. log (typeof a)
/*Домашнее задание 1: 
1.1 Объявите две переменные: firstName и lastName.*/
let firstName, lastName;
/*1.2 Присвойте значение “John”  переменной firstName и значение “Adams”   переменной  lastName.*/
firstName  = 'John';
lastName = 'Adams';
/*1.3 Выведите в консоль  значение firstName и lastName  (должно показать John Adams).*/
console.log(firstName + ' ' + lastName);
/*1.4 Используйте те же переменные (перезапишите) firstName и lastName для того, чтобы вывести новое значение (Anna Karenina).*/
firstName  = 'Anna';
lastName = 'Karenina';
console.log(firstName + ' ' + lastName);
/*В итоге на экране должно быть две строки: John Adams  Anna Karenina
3  Выведите в консоль тип данных следующих переменных:*/
let a;
let c = 9; 
let str = 'Hi 5!'; 
let b = true; 
let y = 9 + '1'; 
let x =  'a' / 6;
console. log (typeof a);
console. log (typeof c);
console. log (typeof str);
console. log (typeof b);
console. log (typeof y);
console. log (typeof x);
/*4 Подумайте, какие переменные логично объявить через const , пропишите их и выведите на экран*/
const p = 3.14
const t = 100 //температура кипения воды//
console. log (p, t)
console. log (typeof p)
/*Креативное задание*:
1.5 Напишите пошаговый алгоритм приготовления кофе и выведите его в консоль.
Желательно пронумеровать шаги. Каждый шаг должен быть выведен с новой строки.*/
console.log (
'1. Включить кофеварку (капельная)\n',
'2. Взять бумажный фильтр\n',
'3. Вставить в соответсвующий отсек кофеварки специальный бумажный фильтр\n',
'4. Взять упаковку молотого кофе\n',
'5. Насыпать 2 чайных ложки кофе в бумажный фильтр, который установлен в кофеварке\n',
'6. Налить воду в специальный отсек кофеварки 200 дцл\n',
'7. Нажать кнопку "Вкл."');

/*Присвойте переменным х и у значения 5 и 8. 
Напишите "программу", которая обменяет значения переменных х и у без переприсвоения их значений напрямую. */
let a1 = 5;
let b1 = 8; 
[a1, b1] = [b1, a1];
console.log(a1,b1);
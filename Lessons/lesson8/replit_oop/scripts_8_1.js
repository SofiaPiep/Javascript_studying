//promice
//Объект Promise используется для отложенных и асинхронных вычислений.
//has 2 parameters : resolve, reject - functions 

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       resolve('everything is ok');
    }, 3000);
 });
 
 // promise1.then((value) => {
 //    console.log(value);
 //    //expected output: "foo"
 // });
 
 //promice methods
 // promise1.then(() => { });    //in 'then' we operate with resolve
 // promise1.catch();         //'catch' will called if called reject, 'then' will be ignored
 
 // console.log(result);
 // expected output: [object Promise]
 
 //-----------------------------------------------
 function someFunction() {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
           resolve('Hello_1000');
           reject('catch an error')//comment resolve
       }, 3000);
    });
 }
 //what is happening
 //someFunction()->function ->{
 //    value: undefined
 //    onFulfill: []   //each then function will come here
 //    onRejected:[]     // each catch function will come here
 // }
 
 someFunction()
    .then(console.log)
    .catch(console.error)
 
 
 
 
 //var2
 function someFunction2() {
    return new Promise((print, reject) => {
       setTimeout(() => {
          print('Hello');
       }, 1000);
    });
 }
 
 // someFunction2()
 //    .then(response=>{
 //       //console.log(response)
 //       return response + '!'
 //    })
 //    .then(console.log)
 //    .catch(console.error)
 //    .finally(()=>{console.error('this is an error')})
 
 let str = "Hello!"
 let ms = 10
 function delay(ms, str) {
    return new Promise((print) => setTimeout(() => {
       print(str);
    }, ms));
 }
 
 // delay(3000, 'Olya').then(response => {
 
 //    return console.log(response + '?')
 //    //response + '!'
 //    })
 
 /**
  * Async/await — это специальный синтаксис, который предназначен для более простого и удобного
  *  написания асинхронного кода. Появился он в языке, начиная с ES2017 (ES8).
 
 Синтаксис «async/await» упрощает работу с промисами 
 (позволяет асинхронный код записывать синхронным способом).
 
 Асинхронные функции
 Асинхронные функции — это такие, которые объявлены с использованием ключевого слова async
 
 В качестве результата асинхронная функция всегда возвращает промис. Если в качестве значения 
 вернуть не промис, то она автоматически обернёт его в успешно завершившийся промис.
  */
 // Синтаксис:
 
 // async function name(param0) {
 //   statements
 // }
 // async function name(param0, param1) {
 //   statements
 // }
 // async function name(param0, param1,  … , paramN) {
 //    statements
 // }
 
 //============= example1 ==================
 
 //=== 1.1
 const hello = async () => {
     return 'Hello!';
 }
 const result = hello();
 
 //console.log(result); // [object Promise] { ... }
 //hello()
 
 // //==== 1.2
 // async function asyncHi() {
 //    // console.log("Hi")
 //    return 'Hi'
 // }
 //console.log(asyncHi())
 
 // let result2 = asyncHi()
 // console.log(result2)
 
 //===== or Т.е. результат будет одинаковым,
 // если вместо async hello() вернуть Promise.resolve('Hello!'):
 
 // const hello2 =  () => {
 //      return Promise.resolve('Hello2!');
 // }
 // let pr2 = hello2()
 // console.log(pr2)
 
 // async function asyncHi () {
 //   // console.log("Hi")
 //   return 'Hi'
 // }
 
 // console.log(asyncHi())
 
 
 
 
 
 // /**
 //  * Await
 // await – это ключевое слово, которое используется в асинхронных функциях
 // для того, чтобы указать, что здесь необходимо дождаться завершения промиса.
 // Таким образом await, указанный перед промисом запрещает интерпретатору перейти к следующей
 // строчке кода, пока он не выполнится.
 
 
 //example 2.1
 function resolveAfter2Seconds() {
    return new Promise(resolve => {
       setTimeout(() => {
          resolve('resolved_2sec');
       }, 2000);
    });
 }
 
 async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved1"
 }
 
 // asyncCall();
 
 // // result – переменная, содержащая результат выполнения промиса
 //let result = await promise;
 // // на эту строчку не перейдём пока не завершится промис, приведённый выше
 
 
 // // функция, возвращающая промис
 // let str = "Hello!"
 // let ms = 100
 // function delay(ms, str) {
 //    return new Promise(print => setTimeout(() => {
 //       print(str);
 //    }, ms));
 // }
 
 // let pr = delay(10, "Hello2")
 // console.log(pr)
 
 
 // // асинхронная функция
 async function message() {
    // ждём выполнение первого промиса delay(100, 'Игорь') и сохраняем его результат в переменную a
    let a = await delay(100, 'Игорь');
    console.log(a);
    // после завершения первого промиса, переходим к выполнению второго delay(10000, 'Егор')
    let b = await delay(4000, 'Егор'); // как только он завершится помещаем его результат в переменную b
    //console.log(b)
    // после завершения второго промиса, переходим к выполнению третьего delay(15000, 'Денис')
    let c = await delay(9000, 'Денис'); // как только он выполнится сохраняем его результат в переменную c
 
    //     // выводим значения переменных в консоль
    // console.log(a); // "Игорь Егор Денис"
    // console.log(b)
    console.log(c)
 }
 
 // вызываем асинхронную функцию
 //message();
 
 /**
  * Обработка ошибок
 Обработать потенциальные ошибки в асинхронной функции можно с помощью try..catch.
  Для этого этот блок кода (в котором используется await) необходимо заключить в эту конструкцию.
 
 Например:
  */
 
 async function getUser() {
     try {
         const response = await fetch(url);
         const data = await response.json();
       // let a = 0
       // let b = 3
       // let result = a/b
       // return result//console.log(result)
     } catch (e) {
         // если что-то пойдёт не так на каком-то этапе в блоке try, то мы автоматически попадём в метод catch()
         console.error(e);
     }
 }
 //console.log(getUser())
 
 
 
 //var2 - how not to do
 // async function foo() {
 //    const p1 = new Promise((resolve) => setTimeout(() => resolve("1"), 1000));
 //    const p2 = new Promise((_, reject) => setTimeout(() => reject("2"), 500));
 //    const results = [await p1, await p2]; // Do not do this! Use Promise.all or 
 //    //Promise.allSettled instead.
 // }
 // foo().catch(() => { }); // Attempt to swallow all errors...
 
 
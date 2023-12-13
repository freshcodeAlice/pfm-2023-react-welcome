const promise = new Promise(function (res, rej) {
    //// виконали якусь роботу, успішно, все ок
    res('тут лежить інфа з проміса');
})
syncFn()

function syncFn() {
    console.log('працює синхронна функція')
    // promise.then((data) => {
    //     console.log(data);
    // })
   const resultOfAsyncFn =  asyncFn();
   console.log('асинхронна функція повернула це:', resultOfAsyncFn)
    console.log('async мав тут закінчитись')
}


async function asyncFn() {
    console.log('отут ми ще працюєм');
    /// виконується нормально, як синхронна, рядок за рядком
    const data = await promise;

    console.log('тут ми чекаєм, поки проміс роздуплиться')
    console.log(data);
    /// вот тут ще може бути якась робота в тій частині функції, яка "залежить" від проміса
}


console.log('отут ми робим загальний код')




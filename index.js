function getDividersList(numbers) {
    // Общим делителем не может быть число большее, чем самое маленькое число в массиве
    // Находим это число чтобы использовать его дальше в цикле
    const minNumber = Math.min(...numbers);

    const result = [];

    // Перебираем каждое число от 2 до минимального числа minNumber
    for (let i = 2; i <= minNumber; i++) {
        // Проверяем, является ли i делителем для каждого числа в массиве
        if (numbers.every(number => number % i === 0)) {
            // Добавляем делитель в массив конечных результатов
            result.push(i);
        }
    }

    return result;
}

const dividersList = getDividersList([42, 12, 18])
console.log(dividersList)
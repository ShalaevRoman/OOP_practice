// // Создать класс new SuperArray(n, m, { min: 10, max: 55 }),
//  который создаст массив размерностью n на m
//   и заполнит случайными числами в диапазоне 
//   options.min - options.max. 
//   Массив сохраняется в екземпляр класса SuperArray.

class SuperArray {
    constructor(n, m, data) {
        this.n = n;
        this.m = m;
        this.data = data;
        this.arrData = this.createArr();
    }

    createArr() {
        const NEW_ARR = [];
        NEW_ARR.length = this.n;
        for (let i = 0; i < NEW_ARR.length; i++) {
            NEW_ARR[i] = [];
            NEW_ARR[i].length = this.m;
            NEW_ARR[i] = this.fillingArray(NEW_ARR[i]);
        }
        return NEW_ARR;
    }

    fillingArray(arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] = this.getRandomNum();
        }
        return arr;
    }

    getRandomNum() {
        const min = Math.ceil(this.data.min);
        const max = Math.floor(this.data.max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    render(separator) {
        return this.arrData.map(element => {
            return `<ul>${this.renderTd(element, separator)}</ul>`;
        }).join("");
    }

    renderTd(arr, sep) {
        return arr.map(item => {
            return `<li>${item}</li>`;
        }).join(`${sep}`);
    }
};

const COPY_CLASS = new SuperArray(4, 4, { min: 10, max: 100 });
document.querySelector(".wrapper").innerHTML = `${COPY_CLASS.render("|")}`;


// Создать метод render(separator), в прототипе.
//  Который выведет двумерный массив в документ.
//   С разделителем separator, под массивом.

// Создать метод clear(direction, k),
//  где direction может быть "row" или "column",
//   а k - номер строки или столбца, который нужно очистить. (поставить 0)
console.log(COPY_CLASS.render("|"))

function clear(direction, k)
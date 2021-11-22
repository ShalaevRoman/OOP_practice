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
        const DATABASE = [];
        DATABASE.length = this.n;
        for (let i = 0; i < DATABASE.length; i++) {
            DATABASE[i] = [];
            DATABASE[i].length = this.m;
            DATABASE[i] = this.fillArray(DATABASE[i]);
        }
        return DATABASE;
    }

    fillArray(arr) {
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

    renderTd(arr, separator) {
        return arr.map(item => {
            return `<li>${item}</li>`;
        }).join(`${separator}`);
    }
};

const COPYCLASS = new SuperArray(4, 4, { min: 10, max: 100 });
document.querySelector(".wrapper").innerHTML = `${COPYCLASS.render("|")}`;



// Создать метод render(separator), в прототипе.
//  Который выведет двумерный массив в документ.
//   С разделителем separator, под массивом.

// Создать метод clear(direction, k),
//  где direction может быть "row" или "column",
//   а k - номер строки или столбца, который нужно очистить. (поставить 0)
console.log(COPYCLASS.render("|"))

// function clear(direction, k)
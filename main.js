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
};

const COPY_CLASS = new SuperArray(4, 4, { min: 10, max: 100 });
COPY_CLASS.arrData = COPY_CLASS.createArr();
console.log(COPY_CLASS)
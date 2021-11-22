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

    clear(direction, k) {
        if (direction === "row") {
            this.arrData[k] = this.arrData[k].map(elem => {
                return elem = 0;
            })
        } else if (direction === "column") {
            return this.arrData.map(elem => {
                return elem[k] = 0;
            })
        }
        this.render();
    }

    setMarker(obj) {
        this.arrData[obj.x][obj.y] = "&";
        this.render();
    }

    goTo(obj) {
        this.arrData = this.arrData.map(elem => {
            return elem.map(item => {
                if (item === "&") {
                    return item = this.getRandomNum();
                } else return item
            })
        })
        this.setMarker(obj);
    }

};

const COPYCLASS = new SuperArray(4, 4, { min: 10, max: 100 });
COPYCLASS.clear("row", 3)
COPYCLASS.clear("column", 0)
COPYCLASS.setMarker({ x: 1, y: 1 });
COPYCLASS.goTo({ x: 3, y: 3 });

// Создать метод shift(direction), где direction может иметь значение
//  "left", "right", "top", "bottom", и маркер сдвинется в указанную сторону на 1 шаг.

function left() {
    return COPYCLASS.arrData = COPYCLASS.arrData.map(elem => {
        return elem.map(item => {
            if (item === "&") {
                item = COPYCLASS.getRandomNum()
                elem[item - 1] = "&";
                return item;
            } else if (elem[item] < 0) {
                return console.log(new Error("The end!"));
            } else return item;
        })
    })
}

console.log(COPYCLASS.arrData);
console.log(left())
document.querySelector(".wrapper").innerHTML = `${COPYCLASS.render("|")}`;
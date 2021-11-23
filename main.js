class SuperArray {
    constructor(n, m, options) {
        this.rows = n;
        this.columns = m;
        this.options = options;
        this.arrData = this.createArr();
    }

    createArr() {
        const rowsArray = [...Array(this.rows)];
        const columnsArray = [...Array(this.columns)];
        return rowsArray.map(() => columnsArray.map(() => this.randomizeNumber()))
    }

    randomizeNumber() {
        const min = Math.ceil(this.options.min);
        const max = Math.floor(this.options.max);
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    render(separator) {
        const fragment = document.createDocumentFragment();

        this.arrData.forEach((arrayRow, index) => {
            const row = document.createElement("div");
            arrayRow.forEach((rowElement) => {
                const element = document.createElement("span");
                element.textContent = rowElement + " ";
                row.append(element);
            });
            fragment.append(row);
            if (index !== this.arrData.length - 1 && !!separator) {
                fragment.append(separator);
            }
        });
        const app = document.querySelector("#app");
        if (!app.children.length) {
            app.appendChild(fragment);
        } else {
            while (app.firstChild) {
                app.removeChild(app.firstChild);
            }
            app.appendChild(fragment);
        }
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
                    return item = this.randomizeNumber();
                } else return item
            })
        })
        this.setMarker(obj);
    }

};

const instance = new SuperArray(4, 4, { min: 10, max: 100 });
instance.render();
instance.clear("row", 3);
instance.clear("column", 0);
instance.setMarker({ x: 1, y: 1 });
instance.goTo({ x: 2, y: 3 });

// Создать метод shift(direction), где direction может иметь значение
//  "left", "right", "top", "bottom", и маркер сдвинется в указанную сторону на 1 шаг.

function shift(direction) {
    console.log(`${direction}`)
    switch (direction) {
        case "left":
            directionLeft(instance.arrData);
            break;

    }

}

function directionLeft(data) {
    let result = {}
    data.findIndex(elem => {
        if (elem.indexOf("&") > 0) {
            console.log(elem, elem[elem.indexOf("&")], elem.indexOf("&"))
        }

        // if()
    })
    return result;
}

shift("left")

// console.log(COPYCLASS.arrData);
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
        this.render(this.separator);
    }

    setMarker(сoordinates) {
        сoordinates = this.checkingСoordinates(сoordinates);
        this.arrData[сoordinates.x][сoordinates.y] = "&";
        this.render(this.separator);
    }

    goTo(сoordinates) {
        сoordinates = this.checkingСoordinates(сoordinates);
        this.arrData = this.arrData.map(elem => {
            return elem.map(item => {
                if (item === "&") {
                    return item = this.randomizeNumber();
                } else return item
            })
        })
        this.setMarker(сoordinates);
    }

    checkingСoordinates(сoordinates) {
        if (сoordinates.x < 0) {
            сoordinates.x = 0;
        } else if (сoordinates.x > this.arrData[0].length - 1) {
            сoordinates.x = this.arrData[0].length - 1;
        } else if (сoordinates.y < 0) {
            сoordinates.y = 0;
        } else if (сoordinates.y > this.arrData[0].length - 1) {
            сoordinates.y = this.arrData[0].length - 1;
        }
        return сoordinates;
    }

    getMarker() {
        const marker = {};
        instance.arrData.forEach(row => {
            if (row.indexOf("&") > 0) {
                marker.y = row.indexOf("&");
                marker.x = instance.arrData.indexOf(row)
            }
        });
        return marker;
    }

    shift(direction) {
        const сoordinates = this.getMarker()
        switch (direction) {
            case "left":
                сoordinates.y = сoordinates.y - 1;
                break;
            case "right":
                сoordinates.y = сoordinates.y + 1;
                break;
            case "top":
                сoordinates.x = сoordinates.x - 1;
                break;
            case "bottom":
                сoordinates.x = сoordinates.x + 1;
                break;
        }
        return this.goTo(сoordinates);
    }

};

const instance = new SuperArray(4, 4, { min: 10, max: 100 });
instance.render("|");
instance.clear("row", 3);
instance.clear("column", 0);
instance.setMarker({ x: 1, y: 1 });
instance.goTo({ x: 2, y: 2 });
instance.shift("bottom");
instance.shift("top");
instance.shift("left");
instance.shift("right");
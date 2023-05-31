class Item {
    constructor(name, price) {
        this.itemName = name;
        this.itemPrice = price;
    }

    getName() {
        return this.itemName;
    }

    getPrice() {
        return this.itemPrice;
    }
}

class Mall {
    constructor(mallName) {
        this.mallName = mallName;
        this.itemList = [];
    }

    getMallName() {
        return this.mallName;
    }

    displayItems() {
        for (const item of this.itemList) {
            console.log(item.getName() + ": $" + item.getPrice());
        }
    }

    addItem(item) {
        this.itemList.push(item);
    }

    addItemAtIndex(item, index) {
        this.itemList.splice(index, 0, item);
    }

    removeItem(index) {
        this.itemList.splice(index, 1);
    }

    getItemName(index) {
        return this.itemList[index].getName();
    }

    getItemPrice(index) {
        return this.itemList[index].getPrice();
    }

    getItem(index) {
        return this.itemList[index];
    }

    setItem(name, price, index) {
        this.itemList[index] = new Item(name, price);
    }
}

export {
    Item,
    Mall
}
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

class Store {
    constructor(name) {
        this.name = name;
        this.malls = [];
    }

    addMall(mall) {
        this.malls.push(mall);
    }
}

const store = new Store("My Store");

const Mall1 = new Mall("Mall1");
const Mall2 = new Mall("Mall 2");
const Mall3 = new Mall("Mall 3");
const Mall4 = new Mall("Mall 4");

store.addMall(Mall1);
store.addMall(Mall2);
store.addMall(Mall3);
store.addMall(Mall4);

const product1 = new Item("Product 1", 10.00);
const product2 = new Item("Product 2", 20.00);
const product3 = new Item("Product 3", 30.00);
const product4 = new Item("Product 4", 40.00);
const product5 = new Item("Product 5", 50.00);
const product6 = new Item("Product 6", 60.00);
const product7 = new Item("Product 7", 70.00);
const product8 = new Item("Product 8", 80.00);
const product9 = new Item("Product 9", 90.00);
const product10 = new Item("Product 10", 100.00);
const product11 = new Item("Product 11", 110.00);
const product12 = new Item("Product 12", 120.00);
const product13 = new Item("Product 13", 130.00);
const product14 = new Item("Product 14", 140.00);
const product15 = new Item("Product 15", 150.00);
const product16 = new Item("Product 16", 160.00);

Mall1.addItem(product1);
Mall1.addItem(product2);
Mall1.addItem(product3);
Mall1.addItem(product4);

Mall2.addItem(product5);
Mall2.addItem(product6);
Mall2.addItem(product7);
Mall2.addItem(product8);

Mall3.addItem(product9);
Mall3.addItem(product10);
Mall3.addItem(product11);
Mall3.addItem(product12);

Mall4.addItem(product13);
Mall4.addItem(product14);
Mall4.addItem(product15);
Mall4.addItem(product16);

export { Store, Mall, Item, store, Mall1, Mall2, Mall3, Mall4 };
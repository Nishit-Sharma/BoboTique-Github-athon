// Code for all of the classes

class Item {
    // Constructor for item
    constructor(name, price) {
        this.itemName = name;
        this.itemPrice = price;
    }

    // Getters and setters for item
    getName() {
        return this.itemName;
    }

    getPrice() {
        return this.itemPrice;
    }
}

class Mall {
    // Constructor for mall
    constructor(mallName) {
        this.mallName = mallName;
        this.itemList = [];
    }

    // Getters and setters for mall
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

// Creating a class that can hold all of the malls
class Store {
    // Constructor for store
    constructor(name) {
        this.name = name;
        this.malls = [];
    }

    // Getters and setters for store
    addMall(mall) {
        this.malls.push(mall);
    }
}


// Naming the store
const store = new Store("Bobotique");

// Creating mall objects
const Mall1 = new Mall("Gucci");
const Mall2 = new Mall("Louis Vuitton");
const Mall3 = new Mall("Balenciaga");
const Mall4 = new Mall("Rolex");

// Adding all of the malls to the main store
store.addMall(Mall1);
store.addMall(Mall2);
store.addMall(Mall3);
store.addMall(Mall4);

// Vars for total and totalItems
let total = 0;
let totalItems = 0;

// Exporting all of the classes, objects, and vars
export { Store, Mall, Item, store, Mall1, Mall2, Mall3, Mall4, total, totalItems };
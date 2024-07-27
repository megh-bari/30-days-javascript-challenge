// ! Activity 4: Module Pattern 

// * Task 6

function createItemsManager(){
    let items = []
    function addItem(item) {
        if (!items.includes(item)) {
            items.push(item)
        }
    }

    function removeItem(item) {
        items = items.filter(existingItem => existingItem!== item)
    }
    function listItem() {
        return items.slice()
    }
    return {
        addItem,
        removeItem,
        listItem
    }
}

const itemsManager = createItemsManager()

itemsManager.addItem('Apple')
itemsManager.addItem('Banana')
itemsManager.addItem('Mango')

console.log(itemsManager.listItem())


itemsManager.removeItem('Banana')
console.log(itemsManager.listItem())
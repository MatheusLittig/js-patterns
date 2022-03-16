let fruitsList: string[] = ['Apple', 'Orange', 'Avocado', 'Blueberry', 'Strawberry']

class Fruits {
    getFruits() {
        return fruitsList
    }

    addFruit(fruitToAdd: string) {
        fruitsList.push(fruitToAdd)
    };

    removeFruit(fruitToRemove: string) {
        if (fruitsList.includes(fruitToRemove)) {
            const updatedList = fruitsList.filter(fruit => fruit !== fruitToRemove)
            fruitsList = updatedList

        } else {
            throw new Error('Fruit not found')
        }
    }
}


/* Object.freeze method makes sure that consuming code cannot modify the Singleton. */
const singletonFruitsList = Object.freeze(new Fruits())

export { singletonFruitsList }
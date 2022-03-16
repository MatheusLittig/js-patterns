import { singletonFruitsList } from './fruits'

function SingleTonPattern() {   
    const { addFruit, getFruits, removeFruit } = singletonFruitsList

    return (
        <>
            <h1>Fruits lists - SingleTonPattern</h1>
            <button onClick={() => {
                addFruit('banana')
                console.log(getFruits())
            }} >Add banana</button>
            <button onClick={() => {
                removeFruit('banana')
                console.log(getFruits())
            }}>Remove banana</button>
        </>
    )
}

export { SingleTonPattern }
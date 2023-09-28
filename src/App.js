import { useState } from "react"
import Fruit from "./components/Fruit"
import FruitForm from "./components/FruitFrom"

function App(){
  // // State
  // const [cpte, setCpte] = useState(2)

  // // Comportement
  // const handleAdd = ()=>{
  //   setCpte(cpte + 2)
  // }

  // // Render
  // return <div>
  //   <h1>{cpte} </h1>
  //   <button onClick={handleAdd}>Incrementer +</button>
  // </div>


  // State
  const [fruits, setFruits] = useState([
    {id: 1, name: "Papaye"},
    {id: 2, name: "Pomme"},
    {id: 3, name: "Pasteque"},
  ])


  // Comportement
  const handleDelete = (id)=>{
    // Copy state
    const fruitsCopy = [...fruits]
    
    // Manip
    const fruitCopyUpdate = fruitsCopy.filter(fruit => fruit.id !== id)

    // Modif
    setFruits(fruitCopyUpdate)

  }

  const handleAdd = (fruitAAjouter)=>{
    // Copy state
    const fruitCopy = [...fruits]
    // Manupilation
    fruitCopy.push(fruitAAjouter)
    // Modif
    setFruits(fruitCopy)
  }

  const showFavoryFruit = (fruitName)=>{
    console.log(`Favory fruit is ${fruitName}`)
  }

  // render
  return <div>
    <h1>Liste des fruits</h1>
    <ul>
      {fruits.map(fruit=>(
        <Fruit 
        fruitInfo={fruit} 
        onClick={()=> showFavoryFruit(fruit.name)} 
      />
      ))}
    </ul>
    <FruitForm handleAdd={handleAdd} />
  </div>
}

export default App 
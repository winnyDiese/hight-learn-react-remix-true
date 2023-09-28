import { useState } from "react"

export default function FruitForm({handleAdd}){
    // State 
    const [newFruit, setNewFruit] = useState('')

    // Comportement
    const handleSubmit = (event)=>{
        event.preventDefault()
        setNewFruit('')
        console.log(newFruit)
    
        
        // Manip
        const id = new Date().getTime()
        const name = newFruit
        // fruitCopy.push({id, name})
        handleAdd({id, name})
        
        
      }
    
      const handleChange = (event)=>{
        setNewFruit(event.target.value)
      }
    
    // Render
    return <form action="submit" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ajouter du text" 
          value={newFruit}
          onChange={handleChange}
        />
        <button>Ajouter +</button>
    </form>
}
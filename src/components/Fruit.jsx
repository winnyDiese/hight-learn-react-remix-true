
export default function Fruit({fruitInfo, onClick}){
    // state

    // Comportement

    // Render
    return <div>
        <li key={fruitInfo.id}>
            {fruitInfo.name} 

            <button  onClick={onClick}>
                X
            </button> 
        </li>
    </div>
}
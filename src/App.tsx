
import './App.css'

//import { name, age } from './bases/01-types'
//import { animalito } from './bases/02-objects'
import { pikachu } from './bases/03-clases'

function App() {

  return (
    <>
      
      <h1>Vite + React</h1>
      <hr />
      <p>{pikachu.id}</p>
      <p>{pikachu.name}</p>
    </>
  )
}

export default App

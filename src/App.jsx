import { useState } from 'react'
import './App.css'
import Persons from './components/Persons'
import PersonItem from './components/PersonItem'

function App() {

    const [personnItem, setpersonnItem] = useState([])
  
  const addpersons = (fkData) => {
    const newItem = [...personnItem, fkData]
    setpersonnItem(newItem)
  }

  return (
     <div className="gap-8 flex">
       <Persons 
         addpersons = {addpersons}
       />

       <PersonItem 
         personnItem = {personnItem}
       />
    </div>
  )
}

export default App

import React, { useEffect, useState } from 'react'
import Person from './Person'


const Persons = ({addpersons}) => {

    const [fakaData, setFakeData] = useState([])

    useEffect(() => {
        fetch('fakeData.json')
        .then(res => res.json())
        .then(data => setFakeData(data))
    }, [])

  return (
    <div className='grid grid-cols-2 gap-8 bg-green-200'>
        {
            fakaData.map(fkData => 
                <Person 
                  key={fkData.id}
                  fkData = {fkData}
                  addpersons = {addpersons}
                />
            )
        }
    </div>
  )
}

export default Persons
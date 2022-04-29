import { useState, useEffect } from 'react'
import { getNotes, createLocation } from '../services/notes-api.js'
import Draggable from 'react-draggable'

export function Notes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getNotes()
      .then(res => setData(res.data))
  }, [])

  const updatePos = (e, i) => {
    let newArr = [...data]
    newArr[i].defaultPos = { x: e.x, y: e.y };
    setData(newArr)
    createLocation(newArr[i])
  }
  console.log(data)
  return (
    <div className='notes'>
      <h1>Notepad</h1><br />
      
        <div className='notesContainer'>
        {
          data.map((e, i) => {
            return (
              <Draggable key={i} onStop={(e, data) => updatePos(data, i)} defaultPosition={data.defaultPos}> 
                <div className='homeNote'>
                  <h2><a href={`/${e._id}`}>{e.title}</a></h2>
                  <p>{e.body}</p>
                </div>
              </Draggable>
            )
          })
        }
      </div>
    </div>
  )
}
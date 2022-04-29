import { useState, useEffect } from 'react'
import { getNotes, editNote } from '../services/notes-api.js'
import Draggable from 'react-draggable'

export function Notes() {
  const [data, setData] = useState([]);
  const [position, setPosition] = useState({ x: 250, y: 150 });

  useEffect(() => {
    getNotes()
      .then(res => setData(res.data))
  }, [data])

  const updatePos = (e) => {
    setPosition({ x: e.x, y: e.y })
  }

  return (
    <div className='notes'>
      <h1>Notepad</h1><br />
      
        <div className='notesContainer'>
        {
          data.map((e, i) => {
            return (
              <Draggable onStop={(e, data) => updatePos(data)}> 
                <div key={i} className='homeNote'>
                  <h2><a href={`/${e._id}`}>{e.title}</a></h2>
                  <p>{e.body}</p>
                  x: {position.x.toFixed(0)}, y: {position.y.toFixed(0)}
                </div>
              </Draggable>
            )
          })
        }
      </div>
    </div>
  )
}
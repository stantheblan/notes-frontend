import { useState, useEffect } from 'react'
import { getNotes } from '../services/notes-api.js'
import Draggable from 'react-draggable'

export function Notes() {
  const [data, setData] = useState([]);
  useEffect(() => {
    getNotes()
      .then(res => setData(res.data))
  }, [data])

  return (
    <div className='blog'>
      <h1>Notepad</h1><br />
      
        <div className='notesContainer'>
        {
          data.map((e, i) => {
            return (
              <Draggable> 
                <div key={i} className='homeNote'>
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
import { useState, useEffect } from 'react'
import { getNotes, editNote} from '../services/notes-api.js'
import Draggable from 'react-draggable'

export function Notes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getNotes()
      .then(res => setData(res.data))
      .then(() => setLoading(false))
  }, [loading])

  const updatePos = (e, i) => {
    let newArr = [...data]
    newArr[i].defaultPos = { x: e.x, y: e.y };
    setData(newArr)
    // console.log(newArr[i])
    editNote(newArr[i]._id, newArr[i])
  }

  // console.log(data)
  return (
    <div className='notes'>
      <h1>Notepad</h1><br />
        <div className='notesContainer'>
        {
          data.map((e, i) => {
            return (
              <Draggable key={i} onStop={(e, data) => updatePos(data, i)} position={{x: e.defaultPos.x, y: e.defaultPos.y}}> 
                <div className='homeNote'>
                  <h2><a href={`/${e._id}`}>{e.title}</a></h2>
                  <p>{e.body}</p>
                  <p>({e.defaultPos.x},{e.defaultPos.y})</p>
                </div>
              </Draggable>
            )
          })
        }
      </div>
    </div>
  )
}
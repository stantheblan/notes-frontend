import { useNavigate } from 'react-router-dom'
import { createNote } from '../services/notes-api'

export function New() {
  let nav = useNavigate()
  const addNewNote = (e) => {
    e.preventDefault()
    let note = {
      title: e.target.title.value,
      body: e.target.body.value,
      x: 100,
      y: 150
    }
    createNote(note)
    nav('/')
  }
  return (
    <div className='note'>
      <h1>New Note:</h1>
      <form onSubmit={addNewNote}>
        Title <input type='text' name='title' />
        <br/>
        <textarea name='body' cols='40' rows='10'></textarea><br />
        <input type='submit' /> 
      </form> <br/>
    </div>
  )
}
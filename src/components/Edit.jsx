import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getNote, editNote, deleteNote } from '../services/notes-api'

export function Edit() {
  const { id } = useParams()
  const nav = useNavigate();
  const [data, setData] = useState({})

  useEffect(() => {
    getNote(id).then(res => setData(res.data))
  }, [data])

  const editNotes = (e) => {
    e.preventDefault()
    let note = {
      title: e.target.title.value,
      body: e.target.body.value
    }
    editNote(id, note)
    nav(`/${id}`)
  }

  const deleteNotes = () => {
    deleteNote(id)
    nav('/')
  }

  return (
    <div className='note'>
      <h1>Edit Note</h1>
      <form onSubmit={editNotes}>
        Title <input type='text' name='title' defaultValue={data.title} /><br />
        <textarea defaultValue={data.body} name='body' cols='50' rows='10' ></textarea><br />
        <input type='submit' />
      </form>
      <button type='submit' onClick={deleteNotes}>Delete</button>
      <br/>
    </div>
  )
}
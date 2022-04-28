import { useState, useEffect } from 'react'
import { getNote } from '../services/notes-api'
import { useParams } from 'react-router-dom'

export function Show() {
  const { id } = useParams()
  const [data, setData] = useState({})

  useEffect(() => {
    getNote(id).then(res => {
      setData(res.data)
    })
  }, [data])

  return (
    <div className='post'>
        <h1>{data.title}</h1>
        <div className='body'><p>{data.body}</p></div>
    </div>
  )
}
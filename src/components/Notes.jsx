import { useState, useEffect } from 'react'
import { getNotes, editNote, createNote, deleteNote, getPork } from '../services/notes-api.js'
import Draggable from 'react-draggable'
import push from '../media/pushpin.png'

export function Notes() {
  const [data, setData] = useState([]);
  const [bacon, setBacon] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getNotes().then(res => setData(res.data))
    getPork().then((res) => {setBacon(res.data)})
  }, [loading])

  const updatePos = (e, i) => {
    let newArr = [...data]
    newArr[i].defaultPos = { x: e.x, y: e.y };
    setData(newArr)
    editNote(newArr[i]._id, newArr[i])
  }

  const genRanXPos = () => { return Math.floor(Math.random() * 1520) }  
  const genRanYPos = () => { return Math.floor(Math.random() * 600) }

  const addNewNote = (e) => {
    e.preventDefault()
    setLoading(true);
    let note = {
      title: e.target.title.value,
      body: e.target.body.value,
      defaultPos: {
        x: genRanXPos(),
        y: genRanYPos()
      }
    }
    createNote(note).then(()=>setLoading(false));      
    document.getElementById('title').value = "";
    document.getElementById('body').value = "";
  }

  const addNewTender = () => {
    setLoading(true);
    let note = {
      title: 'Sample Note',
      body: bacon[1],
      defaultPos: {
        x: genRanXPos(),
        y: genRanYPos()
      }
    }
    createNote(note).then(()=>setLoading(false)); 
  }

  const deleteNotes = (id) => {
    setLoading(true)
    if (window.confirm('Delete?') === true) {deleteNote(id).then(()=>setLoading(false))}
  }

  const makeEditable = (id) => {
    const docNote = document.getElementById(id);
    let eButton = document.getElementsByName(id)
    
    for (let i = 0; i < eButton.length; i++) {
      if (eButton[i].name === id)
      {
        eButton[i].hidden = true;
      }
    }

    const pTitle = document.getElementsByClassName(id)[0];
    const pBody = document.getElementsByClassName(id)[1];

    const inputT = document.createElement("input");
    inputT.name = 'inputT'
    const inputB = document.createElement("input");
    inputB.name = 'inputB'

    let nButton = document.createElement("input");
    nButton.value = "Finish Edit"
    nButton.name = 'fEditButton'
    nButton.type = 'button'
    
    let note = {
      title: pTitle.innerText,
      body: pBody.innerText
    }

    inputT.defaultValue = note.title;
    inputB.defaultValue = note.body;

    pTitle.replaceWith(inputT)
    pBody.replaceWith(inputB)
    docNote.appendChild(nButton)
    nButton.addEventListener('click', function() {
      let newNote = {
        title: inputT.value,
        body: inputB.value
      }
      editNotes(id, newNote)
    });
  }

  const editNotes = (id, note) => {
    editNote(id, note).then(()=>window.location.reload());

    const feButton = document.getElementsByName('fEditButton')
    feButton[0].hidden = true;
    
    let eButton = document.getElementsByName('editButton')
    eButton[0].hidden = false;
  }

  return (
    <div className='notes'>
        <div className='notesContainer'>
          <div className='formNote'>
            <form onSubmit={addNewNote}><h1>Bulletin Board</h1>
              Title <input type='text' id='title' name='title' />
              <br/>
              <textarea id='body' name='body' cols='40' rows='10'></textarea><br />
              <input type='submit' value={'Make New'}/> 
              
            </form>
            <button type='submit' onClick = {addNewTender}>Fill dummy data</button>
          </div>
        {
          data.map((e, i) => {
            return (
              <Draggable key={i} onStop={(e, data) => updatePos(data, i)} position={{x: e.defaultPos.x, y: e.defaultPos.y}}> 
                <div className='homeNote' id={e._id}>
                  <div id='headerImg'>
                    <h2 className={e._id}>{e.title}</h2><br/>
                    <img src={push}/>
                  </div>
                  <p className={e._id}>{e.body}</p>
                  <p>({e.defaultPos.x},{e.defaultPos.y})</p>
                  <button type='submit' onClick = {() => {deleteNotes(e._id)}}>Delete</button>
                  <button name={e._id} type='submit' onClick = {() => {makeEditable(e._id)}}>Edit</button>
                </div>
              </Draggable>
            )
          })
        }
      </div>
    </div>
  )
}